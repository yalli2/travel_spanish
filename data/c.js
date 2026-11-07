window.VAMOS = window.VAMOS || {chapters: []};

/* ───────── 19. 사람 만나기 ───────── */
window.VAMOS.chapters.push({
  id: 'meeting', part: 'social', no: 19, emoji: '🤝',
  ko: '사람 만나기', es: 'Conocer gente', en: 'Meeting People', pages: '106–119',
  scene: '마드리드의 게스트하우스 공용 주방에서 다른 여행자를 처음 만났습니다. 인사하고, 이름·국적·직업을 주고받으며 자연스럽게 대화를 이어가 보세요.',
  goals: ['상황에 맞게 인사하고 작별 인사하기', '이름·출신·나이·직업 묻고 답하기', 'tú(반말)와 usted(존댓말) 구분해 쓰기'],
  phrases: [
    {es: '¡Hola! ¿Qué tal?', ko: '안녕! 어떻게 지내?', pr: '올라! 께 딸?', mk: 'short'},
    {es: 'Buenos días.', ko: '좋은 아침이에요. (오전 인사)', pr: '부에노스 디아스'},
    {es: '¿Cómo te llamas?', ko: '이름이 뭐예요? (친근하게)', pr: '꼬모 떼 야마스', mk: 'qa', ans: {es: 'Me llamo Minji. ¿Y tú?', ko: '저는 민지예요. 당신은요?'}},
    {es: 'Mucho gusto.', ko: '만나서 반갑습니다.', pr: '무초 구스또', mk: 'short'},
    {es: '¿De dónde eres?', ko: '어디서 왔어요?', pr: '데 돈데 에레스', mk: 'qa', ans: {es: 'Soy de Corea del Sur, de Seúl.', ko: '한국 서울에서 왔어요.'}},
    {es: '¿A qué te dedicas?', ko: '무슨 일 하세요?', pr: '아 께 떼 데디까스', mk: 'listen'},
    {es: 'Trabajo en una empresa de informática.', ko: 'IT 회사에서 일해요.', pr: '뜨라바호 엔 우나 엠쁘레사 데 인포르마띠까'},
    {es: '¿Cuántos años tienes?', ko: '몇 살이에요?', pr: '꾸안또스 아뇨스 띠에네스', mk: 'listen'},
    {es: '¿Estás casado/casada?', ko: '결혼했어요? (남/여)', pr: '에스따스 까사도/까사다'},
    {es: 'Te presento a mi amiga Laura.', ko: '내 친구 라우라를 소개할게.', pr: '떼 쁘레센또 아 미 아미가 라우라'},
    {es: '¡Hasta luego!', ko: '나중에 봐요! (가벼운 작별)', pr: '아스따 루에고', mk: 'short'},
    {es: 'Señor / Señora / Señorita', ko: '~씨, ~님 (남성 / 기혼·연장 여성 / 젊은 여성)', pr: '세뇨르 / 세뇨라 / 세뇨리따', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '스페인어 "너"는 두 가지예요. 친구·또래에게는 tú, 처음 보는 어른이나 공식적인 자리에서는 usted를 씁니다. 스페인에서는 tú를 꽤 빨리 쓰지만, 중남미 일부 지역은 usted를 더 오래 유지해요.'},
    {mk: 'culture', ko: '스페인에서는 처음 만나도 양 볼에 가볍게 볼 인사(dos besos)를 하는 경우가 많아요. 남성끼리는 보통 악수를 합니다. 어색하면 먼저 손을 내밀어도 실례가 아니에요.'},
    {mk: 'lang', ko: '"Encantado"는 남성 화자, "Encantada"는 여성 화자가 쓰는 "반가워요"예요. 말하는 사람의 성별에 맞춰 어미를 바꿉니다.'}
  ],
  vocab: [
    {es: 'el nombre', ko: '이름'}, {es: 'el apellido', ko: '성'}, {es: 'la edad', ko: '나이'},
    {es: 'el trabajo', ko: '일, 직업'}, {es: 'el estudiante', ko: '학생'}, {es: 'la familia', ko: '가족'},
    {es: 'el hermano', ko: '형제'}, {es: 'la hija', ko: '딸'}, {es: 'el hijo', ko: '아들'},
    {es: 'el país', ko: '나라'}, {es: 'la ciudad', ko: '도시'}, {es: 'el amigo', ko: '친구'}
  ],
  quiz: [
    {q: '처음 만난 나이 많은 호텔 지배인에게 이름을 물을 때 가장 알맞은 표현은?', opts: ['¿Cómo te llamas?', '¿Cómo se llama usted?', '¿Qué tal, tío?', '¿Quién eres tú?'], a: 1, ex: '어른·공식 상황에서는 usted 형태(se llama)가 정중해요.'},
    {q: '"¿De dónde eres?"에 대한 알맞은 대답은?', opts: ['Tengo treinta años.', 'Me llamo Jun.', 'Soy de Corea.', 'Soy profesor.'], a: 2, ex: '출신을 물었으니 "Soy de + 나라"로 답해요.'},
    {q: '여성인 내가 "만나서 반가워요"라고 말할 때?', opts: ['Encantado.', 'Encantadas.', 'Encantados.', 'Encantada.'], a: 3, ex: '여성 화자는 -a로 끝나는 Encantada를 써요.'},
    {q: '"¿A qué te dedicas?"는 무엇을 묻는 질문일까요?', opts: ['직업', '나이', '취미', '주소'], a: 0, ex: 'dedicarse a = ~에 종사하다, 즉 직업을 묻는 표현이에요.'},
    {q: '"Tengo 28 años."의 뜻은?', opts: ['28일에 떠나요.', '저는 28살이에요.', '28년째 일해요.', '형제가 28명이에요.'], a: 1, ex: '스페인어는 나이를 tener(가지다) 동사로 말해요.'}
  ],
  poll: {q: '여행지에서 처음 만난 사람과 대화를 시작할 때 가장 먼저 꺼내는 주제는?', opts: ['🌍 어디서 왔는지', '🗺️ 여행 코스', '🍽️ 맛집 정보', '💼 하는 일', '⚽ 스포츠·취미']},
  write: {prompt: '나를 소개하는 문장을 써 보세요. 이름·출신·직업 중 두 가지 이상을 넣어 보세요.', pattern: 'Me llamo ___ y soy de ___.', hint: '직업은 "Soy + 직업" 또는 "Trabajo en + 장소"로 붙여요.', example: 'Me llamo Jiho y soy de Busan. Soy enfermera.'},
  dialog: {title: '게스트하우스 주방에서 첫 만남', lines: [
    {who: 'npc', es: '¡Hola! Soy Pablo. ¿Y tú, cómo te llamas?', ko: '안녕! 난 파블로야. 너는 이름이 뭐야?'},
    {who: 'me', opts: [
      {es: 'Tengo veinticinco años.', ko: '나는 25살이야.', ok: false, why: '이름을 물었는데 나이로 답했어요.'},
      {es: 'Me llamo Sora. ¡Encantada!', ko: '난 소라야. 반가워!', ok: true},
      {es: '¡Adiós, Pablo!', ko: '잘 가, 파블로!', ok: false, why: '만나자마자 작별 인사는 어색해요.'}
    ]},
    {who: 'npc', es: '¡Igualmente! ¿De dónde eres?', ko: '나도 반가워! 어디서 왔어?'},
    {who: 'me', opts: [
      {es: 'Soy de Corea del Sur. ¿Y tú?', ko: '한국에서 왔어. 너는?', ok: true},
      {es: 'Estoy muy bien, gracias.', ko: '아주 잘 지내, 고마워.', ok: false, why: '안부가 아니라 출신을 물었어요.'}
    ]},
    {who: 'npc', es: 'Yo soy de Sevilla. ¿Y a qué te dedicas?', ko: '나는 세비야 출신이야. 너는 무슨 일 해?'},
    {who: 'me', opts: [
      {es: 'Me dedico a mi familia en Sevilla.', ko: '세비야에서 가족을 돌봐.', ok: false, why: '세비야는 파블로의 고향이지 내 이야기가 아니에요.'},
      {es: 'Me gusta la paella.', ko: '나는 빠에야를 좋아해.', ok: false, why: '직업 질문에 음식 취향으로 답했어요.'},
      {es: 'Soy diseñadora gráfica. ¿Y tú?', ko: '그래픽 디자이너야. 너는?', ok: true}
    ]},
    {who: 'npc', es: 'Soy profesor de música. Bueno, me voy a cenar. ¡Hasta luego!', ko: '나는 음악 선생님이야. 자, 저녁 먹으러 갈게. 나중에 봐!'},
    {who: 'me', opts: [
      {es: '¡Hasta luego, Pablo! ¡Que aproveche!', ko: '나중에 봐, 파블로! 맛있게 먹어!', ok: true},
      {es: '¡Buenos días, Pablo!', ko: '좋은 아침, 파블로!', ok: false, why: '헤어지는 저녁 상황에는 작별 인사가 맞아요.'}
    ]}
  ]}
});

