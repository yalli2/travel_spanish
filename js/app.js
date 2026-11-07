/* Pasaporte ¡Vámonos! — app views */
(function(){
'use strict';
const V = window.VAMOS; const CH = V.chapters.sort((a,b)=>a.no-b.no);
const byId = id => CH.find(c=>c.id===id);
const PARTS = [
  {id:'about', ko:'출발 준비', es:'Antes de salir', sub:'About Spanish', color:'#7a4c93', n:'I'},
  {id:'basics', ko:'기초 다지기', es:'Lo básico', sub:'Basics', color:'#3f86bd', n:'II'},
  {id:'practical', ko:'실전 여행', es:'En ruta', sub:'Practical', color:'#25897d', n:'III'},
  {id:'social', ko:'사람과 어울리기', es:'Vida social', sub:'Social', color:'#e3a03a', n:'IV'},
  {id:'safe', ko:'안전한 여행', es:'Viaje seguro', sub:'Safe Travel', color:'#c8553d', n:'V'},
  {id:'food', ko:'맛있는 여행', es:'¡A comer!', sub:'Food', color:'#d4607a', n:'VI'}
];
const partOf = c => PARTS.find(p=>p.id===c.part) || PARTS[0];
const MK = {
  short:{ico:'⚡',ko:'단축 표현',en:'Shortcut',d:'긴 문장 대신 쓰는 쉽고 짧은 대안'},
  qa:{ico:'⇄',ko:'질문·응답 짝',en:'Q&A Pair',d:'질문과 함께 알맞은 대답을 연습'},
  look:{ico:'👁',ko:'눈여겨보기',en:'Look For',d:'표지판·메뉴판에서 보게 될 말'},
  listen:{ico:'👂',ko:'귀 기울이기',en:'Listen For',d:'직원·현지인에게 듣게 될 말'},
  lang:{ico:'💡',ko:'언어 팁',en:'Language Tip',d:'스페인어를 더 깊이 이해하는 힌트'},
  culture:{ico:'🌍',ko:'문화 팁',en:'Culture Tip',d:'현지 문화에 대한 통찰'}
};
const badge = k => MK[k] ? `<span class="badge mk-${k}" title="${MK[k].d}">${MK[k].ico} ${MK[k].ko}</span>` : '';
const TABS = [['phr','📖','표현 익히기'],['dialog','🎭','롤플레이'],['quiz','🧩','퀴즈'],['poll','🗳️','우리반 투표'],['write','✍️','문장 벽'],['w','🎯','특별 미션'],['results','📊','우리반 결과']];
let live = [];
const addLive = (el, fn) => { live.push({el, fn}); try{ el.innerHTML = fn(); }catch(e){ console.error(e); } };
RT.on(()=>{ live = live.filter(l=>document.body.contains(l.el)); live.forEach(l=>{ try{ l.el.innerHTML = l.fn(); }catch(e){ console.error(e); } }); updateTop(); });

function requireNick(){
  if(prof.nick) return true;
  const n = prompt('수업에서 사용할 이름(닉네임)을 입력하세요.\nEscribe tu nombre:');
  if(n && n.trim()){ prof.nick = n.trim().slice(0,16); LS.set('vamos_profile', prof); RT.presence(); route(); return true; }
  toast('먼저 이름을 입력해 주세요'); return false;
}
function shareUrl(){ return location.origin + location.pathname + '?room=' + encodeURIComponent(prof.room) + (RT.brokerIdx?`&srv=${RT.brokerIdx}`:''); }
const qr = (size=180) => `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=6&data=${encodeURIComponent(shareUrl())}`;

/* ---------- top bar ---------- */
function updateTop(){
  const h = location.hash || '#/';
  $$('.topnav a').forEach(a=>a.classList.toggle('on', (a.dataset.nav==='home'&&(h==='#/'||h.startsWith('#/ch'))) || h.startsWith('#/'+a.dataset.nav)));
}
$('#voiceBtn').onclick = () => { Voice.accent = Voice.accent==='es-ES'?'es-MX':'es-ES'; LS.set('vamos_accent', Voice.accent); setVoiceBtn(); Voice.say(Voice.accent==='es-ES'?'Hola, ¿qué tal?':'Hola, ¿cómo estás?'); };
function setVoiceBtn(){ $('#voiceBtn').innerHTML = Voice.accent==='es-ES' ? '🇪🇸 스페인 발음' : '🌎 중남미 발음'; }
$('#statusPill').onclick = () => { location.hash = '#/room'; };

/* ---------- HOME ---------- */
function viewHome(app){
  const uids = allUids(); const myStamps = stampsOf(prof.uid);
  const totalPhr = CH.reduce((a,c)=>a+c.phrases.length,0);
  app.innerHTML = `
  <section class="hero">
    <div style="position:relative;z-index:1">
      <div class="kicker">다인에듀 HR · 성인 외국어 프로그램</div>
      <h1 class="notranslate" translate="no">Pasaporte <span>¡Vámonos!</span></h1>
      <p class="sub">말이 통하는 여권 — 공항에서 타파스 바까지, 33개 여행 장면을 동료들과 <b>실시간으로</b> 연습하고 여권 도장을 모으는 스페인어 여행회화 과정</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn alt" href="#/ch/${CH[0].id}/phr">✈️ 첫 여정 시작하기</a>
        <a class="btn ghost" style="color:#fff;border-color:rgba(255,255,255,.5)" href="#/room">📊 우리반 대시보드</a>
      </div>
      <div class="hero-stats">
        <div><b>${CH.length}</b><span>여행 장면(챕터)</span></div>
        <div><b>${totalPhr}</b><span>핵심 표현</span></div>
        <div><b>13</b><span>교재 도표 미션</span></div>
        <div><b id="cntLive">${uids.length}</b><span>우리반 참여자</span></div>
      </div>
    </div>
    <div class="join" id="joinBox"></div>
  </section>

  <div class="sec-title"><h2>교재 표식 가이드</h2><span class="es notranslate">Iconos del libro</span></div>
  <div class="markers">${Object.entries(MK).map(([k,m])=>`<div class="mk"><span class="mk-ico mk-${k}">${m.ico}</span><div><b>${m.ko}</b><small><span class="notranslate">${m.en}</span> · ${m.d}</small></div></div>`).join('')}</div>

  <div class="sec-title"><h2>여정 지도</h2><span class="es notranslate">Mapa del viaje</span><span class="muted" style="margin-left:auto;font-size:13px">각 장면에서 활동 3개 이상 완료 → 여권 도장 🛂 (${myStamps.length}/${CH.length})</span></div>
  <div id="journey"></div>`;

  const jb = $('#joinBox');
  const drawJoin = () => {
    jb.innerHTML = prof.nick ? `
      <h3>🛂 탑승 수속 완료</h3>
      <div class="join-me">${avatar(prof.nick,'avatar')}<div style="flex:1"><b class="notranslate">${esc(prof.nick)}</b><br><small class="muted">방 코드 <b>${esc(prof.room)}</b> · ${pointsOf(prof.uid)}점 · 도장 ${stampsOf(prof.uid).length}개</small></div><button class="btn ghost small" id="editMe">변경</button></div>
      <div class="qr-mini"><img src="${qr(168)}" alt="QR"><div>수강생에게 이 QR이나 링크를 공유하면<br>같은 방에서 결과를 함께 봐요.<br><button class="btn small" id="copyLink" style="margin-top:6px">🔗 링크 복사</button></div></div>`
    : `
      <h3>🎫 탑승 수속 (입장)</h3>
      <label class="field">이름 / 닉네임 <input id="nickIn" maxlength="16" placeholder="예: 후안, Minji"></label>
      <label class="field">방 코드 (강사가 알려준 코드) <input id="roomIn" maxlength="12" value="${esc(prof.room)}"></label>
      <button class="btn alt" id="joinBtn">¡Vámonos! 입장하기</button>
      <small class="muted">같은 방 코드로 들어온 사람들의 결과가 실시간으로 보여요.</small>`;
    if(prof.nick){
      $('#editMe').onclick = () => { prof.nick=''; drawJoin(); };
      $('#copyLink').onclick = () => { navigator.clipboard?.writeText(shareUrl()); toast('링크를 복사했어요 🔗'); };
    } else {
      const go = () => { const n=$('#nickIn').value.trim(); if(!n){ toast('이름을 입력해 주세요'); return; }
        const r=cleanRoom($('#roomIn').value); const changed = r!==prof.room; prof.nick=n.slice(0,16); prof.room=r; LS.set('vamos_profile',prof);
        if(changed){ RT.loadMine(); RT.connect(); } else RT.presence(); toast(`¡Bienvenido/a, ${esc(prof.nick)}! 🎉`); drawJoin(); };
      $('#joinBtn').onclick = go; $('#nickIn').onkeydown = e=>{ if(e.key==='Enter') go(); };
    }
  };
  drawJoin();

  addLive($('#journey'), () => PARTS.map(p => {
    const chs = CH.filter(c=>c.part===p.id); if(!chs.length) return '';
    return `<div class="part"><div class="part-head"><span class="part-num" style="background:${p.color}">${p.n}</span><div><h3>${p.ko}</h3><span class="es notranslate">${p.es} · ${p.sub}</span></div><span class="bar"></span></div>
      <div class="ch-grid">${chs.map(c=>{ const mine=userChapterActs(prof.uid,c.id).length, need=c.widget?6:5; const cls=allUids().filter(u=>userChapterActs(u,c.id).length>=3).length;
        return `<a class="ch-tile" href="#/ch/${c.id}/phr"><div class="top"><span class="emo">${c.emoji}</span><span class="no">#${String(c.no).padStart(2,'0')} · p.${c.pages}</span></div><b>${esc(c.ko)}</b><span class="es notranslate">${esc(c.es)}</span>
          <div class="prog"><i style="width:${Math.min(100,mine/need*100)}%"></i></div><div class="meta"><span>내 진행 ${mine}/${need}</span><span>🛂 우리반 ${cls}명</span></div>${mine>=3?`<span class="stamp-mini">SELLADO</span>`:''}</a>`; }).join('')}
        ${p.id==='food'?`<a class="ch-tile" href="#/dict"><div class="top"><span class="emo">📚</span><span class="no">p.205–266</span></div><b>미니 사전</b><span class="es notranslate">Diccionario</span><div class="meta"><span>모든 표현·단어 검색</span></div></a>`:''}
      </div></div>`; }).join(''));
  addLive($('#cntLive'), () => String(allUids().length));
}

/* ---------- CHAPTER ---------- */
function viewChapter(app, id, tab){
  const c = byId(id); if(!c){ location.hash='#/'; return; }
  const p = partOf(c); const idx = CH.indexOf(c); const prev = CH[idx-1], next = CH[idx+1];
  if(!TABS.some(t=>t[0]===tab) || (tab==='w' && !c.widget)) tab='phr';
  RT.presence(c.id);
  const tabs = TABS.filter(t=>t[0]!=='w'||c.widget);
  app.innerHTML = `
  <div class="crumbs"><a href="#/">여정 지도</a> › <span style="color:${p.color};font-weight:700">${p.n}. ${p.ko}</span> › ${esc(c.ko)}</div>
  <section class="ch-hero">
    <div class="big">${c.emoji}</div>
    <div><span class="tag" style="background:${p.color};color:#fff">#${String(c.no).padStart(2,'0')} · 교재 p.${c.pages}</span>
      <h1>${esc(c.ko)}<span class="es notranslate" translate="no">${esc(c.es)}</span></h1>
      <p class="scene">🎬 <b>미션</b> — ${esc(c.scene)}</p>
      <div class="goals">${(c.goals||[]).map(g=>`<span>🎯 ${esc(g)}</span>`).join('')}</div></div>
    <div class="ch-nav" id="chStamp"></div>
  </section>
  <nav class="tabs" id="tabs"></nav>
  <div class="layout"><section id="main"></section><aside class="side" id="side"></aside></div>
  <div style="display:flex;justify-content:space-between;margin-top:26px">
    ${prev?`<a class="btn ghost" href="#/ch/${prev.id}/phr">← ${prev.emoji} ${esc(prev.ko)}</a>`:'<span></span>'}
    ${next?`<a class="btn" href="#/ch/${next.id}/phr">${next.emoji} ${esc(next.ko)} →</a>`:`<a class="btn" href="#/passport">🛂 내 여권 보기 →</a>`}
  </div>`;
  addLive($('#tabs'), () => { const done=userChapterActs(prof.uid,c.id); return tabs.map(t=>`<a class="tab ${t[0]===tab?'on':''}" href="#/ch/${c.id}/${t[0]}">${t[1]} ${t[2]}${done.includes(t[0])?'<span class="chk">✓</span>':''}</a>`).join(''); });
  addLive($('#chStamp'), () => { const n=userChapterActs(prof.uid,c.id).length; const got=n>=3;
    return `<div class="stamp ${got?'got':''}" style="width:96px;--c:${p.color};--r:-10deg"><span class="e">${c.emoji}</span><span class="sn notranslate">${got?'SELLADO':'0'+n+'/03'}</span></div><small class="muted">${got?'도장 획득!':'활동 3개 → 도장'}</small>`; });
  const main = $('#main'), side = $('#side');
  ({phr:tabPhrases, dialog:tabDialog, quiz:tabQuiz, poll:tabPoll, write:tabWrite, w:tabWidget, results:tabResults}[tab])(c, main, side);
}

/* phrases */
function tabPhrases(c, main, side){
  const canSR = Voice.canListen();
  main.innerHTML = `
    <div class="live-head"><h3>📖 핵심 표현 ${c.phrases.length}개 <small class="muted">— 🔊 듣고 ${canSR?'🎙 말해서 인식에 성공':'✔ 소리 내어 말해 본 뒤 체크'}하면 완료!</small></h3>
      <button class="btn ghost small" id="slowBtn">🐢 천천히 ${Voice.slow?'ON':'OFF'}</button></div>
    <div class="phrases" id="phList"></div>
    <div class="sec-title" style="margin-top:22px"><h2 style="font-size:17px">교재 팁</h2></div>
    <div class="tips">${(c.tips||[]).map(t=>`<div class="tip"><span class="mk-ico mk-${t.mk}">${MK[t.mk]?.ico||'💡'}</span><div><b>${MK[t.mk]?.ko||'팁'}</b><div>${esc(t.ko)}</div></div></div>`).join('')}</div>
    <div class="sec-title" style="margin-top:22px"><h2 style="font-size:17px">핵심 단어</h2><span class="es notranslate">Vocabulario</span></div>
    <div class="vocab">${(c.vocab||[]).map(v=>`<button data-say="${esc(v.es)}"><b class="notranslate">${esc(v.es)}</b> · ${esc(v.ko)}</button>`).join('')}</div>`;
  $('#slowBtn').onclick = e => { Voice.slow=!Voice.slow; e.target.textContent=`🐢 천천히 ${Voice.slow?'ON':'OFF'}`; };
  main.querySelector('.vocab').onclick = e => { const b=e.target.closest('[data-say]'); if(b) Voice.say(b.dataset.say); };
  const list = $('#phList');
  const myOk = () => new Set((RT.my(c.id,'phr')||{}).ok||[]);
  const markOk = i => { if(!requireNick()) return; const s=myOk(); if(s.has(i)) return; s.add(i); RT.submit(c.id,'phr',{ok:[...s], total:c.phrases.length}); toast('¡Muy bien! +3점 ✨'); };
  addLive(list, () => { const s=myOk(); const rs=RT.results(c.id,'phr'); const n=Math.max(1,rs.length);
    return c.phrases.map((ph,i)=>{ const cnt=rs.filter(r=>(r.ok||[]).includes(i)).length;
      return `<div class="ph ${s.has(i)?'done':''}" data-i="${i}">
        <div style="display:flex;gap:6px;align-items:center">${badge(ph.mk)}<span class="muted" style="font-size:11.5px;margin-left:auto">${i+1}</span></div>
        <div class="es-text notranslate" translate="no">${esc(ph.es)}</div><div class="pr notranslate" translate="no">[${esc(ph.pr||'')}]</div><div class="ko">${esc(ph.ko)}</div>
        ${ph.ans?`<div class="ans">⇄ <b class="notranslate">${esc(ph.ans.es)}</b> <button class="icon-btn" style="width:28px;height:28px;font-size:13px" data-ans="${i}">🔊</button><br><small>${esc(ph.ans.ko)}</small></div>`:''}
        <div class="acts"><button class="icon-btn" data-play="${i}" title="듣기">🔊</button>
          ${canSR?`<button class="icon-btn" data-rec="${i}" title="말하기">🎙</button>`:''}<button class="icon-btn" data-self="${i}" title="말해 봤어요">${s.has(i)?'✅':'✔'}</button>
          <span class="class-rate" title="우리반 성공 인원"><span class="prog"><i style="width:${cnt/n*100}%"></i></span>${cnt}명</span></div>
        <div class="heard" data-heard="${i}"></div></div>`; }).join(''); });
  list.onclick = e => {
    const b = e.target.closest('button'); if(!b) return;
    if(b.dataset.play) Voice.say(c.phrases[+b.dataset.play].es);
    else if(b.dataset.ans) Voice.say(c.phrases[+b.dataset.ans].ans.es);
    else if(b.dataset.self) markOk(+b.dataset.self);
    else if(b.dataset.rec){ const i=+b.dataset.rec; if(!requireNick()) return; b.classList.add('rec'); const target=c.phrases[i].es;
      Voice.listen(alts => { const best = alts.map(a=>({a,s:similarity(a,target)})).sort((x,y)=>y.s-x.s)[0]; const pct=Math.round(best.s*100);
        const h = list.querySelector(`[data-heard="${i}"]`);
        if(best.s>=0.7){ markOk(i); setTimeout(()=>{ const h2=list.querySelector(`[data-heard="${i}"]`); if(h2) h2.innerHTML=`🎉 인식 성공 ${pct}% — “<span class="notranslate">${esc(best.a)}</span>”`; },200); }
        else if(h) h.innerHTML = `🤏 ${pct}% — “<span class="notranslate">${esc(best.a)}</span>” 다시 한 번!`; },
        () => b.classList.remove('rec')); }
  };
  side.innerHTML = `<div class="card"><div class="live-head"><h3>🎙 우리반 말하기 현황</h3><span class="live-badge">LIVE</span></div><div id="sPhr"></div></div>`;
  addLive($('#sPhr'), () => { const rs=RT.results(c.id,'phr'); const tot=c.phrases.length;
    const rows=rs.map(r=>({uid:r.uid,name:r.n,score:(r.ok||[]).length,ts:r.ts}));
    const avg = rs.length ? rs.reduce((a,r)=>a+(r.ok||[]).length,0)/rs.length/tot*100 : 0;
    return `<div style="display:flex;gap:14px;align-items:center;margin-bottom:12px">${donut(avg,'#25897d')}<div style="font-size:13px"><b>${rs.length}명</b> 참여<br>평균 완료율<br><span class="muted">표현 ${tot}개 기준</span></div></div>${leaderboard(rows,{unit:'/'+tot})}`; });
}

/* dialog */
function tabDialog(c, main, side){
  const d = c.dialog; let step=0, first=true, score=0, total=d.lines.filter(l=>l.who==='me').length;
  main.innerHTML = `<div class="card"><div class="live-head"><h3>🎭 ${esc(d.title)}</h3><button class="btn ghost small" id="dlgReset">처음부터</button></div><div class="chat" id="chat"></div><div id="choices"></div></div>`;
  const chat=$('#chat'), box=$('#choices');
  const bub = (who, esTxt, ko) => { const div=document.createElement('div'); div.className='bub '+who; div.innerHTML=`<span class="who">${who==='npc'?'🧑 현지인':'🙋 나'}</span><span class="es-text notranslate" translate="no">${esc(esTxt)}</span> <small>${esc(ko||'')}</small>`; div.onclick=()=>Voice.say(esTxt); chat.appendChild(div); chat.scrollTop=chat.scrollHeight; };
  const run = () => {
    box.innerHTML='';
    while(step<d.lines.length && d.lines[step].who==='npc'){ const l=d.lines[step]; bub('npc',l.es,l.ko); if(step===0||true) Voice.say(l.es); step++; if(d.lines[step]&&d.lines[step].who==='me') break; }
    if(step>=d.lines.length){ if(!requireNick()) return; RT.submit(c.id,'dialog',{score,total}); box.innerHTML=`<div class="result-big"><div class="score">${score}/${total}</div><p>롤플레이 완료! 한 번에 맞힌 응답 수예요. 🎬</p></div>`; return; }
    const l=d.lines[step]; first=true;
    box.innerHTML = `<p class="muted" style="margin:10px 0 0;font-size:13px">어떻게 대답할까요? (말풍선을 누르면 다시 들려요)</p><div class="choices">${shuffle(l.opts.map((o,i)=>({...o,i}))).map(o=>`<button class="choice" data-i="${o.i}"><span class="es-text notranslate" translate="no">${esc(o.es)}</span><br><small class="muted">${esc(o.ko)}</small></button>`).join('')}</div>`;
    box.querySelector('.choices').onclick = e => { const b=e.target.closest('.choice'); if(!b||b.disabled) return; const o=l.opts[+b.dataset.i];
      if(o.ok){ if(first) score++; Voice.say(o.es); bub('me',o.es,o.ko); step++; setTimeout(run, 900); box.innerHTML=''; }
      else { first=false; b.disabled=true; b.classList.add('bad'); b.insertAdjacentHTML('beforeend',`<div class="why">✋ ${esc(o.why||'다른 표현을 골라 보세요.')}</div>`); } };
  };
  $('#dlgReset').onclick = () => { step=0; score=0; chat.innerHTML=''; run(); };
  run();
  side.innerHTML = `<div class="card"><div class="live-head"><h3>🎬 롤플레이 완주 현황</h3><span class="live-badge">LIVE</span></div><div id="sDlg"></div></div>`;
  addLive($('#sDlg'), () => { const rs=RT.results(c.id,'dialog'); const avg=rs.length?rs.reduce((a,r)=>a+r.score/r.total,0)/rs.length*100:0;
    return `<div class="kpis" style="grid-template-columns:1fr 1fr"><div class="kpi"><b>${rs.length}</b><span>완주 인원</span></div><div class="kpi"><b>${Math.round(avg)}%</b><span>한 번에 정답률</span></div></div><div style="margin-top:10px">${leaderboard(rs.map(r=>({uid:r.uid,name:r.n,score:r.score,ts:r.ts})),{unit:'/'+total})}</div>`; });
}

/* quiz */
function tabQuiz(c, main, side){
  const Q = c.quiz; let i=0, score=0, ans=[];
  const draw = () => {
    if(i>=Q.length){ if(!requireNick()){ return; } RT.submit(c.id,'quiz',{score,total:Q.length,ans});
      main.innerHTML=`<div class="card result-big"><div class="score">${score}/${Q.length}</div><p>${score===Q.length?'¡Perfecto! 🎉':score>=3?'¡Bien hecho! 👏':'¡Ánimo! 💪'} 결과가 우리반 차트에 반영됐어요.</p><button class="btn ghost" id="again">다시 풀기</button></div>`; $('#again').onclick=()=>{ i=0;score=0;ans=[];draw(); }; return; }
    const q=Q[i];
    main.innerHTML = `<div class="card q-box"><div class="q-progress">${Q.map((_,k)=>`<i class="${k<i?(ans[k]===Q[k].a?'ok':'bad'):k===i?'cur':''}"></i>`).join('')}</div>
      <div class="muted" style="font-size:13px">문제 ${i+1} / ${Q.length}</div><div class="q-text">${esc(q.q)}</div>
      <div class="opts">${q.opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="notranslate" translate="no">${esc(o)}</span></button>`).join('')}</div><div id="qx"></div></div>`;
    main.querySelector('.opts').onclick = e => { const b=e.target.closest('.opt'); if(!b||b.disabled) return; const k=+b.dataset.k; ans[i]=k; const ok=k===q.a; if(ok) score++;
      main.querySelectorAll('.opt').forEach((x,j)=>{ x.disabled=true; if(j===q.a) x.classList.add('ok'); else if(j===k) x.classList.add('bad'); });
      if(/[a-záéíóúñ¿¡]/i.test(q.opts[q.a])) Voice.say(q.opts[q.a]);
      $('#qx').innerHTML = `<div class="explain">${ok?'✅ 정답!':'❌ 아쉬워요.'} ${esc(q.ex||'')}</div><div style="text-align:right;margin-top:10px"><button class="btn" id="nx">${i+1<Q.length?'다음 문제 →':'결과 보기'}</button></div>`;
      $('#nx').onclick=()=>{ i++; draw(); }; };
  };
  const mine = RT.my(c.id,'quiz');
  if(mine){ main.innerHTML=`<div class="card result-big"><div class="score">${mine.score}/${mine.total}</div><p>이미 퀴즈를 풀었어요. 다시 풀면 새 점수로 바뀝니다.</p><button class="btn" id="again">다시 풀기</button></div>`; $('#again').onclick=draw; }
  else draw();
  side.innerHTML = `<div class="card"><div class="live-head"><h3>🧩 문항별 우리반 정답률</h3><span class="live-badge">LIVE</span></div><div id="sQ"></div></div>
    <div class="card"><div class="live-head"><h3>🏆 퀴즈 순위</h3></div><div id="sQ2"></div></div>`;
  addLive($('#sQ'), () => { const rs=RT.results(c.id,'quiz'); if(!rs.length) return `<div class="empty">퀴즈를 푼 사람이 아직 없어요.</div>`;
    return bars(Q.map((q,k)=>({label:`Q${k+1}`, value: rs.filter(r=>(r.ans||[])[k]===q.a).length/rs.length*100, color: '#25897d', sub:q.q})),{pct:true,max:100}) + `<p class="muted" style="font-size:12px;margin:8px 0 0">${rs.length}명 응답 · 막대가 짧은 문항을 함께 복습해요</p>`; });
  addLive($('#sQ2'), () => leaderboard(RT.results(c.id,'quiz').map(r=>({uid:r.uid,name:r.n,score:r.score,ts:r.ts})),{unit:'/'+Q.length}));
}

/* poll */
function tabPoll(c, main, side){
  const P = c.poll;
  main.innerHTML = `<div class="card"><div class="live-head"><h3>🗳️ ${esc(P.q)}</h3><span class="live-badge">LIVE</span></div>
    <p class="muted" style="margin:0 0 12px;font-size:13px">정답이 없는 질문이에요. 하나를 고르면 우리반 결과가 바로 바뀝니다 (다시 눌러 변경 가능).</p>
    <div class="poll-opts" id="pollOpts"></div>
    <div style="margin-top:20px" id="pollChart"></div></div>`;
  addLive($('#pollOpts'), () => { const m=(RT.my(c.id,'poll')||{}).o; return P.opts.map((o,k)=>`<button class="poll-opt ${m===k?'on':''}" data-k="${k}">${esc(o)}</button>`).join(''); });
  $('#pollOpts').onclick = e => { const b=e.target.closest('.poll-opt'); if(!b||!requireNick()) return; RT.submit(c.id,'poll',{o:+b.dataset.k}); toast('투표 완료! 🗳'); };
  const chart = () => { const rs=RT.results(c.id,'poll'); const m=(RT.my(c.id,'poll')||{}).o;
    return `<h4 style="margin:0 0 10px">우리반 결과 · ${rs.length}명</h4>` + bars(P.opts.map((o,k)=>({label:esc(o), value:rs.filter(r=>r.o===k).length, mine:m===k, sub:rs.filter(r=>r.o===k).map(r=>r.n).join(', ')})),{share:true,unit:'명'}); };
  addLive($('#pollChart'), chart);
  side.innerHTML = `<div class="card"><div class="live-head"><h3>👥 누가 무엇을 골랐나</h3></div><div id="sPoll"></div></div>`;
  addLive($('#sPoll'), () => { const rs=RT.results(c.id,'poll'); if(!rs.length) return `<div class="empty">첫 투표를 기다려요</div>`;
    return `<div class="lb">${rs.sort((a,b)=>b.ts-a.ts).map(r=>`<div class="lb-row ${r.uid===prof.uid?'me':''}">${avatar(r.n)}<span class="nm notranslate">${esc(r.n)}</span><span>${esc(P.opts[r.o]||'')}</span></div>`).join('')}</div>`; });
}

/* write wall */
function tabWrite(c, main, side){
  const Wd = c.write; const mine = RT.my(c.id,'write');
  main.innerHTML = `<div class="card write-box"><h3 style="margin:0">✍️ ${esc(Wd.prompt)}</h3>
    <div class="pattern notranslate" translate="no">${esc(Wd.pattern)}</div>
    <p class="muted" style="margin:0;font-size:13.5px">💡 ${esc(Wd.hint||'')} · 예) <b class="notranslate">${esc(Wd.example||'')}</b> <button class="icon-btn" style="width:28px;height:28px;font-size:13px" id="exSay">🔊</button></p>
    <textarea id="wIn" maxlength="140" placeholder="스페인어로 문장을 써 보세요" class="notranslate" translate="no">${esc(mine?.text||'')}</textarea>
    <div style="display:flex;gap:8px;align-items:center"><button class="btn alt" id="wSend">${mine?'수정해서 다시 올리기':'문장 벽에 올리기'}</button><button class="btn ghost small" id="wSay">🔊 내 문장 듣기</button><span class="muted" style="margin-left:auto;font-size:12px">특수문자: <span id="chars">${'á é í ó ú ñ ¿ ¡ ü'.split(' ').map(ch=>`<button class="icon-btn notranslate" style="width:28px;height:28px;font-size:13px" data-ch="${ch}">${ch}</button>`).join(' ')}</span></span></div></div>
    <div class="sec-title"><h2 style="font-size:18px">우리반 문장 벽</h2><span class="es notranslate">El muro de la clase</span><span class="live-badge" style="margin-left:6px">LIVE</span></div>
    <div class="wall" id="wall"></div>`;
  const inp=$('#wIn');
  $('#exSay').onclick=()=>Voice.say(Wd.example);
  $('#wSay').onclick=()=>inp.value.trim()&&Voice.say(inp.value);
  $('#chars').onclick=e=>{ const b=e.target.closest('[data-ch]'); if(!b) return; const s=inp.selectionStart; inp.value=inp.value.slice(0,s)+b.dataset.ch+inp.value.slice(inp.selectionEnd); inp.focus(); inp.selectionStart=inp.selectionEnd=s+1; };
  $('#wSend').onclick=()=>{ const t=inp.value.trim(); if(!t){ toast('문장을 입력해 주세요'); return; } if(!requireNick()) return; RT.submit(c.id,'write',{text:t.slice(0,140)}); toast('문장 벽에 올렸어요! +10점 📌'); $('#wSend').textContent='수정해서 다시 올리기'; };
  addLive($('#wall'), () => { const rs=RT.results(c.id,'write'); if(!rs.length) return `<div class="empty" style="grid-column:1/-1">아직 올라온 문장이 없어요. 첫 문장을 올려 보세요!</div>`;
    return rs.map(r=>({...r, likes:RT.likes(c.id,r.uid)})).sort((a,b)=>b.likes.length-a.likes.length||b.ts-a.ts).map((r,k)=>{ const on=r.likes.includes(prof.uid);
      return `<div class="post" style="--r:${((k*37)%5-2)*0.5}deg"><div class="txt notranslate" translate="no">${esc(r.text)}</div><div class="foot2">${avatar(r.n)}<span class="notranslate">${esc(r.n)}</span><button class="icon-btn" style="width:28px;height:28px;font-size:13px" data-say="${esc(r.text)}">🔊</button><button class="ole ${on?'on':''}" data-like="${r.uid}">¡Olé! ${r.likes.length}</button></div></div>`; }).join(''); });
  $('#wall').onclick=e=>{ const s=e.target.closest('[data-say]'), l=e.target.closest('[data-like]'); if(s) Voice.say(s.dataset.say); if(l){ if(!requireNick()) return; if(l.dataset.like===prof.uid){ toast('내 문장에는 ¡Olé!를 누를 수 없어요 😉'); return; } RT.toggleLike(c.id,l.dataset.like); } };
  side.innerHTML = `<div class="card"><div class="live-head"><h3>❤️ ¡Olé! 인기 문장</h3><span class="live-badge">LIVE</span></div><div id="sW"></div></div>`;
  addLive($('#sW'), () => { const rs=RT.results(c.id,'write').map(r=>({...r,l:RT.likes(c.id,r.uid).length})).filter(r=>r.l).sort((a,b)=>b.l-a.l).slice(0,5);
    return `<div class="kpis" style="grid-template-columns:1fr 1fr;margin-bottom:12px"><div class="kpi"><b>${RT.results(c.id,'write').length}</b><span>올라온 문장</span></div><div class="kpi"><b>${RT.results(c.id,'write').reduce((a,r)=>a+RT.likes(c.id,r.uid).length,0)}</b><span>¡Olé! 수</span></div></div>` +
      (rs.length?bars(rs.map(r=>({label:`<span class="notranslate">${esc(r.text)}</span>`, value:r.l, color:'#c8553d', sub:r.n})),{unit:'❤'}):`<div class="empty">마음에 드는 문장에 ¡Olé!를 눌러 주세요</div>`); });
}

/* widget */
function tabWidget(c, main, side){
  const w = WIDGETS[c.widget]; if(!w){ main.innerHTML='<div class="empty">준비 중</div>'; return; }
  main.innerHTML = `<div class="card"><div class="live-head"><h3>🎯 ${w.title}</h3><span class="tag">교재 도표 미션</span></div><div class="wg" id="wg"></div></div>`;
  w.render($('#wg'), c, obj => { if(!requireNick()) return; RT.submit(c.id,'w',obj); });
  side.innerHTML = `<div class="card"><div class="live-head"><h3>📊 우리반 미션 결과</h3><span class="live-badge">LIVE</span></div><div id="sWg"></div></div>`;
  addLive($('#sWg'), () => w.live(c));
}

/* chapter results */
function tabResults(c, main, side){
  main.innerHTML = `<div class="card"><div class="live-head"><h3>📊 ${esc(c.ko)} — 우리반 종합 결과</h3><span class="live-badge">LIVE</span></div><div id="rsAll"></div></div>`;
  const acts = TABS.filter(t=>t[0]!=='results' && (t[0]!=='w'||c.widget));
  addLive($('#rsAll'), () => {
    const uids = [...new Set(acts.flatMap(a=>RT.results(c.id,a[0]).map(r=>r.uid)))];
    const users = uids.map(u=>({uid:u, name:RT.nameOf(u)!=='익명'?RT.nameOf(u):(acts.map(a=>RT.store.get(`r/${c.id}/${a[0]}/${u}`)).find(Boolean)||{}).n||'익명', done:userChapterActs(u,c.id)}));
    const actCount = acts.map(a=>({label:`${a[1]} ${a[2]}`, value:RT.results(c.id,a[0]).length, color:'#3f86bd'}));
    const qz = RT.results(c.id,'quiz'); const qavg = qz.length? qz.reduce((a,r)=>a+r.score/r.total,0)/qz.length*100 : 0;
    return `<div class="kpis"><div class="kpi"><b>${users.length}</b><span>참여 인원</span></div><div class="kpi"><b>${users.filter(u=>u.done.length>=3).length}</b><span>도장 획득</span></div><div class="kpi"><b>${Math.round(qavg)}%</b><span>퀴즈 평균</span></div></div>
      <h4 style="margin:18px 0 8px">활동별 참여 인원</h4>${bars(actCount,{unit:'명',max:Math.max(1,users.length)})}
      <h4 style="margin:18px 0 8px">참여자 × 활동 현황표</h4>
      ${users.length?`<div class="heat"><table><tr><th class="nm">이름</th>${acts.map(a=>`<th title="${a[2]}">${a[1]}</th>`).join('')}<th>🛂</th></tr>${users.sort((a,b)=>b.done.length-a.done.length).map(u=>`<tr><td class="nm notranslate">${esc(u.name)}</td>${acts.map(a=>`<td class="c"><i style="background:${u.done.includes(a[0])?'#25897d':'#f1ebe0'}"></i></td>`).join('')}<td>${u.done.length>=3?'✅':''}</td></tr>`).join('')}</table></div>`:'<div class="empty">아직 참여자가 없어요</div>'}`; });
  side.innerHTML = `<div class="card"><div class="live-head"><h3>🗳️ 투표 요약</h3></div><div id="rsPoll"></div></div><div class="card"><div class="live-head"><h3>🏆 이 챕터 점수 TOP</h3></div><div id="rsTop"></div></div>`;
  addLive($('#rsPoll'), () => { const rs=RT.results(c.id,'poll'); return `<p style="margin:0 0 8px;font-size:13px">${esc(c.poll.q)}</p>`+bars(c.poll.opts.map((o,k)=>({label:esc(o),value:rs.filter(r=>r.o===k).length})),{share:true,unit:'명'}); });
  addLive($('#rsTop'), () => { const uids=[...new Set(acts.flatMap(a=>RT.results(c.id,a[0]).map(r=>r.uid)))];
    const pts=u=>{ let p=0; const g=a=>RT.store.get(`r/${c.id}/${a}/${u}`); if(g('quiz')) p+=g('quiz').score*10; if(g('dialog')) p+=g('dialog').score*10; if(g('phr')) p+=(g('phr').ok||[]).length*3; if(g('poll')) p+=5; if(g('write')) p+=10; if(g('w')) p+=Math.round(g('w').score/(g('w').total||1)*30); return p; };
    return leaderboard(uids.map(u=>({uid:u,name:(acts.map(a=>RT.store.get(`r/${c.id}/${a[0]}/${u}`)).find(Boolean)||{}).n||'익명',score:pts(u)})),{unit:'점',limit:8}); });
}

/* ---------- PASSPORT ---------- */
function viewPassport(app){
  app.innerHTML = `<div class="sec-title" style="margin-top:0"><h2>내 여권</h2><span class="es notranslate">Mi pasaporte</span></div><div class="passport"><div id="ppCover"></div><div><div class="stamps" id="ppStamps"></div><div class="card" style="margin-top:16px"><h3 style="font-size:16px">파트별 진행률</h3><div id="ppParts"></div></div></div></div>`;
  addLive($('#ppCover'), () => { const st=stampsOf(prof.uid); const n=prof.nick||'TRAVELER'; const pts=pointsOf(prof.uid);
    const mrz = `P<KOR${n.toUpperCase().replace(/[^A-Z]/g,'').padEnd(10,'<').slice(0,10)}<<VAMONOS<<${String(st.length).padStart(2,'0')}${String(pts).padStart(5,'0')}<<<${prof.room.padEnd(8,'<')}`;
    return `<div class="pp-cover"><div class="crest">🛂</div><h2 class="notranslate">PASAPORTE</h2><div class="notranslate" style="font-size:12px;letter-spacing:.2em">¡VÁMONOS! · DAIN EDU</div>
      <div class="id"><div class="ph-photo" style="background:${colorOf(n)}">${esc((n[0]||'?').toUpperCase())}</div><dl><dt>Nombre / 이름</dt><dd class="notranslate">${esc(n)}</dd><dt>Clase / 방</dt><dd>${esc(prof.room)}</dd><dt>Sellos / 도장</dt><dd>${st.length} / ${CH.length}</dd><dt>Puntos / 점수</dt><dd>${pts}</dd></dl></div>
      <div class="mrz notranslate">${esc(mrz)}</div>
      ${prof.nick?'':'<a class="btn alt" style="margin-top:14px" href="#/">탑승 수속(입장)하기</a>'}</div>`; });
  addLive($('#ppStamps'), () => { const st=new Set(stampsOf(prof.uid));
    return CH.map((c,i)=>{ const p=partOf(c); const got=st.has(c.id); return `<a class="stamp ${got?'got':''}" href="#/ch/${c.id}/phr" style="--c:${p.color};--r:${(i*47%24)-12}deg"><span class="e">${c.emoji}</span><span>${esc(c.ko)}</span><span class="sn notranslate">${got?'Sellado':'#'+c.no}</span></a>`; }).join(''); });
  addLive($('#ppParts'), () => bars(PARTS.map(p=>{ const chs=CH.filter(c=>c.part===p.id); const st=stampsOf(prof.uid); return {label:`${p.n}. ${p.ko}`, value: chs.length? chs.filter(c=>st.includes(c.id)).length/chs.length*100 : 0, color:p.color}; }),{pct:true,max:100}));
}

/* ---------- ROOM DASHBOARD ---------- */
function viewRoom(app){
  app.innerHTML = `<div class="sec-title" style="margin-top:0"><h2>우리반 대시보드</h2><span class="es notranslate">Panel de la clase</span><span class="live-badge" style="margin-left:6px">LIVE</span></div>
  <div class="grid g3" style="grid-template-columns:1.1fr 1fr 1fr">
    <div class="card" style="text-align:center"><div class="muted" style="font-size:13px;font-weight:700">방 코드 · Código de clase</div><div class="big-code notranslate">${esc(prof.room)}</div>
      <img src="${qr(200)}" alt="QR" style="width:170px;height:170px;margin:10px auto;display:block;border-radius:10px;border:1px solid var(--line)">
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap"><button class="btn small" id="cp">🔗 링크 복사</button><button class="btn ghost small" id="chRoom">방 바꾸기</button></div>
      <p class="muted" style="font-size:12px;margin:10px 0 0" id="srvInfo"></p></div>
    <div class="card"><h3 style="font-size:16px">📈 현황</h3><div id="kpi"></div></div>
    <div class="card"><h3 style="font-size:16px">🏆 종합 순위 (점수)</h3><div id="lbAll"></div></div>
  </div>
  <div class="card" style="margin-top:16px"><div class="live-head"><h3>🗺️ 참여자 × 챕터 진행 히트맵</h3><small class="muted">칸 색이 진할수록 활동을 많이 완료 · 🛂 = 도장</small></div><div id="heat"></div></div>
  <div class="grid g2" style="margin-top:16px"><div class="card"><h3 style="font-size:16px">🧭 챕터별 도장 획득 인원</h3><div id="chBars"></div></div><div class="card"><h3 style="font-size:16px">📚 파트별 우리반 평균 진행률</h3><div id="partBars"></div>
    <h3 style="font-size:16px;margin-top:22px">👩‍🏫 강사 도구</h3><p class="muted" style="font-size:13px;margin:0 0 8px">수업 시작 전 이전 기록을 지우려면 방을 초기화하세요. (되돌릴 수 없어요)</p><button class="btn ghost small" id="reset">🧹 이 방 기록 초기화</button></div></div>`;
  $('#cp').onclick=()=>{ navigator.clipboard?.writeText(shareUrl()); toast('링크를 복사했어요 🔗'); };
  $('#chRoom').onclick=()=>{ const r=prompt('새 방 코드 (영문/숫자, 최대 12자)', prof.room); if(!r) return; prof.room=cleanRoom(r); LS.set('vamos_profile',prof); history.replaceState(null,'',location.pathname+'#/room'); RT.loadMine(); RT.connect(); route(); };
  $('#reset').onclick=()=>{ const r=prompt(`정말 초기화할까요? 방 코드 "${prof.room}"를 입력하면 모든 참여자의 결과가 삭제됩니다.`); if(r&&cleanRoom(r)===prof.room){ if(RT.clearRoom()) toast('방 기록을 초기화했어요 🧹'); else toast('실시간 서버에 연결된 상태에서만 초기화할 수 있어요'); } };
  addLive($('#srvInfo'), () => `실시간 서버: ${BROKERS[RT.brokerIdx%BROKERS.length].name} ${RT.connected?'🟢 연결됨':'🔴 연결 시도 중'} <button class="btn ghost small" style="padding:2px 8px;font-size:11px" onclick="RT.next()">서버 전환</button>`);
  addLive($('#kpi'), () => { const u=allUids(); const users=RT.users(); const now=Date.now(); const active=Object.values(users).filter(x=>now-(x.ts||0)<10*60*1000).length;
    const st=u.reduce((a,id)=>a+stampsOf(id).length,0); const totalActs=[...RT.store.keys()].filter(k=>k.startsWith('r/')).length;
    const where={}; Object.values(users).filter(x=>now-(x.ts||0)<10*60*1000&&x.ch).forEach(x=>where[x.ch]=(where[x.ch]||0)+1);
    return `<div class="kpis" style="grid-template-columns:1fr 1fr"><div class="kpi"><b>${u.length}</b><span>전체 참여자</span></div><div class="kpi"><b>${active}</b><span>최근 10분 접속</span></div><div class="kpi"><b>${st}</b><span>찍힌 도장 합계</span></div><div class="kpi"><b>${totalActs}</b><span>완료 활동 수</span></div></div>
      <h4 style="margin:14px 0 6px;font-size:13px">지금 어디에 있나요?</h4>${bars(Object.entries(where).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v])=>{ const c=byId(k); return {label:c?`${c.emoji} ${esc(c.ko)}`:k, value:v}; }),{unit:'명',empty:'현재 접속자가 없어요'})}`; });
  addLive($('#lbAll'), () => leaderboard(allUids().map(u=>({uid:u,name:RT.nameOf(u),score:pointsOf(u),sub:`🛂${stampsOf(u).length}`})),{unit:'점',limit:10}));
  addLive($('#heat'), () => { const u=allUids(); if(!u.length) return '<div class="empty">아직 참여자가 없어요</div>';
    return `<div class="heat"><table><tr><th class="nm">이름</th>${CH.map(c=>`<th title="${esc(c.ko)}">${c.emoji}</th>`).join('')}<th>🛂</th><th>점수</th></tr>${u.map(id=>({id,n:RT.nameOf(id),p:pointsOf(id),s:stampsOf(id).length})).sort((a,b)=>b.p-a.p).map(x=>`<tr><td class="nm notranslate">${esc(x.n)}</td>${CH.map(c=>{ const n=userChapterActs(x.id,c.id).length; const need=c.widget?6:5; return `<td class="c" title="${esc(c.ko)} ${n}/${need}"><i style="background:${n?`rgba(37,137,125,${0.18+0.82*n/need})`:'#f1ebe0'};${n>=3?'outline:2px solid #c8553d':''}"></i></td>`; }).join('')}<td>${x.s}</td><td><b>${x.p}</b></td></tr>`).join('')}</table></div>`; });
  addLive($('#chBars'), () => { const u=allUids(); return bars(CH.map(c=>({label:`${c.emoji} ${esc(c.ko)}`, value:u.filter(id=>userChapterActs(id,c.id).length>=3).length, color:partOf(c).color})),{unit:'명',max:Math.max(1,u.length),empty:'아직 데이터가 없어요'}); });
  addLive($('#partBars'), () => { const u=allUids(); return bars(PARTS.map(p=>{ const chs=CH.filter(c=>c.part===p.id); const tot=chs.length*Math.max(1,u.length); const got=u.reduce((a,id)=>a+chs.filter(c=>userChapterActs(id,c.id).length>=3).length,0); return {label:`${p.n}. ${p.ko}`, value: u.length?got/tot*100:0, color:p.color}; }),{pct:true,max:100}); });
}

/* ---------- DICTIONARY ---------- */
function viewDict(app){
  const all=[]; CH.forEach(c=>{ c.phrases.forEach(p=>all.push({es:p.es,ko:p.ko,pr:p.pr,c,t:'표현'})); (c.vocab||[]).forEach(v=>all.push({es:v.es,ko:v.ko,c,t:'단어'})); });
  app.innerHTML = `<div class="sec-title" style="margin-top:0"><h2>미니 사전</h2><span class="es notranslate">Diccionario · 교재 p.205–266</span></div>
    <div class="card" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><input id="dq" placeholder="한국어 또는 스페인어로 검색 (예: 화장실, baño)" style="flex:1;min-width:220px;border:1.5px solid var(--line);border-radius:12px;padding:11px 14px;font-size:16px">
      <select id="dp" style="border:1.5px solid var(--line);border-radius:12px;padding:10px"><option value="">전체 파트</option>${PARTS.map(p=>`<option value="${p.id}">${p.n}. ${p.ko}</option>`).join('')}</select><span class="muted" id="dn"></span></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(270px,1fr));margin-top:14px" id="dl"></div>`;
  const draw=()=>{ const q=norm($('#dq').value), p=$('#dp').value; const r=all.filter(x=>(!p||x.c.part===p)&&(!q||norm(x.es).includes(q)||x.ko.includes($('#dq').value.trim())));
    $('#dn').textContent=`${r.length}개`;
    $('#dl').innerHTML=r.slice(0,240).map(x=>`<div class="ph" style="cursor:pointer" data-say="${esc(x.es)}"><div style="display:flex;justify-content:space-between"><span class="tag">${x.t}</span><a class="muted" style="font-size:12px" href="#/ch/${x.c.id}/phr">${x.c.emoji} ${esc(x.c.ko)}</a></div><div class="es-text notranslate">${esc(x.es)} 🔊</div>${x.pr?`<div class="pr notranslate">[${esc(x.pr)}]</div>`:''}<div class="ko">${esc(x.ko)}</div></div>`).join('') || '<div class="empty">검색 결과가 없어요</div>'; };
  $('#dq').oninput=draw; $('#dp').onchange=draw; $('#dl').onclick=e=>{ if(e.target.closest('a')) return; const b=e.target.closest('[data-say]'); if(b) Voice.say(b.dataset.say); };
  draw();
}

/* ---------- router ---------- */
function route(){
  live = []; const app=$('#app'); const h=(location.hash||'#/').slice(2).split('/');
  if(h[0]==='ch') viewChapter(app, h[1], h[2]||'phr');
  else if(h[0]==='passport') viewPassport(app);
  else if(h[0]==='room') viewRoom(app);
  else if(h[0]==='dict') viewDict(app);
  else { viewHome(app); }
  updateTop(); if(!route._first) window.scrollTo(0,0); route._first=false;
}
route._first=true;
window.addEventListener('hashchange', route);

/* mobile nav */
document.body.insertAdjacentHTML('beforeend', `<nav class="mobile-nav"><a href="#/"><b>🗺️</b>여정</a><a href="#/passport"><b>🛂</b>여권</a><a href="#/room"><b>📊</b>우리반</a><a href="#/dict"><b>📚</b>사전</a></nav>`);

Voice.init(); setVoiceBtn(); Lang.init();
RT.loadMine(); RT.connect(); route();
window.RT = RT;
})();
