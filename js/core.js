/* Pasaporte ¡Vámonos! — core: profile, realtime store (MQTT retained), voice, charts, language */
(function(){
'use strict';
const V = window.VAMOS = window.VAMOS || {chapters: []};

/* ---------- utils ---------- */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const es = s => `<span class="notranslate" translate="no">${esc(s)}</span>`;
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const pick = a => a[Math.floor(Math.random()*a.length)];
const rid = (n=8) => Array.from(crypto.getRandomValues(new Uint8Array(n)), b => 'abcdefghijkmnpqrstuvwxyz23456789'[b%32]).join('');
const COLORS = ['#c8553d','#25897d','#3f86bd','#7a4c93','#e3a03a','#d4607a','#1d2a4b','#5b8c3a','#b5651d','#2f6f9f'];
const colorOf = s => { let h=0; for(const c of String(s)) h=(h*31+c.charCodeAt(0))>>>0; return COLORS[h%COLORS.length]; };
const initial = n => (String(n||'?').trim()[0]||'?').toUpperCase();
const avatar = (n, cls='av-sm') => `<span class="${cls}" style="background:${colorOf(n)}">${esc(initial(n))}</span>`;
const norm = s => String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[¿?¡!.,;:"'()«»—–-]/g,' ').replace(/\s+/g,' ').trim();
function similarity(a,b){ a=norm(a); b=norm(b); if(!a||!b) return 0; if(a===b) return 1;
  const m=a.length,n=b.length, d=Array.from({length:m+1},(_,i)=>[i]); for(let j=1;j<=n;j++) d[0][j]=j;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return 1 - d[m][n]/Math.max(m,n); }
function toast(msg){ const t=$('#toast'); t.innerHTML=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove('show'),2400); }
const LS = { get(k,d){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } }, set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} } };

/* ---------- profile ---------- */
const params = new URLSearchParams(location.search);
const prof = LS.get('vamos_profile', {});
if(!prof.uid) prof.uid = rid(10);
if(params.get('room')) prof.room = cleanRoom(params.get('room'));
if(!prof.room) prof.room = 'DAIN1';
function cleanRoom(r){ return String(r||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12) || 'DAIN1'; }
LS.set('vamos_profile', prof);