/* ───────── 20. 관심사 ───────── */
window.VAMOS.chapters.push({
  id: 'interests', part: 'social', no: 20, emoji: '🎨',
  ko: '관심사', es: 'Intereses', en: 'Interests', pages: '120–124',
  scene: '바르셀로나 언어교환 모임에 참석했습니다. 취미·음악·영화·책 이야기를 나누며 공통 관심사를 찾아보세요.',
  goals: ['gustar 동사로 좋아하는 것·싫어하는 것 말하기', '여가 시간에 하는 일 묻고 답하기', '음악·영화·책 취향 표현하기'],
  phrases: [
    {es: '¿Qué te gusta hacer en tu tiempo libre?', ko: '여가 시간에 뭐 하는 걸 좋아해?', pr: '께 떼 구스따 아세르 엔 뚜 띠엠뽀 리브레', mk: 'qa', ans: {es: 'Me gusta leer y hacer senderismo.', ko: '책 읽기랑 하이킹을 좋아해.'}},
    {es: 'Me encanta la música latina.', ko: '라틴 음악을 정말 좋아해.', pr: '메 엔깐따 라 무시까 라띠나'},
    {es: 'No me gusta mucho.', ko: '별로 안 좋아해.', pr: '노 메 구스따 무초', mk: 'short'},
    {es: '¿Qué tipo de música escuchas?', ko: '어떤 음악 들어?', pr: '께 띠뽀 데 무시까 에스꾸차스', mk: 'listen'},
    {es: '¿Tocas algún instrumento?', ko: '악기 연주해?', pr: '또까스 알군 인스뜨루멘또', mk: 'qa', ans: {es: 'Sí, toco la guitarra un poco.', ko: '응, 기타를 조금 쳐.'}},
    {es: '¿Has visto alguna película española?', ko: '스페인 영화 본 적 있어?', pr: '아스 비스또 알구나 뻴리꿀라 에스빠뇰라'},
    {es: '¿Quién es tu escritor favorito?', ko: '좋아하는 작가가 누구야?', pr: '끼엔 에스 뚜 에스끄리또르 파보리또'},
    {es: 'A mí también.', ko: '나도 그래. (긍정에 동의)', pr: '아 미 땀비엔', mk: 'short'},
    {es: 'A mí tampoco.', ko: '나도 아니야. (부정에 동의)', pr: '아 미 땀뽀꼬', mk: 'short'},
    {es: 'Taquilla', ko: '매표소', pr: '따끼야', mk: 'look'},
    {es: 'Versión original subtitulada (V.O.S.)', ko: '원어 상영, 자막 있음', pr: '베르시온 오리히날 숩띠뚤라다', mk: 'look'},
    {es: '¿Te apetece ir a un concierto?', ko: '콘서트 갈래?', pr: '떼 아뻬떼세 이르 아 운 꼰시에르또'}
  ],
  tips: [
    {mk: 'lang', ko: 'gustar는 "~가 나에게 즐거움을 준다"는 구조예요. 좋아하는 대상이 하나면 gusta, 여럿이면 gustan을 써요. 예) Me gusta el cine. / Me gustan las películas.'},
    {mk: 'culture', ko: '스페인 영화관은 외국 영화를 더빙(doblada)으로 상영하는 경우가 많아요. 원어로 보고 싶다면 상영표에서 V.O. 또는 V.O.S. 표시를 찾아보세요.'},
    {mk: 'lang', ko: '동의 표현이 헷갈리기 쉬워요. 상대가 "좋아해"라고 하면 A mí también, "안 좋아해"라고 하면 A mí tampoco로 맞장구칩니다.'}
  ],
  vocab: [
    {es: 'el tiempo libre', ko: '여가 시간'}, {es: 'la afición', ko: '취미'}, {es: 'la música', ko: '음악'},
    {es: 'el cine', ko: '영화관, 영화'}, {es: 'la película', ko: '영화 한 편'}, {es: 'el libro', ko: '책'},
    {es: 'la novela', ko: '소설'}, {es: 'el concierto', ko: '콘서트'}, {es: 'la guitarra', ko: '기타'},
    {es: 'el teatro', ko: '연극, 극장'}, {es: 'la fotografía', ko: '사진'}, {es: 'el voluntariado', ko: '자원봉사'}
  ],
  quiz: [
    {q: '"나는 영화들을 좋아해"를 바르게 쓴 것은?', opts: ['Me gusta las películas.', 'Me gustan las películas.', 'Yo gusto las películas.', 'Me gustas las películas.'], a: 1, ex: '대상(las películas)이 복수이므로 gustan이에요.'},
    {q: '친구: "No me gusta el fútbol." — "나도 안 좋아해"라고 맞장구치려면?', opts: ['A mí también.', 'Yo sí.', 'A mí tampoco.', 'Me encanta.'], a: 2, ex: '부정문에 동의할 때는 tampoco를 써요.'},
    {q: '영화관에서 "V.O.S."가 의미하는 것은?', opts: ['매진', '할인 상영', '3D 상영', '원어+자막 상영'], a: 3, ex: 'Versión Original Subtitulada의 약자예요.'},
    {q: '"¿Tocas algún instrumento?"에 알맞은 대답은?', opts: ['Sí, toco el piano.', 'Sí, juego al tenis.', 'Sí, leo novelas.', 'Sí, voy al cine.'], a: 0, ex: '악기를 연주하다는 tocar를 써요.'},
    {q: '"Me encanta"의 뉘앙스로 가장 알맞은 것은?', opts: ['조금 좋아한다', '정말 좋아한다', '싫어한다', '관심 없다'], a: 1, ex: 'encantar는 gustar보다 강한 "아주 좋아하다"예요.'}
  ],
  poll: {q: '스페인어권 여행에서 가장 체험해 보고 싶은 문화 활동은?', opts: ['💃 플라멩코 공연', '🎸 라이브 음악 바', '🎬 현지 영화관', '🏛️ 미술관 투어', '📚 서점·도서관 탐방', '🤝 자원봉사']},
  write: {prompt: '좋아하는 것과 좋아하지 않는 것을 하나씩 써 보세요.', pattern: 'Me gusta ___, pero no me gusta ___.', hint: '동사를 쓰면 원형 그대로: Me gusta bailar.', example: 'Me gusta el cine coreano, pero no me gusta el terror.'},
  dialog: {title: '언어교환 모임에서 취미 이야기', lines: [
    {who: 'npc', es: '¿Y qué te gusta hacer en tu tiempo libre?', ko: '여가 시간엔 뭐 하는 걸 좋아해?'},
    {who: 'me', opts: [
      {es: 'Me gusta mucho la fotografía.', ko: '사진 찍는 걸 아주 좋아해.', ok: true},
      {es: 'Trabajo en un banco.', ko: '은행에서 일해.', ok: false, why: '취미가 아니라 직업을 말했어요.'},
      {es: 'Me gustan la fotografía.', ko: '(문법 오류)', ok: false, why: 'la fotografía는 단수라서 gusta를 써야 해요.'}
    ]},
    {who: 'npc', es: '¡Qué bien! A mí también. ¿Y qué música escuchas?', ko: '좋다! 나도야. 음악은 뭐 들어?'},
    {who: 'me', opts: [
      {es: 'Veo películas de acción.', ko: '액션 영화를 봐.', ok: false, why: '음악 질문에 영화로 답했어요.'},
      {es: 'Escucho K-pop y un poco de reguetón.', ko: 'K팝이랑 레게톤을 조금 들어.', ok: true}
    ]},
    {who: 'npc', es: '¿Reguetón? No me gusta nada, la verdad.', ko: '레게톤? 솔직히 난 전혀 안 좋아해.'},
    {who: 'me', opts: [
      {es: 'A mí tampoco. ¡Es broma!', ko: '나도 안 좋아해. 농담이야!', ok: false, why: '방금 레게톤을 듣는다고 했으니 앞뒤가 안 맞아요.'},
      {es: 'A mí tampoco me gusta la fotografía.', ko: '나도 사진 안 좋아해.', ok: false, why: '대화 주제와 맞지 않고 앞의 말과도 모순이에요.'},
      {es: 'Pues a mí me encanta para bailar.', ko: '난 춤출 때 정말 좋던데.', ok: true}
    ]},
    {who: 'npc', es: 'Vale, vale. Oye, el sábado hay un concierto de flamenco. ¿Te apetece ir?', ko: '알았어. 근데 토요일에 플라멩코 공연 있는데 갈래?'},
    {who: 'me', opts: [
      {es: '¡Sí, me apetece mucho! ¿Dónde es?', ko: '응, 정말 가고 싶어! 어디서 해?', ok: true},
      {es: 'Sí, toco el flamenco.', ko: '응, 나는 플라멩코를 연주해.', ok: false, why: '초대에 대한 답이 아니에요.'}
    ]}
  ]}
});

