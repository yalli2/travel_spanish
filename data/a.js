var VAMOS = window.VAMOS = window.VAMOS || {chapters: []};

/* ===== 1. 스페인어 세계로 ===== */
VAMOS.chapters.push({
  id: 'intro', part: 'about', no: 1, emoji: '🌎',
  ko: '스페인어 세계로', es: 'El mundo hispano', en: 'Introduction', pages: '6–7',
  widget: 'world',
  scene: '인천공항 출국 게이트 앞입니다. 비행기에 오르기 전, 스페인어가 쓰이는 나라들을 둘러보고 첫인사로 여행의 문을 열어 봅시다.',
  goals: ['스페인어를 공식어로 쓰는 나라와 지역을 말할 수 있다', '스페인과 중남미 스페인어의 차이를 이해한다', '자기소개 첫 문장을 말할 수 있다'],
  phrases: [
    {es: '¡Hola!', ko: '안녕하세요!', pr: '올라', mk: 'short'},
    {es: '¿Habla español?', ko: '스페인어 하세요?', pr: '아블라 에스빠뇰', mk: 'qa', ans: {es: 'Sí, claro.', ko: '네, 물론이죠.'}},
    {es: 'Soy de Corea del Sur.', ko: '저는 한국에서 왔어요.', pr: '소이 데 꼬레아 델 수르'},
    {es: '¿De dónde eres?', ko: '어디서 왔어?', pr: '데 돈데 에레스', mk: 'qa', ans: {es: 'Soy de Seúl.', ko: '서울에서 왔어요.'}},
    {es: 'Hablo un poco de español.', ko: '스페인어를 조금 해요.', pr: '아블로 운 뽀꼬 데 에스빠뇰'},
    {es: 'Estoy aprendiendo español.', ko: '스페인어를 배우는 중이에요.', pr: '에스또이 아쁘렌디엔도 에스빠뇰'},
    {es: '¡Bienvenido a España!', ko: '스페인에 오신 걸 환영해요!', pr: '비엔베니도 아 에스빠냐', mk: 'listen'},
    {es: 'Castellano', ko: '카스티야어(스페인어)', pr: '까스떼야노', mk: 'look'},
    {es: '¿Cómo se dice ... en español?', ko: '…를 스페인어로 어떻게 말해요?', pr: '꼬모 세 디세 … 엔 에스빠뇰'},
    {es: 'Quiero visitar México.', ko: '멕시코에 가 보고 싶어요.', pr: '끼에로 비시따르 메히꼬'},
    {es: '¡Buen viaje!', ko: '즐거운 여행 되세요!', pr: '부엔 비아헤', mk: 'short'}
  ],
  tips: [
    {mk: 'lang', ko: '스페인 본토에서는 ce·ci·z를 영어 th처럼 혀를 물고 발음하지만, 중남미에서는 대부분 ㅅ으로 발음해요. 어느 쪽으로 말해도 다 통합니다.'},
    {mk: 'culture', ko: '스페인에는 카스티야어 외에도 카탈루냐어·갈리시아어·바스크어가 지역 공용어예요. 해당 지역에서 그 말로 인사 한마디만 건네도 분위기가 확 달라집니다.'},
    {mk: 'lang', ko: '스페인어 자체를 español 또는 castellano라고 불러요. 중남미 일부 나라에서는 castellano라는 말을 더 자주 씁니다.'}
  ],
  vocab: [
    {es: 'el idioma', ko: '언어'}, {es: 'el país', ko: '나라'}, {es: 'la ciudad', ko: '도시'},
    {es: 'el viaje', ko: '여행'}, {es: 'el pasaporte', ko: '여권'}, {es: 'el mundo', ko: '세계'},
    {es: 'la lengua oficial', ko: '공용어'}, {es: 'el acento', ko: '억양·악센트'},
    {es: 'el turista', ko: '관광객(남)'}, {es: 'la frontera', ko: '국경'}
  ],
  quiz: [
    {q: '아프리카에서 스페인어를 공용어로 쓰는 나라는?', opts: ['모로코', '적도기니', '세네갈', '케냐'], a: 1, ex: '적도기니(Guinea Ecuatorial)는 아프리카 유일의 스페인어 공용어 국가예요.'},
    {q: '"Soy de Corea del Sur."의 뜻은?', opts: ['한국에 살아요.', '한국에 가요.', '한국에서 왔어요.', '한국어를 해요.'], a: 2, ex: 'ser de + 나라 = …출신이다.'},
    {q: '중남미 스페인어에서 cerveza의 z는 주로 어떻게 발음할까?', opts: ['ㅅ', 'th(혀 물기)', 'ㅈ', '묵음'], a: 0, ex: '중남미는 seseo, 즉 ㅅ 발음이 일반적이에요.'},
    {q: '"스페인어 하세요?"를 정중하게 물으면?', opts: ['¿Hablas español?', '¿Hablan español?', '¿Hablo español?', '¿Habla español?'], a: 3, ex: 'usted(당신)에게는 3인칭 형태 habla를 써요.'},
    {q: '스페인어는 어느 언어 계통일까?', opts: ['게르만어', '로망스어', '슬라브어', '셈어'], a: 1, ex: '라틴어에서 갈라져 나온 로망스어로, 포르투갈어·이탈리아어·프랑스어와 사촌이에요.'}
  ],
  poll: {q: '가장 가 보고 싶은 스페인어권 여행지는?', opts: ['🇪🇸 스페인', '🇲🇽 멕시코', '🇦🇷 아르헨티나', '🇵🇪 페루', '🇨🇺 쿠바', '🇨🇱 칠레']},
  write: {prompt: '나를 소개하는 첫 문장을 써 보세요.', pattern: 'Soy ___ y soy de ___.', hint: '이름과 출신 도시·나라를 넣어요.', example: 'Soy Minji y soy de Busan.'},
  dialog: { title: '비행기 옆자리 승객과 첫인사', lines: [
    {who: 'npc', es: '¡Hola! ¿Vas a Madrid también?', ko: '안녕하세요! 마드리드 가세요?'},
    {who: 'me', opts: [
      {es: 'Sí, voy a Madrid. ¿Y tú?', ko: '네, 마드리드 가요. 당신은요?', ok: true},
      {es: 'Adiós, hasta luego.', ko: '안녕히 가세요, 또 봐요.', ok: false, why: '대화를 시작하는데 작별 인사는 어색해요.'},
      {es: 'Son las tres.', ko: '3시예요.', ok: false, why: '시간을 물은 게 아니에요.'}
    ]},
    {who: 'npc', es: 'Yo también. ¿De dónde eres?', ko: '저도요. 어디서 오셨어요?'},
    {who: 'me', opts: [
      {es: 'Tengo treinta años.', ko: '서른 살이에요.', ok: false, why: '출신을 물었는데 나이를 답했어요.'},
      {es: 'Soy de Corea del Sur.', ko: '한국에서 왔어요.', ok: true},
      {es: 'Me gusta el café.', ko: '커피를 좋아해요.', ok: false, why: '질문과 관계없는 대답이에요.'}
    ]},
    {who: 'npc', es: '¡Qué bien! Hablas muy bien español.', ko: '좋네요! 스페인어 정말 잘하시네요.'},
    {who: 'me', opts: [
      {es: 'No, no hablo.', ko: '아뇨, 말 안 해요.', ok: false, why: '스페인어로 말하면서 못 한다고 하면 모순이에요.'},
      {es: 'Gracias, estoy aprendiendo.', ko: '고마워요, 배우는 중이에요.', ok: true}
    ]},
    {who: 'npc', es: '¡Ánimo! ¡Buen viaje!', ko: '힘내세요! 즐거운 여행 되세요!'}
  ]}
});

