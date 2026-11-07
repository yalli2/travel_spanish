/* Pasaporte ¡Vámonos! — special mission widgets (textbook charts & tables recreated as games) */
(function(){
'use strict';
const W = window.WIDGETS = {};

/* ---------- Spanish number & time helpers ---------- */
const U=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve'];
const T={3:'treinta',4:'cuarenta',5:'cincuenta',6:'sesenta',7:'setenta',8:'ochenta',9:'noventa'};
const H={1:'ciento',2:'doscientos',3:'trescientos',4:'cuatrocientos',5:'quinientos',6:'seiscientos',7:'setecientos',8:'ochocientos',9:'novecientos'};
function numEs(n){
  if(n<30) return U[n];
  if(n<100){ const t=Math.floor(n/10), u=n%10; return T[t]+(u?' y '+U[u]:''); }
  if(n===100) return 'cien';
  if(n<1000){ const h=Math.floor(n/100), r=n%100; return H[h]+(r?' '+numEs(r):''); }
  if(n<1000000){ const k=Math.floor(n/1000), r=n%1000; return (k===1?'mil':numEs(k).replace(/uno$/,'ún')+' mil')+(r?' '+numEs(r):''); }
  return String(n);
}
window.numEs = numEs;
const HOURS=['doce','una','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce'];
function timeEs(h,m){ // h 1..12, m multiple of 5
  let hh=h, mm=m, menos=false;
  if(m>30){ hh=h%12+1; mm=60-m; menos=true; }
  const art = (hh===1) ? 'Es la una' : `Son las ${HOURS[hh]}`;
  if(mm===0) return art+' en punto';
  const mins = mm===15?'cuarto':mm===30?'media':numEs(mm);
  return `${art} ${menos?'menos':'y'} ${mins}`;
}
window.timeEs = timeEs;
const priceEs = (e,c) => `${numEs(e).replace(/uno$/,'un')} ${e===1?'euro':'euros'}${c?` con ${numEs(c)}`:''}`;

/* generic round-based game runner */
function game(el, {rounds, renderRound, onFinish, intro=''}){
  let i=0, score=0;
  const go=()=>{
    if(i>=rounds.length){ onFinish(score, rounds.length); return; }
    el.innerHTML = `${intro}<div class="q-progress">${rounds.map((_,k)=>`<i class="${k<i?(rounds[k]._ok?'ok':'bad'):k===i?'cur':''}"></i>`).join('')}</div><div class="game-body"></div>`;
    renderRound(el.querySelector('.game-body'), rounds[i], ok=>{ rounds[i]._ok=ok; if(ok) score++; i++; setTimeout(go, ok?650:1500); });
  };
  go();
}
function finishCard(score,total,again){
  return `<div class="result-big"><div class="score">${score}/${total}</div><p>${score===total?'¡Perfecto! 완벽해요 🎉':score>=total*0.6?'¡Muy bien! 잘했어요 👏':'¡Ánimo! 한 번 더 도전해 볼까요? 💪'}</p><button class="btn ghost small" data-again>다시 하기</button></div>`;
}
function optButtons(opts, correctIdx, done, cls='opt', fmt=o=>o){
  const wrap=document.createElement('div'); wrap.className= cls==='price-tag'?'price-tags':'opts';
  wrap.innerHTML = opts.map((o,k)=>`<button class="${cls}" data-k="${k}">${fmt(o)}</button>`).join('');
  wrap.onclick=e=>{ const b=e.target.closest('button'); if(!b||b.disabled) return; const k=+b.dataset.k; const ok=k===correctIdx;
    [...wrap.children].forEach((c,j)=>{ c.disabled=true; if(j===correctIdx) c.classList.add('ok'); else if(j===k) c.classList.add('bad'); }); done(ok); };
  return wrap;
}
function scoreLive(ch, unitLabel='점'){
  const rs=RT.results(ch.id,'w');
  const avg = rs.length? Math.round(rs.reduce((a,r)=>a+(r.score/(r.total||1)),0)/rs.length*100):0;
  return `<div class="kpis"><div class="kpi"><b>${rs.length}</b><span>참여 인원</span></div><div class="kpi"><b>${avg}%</b><span>평균 정답률</span></div><div class="kpi"><b>${rs.filter(r=>r.score===r.total).length}</b><span>만점자</span></div></div>
  <div style="margin-top:12px">${leaderboard(rs.map(r=>({uid:r.uid,name:r.n,score:`${r.score}/${r.total}`,ts:r.ts, _s:r.score})).sort((a,b)=>b._s-a._s), {empty:'첫 도전자를 기다리고 있어요!'})}</div>`;
}
function simpleGame(key, title, buildRounds, renderRound){
  W[key] = {
    title,
    render(el, ch, submit){
      const start=()=>game(el,{rounds:buildRounds(), renderRound, onFinish:(s,t)=>{ submit({score:s,total:t}); el.innerHTML=finishCard(s,t); el.querySelector('[data-again]').onclick=start; }});
      start();
    },
    live: ch => scoreLive(ch)
  };
}

/* ---------- 1. world: Spanish-speaking world tile map + vote + capital quiz ---------- */
const COUNTRIES=[
  ['ES','🇪🇸','España','스페인','Madrid','eu'],['GQ','🇬🇶','Guinea Ecuatorial','적도기니',null,'eu'],
  ['MX','🇲🇽','México','멕시코','Ciudad de México','na'],['US','🇺🇸','Estados Unidos','미국 (널리 사용)',null,'na'],
  ['GT','🇬🇹','Guatemala','과테말라','Ciudad de Guatemala','ca'],['HN','🇭🇳','Honduras','온두라스','Tegucigalpa','ca'],['SV','🇸🇻','El Salvador','엘살바도르','San Salvador','ca'],['NI','🇳🇮','Nicaragua','니카라과','Managua','ca'],['CR','🇨🇷','Costa Rica','코스타리카','San José','ca'],['PA','🇵🇦','Panamá','파나마','Ciudad de Panamá','ca'],
  ['CU','🇨🇺','Cuba','쿠바','La Habana','cb'],['DO','🇩🇴','República Dominicana','도미니카공화국','Santo Domingo','cb'],['PR','🇵🇷','Puerto Rico','푸에르토리코','San Juan','cb'],
  ['CO','🇨🇴','Colombia','콜롬비아','Bogotá','sa'],['VE','🇻🇪','Venezuela','베네수엘라','Caracas','sa'],['EC','🇪🇨','Ecuador','에콰도르','Quito','sa'],['PE','🇵🇪','Perú','페루','Lima','sa'],['BO','🇧🇴','Bolivia','볼리비아','Sucre','sa'],['CL','🇨🇱','Chile','칠레','Santiago','sa'],['AR','🇦🇷','Argentina','아르헨티나','Buenos Aires','sa'],['UY','🇺🇾','Uruguay','우루과이','Montevideo','sa'],['PY','🇵🇾','Paraguay','파라과이','Asunción','sa']
];
const REG={eu:'유럽·아프리카',na:'북미',ca:'중미',cb:'카리브해',sa:'남미'};
W.world = {
  title:'🗺️ 스페인어 세계 지도 — 가고 싶은 나라 투표 & 수도 퀴즈',
  render(el, ch, submit){
    const my = RT.my(ch.id,'w')||{};
    const draw=()=>{
      const rs=RT.results(ch.id,'w'); const cnt={}; rs.forEach(r=>{ if(r.pick) cnt[r.pick]=(cnt[r.pick]||0)+1; });
      const max=Math.max(1,...Object.values(cnt)); const mine=(RT.my(ch.id,'w')||{}).pick;
      let html=`<div class="wg-q">① 이번 과정에서 가장 가 보고 싶은 나라를 눌러 투표하세요 <span class="tag">실시간 집계</span></div><div class="tile-map">`;
      for(const r of Object.keys(REG)){ html+=`<div class="region-lbl">${REG[r]}</div>`;
        COUNTRIES.filter(c=>c[5]===r).forEach(c=>{ const n=cnt[c[0]]||0; const a=n/max;
          html+=`<button class="ctry ${mine===c[0]?'on':''}" data-c="${c[0]}" style="background:rgba(200,85,61,${(a*0.55).toFixed(2)})"><span class="f">${c[1]}</span>${es(c[2])}<br><small>${c[3]}</small>${n?`<span class="cnt">${n}</span>`:''}</button>`; }); }
      html+=`</div><div class="wg-q" style="margin-top:8px">② 수도 퀴즈 — 이 나라의 수도는? (5문제)</div><div class="cap-game"></div>`;
      el.innerHTML=html;
      el.querySelector('.tile-map').onclick=e=>{ const b=e.target.closest('.ctry'); if(!b) return; const cur=RT.my(ch.id,'w')||{score:0,total:5};
        RT.submit(ch.id,'w',{...cur, pick:b.dataset.c, score:cur.score||0, total:cur.total||5}); Voice.say(COUNTRIES.find(c=>c[0]===b.dataset.c)[2]); toast('투표 완료! 🗳'); };
      capGame(el.querySelector('.cap-game'));
    };
    const capGame=box=>{
      const pool=COUNTRIES.filter(c=>c[4]);
      const rounds=shuffle(pool).slice(0,5).map(c=>{ const opts=shuffle([c[4],...shuffle(pool.filter(x=>x!==c).map(x=>x[4])).slice(0,3)]); return {c,opts,a:opts.indexOf(c[4])}; });
      game(box,{rounds, renderRound:(b,r,done)=>{ b.innerHTML=`<div class="wg-q">${r.c[1]} ${es(r.c[2])} <small class="muted">${r.c[3]}</small></div>`; b.appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.c[4]); done(ok); },'opt',o=>es(o))); },
        onFinish:(s,t)=>{ const cur=RT.my(ch.id,'w')||{}; RT.submit(ch.id,'w',{...cur,score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=()=>capGame(box); }});
    };
    draw();
    this._redraw = () => { const tm=el.querySelector('.tile-map'); if(!tm) return; const rs=RT.results(ch.id,'w'); const cnt={}; rs.forEach(r=>{ if(r.pick) cnt[r.pick]=(cnt[r.pick]||0)+1; }); const max=Math.max(1,...Object.values(cnt)); const mine=(RT.my(ch.id,'w')||{}).pick;
      tm.querySelectorAll('.ctry').forEach(b=>{ const n=cnt[b.dataset.c]||0; b.style.background=`rgba(200,85,61,${(n/max*0.55).toFixed(2)})`; b.classList.toggle('on',mine===b.dataset.c); let s=b.querySelector('.cnt'); if(n){ if(!s){ s=document.createElement('span'); s.className='cnt'; b.appendChild(s);} s.textContent=n; } else if(s) s.remove(); }); };
  },
  live(ch){
    const rs=RT.results(ch.id,'w'); const cnt={}; rs.forEach(r=>{ if(r.pick) cnt[r.pick]=(cnt[r.pick]||0)+1; });
    const mine=(RT.my(ch.id,'w')||{}).pick;
    W.world._redraw && W.world._redraw();
    const items=Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>{ const c=COUNTRIES.find(x=>x[0]===k); return {label:`${c[1]} ${c[3]}`, value:v, mine:k===mine}; });
    return `<h4 style="margin:0 0 8px">가고 싶은 나라 TOP</h4>${bars(items,{share:true,unit:'표'})}
      <h4 style="margin:16px 0 8px">스페인어 사용 인구 (어림값)</h4>
      <div style="display:flex;gap:14px;align-items:center">${donut(83,'#c8553d','5억+')}<div style="font-size:13px"><b style="color:#c8553d">■</b> 모국어 화자 약 5억 명<br><b style="color:#e3a03a">■</b> 제2언어·학습자 포함 약 6억 명<br><span class="muted">세계 2위 모국어 · 21개국 공용어</span></div></div>
      <h4 style="margin:16px 0 8px">수도 퀴즈 순위</h4>${leaderboard(rs.filter(r=>r.total&&r.score!=null).map(r=>({uid:r.uid,name:r.n,score:r.score,ts:r.ts})),{unit:'/5'})}`;
  }
};