/* ---------- realtime store ---------- */
const BROKERS = [
  {name:'EMQX', url:'wss://broker.emqx.io:8084/mqtt'},
  {name:'HiveMQ', url:'wss://broker.hivemq.com:8884/mqtt'},
  {name:'Mosquitto', url:'wss://test.mosquitto.org:8081'}
];
if(params.get('broker')) BROKERS.unshift({name:'Custom', url:params.get('broker')});
const NS = 'dainedu-vamonos-v1';
const RT = {
  store: new Map(), client:null, connected:false, brokerIdx: +(params.get('srv') ?? LS.get('vamos_srv',0)) || 0,
  listeners: new Set(), _tm:null, _fails:0,
  base(){ return `${NS}/${prof.room}/`; },
  mineKey(){ return `vamos_mine_${prof.room}`; },
  mine(){ return LS.get(this.mineKey(), {}); },
  on(fn){ this.listeners.add(fn); return ()=>this.listeners.delete(fn); },
  emit(){ clearTimeout(this._tm); this._tm=setTimeout(()=>this.listeners.forEach(f=>{ try{f();}catch(e){console.error(e);} }),120); },
  loadMine(){ this.store.clear(); const m=this.mine(); for(const k in m) this.store.set(k,m[k]); },
  put(path, obj){
    const m=this.mine();
    if(obj==null){ delete m[path]; this.store.delete(path); } else { obj.ts=Date.now(); m[path]=obj; this.store.set(path,obj); }
    LS.set(this.mineKey(), m); this.emit();
    if(this.client && this.connected) this.client.publish(this.base()+path, obj==null?'':JSON.stringify(obj), {retain:true, qos:0});
  },
  connect(){
    if(this.client){ try{ this.client.end(true); }catch(e){} this.client=null; }
    this.connected=false; this.status();
    if(!window.mqtt){ this.status('라이브러리 없음'); return; }
    const b = BROKERS[this.brokerIdx % BROKERS.length];
    const c = mqtt.connect(b.url, {clientId:'vam_'+prof.uid+'_'+rid(4), clean:true, connectTimeout:9000, reconnectPeriod:4000, keepalive:40});
    this.client = c;
    const failT = setTimeout(()=>{ if(!this.connected && this.client===c){ this.next(); } }, 11000);
    c.on('connect', ()=>{
      clearTimeout(failT); this.connected=true; this._fails=0; LS.set('vamos_srv', this.brokerIdx); this.status();
      c.subscribe(this.base()+'#', {qos:0});
      const m=this.mine(); for(const k in m) c.publish(this.base()+k, JSON.stringify(m[k]), {retain:true, qos:0});
      this.presence();
    });
    c.on('message', (topic, payload)=>{
      const path = topic.slice(this.base().length); const s = payload.toString();
      if(!s){ this.store.delete(path); } else { try{ this.store.set(path, JSON.parse(s)); }catch(e){} }
      this.emit();
    });
    c.on('close', ()=>{ if(this.client===c){ this.connected=false; this.status(); } });
    c.on('error', ()=>{});
  },
  next(){ this.brokerIdx=(this.brokerIdx+1)%BROKERS.length; this.connect(); },
  status(txt){
    const p=$('#statusPill'); if(!p) return; const b=BROKERS[this.brokerIdx%BROKERS.length];
    p.querySelector('.dot').className='dot '+(this.connected?'on':'off');
    p.querySelector('span').textContent = txt || (this.connected ? `방 ${prof.room} · 실시간` : '연결 중…');
    p.title = `실시간 서버: ${b.name}` + (this.connected?' (연결됨)':' (연결 시도 중 — 결과는 내 기기에 저장되고 연결되면 자동 공유됩니다)');
  },
  presence(ch){ if(!prof.nick) return; this.put('u/'+prof.uid, {n:prof.nick, ch: ch ?? (this.store.get('u/'+prof.uid)||{}).ch ?? ''}); },
  /* query helpers */
  users(){ const out={}; for(const [k,v] of this.store) if(k.startsWith('u/')) out[k.slice(2)]=v; return out; },
  nameOf(uid){ const u=this.store.get('u/'+uid); return u&&u.n || '익명'; },
  results(ch, act){ const pre=`r/${ch}/${act}/`, out=[]; for(const [k,v] of this.store) if(k.startsWith(pre)) out.push({uid:k.slice(pre.length), ...v}); return out; },
  my(ch, act){ return this.store.get(`r/${ch}/${act}/${prof.uid}`); },
  submit(ch, act, obj){ obj.n = prof.nick || '익명'; this.put(`r/${ch}/${act}/${prof.uid}`, obj); },
  likes(ch, author){ const pre=`l/${ch}/${author}/`, out=[]; for(const [k] of this.store) if(k.startsWith(pre)) out.push(k.slice(pre.length)); return out; },
  toggleLike(ch, author){ const k=`l/${ch}/${author}/${prof.uid}`; if(this.store.has(k)) this.put(k,null); else this.put(k,{v:1}); },
  clearRoom(){ if(!this.client||!this.connected) return false; for(const k of [...this.store.keys()]) this.client.publish(this.base()+k,'',{retain:true}); this.store.clear(); LS.set(this.mineKey(),{}); this.emit(); return true; }
};