/* ===== 2. 여행 필수 표현 ===== */
VAMOS.chapters.push({
  id: 'top', part: 'about', no: 2, emoji: '⭐',
  ko: '여행 필수 표현', es: 'Frases clave', en: 'Top Phrases', pages: '8–9',
  scene: '마드리드 도착 첫날, 거리로 나섰습니다. 영업시간·무료 여부·감탄 표현 등 하루에도 몇 번씩 쓰는 생존 표현으로 무장해 봅시다.',
  goals: ['가게 영업시간과 무료 여부를 물을 수 있다', '현지인처럼 맞장구치는 감탄 표현을 쓸 수 있다', '모르는 말을 스페인어로 묻는 법을 익힌다'],
  phrases: [
    {es: '¿A qué hora abren?', ko: '몇 시에 문 열어요?', pr: '아 께 오라 아브렌', mk: 'qa', ans: {es: 'A las diez.', ko: '10시에요.'}},
    {es: '¿A qué hora cierran?', ko: '몇 시에 문 닫아요?', pr: '아 께 오라 시에란'},
    {es: '¿Es gratis?', ko: '무료예요?', pr: '에스 그라띠스', mk: 'short'},
    {es: '¿Cuándo es la entrada gratuita?', ko: '무료 입장은 언제예요?', pr: '꾸안도 에스 라 엔뜨라다 그라뚜이따'},
    {es: '¿Dónde está el baño?', ko: '화장실이 어디예요?', pr: '돈데 에스따 엘 바뇨', mk: 'qa', ans: {es: 'Al fondo, a la derecha.', ko: '안쪽 오른편이에요.'}},
    {es: 'Cerrado', ko: '영업 종료 / 닫힘', pr: '세라도', mk: 'look'},
    {es: '¡Qué guay!', ko: '멋지다!(스페인)', pr: '께 과이', mk: 'short'},
    {es: '¿En serio?', ko: '진짜요?', pr: '엔 세리오'},
    {es: 'Vale.', ko: '오케이 / 알겠어.', pr: '발레', mk: 'listen'},
    {es: '¡Por supuesto!', ko: '물론이죠!', pr: '뽀르 수뿌에스또'},
    {es: '¿Cómo se dice esto en catalán?', ko: '이걸 카탈루냐어로 뭐라고 해요?', pr: '꼬모 세 디세 에스또 엔 까딸란'},
    {es: '¿Dónde podemos bailar salsa?', ko: '어디서 살사 춤을 출 수 있어요?', pr: '돈데 뽀데모스 바일라르 살사'}
  ],
  tips: [
    {mk: 'culture', ko: '스페인의 작은 가게들은 오후 2시~5시쯤 문을 닫는 경우가 많아요(시에스타 문화). 반대로 저녁은 9시가 넘어서야 본격적으로 시작됩니다.'},
    {mk: 'lang', ko: 'Vale는 스페인에서 "OK"처럼 하루에도 수십 번 듣는 말이에요. 중남미에서는 Dale, Bueno, Listo 등을 더 자주 씁니다.'},
    {mk: 'culture', ko: '많은 박물관이 특정 요일 저녁이나 일요일 오후에 무료 개방을 해요. 매표소에서 무료 시간을 먼저 물어보면 여행 경비를 아낄 수 있어요.'}
  ],
  vocab: [
    {es: 'la entrada', ko: '입장권·입구'}, {es: 'la salida', ko: '출구'}, {es: 'el horario', ko: '영업시간표'},
    {es: 'el baño', ko: '화장실'}, {es: 'la tienda', ko: '가게'}, {es: 'el museo', ko: '박물관'},
    {es: 'la siesta', ko: '낮잠·한낮 휴식'}, {es: 'las tapas', ko: '타파스(작은 안주)'}, {es: 'la discoteca', ko: '클럽'}
  ],
  quiz: [
    {q: '"몇 시에 문 닫아요?"는?', opts: ['¿A qué hora abren?', '¿A qué hora cierran?', '¿Qué hora es?', '¿Está abierto?'], a: 1, ex: 'cerrar(닫다) → cierran.'},
    {q: '가게 문에 "Cerrado"라고 붙어 있다. 의미는?', opts: ['영업 중', '세일 중', '닫힘', '당기시오'], a: 2, ex: 'Abierto는 영업 중, Cerrado는 닫힘.'},
    {q: '친구 말에 "진짜?"라고 놀라며 되물을 때', opts: ['¿En serio?', '¡Vale!', '¡Salud!', 'Lo siento.'], a: 0, ex: '¿En serio? = 정말이야?'},
    {q: '"¿Es gratis?"에 대한 자연스러운 대답은?', opts: ['A las ocho.', 'Al fondo.', 'De nada.', 'Sí, los domingos.'], a: 3, ex: '무료냐는 질문 → 네, 일요일에요.'},
    {q: '스페인에서 "OK, 알겠어"의 의미로 가장 많이 쓰는 말은?', opts: ['Vale', 'Guay', 'Hola', 'Bueno días'], a: 0, ex: 'Vale는 스페인식 OK. (Buenos días가 올바른 인사 표현)'}
  ],
  poll: {q: '여행지에서 가장 먼저 물어볼 것 같은 질문은?', opts: ['🚻 화장실 위치', '🕘 영업시간', '💸 무료 여부', '📶 와이파이', '🍷 맛집 추천']},
  write: {prompt: '가고 싶은 장소의 영업시간을 묻는 문장을 써 보세요.', pattern: '¿A qué hora abre ___?', hint: 'el museo, la farmacia, el mercado 등', example: '¿A qué hora abre el mercado?'},
  dialog: { title: '미술관 매표소에서', lines: [
    {who: 'npc', es: 'Buenas tardes. ¿Qué desea?', ko: '안녕하세요. 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Hola. ¿Cuándo es la entrada gratuita?', ko: '안녕하세요. 무료 입장은 언제예요?', ok: true},
      {es: 'Una cerveza, por favor.', ko: '맥주 한 잔 주세요.', ok: false, why: '미술관 매표소에서 맥주를 주문하네요.'},
      {es: '¿Dónde está el hotel?', ko: '호텔이 어디예요?', ok: false, why: '매표소 직원에게 할 질문으로는 엉뚱해요.'}
    ]},
    {who: 'npc', es: 'De lunes a sábado, de seis a ocho de la tarde.', ko: '월~토요일 오후 6시부터 8시까지요.'},
    {who: 'me', opts: [
      {es: '¡Por supuesto!', ko: '물론이죠!', ok: false, why: '정보를 들었을 때는 "그렇군요"가 자연스러워요.'},
      {es: 'Vale. ¿Y a qué hora cierran hoy?', ko: '알겠어요. 오늘은 몇 시에 닫아요?', ok: true}
    ]},
    {who: 'npc', es: 'Hoy cerramos a las ocho.', ko: '오늘은 8시에 닫아요.'},
    {who: 'me', opts: [
      {es: 'Lo siento mucho.', ko: '정말 죄송합니다.', ok: false, why: '사과할 상황이 아니에요.'},
      {es: 'Tengo hambre.', ko: '배고파요.', ok: false, why: '대화 흐름과 상관없어요.'},
      {es: '¡Genial! Vuelvo a las seis. Gracias.', ko: '좋아요! 6시에 다시 올게요. 감사합니다.', ok: true}
    ]},
    {who: 'npc', es: 'De nada. ¡Hasta luego!', ko: '천만에요. 이따 봬요!'}
  ]}
});