/* ---------- 2. pron: sound chart + minimal-pair listening ---------- */
const PRON=[['a','casa','아'],['e','mesa','에'],['i','sí','이'],['o','todo','오'],['u','uno','우'],
  ['c (a·o·u)','cama','ㄲ'],['c (e·i)','cine','ㅅ (스페인: th)'],['g (a·o·u)','gato','ㄱ'],['g (e·i)','gente','ㅎ (거친 h)'],['h','hola','묵음'],['j','jamón','ㅎ (거친 h)'],
  ['ll','calle','ㅇ·ㅈ (야/쟈)'],['ñ','España','냐·뇨'],['qu','queso','ㄲ (u 묵음)'],['r','pero','ㄹ (가볍게)'],['rr','perro','ㄹㄹ (굴려서)'],['v / b','vino','ㅂ'],['z','zapato','ㅅ (스페인: th)'],['x','México','ㅎ (지명) / ks']];
const PAIRS=[['pero','perro'],['caro','carro'],['cana','caña'],['mono','moño'],['pelo','pero'],['coro','corro'],['cayo','callo'],['casa','cosa'],['mesa','misa'],['vaso','paso'],['gato','jato'],['ano','año']].filter(p=>p[1]!=='jato'&&p[0]!=='ano');
W.pron = {
  title:'🔤 발음 도표 — 눌러 듣고, 듣고 고르기',
  render(el,ch,submit){
    el.innerHTML=`<div class="wg-q">발음 도표 <small class="muted">카드를 누르면 예시 단어를 들려줘요</small></div>
      <div class="pron-table">${PRON.map(p=>`<button class="pron-cell" data-w="${esc(p[1])}"><b class="notranslate">${esc(p[0])}</b>${es(p[1])} <small class="muted">· ${esc(p[2])}</small></button>`).join('')}</div>
      <div class="wg-q" style="margin-top:10px">🎧 듣고 고르기 — 들리는 단어는? (6문제)</div><div class="pg"></div>`;
    el.querySelector('.pron-table').onclick=e=>{ const b=e.target.closest('.pron-cell'); if(b) Voice.say(b.dataset.w, .8); };
    const start=()=>{ const box=el.querySelector('.pg');
      const rounds=shuffle(PAIRS).slice(0,6).map(p=>{ const a=Math.random()<.5?0:1; return {p,a}; });
      game(box,{rounds, renderRound:(b,r,done)=>{ b.innerHTML=`<div class="wg-q"><button class="btn small" data-play>🔊 다시 듣기</button></div>`; const play=()=>Voice.say(r.p[r.a], .75); b.querySelector('[data-play]').onclick=play; play();
        b.appendChild(optButtons(r.p,r.a,done,'opt',o=>es(o))); },
        onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 3. conjugate ---------- */
const VERBS={ser:['soy','eres','es','somos','son'],estar:['estoy','estás','está','estamos','están'],tener:['tengo','tienes','tiene','tenemos','tienen'],ir:['voy','vas','va','vamos','van'],querer:['quiero','quieres','quiere','queremos','quieren'],poder:['puedo','puedes','puede','podemos','pueden']};
const PERS=['yo','tú','él / ella / usted','nosotros','ellos / ustedes'];
const CONJ_Q=[['Yo ___ de Corea.','ser',0,'저는 한국 출신이에요.'],['¿Dónde ___ el baño?','estar',2,'화장실이 어디에 있나요?'],['¿___ usted una habitación libre?','tener',2,'빈 방 있으세요?'],['Mañana nosotros ___ a Toledo.','ir',3,'내일 우리는 톨레도에 가요.'],['Yo ___ un café, por favor.','querer',0,'커피 한 잔 원해요.'],['¿___ (tú) hablar más despacio?','poder',1,'(너) 더 천천히 말해 줄 수 있어?'],['Nosotros ___ cansados.','estar',3,'우리는 피곤해요.'],['¿Cuántos años ___ (tú)?','tener',1,'너 몇 살이야?'],['Ellos ___ estudiantes.','ser',4,'그들은 학생이에요.'],['¿Adónde ___ usted?','ir',2,'어디 가세요?'],['¿___ (yo) pagar con tarjeta?','poder',0,'카드로 결제해도 되나요?'],['Ustedes ___ muy amables.','ser',4,'여러분은 정말 친절하시네요.']];
W.conjugate = {
  title:'🧩 동사 변화표 — 빈칸 채우기',
  render(el,ch,submit){
    el.innerHTML=`<div style="overflow:auto"><table class="conj notranslate" translate="no"><tr><th></th>${Object.keys(VERBS).map(v=>`<th>${v}</th>`).join('')}</tr>${PERS.map((p,i)=>`<tr><th>${p}</th>${Object.values(VERBS).map(f=>`<td>${f[i]}</td>`).join('')}</tr>`).join('')}</table></div>
      <p class="muted" style="margin:0;font-size:13px">💡 <b>usted</b>(존칭 '당신')는 3인칭 형태를 씁니다. 처음 만난 어른·직원에게는 usted, 친구에게는 tú!</p>
      <div class="wg-q">빈칸에 알맞은 형태는? (8문제)</div><div class="cg"></div>`;
    const start=()=>{ const box=el.querySelector('.cg');
      const rounds=shuffle(CONJ_Q).slice(0,8).map(q=>{ const right=VERBS[q[1]][q[2]]; const opts=shuffle([right,...shuffle(VERBS[q[1]].filter(x=>x!==right)).slice(0,3)]); return {q,opts,a:opts.indexOf(right)}; });
      game(box,{rounds, renderRound:(b,r,done)=>{ b.innerHTML=`<div class="wg-q">${es(r.q[0])} <span class="tag">${r.q[1]}</span></div><p class="muted" style="margin:-6px 0 0">${esc(r.q[3])}</p>`;
        b.appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.q[0].replace('___',r.opts[r.a]).replace(/\(.*?\)\s?/g,'')); done(ok); },'opt',o=>es(o))); },
        onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 4. numbers ---------- */
W.numbers = {
  title:'🔢 숫자 받아쓰기 — 듣고 숫자로 입력',
  render(el,ch,submit){
    const ref=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21,30,40,50,60,70,80,90,100,101,200,500,1000];
    el.innerHTML=`<div class="wg-q">숫자 도표 <small class="muted">눌러서 들어보세요</small></div>
      <div class="vocab">${ref.map(n=>`<button data-n="${n}"><b>${n}</b> ${es(numEs(n))}</button>`).join('')}</div>
      <div class="wg-q" style="margin-top:6px">🎧 들리는 숫자를 숫자로 입력하세요 (8문제)</div><div class="ng"></div>`;
    el.querySelector('.vocab').onclick=e=>{ const b=e.target.closest('button'); if(b) Voice.say(numEs(+b.dataset.n)); };
    const start=()=>{ const box=el.querySelector('.ng');
      const gen=[()=>Math.floor(Math.random()*21),()=>21+Math.floor(Math.random()*79),()=>21+Math.floor(Math.random()*79),()=>100+Math.floor(Math.random()*900),()=>100+Math.floor(Math.random()*900),()=>1000+Math.floor(Math.random()*9000),()=>Math.floor(Math.random()*21),()=>21+Math.floor(Math.random()*79)];
      const rounds=gen.map(g=>({n:g()}));
      game(box,{rounds, renderRound:(b,r,done)=>{ const w=numEs(r.n);
        b.innerHTML=`<div class="wg-q"><button class="btn small" data-play>🔊 듣기</button><button class="btn ghost small" data-slow>🐢 천천히</button></div>
          <div style="display:flex;gap:8px"><input class="num-in" inputmode="numeric" style="flex:1;border:1.5px solid var(--line);border-radius:12px;padding:12px;font-size:22px" placeholder="예: 47" autofocus><button class="btn alt" data-ok>확인</button></div><div class="fb"></div>`;
        b.querySelector('[data-play]').onclick=()=>Voice.say(w); b.querySelector('[data-slow]').onclick=()=>Voice.say(w,.55); Voice.say(w);
        const inp=b.querySelector('.num-in'); inp.focus();
        const check=()=>{ const ok=+inp.value.replace(/\D/g,'')===r.n && inp.value!==''; inp.disabled=true; b.querySelector('[data-ok]').disabled=true;
          b.querySelector('.fb').innerHTML=`<div class="explain">${ok?'✅ 정답!':'❌'} <b>${r.n}</b> = ${es(w)}</div>`; done(ok); };
        b.querySelector('[data-ok]').onclick=check; inp.onkeydown=e=>{ if(e.key==='Enter') check(); }; },
        onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 5. clock ---------- */
function clockSvg(h,m,size=170){
  const a=(m/60)*360, ha=((h%12)+m/60)/12*360; const r=size/2;
  const hand=(ang,len,w,c)=>{ const x=r+len*Math.sin(ang*Math.PI/180), y=r-len*Math.cos(ang*Math.PI/180); return `<line x1="${r}" y1="${r}" x2="${x}" y2="${y}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`; };
  let ticks=''; for(let i=1;i<=12;i++){ const an=i*30*Math.PI/180; ticks+=`<text x="${r+(r-22)*Math.sin(an)}" y="${r-(r-22)*Math.cos(an)+5}" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2a4b">${i}</text>`; }
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="clock"><circle cx="${r}" cy="${r}" r="${r-4}" fill="#fffaf1" stroke="#1d2a4b" stroke-width="4"/>${ticks}${hand(ha,r*0.48,6,'#1d2a4b')}${hand(a,r*0.72,4,'#c8553d')}<circle cx="${r}" cy="${r}" r="5" fill="#c8553d"/></svg>`;
}
W.clock = {
  title:'🕰️ 시계 읽기 — 지금 몇 시예요? ¿Qué hora es?',
  render(el,ch,submit){
    const days=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'], dk=['월','화','수','목','금','토','일'];
    el.innerHTML=`<div class="wg-q">요일 도표</div><div class="vocab">${days.map((d,i)=>`<button data-w="${d}"><b>${dk[i]}</b> ${es(d)}</button>`).join('')}</div>
      <div class="wg-q" style="margin-top:6px">시계를 보고 알맞은 스페인어를 고르세요 (8문제)</div><div class="kg"></div>`;
    el.querySelector('.vocab').onclick=e=>{ const b=e.target.closest('button'); if(b) Voice.say(b.dataset.w); };
    const start=()=>{ const box=el.querySelector('.kg');
      const rounds=Array.from({length:8},()=>{ const h=1+Math.floor(Math.random()*12), m=pick([0,5,10,15,20,30,40,45,50,55]); const right=timeEs(h,m);
        const set=new Set([right]); while(set.size<4){ const h2=pick([h,h%12+1,(h+10)%12+1,1+Math.floor(Math.random()*12)]), m2=pick([0,5,10,15,20,30,40,45,50,55]); set.add(timeEs(h2,m2)); }
        const opts=shuffle([...set]); return {h,m,opts,a:opts.indexOf(right)}; });
      game(box,{rounds, renderRound:(b,r,done)=>{ b.innerHTML=`<div class="clock-wrap">${clockSvg(r.h,r.m)}<div style="flex:1;min-width:240px" class="ck"></div></div>`;
        b.querySelector('.ck').appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.opts[r.a]); done(ok); },'opt',o=>es(o))); },
        onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 6. timetable (departure board) ---------- */
const CITIES=['Sevilla','Barcelona','Valencia','Toledo','Granada','Málaga','Bilbao','Salamanca','Córdoba','Zaragoza'];
W.timetable = {
  title:'🚉 출발 안내판 읽기 — Salidas',
  render(el,ch,submit){
    const start=()=>{
      const rows=shuffle(CITIES).slice(0,6).map((c,i)=>({c, h:7+i*2+Math.floor(Math.random()*2), m:pick([0,10,15,25,30,40,45,55]), and:1+Math.floor(Math.random()*12), st:pick(['ok','ok','ok','late','cancel'])}));
      const stTxt={ok:'A tiempo',late:'Retrasado',cancel:'Cancelado'};
      const hhmm=r=>`${String(r.h).padStart(2,'0')}:${String(r.m).padStart(2,'0')}`;
      const qs=shuffle(rows).slice(0,5).map((r,i)=>{ const t=i%3;
        if(t===0){ const opts=shuffle([hhmm(r),...shuffle(rows.filter(x=>x!==r)).slice(0,3).map(hhmm)]); return {q:`¿A qué hora sale el tren a ${r.c}?`, ko:`${r.c}행 기차는 몇 시에 출발해요?`, opts, a:opts.indexOf(hhmm(r)), say:`El tren a ${r.c} sale a las ${hhmm(r)}.`}; }
        if(t===1){ const right=`Andén ${r.and}`; const set=new Set([right]); while(set.size<4) set.add(`Andén ${1+Math.floor(Math.random()*12)}`); const opts=shuffle([...set]); return {q:`¿De qué andén sale el tren a ${r.c}?`, ko:`${r.c}행 기차는 몇 번 승강장에서 출발해요?`, opts, a:opts.indexOf(right), say:`Sale del andén ${numEs(r.and)}.`}; }
        const opts=['A tiempo','Retrasado','Cancelado']; return {q:`¿Cómo está el tren a ${r.c}?`, ko:`${r.c}행 기차의 상태는?`, opts, a:opts.indexOf(stTxt[r.st]), say:stTxt[r.st]};
      });
      el.innerHTML=`<div class="board notranslate" translate="no"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><b>🚆 SALIDAS · Madrid Puerta de Atocha</b><span>${new Date().toLocaleDateString('es-ES')}</span></div>
        <table><tr><th>HORA</th><th>DESTINO</th><th>ANDÉN</th><th>ESTADO</th></tr>${rows.sort((a,b)=>a.h*60+a.m-b.h*60-b.m).map(r=>`<tr><td>${hhmm(r)}</td><td>${r.c}</td><td>${r.and}</td><td class="st-${r.st}">${stTxt[r.st]}</td></tr>`).join('')}</table></div>
        <p class="muted" style="margin:0;font-size:13px">👁 Look For: <b class="notranslate">Salidas</b> 출발 · <b class="notranslate">Llegadas</b> 도착 · <b class="notranslate">Andén / Vía</b> 승강장 · <b class="notranslate">Retrasado</b> 지연</p><div class="tg"></div>`;
      const box=el.querySelector('.tg');
      game(box,{rounds:qs, renderRound:(b,r,done)=>{ b.innerHTML=`<div class="wg-q">${es(r.q)} <button class="icon-btn" data-p>🔊</button></div><p class="muted" style="margin:-6px 0 0">${esc(r.ko)}</p>`; b.querySelector('[data-p]').onclick=()=>Voice.say(r.q);
        b.appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.say); done(ok); },'opt',o=>es(o))); },
        onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t)+'<p class="muted" style="text-align:center;font-size:13px">다시 하기를 누르면 새 안내판이 나와요.</p>'; box.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 7. map (directions) ---------- */
const PLACES=[['🏛️','el museo','박물관'],['🏦','el banco','은행'],['💊','la farmacia','약국'],['🏨','el hotel','호텔'],['⛪','la iglesia','성당'],['🛒','el mercado','시장'],['🚉','la estación','역'],['🍽️','el restaurante','식당'],['📮','Correos','우체국'],['🌳','el parque','공원'],['☕','la cafetería','카페'],['🏥','el hospital','병원']];
W.map = {
  title:'🧭 길 찾기 미션 — 안내를 따라가 도착지를 클릭',
  render(el,ch,submit){
    const N=5, start={x:2,y:4};
    const ord=n=>['','una','dos','tres','cuatro'][n];
    const build=()=>{
      const cells=[]; const used=new Set([`${start.x},${start.y}`]);
      const spots=shuffle(Array.from({length:N*N},(_,i)=>({x:i%N,y:Math.floor(i/N)})).filter(p=>!(p.x===start.x&&p.y===start.y)));
      const pls=shuffle(PLACES).slice(0,10); spots.slice(0,10).forEach((p,i)=>{ cells.push({...p,pl:pls[i]}); });
      // target: a placed cell reachable with straight-then-turn route
      const cand=cells.filter(c=>c.y<start.y);
      const tgt=pick(cand);
      const up=start.y-tgt.y, dx=tgt.x-start.x; const steps=[];
      steps.push(`Sigue todo recto ${up===1?'una calle':ord(up)+' calles'}.`);
      if(dx!==0){ steps.push(`Gira a la ${dx<0?'izquierda':'derecha'}.`); steps.push(`Sigue ${Math.abs(dx)===1?'una calle':ord(Math.abs(dx))+' calles'} más.`); }
      steps.push('¡Ya has llegado!');
      return {cells,tgt,steps};
    };
    const startGame=()=>{
      const rounds=Array.from({length:5},build);
      const box=el;
      game(box,{intro:`<p class="muted" style="margin:0 0 6px;font-size:13px">⭐ = 지금 위치(<b class="notranslate">Estás aquí</b>), 북쪽(위)을 보고 서 있어요. 스페인어 안내를 읽고 도착할 장소를 클릭하세요.</p>`, rounds, renderRound:(b,r,done)=>{
        const grid=[]; for(let y=0;y<N;y++) for(let x=0;x<N;x++){ const c=r.cells.find(c=>c.x===x&&c.y===y); grid.push({x,y,c}); }
        b.innerHTML=`<div style="display:flex;gap:18px;flex-wrap:wrap;align-items:flex-start"><div class="town">${grid.map(g=> (g.x===start.x&&g.y===start.y)?`<div class="cell start"><span class="ic">⭐</span>${es('Estás aquí')}</div>`: g.c?`<div class="cell" data-x="${g.x}" data-y="${g.y}"><span class="ic">${g.c.pl[0]}</span>${es(g.c.pl[1])}</div>`:`<div class="cell blank"></div>`).join('')}</div>
          <div class="instr" style="flex:1;min-width:230px"><b>📍 안내 (Indicaciones)</b> <button class="icon-btn" data-p>🔊</button><ol>${r.steps.map(s=>`<li>${es(s)}</li>`).join('')}</ol>
          <div class="muted" style="font-size:12.5px;margin-top:8px">${es('todo recto')} 직진 · ${es('a la izquierda')} 왼쪽 · ${es('a la derecha')} 오른쪽 · ${es('la calle')} 길/블록</div></div></div>`;
        b.querySelector('[data-p]').onclick=()=>Voice.say(r.steps.join(' '));
        b.querySelector('.town').onclick=e=>{ const c=e.target.closest('.cell[data-x]'); if(!c||b._done) return; b._done=1; const ok=+c.dataset.x===r.tgt.x&&+c.dataset.y===r.tgt.y;
          c.classList.add(ok?'ok':'bad'); if(!ok) b.querySelector(`.cell[data-x="${r.tgt.x}"][data-y="${r.tgt.y}"]`).classList.add('ok'); Voice.say(r.tgt.pl[1]); done(ok); };
      }, onFinish:(s,t)=>{ submit({score:s,total:t}); box.innerHTML=finishCard(s,t); box.querySelector('[data-again]').onclick=startGame; }});
    }; startGame();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 8. price ---------- */
W.price = {
  title:'🏷️ 가격 듣기 — ¿Cuánto cuesta?',
  render(el,ch,submit){
    const items=[['👕','la camiseta'],['👟','las zapatillas'],['🧣','la bufanda'],['🕶️','las gafas de sol'],['👜','el bolso'],['🧲','el imán'],['📚','el libro'],['🎸','la guitarra'],['🍷','el vino'],['🫒','el aceite de oliva']];
    const start=()=>{
      const rounds=shuffle(items).slice(0,6).map(it=>{ const e=1+Math.floor(Math.random()*95), c=pick([0,0,50,20,95,75]); const fmt=(e,c)=>`${e},${String(c).padStart(2,'0')} €`;
        const set=new Set([fmt(e,c)]); while(set.size<4){ const e2=pick([e, e+10, Math.max(1,e-10), e+1, (e%10)*10+Math.floor(e/10)||e+2]); const c2=pick([0,50,20,c]); set.add(fmt(e2,c2)); }
        const opts=shuffle([...set]); return {it,e,c,opts,a:opts.indexOf(fmt(e,c))}; });
      game(el,{intro:'<div class="wg-q">점원이 말하는 가격을 듣고 가격표를 고르세요 (6문제)</div>', rounds, renderRound:(b,r,done)=>{ const line=`${r.it[1][0].toUpperCase()+r.it[1].slice(1)} ${/^las|^los/.test(r.it[1])?'cuestan':'cuesta'} ${priceEs(r.e,r.c)}.`;
        b.innerHTML=`<div class="wg-q"><span style="font-size:40px">${r.it[0]}</span> ${es((/^las|^los/.test(r.it[1])?'¿Cuánto cuestan ':'¿Cuánto cuesta ')+r.it[1]+'?')} <button class="btn small" data-p>🔊 점원 대답 듣기</button></div>`;
        const play=()=>Voice.say(line); b.querySelector('[data-p]').onclick=play; play();
        b.appendChild(optButtons(r.opts,r.a,ok=>{ const ex=document.createElement('div'); ex.className='explain'; ex.innerHTML=es(line); b.appendChild(ex); done(ok); },'price-tag',o=>esc(o))); },
        onFinish:(s,t)=>{ submit({score:s,total:t}); el.innerHTML=finishCard(s,t); el.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 9. feelings (shared mood + opinions) ---------- */
const FEELS=[['😊','contento/a','기뻐요'],['🤩','emocionado/a','설레요'],['😴','cansado/a','피곤해요'],['😬','nervioso/a','긴장돼요'],['😌','tranquilo/a','편안해요'],['🤔','confundido/a','헷갈려요'],['😋','con hambre','배고파요'],['🥰','enamorado/a de España','스페인에 반했어요']];
const OPIN=[['La siesta es una idea genial.','낮잠(시에스타)은 훌륭한 생각이다.'],['Cenar a las diez de la noche está bien.','밤 10시에 저녁 먹는 것도 괜찮다.'],['Es mejor viajar solo/a.','혼자 여행하는 게 더 좋다.']];
const AG=[['Estoy de acuerdo.','동의해요','#25897d'],['Depende.','상황에 따라','#e3a03a'],['No estoy de acuerdo.','반대해요','#c8553d']];
W.feelings = {
  title:'🌡️ 감정 온도계 & 의견 나누기',
  render(el,ch,submit){
    const draw=()=>{ const my=RT.my(ch.id,'w')||{op:[]};
      el.innerHTML=`<div class="wg-q">${es('¿Cómo estás hoy?')} 오늘 기분은? <small class="muted">(남성 -o / 여성 -a)</small></div>
        <div class="feel-grid">${FEELS.map((f,i)=>`<button class="feel ${my.f===i?'on':''}" data-f="${i}"><span class="e">${f[0]}</span>${es('Estoy '+f[1])}<br><small class="muted">${f[2]}</small></button>`).join('')}</div>
        <div class="wg-q" style="margin-top:6px">의견 말하기 — ${es('¿Qué opinas?')}</div>
        ${OPIN.map((o,i)=>`<div class="card" style="padding:12px"><div><b>${es(o[0])}</b> <button class="icon-btn" data-say="${i}">🔊</button><br><small class="muted">${o[1]}</small></div><div class="agree" style="margin-top:8px">${AG.map((a,j)=>`<button class="${(my.op||[])[i]===j?'on':''}" data-o="${i}" data-a="${j}">${es(a[0])} <small>${a[1]}</small></button>`).join('')}</div></div>`).join('')}`;
    };
    draw();
    el.onclick=e=>{ const f=e.target.closest('[data-f]'), o=e.target.closest('[data-o]'), s=e.target.closest('[data-say]'); const my={...(RT.my(ch.id,'w')||{}), op:[...((RT.my(ch.id,'w')||{}).op||[])]};
      if(s){ Voice.say(OPIN[+s.dataset.say][0]); return; }
      if(f){ my.f=+f.dataset.f; Voice.say('Estoy '+FEELS[my.f][1].replace('/a','')); }
      else if(o){ my.op[+o.dataset.o]=+o.dataset.a; Voice.say(AG[+o.dataset.a][0]); } else return;
      const answered=(my.f!=null?1:0)+my.op.filter(x=>x!=null).length; my.score=answered; my.total=4; submit(my); draw(); };
  },
  live(ch){ const rs=RT.results(ch.id,'w'); const my=RT.my(ch.id,'w')||{};
    const fc=FEELS.map((f,i)=>({label:`${f[0]} ${f[2]}`, value:rs.filter(r=>r.f===i).length, mine:my.f===i})).filter(x=>x.value).sort((a,b)=>b.value-a.value);
    return `<h4 style="margin:0 0 8px">우리반 기분 분포 (${rs.filter(r=>r.f!=null).length}명)</h4>${bars(fc,{share:true,unit:'명',empty:'아직 응답이 없어요'})}
      <h4 style="margin:16px 0 8px">의견 분포</h4>${OPIN.map((o,i)=>{ const c=AG.map((_,j)=>rs.filter(r=>(r.op||[])[i]===j).length); const t=c.reduce((a,b)=>a+b,0)||1;
        return `<div style="font-size:12.5px;margin-bottom:8px"><div style="margin-bottom:3px">${esc(o[1])}</div><div class="stack">${c.map((v,j)=>`<i style="width:${v/t*100}%;background:${AG[j][2]}" title="${AG[j][1]} ${v}명"></i>`).join('')}</div><div class="muted" style="font-size:11.5px">${AG.map((a,j)=>`<span style="color:${a[2]}">■</span> ${a[1]} ${c[j]}`).join(' · ')}</div></div>`; }).join('')}`; }
};

/* ---------- 10. weather ---------- */
const WEA=[['☀️','Hace sol.','해가 나요'],['🥵','Hace calor.','더워요'],['🥶','Hace frío.','추워요'],['🌧️','Llueve. / Está lloviendo.','비가 와요'],['🌨️','Nieva. / Está nevando.','눈이 와요'],['💨','Hace viento.','바람이 불어요'],['☁️','Está nublado.','흐려요'],['⛈️','Hay tormenta.','폭풍우가 쳐요'],['🌫️','Hay niebla.','안개가 꼈어요']];
simpleGame('weather','🌦️ 날씨 예보 읽기 — ¿Qué tiempo hace?',
  ()=>shuffle(WEA).slice(0,6).map(w=>{ const opts=shuffle([w,...shuffle(WEA.filter(x=>x!==w)).slice(0,3)]); return {w,opts,a:opts.indexOf(w), city:pick(['Madrid','Sevilla','Bilbao','Barcelona','Ciudad de México','Buenos Aires','Lima','Bogotá']), t:w[0]==='🥵'?36:w[0]==='🥶'||w[0]==='🌨️'?-2:12+Math.floor(Math.random()*12)}; }),
  (b,r,done)=>{ b.innerHTML=`<div class="weather-card"><span class="w">${r.w[0]}</span><div><b class="notranslate">${r.city}</b><br><span style="font-size:28px;font-weight:800">${r.t}°C</span><br><span class="muted">${es('¿Qué tiempo hace hoy?')}</span></div></div>`;
    b.appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.w[1].split(' / ')[0]); done(ok); },'opt',o=>`${es(o[1])}`)); });

/* ---------- 11. signs (Look For) ---------- */
const SIGNS=[['Salida de emergencia','비상구','#1a8f4c','#fff','🏃'],['Peligro','위험','#f2c230','#111','⚠️'],['Prohibido el paso','출입 금지','#c8302c','#fff','⛔'],['Urgencias','응급실','#c8302c','#fff','🚑'],['Comisaría','경찰서','#1d3f8f','#fff','👮'],['Aseos','화장실','#1d2a4b','#fff','🚻'],['Prohibido fumar','금연','#fff','#c8302c','🚭'],['Empujar','미세요','#eee','#111','👐'],['Tirar','당기세요','#eee','#111','🤏'],['Farmacia de guardia','당번 약국 (야간 운영)','#1a8f4c','#fff','✚'],['Cerrado','영업 종료','#444','#fff','🔒'],['Abierto','영업 중','#25897d','#fff','🔓'],['Objetos perdidos','분실물 센터','#7a4c93','#fff','🧳'],['Información','안내소','#3f86bd','#fff','ℹ️']];
simpleGame('signs','🪧 표지판 해독 — Look For',
  ()=>shuffle(SIGNS).slice(0,8).map(s=>{ const opts=shuffle([s,...shuffle(SIGNS.filter(x=>x!==s)).slice(0,3)]); return {s,opts,a:opts.indexOf(s)}; }),
  (b,r,done)=>{ b.innerHTML=`<div class="wg-q">이 표지판의 뜻은?</div><div style="text-align:center;padding:10px"><span class="sign notranslate" translate="no" style="background:${r.s[2]};color:${r.s[3]};border:2px solid ${r.s[3]==='#c8302c'?'#c8302c':'rgba(0,0,0,.1)'}">${r.s[4]} ${esc(r.s[0].toUpperCase())}</span></div>`;
    b.appendChild(optButtons(r.opts,r.a,ok=>{ Voice.say(r.s[0]); done(ok); },'opt',o=>esc(o[1]))); });

/* ---------- 12. body ---------- */
const BODY=[['la cabeza','머리','<circle class="zone" data-z="la cabeza" cx="100" cy="40" r="28"/>'],['la garganta','목(목구멍)','<rect class="zone" data-z="la garganta" x="88" y="70" width="24" height="16" rx="5"/>'],['el pecho','가슴','<rect class="zone" data-z="el pecho" x="68" y="90" width="64" height="40" rx="10"/>'],['el estómago','배(위)','<rect class="zone" data-z="el estómago" x="72" y="132" width="56" height="40" rx="10"/>'],['el brazo','팔','<rect class="zone" data-z="el brazo" x="36" y="92" width="26" height="80" rx="12"/><rect class="zone" data-z="el brazo" x="138" y="92" width="26" height="80" rx="12"/>'],['la mano','손','<circle class="zone" data-z="la mano" cx="46" cy="188" r="13"/><circle class="zone" data-z="la mano" cx="154" cy="188" r="13"/>'],['la pierna','다리','<rect class="zone" data-z="la pierna" x="74" y="176" width="22" height="58" rx="10"/><rect class="zone" data-z="la pierna" x="104" y="176" width="22" height="58" rx="10"/>'],['la rodilla','무릎','<circle class="zone" data-z="la rodilla" cx="85" cy="244" r="11"/><circle class="zone" data-z="la rodilla" cx="115" cy="244" r="11"/>'],['el pie','발','<ellipse class="zone" data-z="el pie" cx="82" cy="312" rx="16" ry="9"/><ellipse class="zone" data-z="el pie" cx="118" cy="312" rx="16" ry="9"/>'],['el tobillo','발목','<circle class="zone" data-z="el tobillo" cx="85" cy="296" r="8"/><circle class="zone" data-z="el tobillo" cx="115" cy="296" r="8"/>']];
const bodySvg=()=>`<svg class="body-svg" viewBox="0 0 200 330" width="210" role="img" aria-label="body"><g fill="#f3e3cf" stroke="#c9b293" stroke-width="2"><circle cx="100" cy="40" r="28"/><rect x="66" y="84" width="68" height="92" rx="18"/><rect x="36" y="90" width="26" height="86" rx="12"/><rect x="138" y="90" width="26" height="86" rx="12"/><rect x="74" y="172" width="22" height="130" rx="10"/><rect x="104" y="172" width="22" height="130" rx="10"/></g>${BODY.map(b=>b[2]).join('')}<rect x="77" y="255" width="16" height="34" rx="6" fill="none"/></svg>`;
W.body = {
  title:'🩺 진료실 미션 — 어디가 아프세요? ¿Qué le duele?',
  render(el,ch,submit){
    const start=()=>{
      const rounds=shuffle(BODY).slice(0,6).map(b=>({b}));
      game(el,{intro:'<div class="wg-q">환자의 말을 듣고 아픈 부위를 그림에서 클릭하세요 (6문제)</div>', rounds, renderRound:(box,r,done)=>{
        const plural=false; const line=`Me duele ${r.b[0]}.`;
        box.innerHTML=`<div class="body-wrap">${bodySvg()}<div style="flex:1;min-width:220px"><div class="bub npc"><span class="who">🧑 Paciente</span>${es(line)} <button class="icon-btn" data-p>🔊</button></div><p class="muted" style="font-size:13px">💡 ${es('Me duele + 신체 부위')} = ~가 아파요</p><div class="fb"></div></div></div>`;
        box.querySelector('[data-p]').onclick=()=>Voice.say(line); Voice.say(line);
        box.querySelector('svg').onclick=e=>{ const z=e.target.closest('.zone'); if(!z||box._d) return; box._d=1; const ok=z.dataset.z===r.b[0];
          box.querySelectorAll(`.zone[data-z="${r.b[0]}"]`).forEach(x=>x.classList.add('ok')); if(!ok) box.querySelectorAll(`.zone[data-z="${z.dataset.z}"]`).forEach(x=>x.classList.add('bad'));
          box.querySelector('.fb').innerHTML=`<div class="explain">${ok?'✅':'❌'} ${es(r.b[0])} = ${r.b[1]}${ok?'':` <span class="muted">(누른 곳: ${es(z.dataset.z)})</span>`}</div>`; done(ok); };
      }, onFinish:(s,t)=>{ submit({score:s,total:t}); el.innerHTML=finishCard(s,t); el.querySelector('[data-again]').onclick=start; }});
    }; start();
  },
  live: ch=>scoreLive(ch)
};

/* ---------- 13. menu (order & shared popularity) ---------- */
const MENU={
  'Primeros':[['Gazpacho andaluz','차가운 토마토 수프',0],['Ensalada mixta','믹스 샐러드',0],['Sopa de ajo','마늘 수프',0],['Croquetas de jamón','하몽 크로켓',0]],
  'Segundos':[['Paella de marisco','해산물 파에야',0],['Merluza a la plancha','대구 철판구이',0],['Pollo asado','구운 닭고기',0],['Tortilla española','스페인식 감자 오믈렛',0]],
  'Postres':[['Flan casero','수제 푸딩',0],['Churros con chocolate','추로스와 초콜라테',0],['Tarta de Santiago','아몬드 케이크',0],['Fruta del tiempo','제철 과일',0]],
  'Bebidas':[['Agua mineral','생수',0],['Vino tinto','레드 와인',0],['Clara','맥주+레몬 소다',0],['Zumo de naranja','오렌지 주스',0]]
};
const MENU_PRICE=14.5;
W.menu = {
  title:'🍽️ 오늘의 메뉴(Menú del día) 주문하기',
  render(el,ch,submit){
    const sel=(RT.my(ch.id,'w')||{}).o || {};
    const draw=()=>{
      const words={Primeros:'De primero',Segundos:'De segundo',Postres:'De postre',Bebidas:'Para beber'};
      const order = Object.keys(MENU).filter(k=>sel[k]!=null).map(k=>`${words[k]}, quiero ${MENU[k][sel[k]][0].toLowerCase().replace(/^(\w)/,c=>c)}.`);
      el.innerHTML=`<div class="grid g2"><div class="menu-card notranslate" translate="no"><h4>MENÚ DEL DÍA</h4><div style="text-align:center;font-size:13px">Pan, bebida y postre incluidos · <b>${MENU_PRICE.toFixed(2).replace('.',',')} €</b></div>
        ${Object.entries(MENU).map(([k,arr])=>`<div class="course">${k}</div>${arr.map((it,i)=>`<div class="menu-item ${sel[k]===i?'on':''}" data-k="${k}" data-i="${i}"><span>${it[0]}</span><span class="dots"></span><small>${esc(it[1])}</small></div>`).join('')}`).join('')}</div>
        <div><div class="order-slip"><b>🧾 나의 주문</b><ol style="padding-left:18px">${order.map(o=>`<li>${es(o)}</li>`).join('')||'<li class="muted">왼쪽 메뉴에서 코스마다 하나씩 고르세요</li>'}</ol>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn small" data-say ${order.length?'':'disabled'}>🔊 주문 문장 듣기</button><button class="btn alt small" data-send ${Object.keys(sel).length===4?'':'disabled'}>주문 완료 & 공유</button></div>
        <p class="muted" style="font-size:12.5px;margin:10px 0 0">💬 웨이터: ${es('¿Qué van a tomar?')} 뭘 드시겠어요?<br>💬 계산: ${es('La cuenta, por favor.')} 계산서 주세요.</p></div></div></div>`;
      el.querySelector('.menu-card').onclick=e=>{ const it=e.target.closest('.menu-item'); if(!it) return; sel[it.dataset.k]=+it.dataset.i; Voice.say(MENU[it.dataset.k][+it.dataset.i][0]); draw(); };
      const sb=el.querySelector('[data-say]'); if(sb) sb.onclick=()=>Voice.say(order.join(' ')+' Gracias.');
      const sd=el.querySelector('[data-send]'); if(sd) sd.onclick=()=>{ submit({o:{...sel}, score:1,total:1}); toast('¡Marchando! 주문이 공유됐어요 🍽️'); };
    }; draw();
  },
  live(ch){ const rs=RT.results(ch.id,'w').filter(r=>r.o); const my=(RT.my(ch.id,'w')||{}).o||{};
    return `<div class="kpis"><div class="kpi"><b>${rs.length}</b><span>주문 수</span></div><div class="kpi"><b>${(rs.length*MENU_PRICE).toFixed(0)}€</b><span>우리반 총 매출</span></div><div class="kpi"><b>${MENU_PRICE}€</b><span>1인 메뉴 가격</span></div></div>`+
      Object.entries(MENU).map(([k,arr])=>{ const items=arr.map((it,i)=>({label:`<span class="notranslate">${esc(it[0])}</span>`, value:rs.filter(r=>r.o[k]===i).length, mine:my[k]===i})).sort((a,b)=>b.value-a.value);
        return `<h4 style="margin:14px 0 6px">${k}</h4>${bars(items,{unit:'명',empty:'주문 대기 중'})}`; }).join(''); }
};

})();