/* ---------- scoring ---------- */
const ACTS = ['phr','dialog','quiz','poll','write','w'];
function userChapterActs(uid, ch){
  const s=RT.store, done=[];
  for(const a of ACTS) if(s.has(`r/${ch}/${a}/${uid}`)) done.push(a);
  return done;
}
function chapterHasWidget(id){ const c=V.chapters.find(x=>x.id===id); return !!(c&&c.widget); }
function actsNeeded(id){ return chapterHasWidget(id)?6:5; }
function pointsOf(uid){
  let p=0;
  for(const [k,v] of RT.store){
    if(!k.startsWith('r/')||!k.endsWith('/'+uid)) continue;
    const act=k.split('/')[2];
    if(act==='quiz'||act==='dialog') p += (v.score||0)*10;
    else if(act==='phr') p += (v.ok||[]).length*3;
    else if(act==='poll') p += 5;
    else if(act==='write') p += 10;
    else if(act==='w') p += Math.round((v.score||0)/(v.total||1)*30);
  }
  for(const [k] of RT.store){ if(k.startsWith('l/')){ const parts=k.split('/'); if(parts[2]===uid && parts[3]!==uid) p+=2; } }
  return p;
}
function stampsOf(uid){ return V.chapters.filter(c=>userChapterActs(uid,c.id).length>=3).map(c=>c.id); }
function allUids(){ const set=new Set(); for(const k of RT.store.keys()){ const p=k.split('/'); if(p[0]==='u') set.add(p[1]); else if(p[0]==='r') set.add(p[3]); } return [...set]; }

/* ---------- voice ---------- */
const Voice = {
  accent: LS.get('vamos_accent','es-ES'), slow:false, voices:[],
  init(){ const load=()=>{ this.voices = speechSynthesis.getVoices(); }; if('speechSynthesis' in window){ load(); speechSynthesis.onvoiceschanged = load; } },
  pickVoice(){ const v=this.voices; const want=this.accent;
    return v.find(x=>x.lang===want && /google|natural|premium|enhanced/i.test(x.name)) || v.find(x=>x.lang===want) || v.find(x=>x.lang.replace('_','-').startsWith(want)) || (want!=='es-ES' && v.find(x=>/es[-_](MX|US|419|AR|CO|CL)/.test(x.lang))) || v.find(x=>x.lang.startsWith('es')); },
  say(text, rate){ if(!('speechSynthesis' in window)) { toast('이 브라우저는 음성 재생을 지원하지 않아요'); return; }
    try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(String(text).replace(/___/g,'…')); u.lang=this.accent; const vv=this.pickVoice(); if(vv) u.voice=vv;
    u.rate = rate || (this.slow?0.65:0.92); speechSynthesis.speak(u); }catch(e){ console.warn('tts', e); } },
  canListen(){ return !!(window.SpeechRecognition||window.webkitSpeechRecognition); },
  listen(onResult, onEnd){
    const SR = window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR){ onEnd&&onEnd(); return null; }
    const r=new SR(); r.lang=this.accent; r.interimResults=false; r.maxAlternatives=4;
    r.onresult = e => { const alts=[...e.results[0]].map(a=>a.transcript); onResult(alts); };
    r.onerror = e => { if(e.error==='not-allowed') toast('마이크 권한을 허용해 주세요 🎙'); };
    r.onend = () => onEnd && onEnd();
    try{ r.start(); }catch(e){ onEnd&&onEnd(); return null; }
    return r;
  }
};