/* ===== 3. 발음 ===== */
VAMOS.chapters.push({
  id: 'pron', part: 'about', no: 3, emoji: '🗣️',
  ko: '발음', es: 'Pronunciación', en: 'Pronunciation', pages: '10–13',
  widget: 'pron',
  scene: '호텔 체크인 전에 거리 표지판과 메뉴판을 소리 내어 읽어 보는 시간! 스페인어는 쓰인 대로 읽으면 되는 언어라 규칙만 알면 바로 읽을 수 있어요.',
  goals: ['다섯 개 모음을 정확히 발음할 수 있다', 'ñ·rr·j·ll·h 등 특징적인 자음을 구별할 수 있다', '강세 규칙에 따라 단어를 읽을 수 있다'],
  phrases: [
    {es: 'España', ko: '스페인', pr: '에스빠냐', mk: 'short'},
    {es: 'el perro', ko: '개', pr: '엘 뻬로(굴리는 r)'},
    {es: 'pero', ko: '그러나 (perro와 구별!)', pr: '뻬로(한 번 튕기는 r)'},
    {es: 'el jamón', ko: '하몽(햄)', pr: '엘 하몬', mk: 'look'},
    {es: 'la calle', ko: '거리', pr: '라 까예'},
    {es: 'el hotel', ko: '호텔(h는 묵음)', pr: '엘 오뗄'},
    {es: 'la cerveza', ko: '맥주', pr: '라 세르베사'},
    {es: 'Guernica', ko: '게르니카', pr: '게르니까'},
    {es: '¿Cómo se pronuncia?', ko: '어떻게 발음해요?', pr: '꼬모 세 쁘로눈시아', mk: 'qa', ans: {es: 'Se pronuncia así: ...', ko: '이렇게 발음해요: …'}},
    {es: 'Más despacio, por favor.', ko: '좀 더 천천히요.', pr: '마스 데스빠시오, 뽀르 파보르', mk: 'short'},
    {es: 'el ferrocarril', ko: '철도', pr: '엘 페로까릴', mk: 'listen'},
    {es: 'el café', ko: '커피(é에 강세)', pr: '엘 까페'}
  ],
  tips: [
    {mk: 'lang', ko: '모음은 a·e·i·o·u 다섯 개뿐이고 늘 같은 소리예요(아·에·이·오·우). 영어처럼 모음이 변하지 않으니 철자 그대로 또박또박 읽으세요.'},
    {mk: 'lang', ko: '강세 규칙: 모음·n·s로 끝나면 끝에서 두 번째 음절, 그 밖의 자음으로 끝나면 마지막 음절에 강세가 와요. 규칙을 벗어나면 tilde(´)로 표시합니다.'},
    {mk: 'culture', ko: 'rr 굴리기가 어렵다면 "뜨르르" 하고 혀끝을 윗잇몸에 대고 떨어 보세요. 현지인도 외국인의 노력을 아주 반가워해요.'}
  ],
  vocab: [
    {es: 'la vocal', ko: '모음'}, {es: 'la consonante', ko: '자음'}, {es: 'la sílaba', ko: '음절'},
    {es: 'el acento', ko: '강세·억양'}, {es: 'la letra', ko: '글자'}, {es: 'la palabra', ko: '단어'},
    {es: 'la tilde', ko: '강세 부호(´)'}, {es: 'la eñe', ko: '글자 ñ'}, {es: 'la frase', ko: '문장·구'}
  ],
  quiz: [
    {q: 'hotel의 h는 어떻게 발음할까?', opts: ['ㅎ', '소리 내지 않음', 'ㅊ', 'ㅋ'], a: 1, ex: '스페인어의 h는 항상 묵음이에요: 오뗄.'},
    {q: 'España의 ñ 소리에 가장 가까운 것은?', opts: ['ㄴ', 'ㅇ', '냐·녀처럼 ㄴ+ㅣ', 'ㄹ'], a: 2, ex: 'ñ는 "냐, 녜, 뇨"처럼 발음해요.'},
    {q: 'jamón의 j 발음은?', opts: ['ㅈ', 'ㅇ', 'ㄷ', '목 깊은 ㅎ'], a: 3, ex: 'j는 목 안쪽에서 내는 거친 ㅎ 소리예요.'},
    {q: 'll이 들어간 calle는 보통 어떻게 읽을까?', opts: ['까예', '깔레', '까르레', '까제'], a: 0, ex: 'll은 대부분 지역에서 "y(이)" 소리예요. 아르헨티나는 "까셰"에 가깝게 발음해요.'},
    {q: '강세가 마지막 음절에 오는 단어는?', opts: ['casa', 'hablan', 'hotel', 'mesa'], a: 2, ex: 'n·s 이외의 자음(l)으로 끝나서 마지막 음절 te에 강세: o-TEL.'}
  ],
  poll: {q: '가장 발음하기 어려운 스페인어 소리는?', opts: ['🌀 rr (굴리는 r)', '😮 j (목 ㅎ)', '👅 ce·ci·z (th)', '🔤 ñ', '🔊 강세 위치']},
  write: {prompt: '가장 좋아하는 스페인어 단어를 쓰고, 한글로 발음을 달아 보세요.', pattern: '___ (발음: ___)', hint: 'chocolate, guitarra, paella 등', example: 'guitarra (발음: 기따라)'},
  dialog: { title: '카페에서 발음 확인하기', lines: [
    {who: 'npc', es: 'Hola, ¿qué te pongo?', ko: '안녕하세요, 뭐 드릴까요?'},
    {who: 'me', opts: [
      {es: 'Un café, por favor.', ko: '커피 한 잔 주세요.', ok: true},
      {es: 'Un perro, por favor.', ko: '개 한 마리 주세요.', ok: false, why: 'perro(개)! 카페에서 주문할 것이 아니죠. 발음 주의!'},
      {es: 'Un hotel, por favor.', ko: '호텔 하나 주세요.', ok: false, why: '카페에서 호텔을 주문할 수는 없어요.'}
    ]},
    {who: 'npc', es: '¿Con leche? ¿Y algo de comer? Tenemos churros.', ko: '우유 넣을까요? 먹을 것도요? 추로스 있어요.'},
    {who: 'me', opts: [
      {es: 'Perdón, más despacio, por favor.', ko: '죄송해요, 좀 더 천천히요.', ok: true},
      {es: 'Adiós.', ko: '안녕히 계세요.', ok: false, why: '주문 중에 갑자기 떠나는 인사예요.'}
    ]},
    {who: 'npc', es: 'Claro. ¿Con le-che? ¿Y chu-rros?', ko: '물론이죠. 우-유 넣을까요? 추-로스도요?'},
    {who: 'me', opts: [
      {es: 'No hablo inglés.', ko: '영어 못해요.', ok: false, why: '직원은 스페인어로 말하고 있어요.'},
      {es: 'Sí, con leche y unos churros.', ko: '네, 우유 넣고 추로스도 주세요.', ok: true},
      {es: 'Son las dos.', ko: '2시예요.', ok: false, why: '주문에 대한 대답이 아니에요.'}
    ]},
    {who: 'npc', es: '¡Muy bien pronunciado! Ahora mismo.', ko: '발음 아주 좋네요! 바로 드릴게요.'}
  ]}
});