/* ───────── 21. 감정과 의견 ───────── */
window.VAMOS.chapters.push({
  id: 'feelings', part: 'social', no: 21, emoji: '😊',
  ko: '감정과 의견', es: 'Sentimientos y opiniones', en: 'Feelings & Opinions', pages: '125–129',
  widget: 'feelings',
  scene: '하루 종일 톨레도를 걸어 다닌 뒤, 함께 투어한 사람들과 카페에서 오늘 기분과 감상을 나눕니다. 감정과 의견을 정확하게 표현해 보세요.',
  goals: ['estar + 형용사로 지금 기분 말하기', 'tener 표현(배고픔·추위·졸림 등) 쓰기', '의견을 묻고 동의·반대하기'],
  phrases: [
    {es: '¿Cómo estás?', ko: '기분 어때? / 어떻게 지내?', pr: '꼬모 에스따스', mk: 'qa', ans: {es: 'Un poco cansado, pero contento.', ko: '조금 피곤하지만 기분은 좋아.'}},
    {es: 'Estoy muy feliz.', ko: '정말 행복해.', pr: '에스또이 무이 펠리스'},
    {es: 'Estoy cansado/cansada.', ko: '피곤해. (남/여)', pr: '에스또이 깐사도/깐사다'},
    {es: 'Tengo hambre.', ko: '배고파.', pr: '뗑고 암브레', mk: 'short'},
    {es: 'Tengo frío / calor.', ko: '추워. / 더워.', pr: '뗑고 프리오 / 깔로르'},
    {es: 'Estoy un poco preocupado.', ko: '조금 걱정돼.', pr: '에스또이 운 뽀꼬 쁘레오꾸빠도'},
    {es: '¿Qué te ha parecido?', ko: '어땠어? (감상 묻기)', pr: '께 떼 아 빠레시도', mk: 'qa', ans: {es: '¡Me ha parecido increíble!', ko: '정말 대단했어!'}},
    {es: 'Creo que tienes razón.', ko: '네 말이 맞는 것 같아.', pr: '끄레오 께 띠에네스 라손'},
    {es: 'No estoy de acuerdo.', ko: '동의하지 않아.', pr: '노 에스또이 데 아꾸에르도', mk: 'listen'},
    {es: '¡Qué pena!', ko: '안됐다! / 아쉽다!', pr: '께 뻬나', mk: 'short'},
    {es: '¡Estupendo!', ko: '훌륭해! / 멋져!', pr: '에스뚜뻰도', mk: 'short'},
    {es: 'Me da igual.', ko: '난 상관없어.', pr: '메 다 이구알', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '지금의 기분·상태는 estar로 말해요(Estoy triste). 반면 배고픔·목마름·추위·더위·졸림·무서움은 tener + 명사로 표현합니다(Tengo sueño = 졸려).'},
    {mk: 'lang', ko: '형용사는 말하는 사람의 성별에 맞춰요. 남성은 cansado·contento, 여성은 cansada·contenta. feliz·triste처럼 -e, -z로 끝나는 말은 그대로 씁니다.'},
    {mk: 'culture', ko: '스페인어권에서는 감정을 비교적 솔직하고 크게 표현하는 편이에요. 의견이 다를 때도 열띤 토론을 즐기니, 정중하게 "No estoy de acuerdo, pero…"로 시작하면 좋아요.'}
  ],
  vocab: [
    {es: 'la alegría', ko: '기쁨'}, {es: 'la tristeza', ko: '슬픔'}, {es: 'el miedo', ko: '두려움'},
    {es: 'el sueño', ko: '졸음, 꿈'}, {es: 'la sed', ko: '목마름'}, {es: 'el hambre', ko: '배고픔'},
    {es: 'la opinión', ko: '의견'}, {es: 'el problema', ko: '문제'}, {es: 'el medio ambiente', ko: '환경'},
    {es: 'la sorpresa', ko: '놀람'}, {es: 'el estrés', ko: '스트레스'}
  ],
  quiz: [
    {q: '"나 졸려"를 스페인어로?', opts: ['Estoy sueño.', 'Soy sueño.', 'Tengo sueño.', 'Hago sueño.'], a: 2, ex: '졸림은 tener + sueño로 표현해요.'},
    {q: '여성 화자가 "나 피곤해"라고 할 때?', opts: ['Estoy cansada.', 'Soy cansado.', 'Tengo cansada.', 'Estoy cansado.'], a: 0, ex: '지금 상태는 estar, 여성은 -a 형태예요.'},
    {q: '"No estoy de acuerdo."의 뜻은?', opts: ['잘 모르겠어.', '상관없어.', '정말 좋아.', '동의하지 않아.'], a: 3, ex: 'estar de acuerdo = 동의하다.'},
    {q: '친구가 기차를 놓쳤다고 할 때 알맞은 반응은?', opts: ['¡Estupendo!', '¡Qué pena!', '¡Qué guay!', 'Me encanta.'], a: 1, ex: '안타까운 소식에는 ¡Qué pena!'},
    {q: '"Me da igual."은 어떤 상황에서 쓸까요?', opts: ['선택이 상관없을 때', '깜짝 놀랐을 때', '화가 났을 때', '감사할 때'], a: 0, ex: '"어느 쪽이든 괜찮아"라는 뜻이에요.'}
  ],
  poll: {q: '지금 이 순간, 여러분의 기분은?', opts: ['😄 Feliz (행복)', '😌 Tranquilo/a (편안)', '😴 Cansado/a (피곤)', '🤩 Emocionado/a (설렘)', '😰 Nervioso/a (긴장)', '🤔 Confundido/a (헷갈림)']},
  write: {prompt: '오늘 기분과 그 이유를 한 문장으로 써 보세요.', pattern: 'Hoy estoy ___ porque ___.', hint: 'porque(왜냐하면) 뒤에는 완전한 문장을 써요.', example: 'Hoy estoy contenta porque es viernes.'},
  dialog: {title: '투어 후 카페에서 감상 나누기', lines: [
    {who: 'npc', es: '¡Uf, qué día! ¿Cómo estás?', ko: '휴, 대단한 하루였어! 기분 어때?'},
    {who: 'me', opts: [
      {es: 'Soy cansado.', ko: '(문법 오류)', ok: false, why: '일시적인 상태는 ser가 아니라 estar를 써요.'},
      {es: 'Estoy cansado, pero muy contento.', ko: '피곤하지만 아주 기분 좋아.', ok: true}
    ]},
    {who: 'npc', es: 'Yo también. ¿Qué te ha parecido la catedral?', ko: '나도. 대성당은 어땠어?'},
    {who: 'me', opts: [
      {es: 'Tengo hambre.', ko: '배고파.', ok: false, why: '감상을 물었는데 상태만 말했어요.'},
      {es: 'No estoy de acuerdo.', ko: '동의하지 않아.', ok: false, why: '상대가 의견을 말한 게 아니라 질문했어요.'},
      {es: '¡Me ha parecido impresionante!', ko: '정말 인상적이었어!', ok: true}
    ]},
    {who: 'npc', es: 'Sí, pero para mí, el museo fue un poco aburrido.', ko: '응, 근데 나한텐 박물관이 좀 지루했어.'},
    {who: 'me', opts: [
      {es: 'No estoy de acuerdo, a mí me gustó mucho.', ko: '난 생각이 달라, 난 아주 좋았어.', ok: true},
      {es: '¡Estupendo! Es aburrido.', ko: '멋져! 지루해.', ok: false, why: '감탄과 내용이 서로 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Bueno, cada uno tiene su opinión. ¿Pedimos algo? Tengo mucha sed.', ko: '뭐, 각자 생각이 있지. 뭐 시킬까? 너무 목말라.'},
    {who: 'me', opts: [
      {es: 'Me da igual, eres cansado.', ko: '상관없어, 너는 피곤한 사람이야.', ok: false, why: '무례하고 문법도 틀렸어요.'},
      {es: 'Sí, yo también tengo sed. ¡Dos limonadas!', ko: '응, 나도 목말라. 레모네이드 두 잔!', ok: true}
    ]}
  ]}
});

/* ───────── 22. 외출·약속 ───────── */
window.VAMOS.chapters.push({
  id: 'goingout', part: 'social', no: 22, emoji: '🌃',
  ko: '외출·약속', es: 'Salir', en: 'Going Out', pages: '130–135',
  scene: '발렌시아에서 사귄 현지 친구가 오늘 밤 함께 나가자고 합니다. 갈 곳을 정하고, 초대에 응하거나 거절하고, 만날 시간과 장소를 약속해 보세요.',
  goals: ['오늘 밤 갈 만한 곳 묻기', '초대하고, 수락·거절하기', '만날 시간과 장소 정하기'],
  phrases: [
    {es: '¿Qué hay para hacer esta noche?', ko: '오늘 밤 뭐 할 만한 거 있어?', pr: '께 아이 빠라 아세르 에스따 노체'},
    {es: '¿Dónde se puede ir de copas?', ko: '한잔하러 어디 갈 수 있어?', pr: '돈데 세 뿌에데 이르 데 꼬빠스'},
    {es: '¿Quieres salir conmigo esta noche?', ko: '오늘 밤 나랑 나갈래?', pr: '끼에레스 살리르 꼰미고 에스따 노체', mk: 'qa', ans: {es: '¡Claro! ¿A qué hora?', ko: '물론이지! 몇 시에?'}},
    {es: '¡Me encantaría!', ko: '정말 좋아! (초대 수락)', pr: '메 엔깐따리아', mk: 'short'},
    {es: 'Lo siento, no puedo.', ko: '미안, 못 가.', pr: '로 시엔또, 노 뿌에도', mk: 'short'},
    {es: '¿Quedamos a las nueve?', ko: '9시에 만날까?', pr: '께다모스 아 라스 누에베', mk: 'qa', ans: {es: 'Mejor a las diez, ¿vale?', ko: '10시가 더 좋아, 괜찮지?'}},
    {es: '¿Dónde quedamos?', ko: '어디서 만날까?', pr: '돈데 께다모스'},
    {es: 'Nos vemos en la entrada del metro.', ko: '지하철 입구에서 보자.', pr: '노스 베모스 엔 라 엔뜨라다 델 메뜨로'},
    {es: 'Llego un poco tarde.', ko: '나 조금 늦어.', pr: '예고 운 뽀꼬 따르데'},
    {es: 'Entrada libre', ko: '무료 입장', pr: '엔뜨라다 리브레', mk: 'look'},
    {es: '¿Tienes planes para el fin de semana?', ko: '주말에 계획 있어?', pr: '띠에네스 쁠라네스 빠라 엘 핀 데 세마나', mk: 'listen'},
    {es: 'Te invito yo.', ko: '내가 살게.', pr: '떼 인비또 요', mk: 'listen'}
  ],
  tips: [
    {mk: 'culture', ko: '스페인의 밤은 늦게 시작해요. 저녁 식사가 밤 9~10시, 바나 클럽은 자정 넘어서야 붐비는 일이 흔합니다. 약속 시간을 정할 때 이 리듬을 고려하세요.'},
    {mk: 'lang', ko: 'quedar은 "(만나기로) 약속하다"라는 뜻으로 아주 자주 써요. ¿Quedamos? = 만날까?, Hemos quedado a las ocho. = 8시에 만나기로 했어.'},
    {mk: 'culture', ko: '"Te invito"는 "내가 낼게"라는 의미가 담겨 있어요. 친구끼리는 돌아가며 한 잔씩 사는(pagar una ronda) 문화도 흔합니다.'}
  ],
  vocab: [
    {es: 'el bar', ko: '바'}, {es: 'la discoteca', ko: '클럽, 나이트'}, {es: 'el concierto', ko: '콘서트'},
    {es: 'la fiesta', ko: '파티, 축제'}, {es: 'la entrada', ko: '입장권; 입구'}, {es: 'la cita', ko: '약속, 데이트'},
    {es: 'el plan', ko: '계획'}, {es: 'la noche', ko: '밤'}, {es: 'el fin de semana', ko: '주말'},
    {es: 'la invitación', ko: '초대'}, {es: 'la cola', ko: '줄 (대기열)'}
  ],
  quiz: [
    {q: '"9시에 만날까?"를 스페인어로?', opts: ['¿Quedamos a las nueve?', '¿Somos a las nueve?', '¿Tenemos las nueve?', '¿Vamos nueve?'], a: 0, ex: 'quedar = 만나기로 하다.'},
    {q: '초대를 정중하게 거절하는 표현은?', opts: ['¡Me encantaría!', 'Te invito yo.', 'Lo siento, no puedo.', '¡Claro que sí!'], a: 2, ex: 'Lo siento(미안해) + no puedo(할 수 없어).'},
    {q: '"Entrada libre" 표지판의 뜻은?', opts: ['출입 금지', '입구 없음', '자유석', '무료 입장'], a: 3, ex: 'libre는 "자유로운, 무료의"라는 뜻이에요.'},
    {q: '스페인에서 친구가 "Te invito yo"라고 했다면?', opts: ['나를 파티에 초대했다', '내가 계산하겠다는 뜻', '나를 기다리겠다', '늦는다는 뜻'], a: 1, ex: 'invitar는 "한턱내다"의 의미로도 쓰여요.'},
    {q: '"¿Dónde quedamos?"에 알맞은 대답은?', opts: ['A las diez.', 'Sí, me gusta.', 'En la plaza Mayor.', 'Lo siento.'], a: 2, ex: '장소를 물었으니 장소로 답해요.'}
  ],
  poll: {q: '스페인어권 도시에서 보내고 싶은 밤은?', opts: ['🍷 타파스 바 투어', '🎶 라이브 공연', '💃 살사·클럽', '🌅 야경 산책', '🎭 극장·뮤지컬', '🛏️ 일찍 자기']},
  write: {prompt: '친구를 초대하는 문장을 써 보세요. 활동과 시간을 넣어 보세요.', pattern: '¿Quieres ___ conmigo ___?', hint: '시간: esta noche(오늘 밤), el sábado(토요일에), mañana(내일)', example: '¿Quieres ir a un concierto conmigo el sábado?'},
  dialog: {title: '현지 친구와 오늘 밤 약속 잡기', lines: [
    {who: 'npc', es: 'Oye, ¿tienes planes para esta noche?', ko: '야, 오늘 밤 계획 있어?'},
    {who: 'me', opts: [
      {es: 'No, nada. ¿Por qué?', ko: '아니, 없어. 왜?', ok: true},
      {es: 'Lo siento, son las nueve.', ko: '미안, 9시야.', ok: false, why: '질문과 상관없는 대답이에요.'}
    ]},
    {who: 'npc', es: 'Hay un concierto de jazz en el centro. ¿Quieres venir?', ko: '시내에서 재즈 공연이 있어. 같이 갈래?'},
    {who: 'me', opts: [
      {es: 'Entrada libre.', ko: '무료 입장.', ok: false, why: '표지판 문구지, 초대에 대한 대답이 아니에요.'},
      {es: '¡Me encantaría! ¿A qué hora empieza?', ko: '정말 좋아! 몇 시에 시작해?', ok: true},
      {es: 'Te invito yo al jazz.', ko: '재즈는 내가 살게.', ok: false, why: '초대받은 쪽이 갑자기 한턱낸다는 건 흐름에 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'A las once. ¿Quedamos a las diez y media para tomar algo antes?', ko: '11시. 그 전에 뭐 좀 마시게 10시 반에 만날까?'},
    {who: 'me', opts: [
      {es: 'Vale, perfecto. ¿Dónde quedamos?', ko: '좋아, 완벽해. 어디서 만날까?', ok: true},
      {es: 'No estoy de acuerdo con el jazz.', ko: '재즈에 동의하지 않아.', ok: false, why: '약속 시간 제안에 맞지 않는 반응이에요.'}
    ]},
    {who: 'npc', es: 'En la entrada del metro Colón. ¡No llegues tarde!', ko: '콜론 지하철역 입구에서. 늦지 마!'},
    {who: 'me', opts: [
      {es: 'Hasta luego, ¿quedamos mañana?', ko: '나중에 봐, 내일 만날까?', ok: false, why: '방금 오늘 밤 약속을 잡았어요.'},
      {es: '¡Tranquilo! Nos vemos allí a las diez y media.', ko: '걱정 마! 10시 반에 거기서 봐.', ok: true}
    ]}
  ]}
});

/* ───────── 23. 로맨스 ───────── */
window.VAMOS.chapters.push({
  id: 'romance', part: 'social', no: 23, emoji: '💌',
  ko: '로맨스', es: 'Romance', en: 'Romance', pages: '136–139',
  scene: '여행 중 마음이 잘 맞는 사람을 만났습니다. 예의 바르게 데이트를 제안하고, 칭찬하고, 거절할 때도 상대를 존중하는 표현을 익혀 보세요.',
  goals: ['정중하게 커피·데이트 제안하기', '칭찬과 호감 표현하기', '부드럽게 거절하고 거절 받아들이기'],
  phrases: [
    {es: '¿Te apetece tomar un café?', ko: '커피 한잔할래?', pr: '떼 아뻬떼세 또마르 운 까페', mk: 'qa', ans: {es: 'Sí, me encantaría.', ko: '응, 좋아.'}},
    {es: '¿Puedo invitarte a cenar?', ko: '저녁 대접해도 될까?', pr: '뿌에도 인비따르떼 아 세나르'},
    {es: 'Me caes muy bien.', ko: '너 정말 좋은 사람 같아. (호감)', pr: '메 까에스 무이 비엔', mk: 'short'},
    {es: 'Tienes una sonrisa preciosa.', ko: '미소가 정말 예뻐.', pr: '띠에네스 우나 손리사 쁘레시오사'},
    {es: 'Me lo paso muy bien contigo.', ko: '너랑 있으면 정말 즐거워.', pr: '메 로 빠소 무이 비엔 꼰띠고'},
    {es: '¿Me das tu número?', ko: '번호 알려줄래?', pr: '메 다스 뚜 누메로', mk: 'qa', ans: {es: 'Mejor te sigo en Instagram.', ko: '차라리 인스타 팔로우할게.'}},
    {es: 'Gracias, pero tengo pareja.', ko: '고맙지만 애인이 있어요.', pr: '그라시아스, 뻬로 뗑고 빠레하', mk: 'listen'},
    {es: 'No, gracias. No me interesa.', ko: '아니요, 괜찮아요. 관심 없어요.', pr: '노, 그라시아스. 노 메 인떼레사', mk: 'listen'},
    {es: 'Lo entiendo, no pasa nada.', ko: '이해해, 괜찮아.', pr: '로 엔띠엔도, 노 빠사 나다'},
    {es: 'Te echo de menos.', ko: '보고 싶어.', pr: '떼 에초 데 메노스'},
    {es: 'Te quiero.', ko: '사랑해. / 좋아해.', pr: '떼 끼에로', mk: 'short'},
    {es: 'cariño / mi amor', ko: '자기야 / 내 사랑 (애칭)', pr: '까리뇨 / 미 아모르', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '"Te quiero"는 연인뿐 아니라 가족·친한 친구에게도 쓰는 따뜻한 말이에요. "Te amo"는 훨씬 깊고 진지한 사랑 고백이라 사용이 드뭅니다.'},
    {mk: 'lang', ko: '"Me caes bien"은 "너 괜찮은 사람이야, 마음에 들어"라는 호감 표현으로 연애 감정 없이도 써요. 반대는 "Me caes mal"(별로야).'},
    {mk: 'culture', ko: '스페인어권에서는 cariño, guapo/guapa 같은 애칭을 일상에서 자주 써요. 가게 주인이 손님을 cariño라고 부르는 것도 흔하니 너무 놀라지 마세요. 다만 상대가 거절하면 깔끔하게 받아들이는 것이 기본 매너입니다.'}
  ],
  vocab: [
    {es: 'la cita', ko: '데이트'}, {es: 'la pareja', ko: '커플, 애인'}, {es: 'el novio', ko: '남자친구'},
    {es: 'la novia', ko: '여자친구'}, {es: 'el beso', ko: '키스, 볼 인사'}, {es: 'el abrazo', ko: '포옹'},
    {es: 'el amor', ko: '사랑'}, {es: 'la sonrisa', ko: '미소'}, {es: 'el corazón', ko: '마음, 심장'},
    {es: 'la boda', ko: '결혼식'}
  ],
  quiz: [
    {q: '"너랑 있으면 즐거워"에 가장 가까운 표현은?', opts: ['Me caes mal.', 'Me lo paso muy bien contigo.', 'No me interesa.', 'Te echo de menos.'], a: 1, ex: 'pasarlo bien = 즐거운 시간을 보내다.'},
    {q: '"Te echo de menos."의 뜻은?', opts: ['보고 싶어.', '너를 잊었어.', '조금만 기다려.', '사랑해.'], a: 0, ex: 'echar de menos = 그리워하다.'},
    {q: '데이트 제안을 정중하게 거절하는 표현은?', opts: ['¡Me encantaría!', 'Te quiero.', 'Gracias, pero tengo pareja.', '¿Me das tu número?'], a: 2, ex: '감사 표현 + 이유로 부드럽게 거절해요.'},
    {q: '"Te quiero"를 쓸 수 있는 대상이 아닌 것은?', opts: ['연인', '엄마', '오래된 친구', '처음 본 매표소 직원'], a: 3, ex: 'Te quiero는 가까운 사람에게 쓰는 애정 표현이에요.'},
    {q: '상대가 거절했을 때 매너 있는 반응은?', opts: ['¿Por qué no?', 'Lo entiendo, no pasa nada.', '¡Qué guay!', 'Te quiero.'], a: 1, ex: '"이해해, 괜찮아"로 존중을 표현해요.'}
  ],
  poll: {q: '여행지에서 새로운 사람과 친해지기 가장 좋은 장소는?', opts: ['☕ 카페', '🏨 호스텔 라운지', '🚶 워킹 투어', '🍷 와인 바', '🗣️ 언어교환 모임']},
  write: {prompt: '여행에서 만난 친구에게 남길 다정한 메시지를 써 보세요.', pattern: 'Me lo paso muy bien contigo. ___', hint: '¿Quedamos mañana? / Te echo de menos. 등을 붙여 보세요.', example: 'Me lo paso muy bien contigo. ¿Tomamos un café mañana?'},
  dialog: {title: '여행 친구에게 커피 제안하기', lines: [
    {who: 'npc', es: 'Bueno, la visita guiada ha terminado. ¡Qué rápido!', ko: '자, 가이드 투어 끝났네. 정말 빠르다!'},
    {who: 'me', opts: [
      {es: 'Sí. Oye, ¿te apetece tomar un café?', ko: '응. 저기, 커피 한잔할래?', ok: true},
      {es: 'Te quiero, mi amor.', ko: '사랑해, 내 사랑.', ok: false, why: '방금 만난 사이에 너무 갑작스러워요.'}
    ]},
    {who: 'npc', es: '¡Vale! Conozco un sitio muy bonito aquí cerca.', ko: '좋아! 근처에 정말 예쁜 곳을 알아.'},
    {who: 'me', opts: [
      {es: 'No, gracias. No me interesa.', ko: '아니요, 관심 없어요.', ok: false, why: '내가 제안해 놓고 거절하는 셈이에요.'},
      {es: '¡Perfecto! Vamos.', ko: '완벽해! 가자.', ok: true}
    ]},
    {who: 'npc', es: 'Me caes muy bien. Me lo he pasado genial hoy.', ko: '너 정말 좋은 사람 같아. 오늘 너무 즐거웠어.'},
    {who: 'me', opts: [
      {es: 'Me caes mal.', ko: '너 별로야.', ok: false, why: '호감 표현에 대한 무례한 반응이에요.'},
      {es: 'Lo siento, no puedo.', ko: '미안, 못 해.', ok: false, why: '칭찬에 대한 답이 아니에요.'},
      {es: 'Yo también. ¿Me das tu número para quedar otro día?', ko: '나도. 다음에 또 보게 번호 줄래?', ok: true}
    ]},
    {who: 'npc', es: 'Claro, apunta: seis, uno, dos… ¡Escríbeme!', ko: '물론이지, 적어: 6, 1, 2… 연락해!'},
    {who: 'me', opts: [
      {es: '¡Te escribo esta noche! Hasta pronto.', ko: '오늘 밤에 연락할게! 곧 보자.', ok: true},
      {es: 'Gracias, pero tengo pareja.', ko: '고맙지만 애인이 있어.', ok: false, why: '번호를 달라고 한 건 나였으니 앞뒤가 안 맞아요.'}
    ]}
  ]}
});

/* ───────── 24. 종교와 문화 ───────── */
window.VAMOS.chapters.push({
  id: 'beliefs', part: 'social', no: 24, emoji: '⛪',
  ko: '종교와 문화', es: 'Creencias y cultura', en: 'Beliefs & Culture', pages: '140–141',
  scene: '세비야의 성주간(Semana Santa) 기간에 도착했습니다. 현지인과 종교·전통·문화 차이에 대해 서로 존중하며 이야기 나눠 보세요.',
  goals: ['종교·신념을 묻고 정중하게 답하기', '문화 차이와 관습에 대해 묻기', '축제·전통에 관심 표현하기'],
  phrases: [
    {es: '¿Eres religioso/religiosa?', ko: '종교가 있어요? (남/여)', pr: '에레스 렐리히오소/렐리히오사', mk: 'qa', ans: {es: 'No mucho, pero respeto todas las creencias.', ko: '별로요, 하지만 모든 신념을 존중해요.'}},
    {es: 'Soy budista / católico / protestante.', ko: '저는 불교 / 가톨릭 / 개신교 신자예요.', pr: '소이 부디스따 / 까똘리꼬 / 쁘로떼스딴떼'},
    {es: 'No soy religioso.', ko: '종교가 없어요.', pr: '노 소이 렐리히오소'},
    {es: '¿Es costumbre aquí…?', ko: '여기서는 ~하는 게 관습인가요?', pr: '에스 꼬스뚬브레 아끼', mk: 'short'},
    {es: '¿Puedo entrar en la iglesia?', ko: '성당에 들어가도 되나요?', pr: '뿌에도 엔뜨라르 엔 라 이글레시아'},
    {es: '¿Se pueden hacer fotos?', ko: '사진 찍어도 되나요?', pr: '세 뿌에덴 아세르 포또스', mk: 'qa', ans: {es: 'Sí, pero sin flash.', ko: '네, 하지만 플래시는 안 돼요.'}},
    {es: 'Silencio, por favor', ko: '정숙해 주세요', pr: '실렌시오, 뽀르 파보르', mk: 'look'},
    {es: 'Se ruega vestimenta adecuada', ko: '단정한 복장을 부탁드립니다', pr: '세 루에가 베스띠멘따 아데꾸아다', mk: 'look'},
    {es: 'Lo siento, no lo sabía.', ko: '죄송해요, 몰랐어요.', pr: '로 시엔또, 노 로 사비아', mk: 'short'},
    {es: '¿Qué se celebra hoy?', ko: '오늘은 무슨 날이에요?', pr: '께 세 셀레브라 오이', mk: 'listen'},
    {es: 'En Corea celebramos el Chuseok.', ko: '한국에서는 추석을 기념해요.', pr: '엔 꼬레아 셀레브라모스 엘 추석'}
  ],
  tips: [
    {mk: 'culture', ko: '스페인과 중남미에는 가톨릭 전통에서 비롯된 축제가 많아요. 성주간(Semana Santa) 행렬이나 수호성인 축일(fiesta patronal)에는 거리 통제와 휴업이 있으니 일정을 미리 확인하세요.'},
    {mk: 'culture', ko: '성당은 관광지이기 전에 예배 공간이에요. 미사 중에는 관람이 제한될 수 있고, 어깨와 무릎을 가리는 복장을 권장하는 곳이 많습니다.'},
    {mk: 'lang', ko: '종교는 민감한 주제라 처음부터 깊게 묻기보다 "¿Qué se celebra hoy?"처럼 축제·전통을 묻는 것으로 대화를 여는 게 자연스러워요.'}
  ],
  vocab: [
    {es: 'la religión', ko: '종교'}, {es: 'la iglesia', ko: '교회, 성당'}, {es: 'la catedral', ko: '대성당'},
    {es: 'la misa', ko: '미사'}, {es: 'el templo', ko: '사원, 절'}, {es: 'la costumbre', ko: '관습'},
    {es: 'la tradición', ko: '전통'}, {es: 'la procesión', ko: '종교 행렬'}, {es: 'la fiesta', ko: '축제'},
    {es: 'la creencia', ko: '신념, 믿음'}
  ],
  quiz: [
    {q: '"Se ruega vestimenta adecuada" 안내문의 뜻은?', opts: ['입장료 있음', '사진 촬영 금지', '단정한 복장 요청', '음식물 반입 금지'], a: 2, ex: 'vestimenta = 복장, adecuada = 알맞은.'},
    {q: '모르고 실수했을 때 사과하는 표현은?', opts: ['Lo siento, no lo sabía.', 'Me da igual.', '¡Qué guay!', 'Sin flash.'], a: 0, ex: '"죄송해요, 몰랐어요."'},
    {q: '"종교가 없어요"를 스페인어로?', opts: ['No tengo iglesia.', 'Soy católico.', 'No soy fiesta.', 'No soy religioso.'], a: 3, ex: 'religioso/a = 종교적인, 신앙이 있는.'},
    {q: '축제 기간 현지인에게 자연스럽게 물을 수 있는 말은?', opts: ['¿Eres rico?', '¿Qué se celebra hoy?', '¿Cuántos años tienes?', '¿Estás casado?'], a: 1, ex: '오늘 무엇을 기념하는지 묻는 열린 질문이에요.'},
    {q: '"Semana Santa"는 무엇일까요?', opts: ['부활절 전 성주간', '크리스마스 연휴', '여름 휴가철', '독립기념일'], a: 0, ex: '부활절 직전 한 주로, 스페인 곳곳에서 행렬이 열려요.'}
  ],
  poll: {q: '스페인어권 축제 중 가장 가 보고 싶은 것은?', opts: ['✝️ 세비야 성주간', '🍅 부뇰 토마티나', '🎆 발렌시아 파야스', '🐂 팜플로나 산 페르민', '💀 멕시코 망자의 날', '🎭 바랑키야 카니발']},
  write: {prompt: '한국의 명절이나 전통 하나를 스페인어로 소개해 보세요.', pattern: 'En Corea celebramos ___. Es una fiesta ___.', hint: '형용사: familiar(가족적인), tradicional(전통적인), importante(중요한)', example: 'En Corea celebramos el Seollal. Es una fiesta muy familiar.'},
  dialog: {title: '성주간 행렬을 보며 현지인과 대화', lines: [
    {who: 'npc', es: '¿Es la primera vez que ves una procesión?', ko: '행렬 보는 거 처음이에요?'},
    {who: 'me', opts: [
      {es: 'Sí, es la primera vez. ¿Qué se celebra hoy?', ko: '네, 처음이에요. 오늘은 무슨 날이에요?', ok: true},
      {es: 'Sí, soy la procesión.', ko: '네, 제가 행렬이에요.', ok: false, why: '의미가 통하지 않는 문장이에요.'}
    ]},
    {who: 'npc', es: 'Es el Jueves Santo, uno de los días más importantes. ¿En tu país es costumbre algo parecido?', ko: '성목요일이에요. 가장 중요한 날 중 하나죠. 당신 나라에도 비슷한 관습이 있어요?'},
    {who: 'me', opts: [
      {es: 'Se pueden hacer fotos, sin flash.', ko: '사진은 찍을 수 있어요, 플래시 없이.', ok: false, why: '질문과 관계없는 대답이에요.'},
      {es: 'No mucho, pero en Corea celebramos el cumpleaños de Buda con faroles.', ko: '별로요, 하지만 한국에서는 연등으로 부처님 오신 날을 기념해요.', ok: true},
      {es: 'Me da igual tu país.', ko: '당신 나라는 상관없어요.', ok: false, why: '무례한 표현이에요.'}
    ]},
    {who: 'npc', es: '¡Qué bonito! ¿Eres budista?', ko: '정말 멋지네요! 불교 신자예요?'},
    {who: 'me', opts: [
      {es: 'No soy religioso, pero me gustan las tradiciones.', ko: '종교는 없지만 전통을 좋아해요.', ok: true},
      {es: 'Silencio, por favor.', ko: '조용히 해 주세요.', ok: false, why: '대화 상대에게 갑자기 정숙을 요구하는 건 어색해요.'}
    ]},
    {who: 'npc', es: 'Pues mañana puedes visitar la catedral, pero recuerda: hombros cubiertos.', ko: '그럼 내일 대성당에 가 봐요. 단, 어깨는 가려야 해요.'},
    {who: 'me', opts: [
      {es: 'Gracias por el consejo. ¡Lo tendré en cuenta!', ko: '조언 고마워요. 꼭 기억할게요!', ok: true},
      {es: 'No estoy de acuerdo, voy en camiseta de tirantes.', ko: '동의 안 해요, 민소매로 갈 거예요.', ok: false, why: '현지 관습을 존중하지 않는 태도예요.'}
    ]}
  ]}
});

/* ───────── 25. 스포츠 ───────── */
window.VAMOS.chapters.push({
  id: 'sports', part: 'social', no: 25, emoji: '⚽',
  ko: '스포츠', es: 'Deportes', en: 'Sports', pages: '142–146',
  scene: '마드리드에서 축구 경기를 직관하기로 했습니다. 좋아하는 스포츠를 이야기하고, 경기 티켓을 사고, 응원하며 결과를 물어보세요.',
  goals: ['좋아하는 스포츠 묻고 답하기 (jugar / hacer / ver)', '경기 표 구매하고 좌석 묻기', '응원 구호와 점수 표현하기'],
  phrases: [
    {es: '¿Te gusta el fútbol?', ko: '축구 좋아해?', pr: '떼 구스따 엘 풋볼', mk: 'qa', ans: {es: '¡Me encanta! Soy del Atlético.', ko: '정말 좋아해! 난 아틀레티코 팬이야.'}},
    {es: '¿Qué deporte practicas?', ko: '무슨 운동 해?', pr: '께 데뽀르떼 쁘락띠까스'},
    {es: 'Juego al tenis los fines de semana.', ko: '주말마다 테니스를 쳐.', pr: '후에고 알 떼니스 로스 피네스 데 세마나'},
    {es: '¿De qué equipo eres?', ko: '어느 팀 팬이야?', pr: '데 께 에끼뽀 에레스', mk: 'listen'},
    {es: '¿Cuánto cuesta una entrada?', ko: '표 한 장에 얼마예요?', pr: '꾸안또 꾸에스따 우나 엔뜨라다'},
    {es: '¿Quién juega?', ko: '누가 경기해?', pr: '끼엔 후에가', mk: 'qa', ans: {es: 'El Real Madrid contra el Sevilla.', ko: '레알 마드리드 대 세비야.'}},
    {es: '¿Cómo van?', ko: '지금 스코어 어때?', pr: '꼬모 반', mk: 'listen'},
    {es: '¡Gol!', ko: '골!', pr: '골', mk: 'short'},
    {es: '¡Vamos, vamos!', ko: '가자, 힘내!', pr: '바모스, 바모스', mk: 'short'},
    {es: 'Van empatados uno a uno.', ko: '1대1 동점이야.', pr: '반 엠빠따도스 우노 아 우노'},
    {es: 'Taquillas – Venta de entradas', ko: '매표소 – 입장권 판매', pr: '따끼야스 – 벤따 데 엔뜨라다스', mk: 'look'},
    {es: '¡Qué partidazo!', ko: '정말 끝내주는 경기다!', pr: '께 빠르띠다소'}
  ],
  tips: [
    {mk: 'lang', ko: '운동 종목에 따라 동사가 달라요. 공놀이 경기는 jugar a(Juego al fútbol), 개인 운동은 hacer(Hago yoga), 보는 것은 ver(Veo el partido)를 씁니다.'},
    {mk: 'culture', ko: '스페인과 중남미에서 축구는 거의 종교에 가까워요. 경기장에서 상대 팀 유니폼을 입거나, 지역 라이벌 이야기를 가볍게 꺼내는 것은 조심하세요.'},
    {mk: 'lang', ko: '스페인어 접미사 -azo는 "대단한, 엄청난"이라는 강조 의미를 더해요. partido(경기) → partidazo(대박 경기), gol → golazo(환상적인 골).'}
  ],
  vocab: [
    {es: 'el partido', ko: '경기'}, {es: 'el equipo', ko: '팀'}, {es: 'el jugador', ko: '선수'},
    {es: 'el estadio', ko: '경기장'}, {es: 'la entrada', ko: '입장권'}, {es: 'el gol', ko: '골'},
    {es: 'el árbitro', ko: '심판'}, {es: 'la afición', ko: '팬들, 서포터'}, {es: 'el empate', ko: '무승부'},
    {es: 'la pelota', ko: '공'}, {es: 'la bicicleta', ko: '자전거'}
  ],
  quiz: [
    {q: '"나는 축구를 해"를 바르게 쓴 것은?', opts: ['Hago al fútbol.', 'Juego al fútbol.', 'Veo al fútbol.', 'Soy al fútbol.'], a: 1, ex: '공을 쓰는 경기는 jugar a를 써요.'},
    {q: '"¿De qué equipo eres?"의 뜻은?', opts: ['어느 팀 팬이야?', '어느 팀이 이겼어?', '팀이 몇 개야?', '어느 경기장이야?'], a: 0, ex: 'ser de + 팀 = ~의 팬이다.'},
    {q: '"Van empatados dos a dos."는?', opts: ['2대0으로 이기는 중', '2분 남았다', '두 팀이 떠났다', '2대2 동점'], a: 3, ex: 'empatado = 동점인.'},
    {q: '"golazo"의 의미는?', opts: ['자책골', '취소된 골', '환상적인 골', '골키퍼'], a: 2, ex: '-azo는 "엄청난"이라는 강조 접미사예요.'},
    {q: '요가를 한다고 말할 때 알맞은 동사는?', opts: ['Juego yoga.', 'Hago yoga.', 'Toco yoga.', 'Veo yoga.'], a: 1, ex: '개인 운동은 hacer를 써요.'}
  ],
  poll: {q: '스페인어권 여행 중 가장 직관하고 싶은 스포츠는?', opts: ['⚽ 축구 (라리가)', '🏀 농구', '🎾 테니스', '🚴 자전거 (부엘타)', '🏓 파델(pádel)', '🤼 루차 리브레']},
  write: {prompt: '내가 좋아하는 스포츠와 하는 방법(직접/관람)을 써 보세요.', pattern: 'Me gusta ___. Juego / Hago / Veo ___.', hint: 'jugar a + 경기 / hacer + 운동 / ver + 경기', example: 'Me gusta el béisbol. Veo los partidos en la tele.'},
  dialog: {title: '경기장 매표소와 관중석에서', lines: [
    {who: 'npc', es: 'Buenas tardes. ¿Qué desea?', ko: '안녕하세요. 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: '¡Gol, gol, gol!', ko: '골, 골, 골!', ok: false, why: '매표소에서 아직 경기 시작 전이에요.'},
      {es: 'Dos entradas para el partido de esta noche, por favor.', ko: '오늘 밤 경기 표 두 장 주세요.', ok: true}
    ]},
    {who: 'npc', es: 'Quedan en la grada norte, a cuarenta euros cada una.', ko: '북쪽 스탠드 남았어요, 한 장에 40유로입니다.'},
    {who: 'me', opts: [
      {es: 'Vale, perfecto. ¿Puedo pagar con tarjeta?', ko: '좋아요. 카드로 결제해도 되나요?', ok: true},
      {es: 'Juego al tenis.', ko: '저는 테니스를 쳐요.', ok: false, why: '표 구매 흐름에서 벗어났어요.'},
      {es: '¿De qué equipo eres?', ko: '어느 팀 팬이세요?', ok: false, why: '가격 안내에 대한 대답이 아니에요.'}
    ]},
    {who: 'npc', es: '(En el estadio) ¡Uf! ¿Has visto eso? ¿Cómo van?', ko: '(경기장에서) 와! 방금 봤어? 스코어 어때?'},
    {who: 'me', opts: [
      {es: 'Cuarenta euros cada una.', ko: '한 장에 40유로.', ok: false, why: '점수를 물었는데 가격을 말했어요.'},
      {es: 'Van empatados uno a uno.', ko: '1대1 동점이야.', ok: true}
    ]},
    {who: 'npc', es: '¡¡GOOOL!! ¡Dos a uno! ¡Qué golazo!', ko: '골!! 2대1! 엄청난 골이다!'},
    {who: 'me', opts: [
      {es: '¡Qué partidazo! ¡Vamos, vamos!', ko: '끝내주는 경기다! 가자, 가자!', ok: true},
      {es: 'Lo siento, no lo sabía.', ko: '죄송해요, 몰랐어요.', ok: false, why: '골 장면에 사과는 어울리지 않아요.'}
    ]}
  ]}
});

/* ───────── 26. 아웃도어·날씨 ───────── */
window.VAMOS.chapters.push({
  id: 'outdoors', part: 'social', no: 26, emoji: '🏞️',
  ko: '아웃도어·날씨', es: 'Al aire libre', en: 'Outdoors', pages: '147–152',
  widget: 'weather',
  scene: '파타고니아 국립공원 트레킹을 앞두고 있어요. 산장 직원에게 코스와 날씨를 묻고, 해변·자연에서 필요한 표현까지 익혀 보세요.',
  goals: ['하이킹 코스·난이도·소요 시간 묻기', '날씨 묻고 답하기 (hace / está / hay)', '해변·자연 안전 표지 읽기'],
  phrases: [
    {es: '¿Qué tiempo hace hoy?', ko: '오늘 날씨 어때요?', pr: '께 띠엠뽀 아세 오이', mk: 'qa', ans: {es: 'Hace sol, pero mañana va a llover.', ko: '맑아요, 하지만 내일은 비가 올 거예요.'}},
    {es: 'Hace calor / frío.', ko: '더워요. / 추워요.', pr: '아세 깔로르 / 프리오', mk: 'short'},
    {es: 'Hace mucho viento.', ko: '바람이 많이 불어요.', pr: '아세 무초 비엔또'},
    {es: 'Está lloviendo / nevando.', ko: '비가 / 눈이 오고 있어요.', pr: '에스따 요비엔도 / 네반도'},
    {es: 'Está nublado.', ko: '흐려요.', pr: '에스따 누블라도', mk: 'listen'},
    {es: '¿Cuánto se tarda en llegar a la cima?', ko: '정상까지 얼마나 걸려요?', pr: '꾸안또 세 따르다 엔 예가르 아 라 시마', mk: 'qa', ans: {es: 'Unas cuatro horas.', ko: '네 시간 정도요.'}},
    {es: '¿Es difícil este sendero?', ko: '이 코스 어려워요?', pr: '에스 디피실 에스떼 센데로'},
    {es: '¿Necesitamos un guía?', ko: '가이드가 필요한가요?', pr: '네세시따모스 운 기아'},
    {es: '¿Es seguro bañarse aquí?', ko: '여기서 수영해도 안전해요?', pr: '에스 세구로 바냐르세 아끼'},
    {es: 'Prohibido bañarse', ko: '수영 금지', pr: '쁘로이비도 바냐르세', mk: 'look'},
    {es: 'Peligro – Corrientes fuertes', ko: '위험 – 강한 조류', pr: '뻴리그로 – 꼬리엔떼스 푸에르떼스', mk: 'look'},
    {es: 'Me he perdido.', ko: '길을 잃었어요.', pr: '메 에 뻬르디도'}
  ],
  tips: [
    {mk: 'lang', ko: '날씨는 세 가지 틀로 말해요. 기온·해·바람은 hace(Hace sol), 상태는 está(Está nublado), 존재는 hay(Hay niebla = 안개가 껴요). 비·눈은 동사 llover, nevar를 그대로 씁니다.'},
    {mk: 'culture', ko: '남반구인 칠레·아르헨티나는 계절이 한국과 반대예요. 12~2월이 여름 성수기이고, 파타고니아는 하루에도 사계절이 있다고 할 만큼 날씨가 급변하니 방풍·방수 장비가 필수입니다.'},
    {mk: 'culture', ko: '스페인 해변의 깃발 색을 기억하세요: 초록(수영 가능), 노랑(주의), 빨강(수영 금지). 표지판의 "Prohibido"는 언제나 "금지"를 뜻합니다.'}
  ],
  vocab: [
    {es: 'el tiempo', ko: '날씨; 시간'}, {es: 'el sol', ko: '해'}, {es: 'la lluvia', ko: '비'},
    {es: 'la nieve', ko: '눈'}, {es: 'el viento', ko: '바람'}, {es: 'la niebla', ko: '안개'},
    {es: 'el sendero', ko: '오솔길, 트레일'}, {es: 'la montaña', ko: '산'}, {es: 'la playa', ko: '해변'},
    {es: 'el mapa', ko: '지도'}, {es: 'la tormenta', ko: '폭풍우'}, {es: 'el refugio', ko: '산장'}
  ],
  quiz: [
    {q: '"바람이 많이 불어요"를 바르게 쓴 것은?', opts: ['Está mucho viento.', 'Hay mucho viento.', 'Hace mucho viento.', 'Tiene mucho viento.'], a: 2, ex: '해·바람·기온은 hace를 쓰는 게 가장 기본이에요. (Hay viento도 쓰이지만 mucho와 함께는 hace가 일반적)'},
    {q: '해변 표지판 "Prohibido bañarse"의 뜻은?', opts: ['수영 금지', '샤워 시설', '구조대', '수영 가능'], a: 0, ex: 'prohibido = 금지된, bañarse = 수영하다/목욕하다.'},
    {q: '"Está nublado."는 어떤 날씨?', opts: ['맑음', '눈', '더움', '흐림'], a: 3, ex: 'nublado = 구름 낀.'},
    {q: '"정상까지 얼마나 걸려요?"', opts: ['¿Dónde está la cima?', '¿Cuánto se tarda en llegar a la cima?', '¿Es seguro la cima?', '¿Qué tiempo hace en la cima?'], a: 1, ex: 'tardar = (시간이) 걸리다.'},
    {q: '칠레 파타고니아 트레킹 성수기는?', opts: ['6~8월', '3~4월', '12~2월', '9~10월'], a: 2, ex: '남반구라 12~2월이 여름이에요.'}
  ],
  poll: {q: '스페인어권에서 가장 해 보고 싶은 아웃도어 활동은?', opts: ['🥾 파타고니아 트레킹', '🏖️ 카리브해 해변', '🌋 화산 하이킹', '🚣 아마존 정글 투어', '⛷️ 안데스 스키', '🐋 고래 관찰']},
  write: {prompt: '오늘 여러분이 있는 곳의 날씨를 스페인어로 써 보세요.', pattern: 'Hoy hace ___ y está ___.', hint: 'hace sol / frío / calor / viento, está nublado / despejado(맑게 갠)', example: 'Hoy hace frío y está nublado en Seúl.'},
  dialog: {title: '국립공원 산장에서 트레킹 정보 묻기', lines: [
    {who: 'npc', es: '¡Bienvenidos al refugio! ¿En qué os puedo ayudar?', ko: '산장에 오신 걸 환영해요! 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Prohibido bañarse.', ko: '수영 금지.', ok: false, why: '표지판 문구일 뿐, 질문이 아니에요.'},
      {es: 'Queremos subir al mirador. ¿Es difícil el sendero?', ko: '전망대까지 올라가고 싶어요. 코스가 어려운가요?', ok: true}
    ]},
    {who: 'npc', es: 'Es de dificultad media. Hay bastante subida al final.', ko: '중간 난이도예요. 마지막에 오르막이 꽤 있어요.'},
    {who: 'me', opts: [
      {es: '¿Y cuánto se tarda en llegar?', ko: '도착까지 얼마나 걸려요?', ok: true},
      {es: 'Hace calor en Corea.', ko: '한국은 더워요.', ok: false, why: '대화 흐름과 관계없는 말이에요.'},
      {es: 'Me he perdido.', ko: '길을 잃었어요.', ok: false, why: '아직 출발도 안 했어요.'}
    ]},
    {who: 'npc', es: 'Unas cuatro horas de ida. Pero cuidado con el tiempo.', ko: '편도 네 시간 정도요. 하지만 날씨를 조심하세요.'},
    {who: 'me', opts: [
      {es: '¿Qué tiempo va a hacer esta tarde?', ko: '오늘 오후 날씨는 어떨까요?', ok: true},
      {es: 'Cuatro horas, por favor.', ko: '네 시간 주세요.', ok: false, why: '시간을 주문하는 표현은 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Por la mañana hace sol, pero por la tarde va a hacer mucho viento y quizás llueva.', ko: '오전엔 맑지만 오후엔 바람이 강해지고 비가 올지도 몰라요.'},
    {who: 'me', opts: [
      {es: 'Entonces salimos temprano y llevamos chubasquero. ¡Gracias!', ko: '그럼 일찍 출발하고 우비를 챙길게요. 감사합니다!', ok: true},
      {es: 'Perfecto, salimos a las cuatro de la tarde en camiseta.', ko: '좋아요, 오후 4시에 반팔로 출발할게요.', ok: false, why: '바람과 비가 온다는 경고를 무시한 위험한 계획이에요.'}
    ]}
  ]}
});