/* ---------- charts ---------- */
function bars(items, opt={}){
  // items: [{label, value, color, mine, sub}]
  if(!items.length) return `<div class="empty">${opt.empty||'아직 결과가 없어요. 첫 번째로 참여해 보세요!'}</div>`;
  const max = opt.max ?? Math.max(1, ...items.map(i=>i.value));
  const total = items.reduce((a,b)=>a+b.value,0) || 1;
  return `<div class="bars">${items.map((it,i)=>{
    const w = Math.max(0, it.value/max*100);
    const val = opt.pct ? `${Math.round(it.value)}%` : `${it.value}${opt.unit||''}${opt.share?` <small>${Math.round(it.value/total*100)}%</small>`:''}`;
    return `<div class="bar-row" title="${esc(it.sub||'')}"><span class="lbl">${it.mine?'<span class="mine-mark">● </span>':''}${it.label}</span><span class="bar-track"><span class="bar-fill" style="width:${w}%;background:${it.color||COLORS[i%COLORS.length]}"></span></span><span class="val">${val}</span></div>`; }).join('')}</div>`;
}
function donut(pct, color='#25897d', label){
  const p=Math.max(0,Math.min(100,Math.round(pct)));
  return `<div class="donut" style="background:conic-gradient(${color} ${p*3.6}deg, #f4ecdf 0)"><span>${label??p+'%'}</span></div>`;
}
function leaderboard(rows, opt={}){
  // rows: [{uid,name,score,sub}]
  if(!rows.length) return `<div class="empty">${opt.empty||'아직 참여자가 없어요.'}</div>`;
  rows = rows.slice().sort((a,b)=>b.score-a.score || (a.ts||0)-(b.ts||0)).slice(0, opt.limit||10);
  const medal=['🥇','🥈','🥉'];
  return `<div class="lb">${rows.map((r,i)=>`<div class="lb-row ${r.uid===prof.uid?'me':''}"><span class="rk">${medal[i]||i+1}</span>${avatar(r.name)}<span class="nm notranslate" translate="no">${esc(r.name)}</span>${r.sub?`<small class="muted">${r.sub}</small>`:''}<span class="sc">${r.score}${opt.unit||''}</span></div>`).join('')}</div>`;
}