/* ===== 4. 여행 문법 ===== */
VAMOS.chapters.push({
  id: 'grammar', part: 'about', no: 4, emoji: '🧩',
  ko: '여행 문법', es: 'Gramática', en: 'Grammar', pages: '14–30',
  widget: 'conjugate',
  scene: '여행 중 문장을 스스로 조립하고 싶어졌어요. 존댓말(usted)과 반말(tú), 명사의 성, ser/estar, querer, ir a 같은 핵심 뼈대만 익히면 수백 개 문장을 만들 수 있어요.',
  goals: ['tú와 usted를 상황에 맞게 고를 수 있다', 'ser와 estar, tener의 쓰임을 구별할 수 있다', 'quisiera / ir a + 동사원형으로 원하는 것과 계획을 말할 수 있다'],
  phrases: [
    {es: '¿Cómo está usted?', ko: '어떻게 지내세요?(존댓말)', pr: '꼬모 에스따 우스떼드', mk: 'qa', ans: {es: 'Muy bien, gracias.', ko: '아주 좋아요, 고마워요.'}},
    {es: '¿Cómo estás?', ko: '잘 지내?(반말)', pr: '꼬모 에스따스', mk: 'short'},
    {es: 'Soy coreano. / Soy coreana.', ko: '저는 한국인이에요.(남/여)', pr: '소이 꼬레아노 / 꼬레아나'},
    {es: 'Estoy cansado.', ko: '피곤해요.(지금 상태)', pr: '에스또이 깐사도'},
    {es: 'Tengo una reserva.', ko: '예약이 있어요.', pr: '뗑고 우나 레세르바'},
    {es: 'Tengo hambre.', ko: '배고파요.', pr: '뗑고 암브레'},
    {es: 'Quisiera una habitación.', ko: '방 하나 원해요.(정중)', pr: '끼시에라 우나 아비따시온'},
    {es: 'Voy a visitar el museo.', ko: '박물관에 갈 거예요.', pr: '보이 아 비시따르 엘 무세오'},
    {es: '¿Puedo pagar con tarjeta?', ko: '카드로 내도 돼요?', pr: '뿌에도 빠가르 꼰 따르헤따', mk: 'qa', ans: {es: 'Sí, por supuesto.', ko: '네, 물론이죠.'}},
    {es: 'Me gusta el vino tinto.', ko: '레드 와인을 좋아해요.', pr: '메 구스따 엘 비노 띤또'},
    {es: '¿Hay un cajero por aquí?', ko: '이 근처에 ATM 있어요?', pr: '아이 운 까헤로 뽀르 아끼', mk: 'listen'},
    {es: 'el / la · un / una', ko: '정관사·부정관사 (남성/여성)', pr: '엘 / 라 · 운 / 우나', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '처음 만난 어른·직원에게는 usted(당신)을 쓰면 안전해요. 동사는 3인칭 형태를 씁니다: ¿Habla usted inglés? 친구·또래끼리는 tú를 써요.'},
    {mk: 'lang', ko: 'ser는 국적·직업·성격처럼 변하지 않는 것, estar는 위치·기분·상태처럼 변하는 것에 써요. "Soy feliz"(행복한 사람) vs "Estoy feliz"(지금 기뻐요).'},
    {mk: 'culture', ko: '스페인은 젊은 층에서 tú를 빠르게 쓰는 편이고, 콜롬비아 등 일부 중남미에서는 가족끼리도 usted를 쓰기도 해요. 상대가 쓰는 말투를 따라가면 실수가 적어요.'}
  ],
  vocab: [
    {es: 'el verbo', ko: '동사'}, {es: 'el sustantivo', ko: '명사'}, {es: 'el artículo', ko: '관사'},
    {es: 'el género', ko: '성(남성·여성)'}, {es: 'la reserva', ko: '예약'}, {es: 'la habitación', ko: '방'},
    {es: 'la tarjeta', ko: '카드'}, {es: 'el cajero', ko: 'ATM'}, {es: 'el problema', ko: '문제(남성명사 주의)'}, {es: 'la mano', ko: '손(여성명사 주의)'}
  ],
  quiz: [
    {q: '호텔 직원에게 정중하게 "영어 하세요?"라고 할 때', opts: ['¿Hablas inglés?', '¿Habla usted inglés?', '¿Hablo inglés?', '¿Hablamos inglés?'], a: 1, ex: 'usted + 3인칭 동사 habla.'},
    {q: '"지금 피곤해요"에 맞는 동사는?', opts: ['Soy cansado.', 'Tengo cansado.', 'Estoy cansado.', 'Hay cansado.'], a: 2, ex: '일시적 상태는 estar.'},
    {q: '"배고파요"는 스페인어로?', opts: ['Estoy hambre.', 'Soy hambre.', 'Hay hambre.', 'Tengo hambre.'], a: 3, ex: '배고픔·목마름·추위는 tener로 표현: tener hambre/sed/frío.'},
    {q: '"내일 톨레도에 갈 거예요."', opts: ['Voy a ir a Toledo mañana.', 'Fui a Toledo mañana.', 'Estoy Toledo mañana.', 'Soy a Toledo mañana.'], a: 0, ex: 'ir a + 동사원형 = …할 거예요(가까운 미래).'},
    {q: '여성 명사에 붙는 정관사는?', opts: ['el', 'la', 'los', 'un'], a: 1, ex: 'la casa, la playa. 남성은 el, 복수는 los/las.'}
  ],
  poll: {q: '스페인어 문법에서 가장 헷갈리는 것은?', opts: ['🤝 tú vs usted', '⚖️ ser vs estar', '🚹🚺 명사의 성', '🔄 동사 변화', '⏳ 과거 시제']},
  write: {prompt: '여행 계획을 ir a + 동사원형으로 써 보세요.', pattern: 'Voy a ___.', hint: 'visitar, comer, ver, comprar + 대상', example: 'Voy a comer paella en Valencia.'},
  dialog: { title: '호텔 프런트에서 문법 실전', lines: [
    {who: 'npc', es: 'Buenas noches. ¿En qué puedo ayudarle?', ko: '안녕하세요(저녁). 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Soy una reserva.', ko: '저는 예약이에요.', ok: false, why: '"예약이 있다"는 tener를 써야 해요.'},
      {es: 'Tengo una reserva a nombre de Kim.', ko: '김으로 예약했어요.', ok: true},
      {es: 'Estoy una reserva.', ko: '저는 예약 상태예요.', ok: false, why: 'estar도 맞지 않아요. Tengo una reserva!'}
    ]},
    {who: 'npc', es: 'Perfecto. ¿Es usted coreano?', ko: '좋습니다. 한국 분이세요?'},
    {who: 'me', opts: [
      {es: 'Sí, soy coreano.', ko: '네, 한국인이에요.', ok: true},
      {es: 'Sí, estoy coreano.', ko: '네, 한국인 상태예요.', ok: false, why: '국적은 변하지 않는 특징 → ser.'}
    ]},
    {who: 'npc', es: 'Aquí tiene la llave. ¿Necesita algo más?', ko: '열쇠 여기 있습니다. 더 필요한 거 있으세요?'},
    {who: 'me', opts: [
      {es: 'Voy a necesito un mapa.', ko: '(틀린 문장)', ok: false, why: 'ir a 다음에는 동사원형: Voy a necesitar.'},
      {es: 'Me gustan el mapa.', ko: '(틀린 문장)', ok: false, why: '단수 명사에는 gusta. 그리고 지도를 "좋아한다"는 뜻이 돼요.'},
      {es: 'Sí, quisiera un mapa de la ciudad.', ko: '네, 시내 지도를 하나 받고 싶어요.', ok: true}
    ]},
    {who: 'npc', es: 'Claro, aquí tiene. ¡Que disfrute de su estancia!', ko: '물론이죠, 여기 있습니다. 즐거운 숙박 되세요!'}
  ]}
});

/* ===== 5. 알아듣기 ===== */
VAMOS.chapters.push({
  id: 'understanding', part: 'basics', no: 5, emoji: '👂',
  ko: '알아듣기', es: 'Entender', en: 'Understanding', pages: '32–33',
  scene: '시장 상인이 빠른 스페인어로 말을 쏟아냅니다. 당황하지 말고 다시 말해 달라고, 천천히 써 달라고 요청하는 표현으로 대화를 이어가 봅시다.',
  goals: ['못 알아들었을 때 반복·천천히를 요청할 수 있다', '뜻과 철자를 물어볼 수 있다', '이해 여부를 확인하는 표현을 알아듣는다'],
  phrases: [
    {es: '¿Habla inglés?', ko: '영어 하세요?', pr: '아블라 잉글레스', mk: 'qa', ans: {es: 'No, lo siento. Solo español.', ko: '아뇨, 죄송해요. 스페인어만요.'}},
    {es: '¿Alguien habla inglés?', ko: '영어 하시는 분 있나요?', pr: '알기엔 아블라 잉글레스'},
    {es: 'No entiendo.', ko: '이해 못 했어요.', pr: '노 엔띠엔도', mk: 'short'},
    {es: '¿Entiende?', ko: '이해하셨어요?', pr: '엔띠엔데', mk: 'listen'},
    {es: '¿Puede repetirlo, por favor?', ko: '다시 말씀해 주시겠어요?', pr: '뿌에데 레뻬띠를로, 뽀르 파보르'},
    {es: '¿Puede hablar más despacio?', ko: '좀 더 천천히 말씀해 주시겠어요?', pr: '뿌에데 아블라르 마스 데스빠시오'},
    {es: '¿Qué significa ...?', ko: '…는 무슨 뜻이에요?', pr: '께 시그니피까 …', mk: 'qa', ans: {es: 'Significa "barato".', ko: '"싸다"라는 뜻이에요.'}},
    {es: '¿Cómo se escribe?', ko: '어떻게 써요?(철자)', pr: '꼬모 세 에스끄리베'},
    {es: '¿Me lo puede escribir?', ko: '그걸 적어 주시겠어요?', pr: '메 로 뿌에데 에스끄리비르'},
    {es: '¿Cómo?', ko: '네?(다시 말해 달라는 뜻)', pr: '꼬모', mk: 'short'},
    {es: 'Información', ko: '안내소', pr: '인포르마시온', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '못 알아들었을 때 "¿Qué?"보다 "¿Cómo?"나 "¿Perdón?"이 훨씬 부드럽게 들려요. 한국어의 "네?"와 비슷한 느낌입니다.'},
    {mk: 'culture', ko: '스페인 사람들은 말이 빠르기로 유명해요. "Más despacio, por favor"라고 웃으며 부탁하면 대부분 기꺼이 천천히 다시 말해 줍니다.'}
  ],
  vocab: [
    {es: 'la palabra', ko: '단어'}, {es: 'el significado', ko: '의미'}, {es: 'la pregunta', ko: '질문'},
    {es: 'la respuesta', ko: '대답'}, {es: 'el inglés', ko: '영어'}, {es: 'el diccionario', ko: '사전'},
    {es: 'el traductor', ko: '번역기·통역사'}, {es: 'la información', ko: '정보·안내'}
  ],
  quiz: [
    {q: '상대가 너무 빨리 말할 때 쓰는 표현은?', opts: ['¿Puede hablar más despacio?', '¿Dónde está?', '¿Cuánto cuesta?', '¡Hasta luego!'], a: 0, ex: 'más despacio = 더 천천히.'},
    {q: '"No entiendo."의 뜻은?', opts: ['몰라요(정보)', '이해 못 했어요', '안 들려요', '필요 없어요'], a: 1, ex: 'entender = 이해하다.'},
    {q: '단어의 뜻을 물을 때', opts: ['¿Cómo te llamas?', '¿Qué hora es?', '¿Qué significa "barato"?', '¿De dónde eres?'], a: 2, ex: 'significar = 의미하다.'},
    {q: '직원이 "¿Entiende?"라고 물었다. 무슨 뜻일까?', opts: ['들어오세요?', '기다리세요?', '주문하시겠어요?', '이해하셨어요?'], a: 3, ex: '확인 질문이에요. "Sí, entiendo."로 답해요.'},
    {q: '주소를 받아 적고 싶을 때 가장 알맞은 표현은?', opts: ['¿Me lo puede escribir?', 'No hablo español.', '¿Hay wifi?', 'Lo siento.'], a: 0, ex: '적어 달라고 부탁하는 표현이에요.'}
  ],
  poll: {q: '말을 못 알아들었을 때 나의 생존 전략은?', opts: ['🔁 다시 말해 달라고 한다', '🐢 천천히 부탁한다', '📱 번역 앱을 켠다', '✍️ 적어 달라고 한다', '😅 웃으며 Sí라고 한다']},
  write: {prompt: '모르는 단어의 뜻을 묻는 문장을 써 보세요.', pattern: '¿Qué significa "___"?', hint: '여행 중 본 간판이나 메뉴 단어를 넣어 보세요.', example: '¿Qué significa "ración"?'},
  dialog: { title: '시장에서 빠른 상인과 대화하기', lines: [
    {who: 'npc', es: '¡Hola! Estas naranjas son de Valencia, muy dulces, dos euros el kilo.', ko: '안녕하세요! 이 오렌지는 발렌시아산이고 아주 달아요, 1킬로에 2유로예요.'},
    {who: 'me', opts: [
      {es: 'Lo siento, ¿puede hablar más despacio?', ko: '죄송해요, 좀 더 천천히 말씀해 주시겠어요?', ok: true},
      {es: 'Tengo veinte años.', ko: '스무 살이에요.', ok: false, why: '나이를 묻지 않았어요.'},
      {es: '¡Buen viaje!', ko: '즐거운 여행 되세요!', ok: false, why: '여행자는 바로 나예요!'}
    ]},
    {who: 'npc', es: 'Claro. Na-ran-jas... dos euros... el kilo.', ko: '물론이죠. 오-렌-지… 2유로… 1킬로에.'},
    {who: 'me', opts: [
      {es: 'No, gracias, no entiendo nada.', ko: '아뇨, 하나도 모르겠어요.', ok: false, why: '이번에는 천천히 말해 줬으니 이어서 질문해 봐요.'},
      {es: 'Entiendo. ¿Qué significa "dulce"?', ko: '알겠어요. "dulce"는 무슨 뜻이에요?', ok: true}
    ]},
    {who: 'npc', es: 'Dulce... como el azúcar. ¡Mmm!', ko: 'Dulce는… 설탕처럼요. 음~! (달다는 뜻)'},
    {who: 'me', opts: [
      {es: 'Ah, ¡vale! Un kilo, por favor.', ko: '아, 알겠어요! 1킬로 주세요.', ok: true},
      {es: '¿Cómo te llamas?', ko: '이름이 뭐야?', ok: false, why: '물건을 사는 흐름에서 갑자기 이름을 묻네요.'},
      {es: '¿Dónde está el baño?', ko: '화장실 어디예요?', ok: false, why: '대화 흐름과 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Aquí tienes. ¡Hablas muy bien!', ko: '여기 있어요. 말 잘하네요!'}
  ]}
});

/* ===== 6. 숫자와 수량 ===== */
VAMOS.chapters.push({
  id: 'numbers', part: 'basics', no: 6, emoji: '🔢',
  ko: '숫자와 수량', es: 'Números', en: 'Numbers & Amounts', pages: '34–35',
  widget: 'numbers',
  scene: '시장과 빵집에서 가격을 듣고, 개수와 무게를 말해야 합니다. 기수·서수·수량 표현을 익혀 계산대 앞에서 당황하지 않도록 해요.',
  goals: ['0~1000까지의 기수를 듣고 말할 수 있다', '첫 번째·두 번째 등 서수를 쓸 수 있다', '조금·많이·반·킬로 등 수량을 표현할 수 있다'],
  phrases: [
    {es: '¿Cuánto cuesta?', ko: '얼마예요?', pr: '꾸안또 꾸에스따', mk: 'qa', ans: {es: 'Cuesta cinco euros.', ko: '5유로예요.'}},
    {es: '¿Cuántos quiere?', ko: '몇 개 드릴까요?', pr: '꾸안또스 끼에레', mk: 'listen'},
    {es: 'Dos, por favor.', ko: '두 개 주세요.', pr: '도스, 뽀르 파보르', mk: 'short'},
    {es: 'Medio kilo de tomates.', ko: '토마토 반 킬로요.', pr: '메디오 낄로 데 또마떼스'},
    {es: 'Un poco más.', ko: '조금 더요.', pr: '운 뽀꼬 마스'},
    {es: 'Es demasiado.', ko: '너무 많아요.', pr: '에스 데마시아도'},
    {es: 'Una docena de huevos.', ko: '달걀 한 다스(12개).', pr: '우나 도세나 데 우에보스'},
    {es: 'la primera calle', ko: '첫 번째 거리', pr: '라 쁘리메라 까예'},
    {es: 'el segundo piso', ko: '2층(한국식 3층)', pr: '엘 세군도 삐소', mk: 'look'},
    {es: 'Son veinte euros con cincuenta.', ko: '20유로 50센트예요.', pr: '손 베인떼 에우로스 꼰 신꾸엔따', mk: 'listen'},
    {es: '¿Me da un trozo?', ko: '한 조각 주시겠어요?', pr: '메 다 운 뜨로소'},
    {es: '¿Cuántos son?', ko: '몇 분이세요?', pr: '꾸안또스 손', mk: 'qa', ans: {es: 'Somos cuatro.', ko: '네 명이에요.'}}
  ],
  tips: [
    {mk: 'lang', ko: '16~29는 한 단어로 붙여 써요(dieciséis, veintiuno). 31부터는 y로 연결합니다: treinta y uno. 100은 cien, 101부터는 ciento uno가 돼요.'},
    {mk: 'culture', ko: '스페인과 중남미 대부분은 소수점에 쉼표(,), 천 단위에 마침표(.)를 써요. 1.500,50 €는 "천오백 유로 50센트"입니다.'},
    {mk: 'culture', ko: '스페인의 planta baja(0층)는 한국의 1층이에요. primer piso는 한국식 2층이니 엘리베이터 버튼을 볼 때 주의하세요.'}
  ],
  vocab: [
    {es: 'el número', ko: '숫자·번호'}, {es: 'el kilo', ko: '킬로그램'}, {es: 'el gramo', ko: '그램'},
    {es: 'la docena', ko: '다스(12개)'}, {es: 'la mitad', ko: '반·절반'}, {es: 'el trozo', ko: '조각'},
    {es: 'la botella', ko: '병'}, {es: 'la lata', ko: '캔'}, {es: 'el paquete', ko: '봉지·꾸러미'}, {es: 'el par', ko: '켤레·쌍'}
  ],
  quiz: [
    {q: '"quince"는 몇일까?', opts: ['5', '15', '50', '500'], a: 1, ex: 'cinco 5, quince 15, cincuenta 50, quinientos 500.'},
    {q: '45를 스페인어로?', opts: ['cuarenta cinco', 'cuatro cinco', 'cuarenta y cinco', 'cuarentaicinco'], a: 2, ex: '31 이상은 십의 자리 + y + 일의 자리.'},
    {q: '"medio kilo"는?', opts: ['1킬로', '2킬로', '100그램', '반 킬로'], a: 3, ex: 'medio = 절반.'},
    {q: '"세 번째 거리"를 스페인어로?', opts: ['la tercera calle', 'la tres calle', 'la tercer calle', 'la calle tres'], a: 0, ex: '서수 tercero는 여성 명사 앞에서 tercera.'},
    {q: '가격표에 "12,50 €"라고 적혀 있다. 얼마일까?', opts: ['1,250유로', '12유로 50센트', '125유로', '12.5센트'], a: 1, ex: '쉼표는 소수점! doce euros con cincuenta.'}
  ],
  poll: {q: '여행 중 숫자를 가장 많이 듣게 되는 곳은?', opts: ['🛒 시장·마트', '🍽️ 식당 계산', '🏨 호텔 방 번호', '🚆 기차 플랫폼', '🚕 택시 요금']},
  write: {prompt: '시장에서 원하는 물건과 수량을 주문해 보세요.', pattern: 'Quisiera ___ de ___, por favor.', hint: 'un kilo, medio kilo, una docena, dos botellas…', example: 'Quisiera medio kilo de fresas, por favor.'},
  dialog: { title: '과일 가게에서 장보기', lines: [
    {who: 'npc', es: 'Buenos días, ¿qué le pongo?', ko: '안녕하세요, 뭘 드릴까요?'},
    {who: 'me', opts: [
      {es: 'Buenos días. Un kilo de manzanas, por favor.', ko: '안녕하세요. 사과 1킬로 주세요.', ok: true},
      {es: 'Somos cuatro.', ko: '네 명이에요.', ok: false, why: '식당 인원을 말하는 표현이에요.'},
      {es: 'El segundo piso.', ko: '2층이요.', ok: false, why: '과일 가게에서 층수를 말하네요.'}
    ]},
    {who: 'npc', es: 'Aquí tiene. ¿Algo más?', ko: '여기 있습니다. 더 필요한 거 있으세요?'},
    {who: 'me', opts: [
      {es: 'Sí, medio kilo de uvas.', ko: '네, 포도 반 킬로요.', ok: true},
      {es: 'Sí, cien kilos de uvas.', ko: '네, 포도 100킬로요.', ok: false, why: '100킬로는 여행자에게 너무 많아요! cien = 100.'}
    ]},
    {who: 'npc', es: 'Muy bien. Son tres euros con veinte.', ko: '좋아요. 3유로 20센트입니다.'},
    {who: 'me', opts: [
      {es: '¿Treinta euros? ¡Es mucho!', ko: '30유로요? 비싸요!', ok: false, why: 'tres(3)와 treinta(30)를 혼동했어요.'},
      {es: 'Aquí tiene cinco euros.', ko: '여기 5유로요.', ok: true},
      {es: '¿Cuántos quiere?', ko: '몇 개 원하세요?', ok: false, why: '그건 상인이 하는 질문이에요.'}
    ]},
    {who: 'npc', es: 'Gracias. Su cambio: un euro con ochenta.', ko: '감사합니다. 거스름돈 1유로 80센트입니다.'}
  ]}
});

/* ===== 7. 시간과 날짜 ===== */
VAMOS.chapters.push({
  id: 'times', part: 'basics', no: 7, emoji: '🕰️',
  ko: '시간과 날짜', es: 'La hora y las fechas', en: 'Times & Dates', pages: '36–40',
  widget: 'clock',
  scene: '내일 세비야행 기차를 타야 하고, 플라멩코 공연도 예약하고 싶어요. 시각을 묻고 답하고, 요일·월·날짜와 어제·내일을 말하는 법을 익혀요.',
  goals: ['지금 몇 시인지 묻고 답할 수 있다', '요일·월·날짜를 말할 수 있다', '오늘·내일·지난주 등 시간 표현으로 일정을 말할 수 있다'],
  phrases: [
    {es: '¿Qué hora es?', ko: '몇 시예요?', pr: '께 오라 에스', mk: 'qa', ans: {es: 'Son las tres y cuarto.', ko: '3시 15분이에요.'}},
    {es: 'Es la una.', ko: '1시예요.', pr: '에스 라 우나'},
    {es: 'Son las ocho y media.', ko: '8시 반이에요.', pr: '손 라스 오초 이 메디아'},
    {es: 'Son las diez menos cuarto.', ko: '10시 15분 전이에요.(9:45)', pr: '손 라스 디에스 메노스 꾸아르또'},
    {es: '¿A qué hora sale el tren?', ko: '기차가 몇 시에 출발해요?', pr: '아 께 오라 살레 엘 뜨렌', mk: 'qa', ans: {es: 'A las nueve de la mañana.', ko: '오전 9시에요.'}},
    {es: '¿Qué día es hoy?', ko: '오늘 무슨 요일이에요?', pr: '께 디아 에스 오이'},
    {es: 'Hoy es el doce de octubre.', ko: '오늘은 10월 12일이에요.', pr: '오이 에스 엘 도세 데 옥뚜브레'},
    {es: 'mañana por la mañana', ko: '내일 아침', pr: '마냐나 뽀르 라 마냐나', mk: 'short'},
    {es: 'Lunes a viernes', ko: '월요일~금요일', pr: '루네스 아 비에르네스', mk: 'look'},
    {es: 'la semana pasada', ko: '지난주', pr: '라 세마나 빠사다'},
    {es: 'Llega con retraso.', ko: '지연 도착합니다.', pr: '예가 꼰 레뜨라소', mk: 'listen'},
    {es: '¡Ahora mismo!', ko: '지금 당장!', pr: '아오라 미스모', mk: 'short'}
  ],
  tips: [
    {mk: 'lang', ko: '1시만 "Es la una", 나머지는 "Son las + 숫자"예요. 15분은 y cuarto, 30분은 y media, …분 전은 menos를 씁니다.'},
    {mk: 'lang', ko: 'mañana는 "아침"과 "내일" 두 뜻이 있어요. 그래서 "mañana por la mañana" = 내일 아침이 됩니다. 요일과 월 이름은 소문자로 써요.'},
    {mk: 'culture', ko: '기차·공연 시간표는 24시간제(las 20:30)로 표기돼요. 스페인의 점심은 오후 2~3시, 저녁은 9시 이후가 보통이라 식당 시간을 꼭 확인하세요.'}
  ],
  vocab: [
    {es: 'la hora', ko: '시간·시각'}, {es: 'el minuto', ko: '분'}, {es: 'el día', ko: '날·하루'},
    {es: 'la semana', ko: '주'}, {es: 'el mes', ko: '달·월'}, {es: 'el año', ko: '해·년'},
    {es: 'la mañana', ko: '아침·오전'}, {es: 'la tarde', ko: '오후'}, {es: 'la noche', ko: '밤'},
    {es: 'el fin de semana', ko: '주말'}, {es: 'el horario', ko: '시간표'}
  ],
  quiz: [
    {q: '"Son las cuatro y media."는 몇 시?', opts: ['4:15', '4:30', '4:45', '3:30'], a: 1, ex: 'y media = 30분.'},
    {q: '1:00을 올바르게 말한 것은?', opts: ['Son las uno.', 'Es las una.', 'Es la una.', 'Son la una.'], a: 2, ex: '1시만 단수: Es la una.'},
    {q: '"Son las siete menos cuarto."는?', opts: ['7:15', '7:45', '6:15', '6:45'], a: 3, ex: '7시 15분 전 = 6시 45분.'},
    {q: '"내일 아침"은 스페인어로?', opts: ['mañana por la mañana', 'ayer por la noche', 'hoy por la tarde', 'la mañana pasada'], a: 0, ex: 'mañana(내일) + por la mañana(아침에).'},
    {q: '역 전광판에 "con retraso"가 떴다. 의미는?', opts: ['정시', '지연', '취소', '탑승 중'], a: 1, ex: 'retraso = 지연. 취소는 cancelado.'}
  ],
  poll: {q: '여행 중 나는 어떤 타입?', opts: ['🌅 아침형 (8시 전 출발)', '☀️ 느긋한 오전형', '🌇 오후 활동형', '🌙 밤이 진짜 여행', '🛌 시에스타 필수']},
  write: {prompt: '내일 일정을 시간과 함께 써 보세요.', pattern: 'Mañana a las ___ voy a ___.', hint: '시간(diez, tres y media…) + 할 일(visitar, comer…)', example: 'Mañana a las diez voy a visitar la Alhambra.'},
  dialog: { title: '기차역 매표소에서 시간 확인', lines: [
    {who: 'npc', es: 'Buenas tardes. ¿Adónde va?', ko: '안녕하세요. 어디 가세요?'},
    {who: 'me', opts: [
      {es: 'A Sevilla. ¿A qué hora sale el próximo tren?', ko: '세비야요. 다음 기차는 몇 시에 출발해요?', ok: true},
      {es: 'Hoy es lunes.', ko: '오늘은 월요일이에요.', ok: false, why: '목적지를 물었는데 요일을 답했어요.'},
      {es: 'Son las tres.', ko: '3시예요.', ok: false, why: '목적지를 말해야 해요.'}
    ]},
    {who: 'npc', es: 'Sale a las cinco y cuarto y llega a las siete y media.', ko: '5시 15분에 출발해서 7시 반에 도착해요.'},
    {who: 'me', opts: [
      {es: '¿A las cinco menos cuarto?', ko: '4시 45분이요?', ok: false, why: 'y cuarto(15분 후)와 menos cuarto(15분 전)를 혼동했어요.'},
      {es: 'Perfecto. ¿Y mañana por la mañana hay tren?', ko: '좋아요. 그럼 내일 아침에도 기차 있어요?', ok: true}
    ]},
    {who: 'npc', es: 'Sí, mañana hay uno a las ocho y otro a las diez.', ko: '네, 내일 8시에 하나, 10시에 하나 있어요.'},
    {who: 'me', opts: [
      {es: 'La semana pasada, por favor.', ko: '지난주 걸로 주세요.', ok: false, why: '과거의 기차표는 살 수 없어요!'},
      {es: 'Mañana es domingo.', ko: '내일은 일요일이에요.', ok: false, why: '어떤 기차로 할지 선택해야 해요.'},
      {es: 'Un billete para mañana a las diez, por favor.', ko: '내일 10시 표 한 장 주세요.', ok: true}
    ]},
    {who: 'npc', es: 'Aquí tiene. Andén tres. ¡Buen viaje!', ko: '여기 있습니다. 3번 플랫폼이에요. 좋은 여행 되세요!'}
  ]}
});