/* ---------- language selector (Google Translate) ---------- */
const LANGS = [['ko','한국어'],['en','English'],['es','Español'],['ja','日本語'],['zh-CN','中文(简体)'],['zh-TW','中文(繁體)'],['fr','Français'],['de','Deutsch'],['ru','Русский'],['pt','Português'],['it','Italiano'],['vi','Tiếng Việt'],['th','ไทย'],['id','Bahasa Indonesia'],['ms','Bahasa Melayu'],['tl','Filipino'],['ar','العربية'],['hi','हिन्दी'],['bn','বাংলা'],['tr','Türkçe'],['fa','فارسی'],['ur','اردو'],['he','עברית'],['mn','Монгол'],['uz','Oʻzbek'],['kk','Қазақ'],['ky','Кыргызча'],['tg','Тоҷикӣ'],['ne','नेपाली'],['si','සිංහල'],['my','မြန်မာ'],['km','ខ្មែរ'],['lo','ລາວ'],['pl','Polski'],['uk','Українська'],['nl','Nederlands'],['sv','Svenska'],['no','Norsk'],['da','Dansk'],['fi','Suomi'],['el','Ελληνικά'],['cs','Čeština'],['sk','Slovenčina'],['hu','Magyar'],['ro','Română'],['bg','Български'],['sr','Српски'],['hr','Hrvatski'],['sl','Slovenščina'],['bs','Bosanski'],['mk','Македонски'],['sq','Shqip'],['lt','Lietuvių'],['lv','Latviešu'],['et','Eesti'],['be','Беларуская'],['ka','ქართული'],['hy','Հայերեն'],['az','Azərbaycan'],['ca','Català'],['gl','Galego'],['eu','Euskara'],['pt-PT','Português (PT)'],['ga','Gaeilge'],['cy','Cymraeg'],['is','Íslenska'],['mt','Malti'],['lb','Lëtzebuergesch'],['af','Afrikaans'],['sw','Kiswahili'],['am','አማርኛ'],['ha','Hausa'],['yo','Yorùbá'],['ig','Igbo'],['zu','isiZulu'],['xh','isiXhosa'],['so','Soomaali'],['rw','Kinyarwanda'],['mg','Malagasy'],['ny','Chichewa'],['sn','chiShona'],['st','Sesotho'],['ta','தமிழ்'],['te','తెలుగు'],['kn','ಕನ್ನಡ'],['ml','മലയാളം'],['mr','मराठी'],['gu','ગુજરાતી'],['pa','ਪੰਜਾਬੀ'],['or','ଓଡ଼ିଆ'],['as','অসমীয়া'],['sd','سنڌي'],['ps','پښتو'],['ku','Kurdî'],['ckb','کوردی'],['ug','ئۇيغۇرچە'],['tk','Türkmen'],['tt','Татар'],['jw','Basa Jawa'],['su','Basa Sunda'],['ceb','Cebuano'],['haw','ʻŌlelo Hawaiʻi'],['sm','Samoa'],['mi','Māori'],['ht','Kreyòl Ayisyen'],['qu','Runasimi'],['gn','Avañeʼẽ'],['ay','Aymar'],['eo','Esperanto'],['la','Latina'],['co','Corsu'],['fy','Frysk'],['gd','Gàidhlig'],['yi','ייִדיש'],['hmn','Hmong'],['ln','Lingála'],['lg','Luganda'],['om','Oromoo'],['ti','ትግርኛ'],['ak','Twi'],['ee','Eʋegbe'],['bm','Bamanankan'],['dv','ދިވެހި'],['sa','संस्कृतम्'],['mai','मैथिली'],['bho','भोजपुरी'],['doi','डोगरी'],['gom','कोंकणी'],['lus','Mizo'],['mni-Mtei','ꯃꯩꯇꯩꯂꯣꯟ'],['ilo','Ilokano'],['kri','Krio'],['nso','Sepedi'],['ts','Xitsonga']];
const Lang = {
  current(){ const m=document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/); return m?decodeURIComponent(m[1]):'ko'; },
  set(code){
    if(code==='ko'){
      const host=location.hostname; const past='expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      document.cookie=`googtrans=; ${past}`; document.cookie=`googtrans=; ${past}; domain=${host}`; document.cookie=`googtrans=; ${past}; domain=.${host}`;
      location.reload(); return;
    }
    document.cookie=`googtrans=/ko/${code}; path=/`;
    const sel=document.querySelector('select.goog-te-combo');
    if(sel){ sel.value=code; sel.dispatchEvent(new Event('change')); }
    else location.reload();
    this.label(code);
  },
  label(code){ const l=LANGS.find(x=>x[0]===code); const el=$('#langLabel'); if(el){ el.textContent = l?l[1]:'Language'; el.classList.add('notranslate'); } },
  init(){
    const btn=$('#langBtn'), panel=$('#langPanel'), list=$('#langList'), search=$('#langSearch');
    const render=q=>{ q=(q||'').toLowerCase(); const cur=this.current();
      list.innerHTML = LANGS.filter(([c,n])=>!q||n.toLowerCase().includes(q)||c.toLowerCase().includes(q)).map(([c,n])=>`<button class="notranslate ${c===cur?'on':''}" translate="no" data-c="${c}">${esc(n)}</button>`).join(''); };
    render(); this.label(this.current());
    btn.onclick = e => { e.stopPropagation(); panel.hidden=!panel.hidden; if(!panel.hidden){ render(search.value); search.focus(); } };
    search.oninput = () => render(search.value);
    list.onclick = e => { const b=e.target.closest('button'); if(!b) return; panel.hidden=true; this.set(b.dataset.c); };
    document.addEventListener('click', e => { if(!panel.hidden && !panel.contains(e.target) && e.target!==btn) panel.hidden=true; });
    panel.classList.add('notranslate'); panel.setAttribute('translate','no');
  }
};

Object.assign(window, {$, $$, esc, es, shuffle, pick, rid, colorOf, avatar, similarity, norm, toast, LS, prof, RT, BROKERS, Voice, bars, donut, leaderboard, Lang, COLORS, userChapterActs, pointsOf, stampsOf, allUids, actsNeeded, cleanRoom});
})();
