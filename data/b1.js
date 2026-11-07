var VAMOS = window.VAMOS = window.VAMOS || {chapters: []};

/* ───────── 8. Transporte ───────── */
VAMOS.chapters.push({
  id: 'transport', part: 'practical', no: 8, emoji: '🚆',
  ko: '교통', es: 'Transporte', en: 'Transport', pages: '42–54',
  widget: 'timetable',
  scene: '마드리드 아토차역에 도착했습니다. 오늘 오후 톨레도행 기차표를 사고, 플랫폼과 출발 시간을 확인해 무사히 탑승하는 것이 미션입니다.',
  goals: ['목적지·시간을 말하며 표 구입하기', '플랫폼·출발 시간·지연 여부 묻기', '버스·택시에서 필요한 표현 쓰기'],
  phrases: [
    {es: 'Un billete para Toledo, por favor.', ko: '톨레도행 표 한 장 주세요.', pr: '운 비예떼 빠라 똘레도, 뽀르 파보르', mk: 'short'},
    {es: '¿A qué hora sale el próximo tren?', ko: '다음 기차는 몇 시에 출발해요?', pr: '아 께 오라 살레 엘 쁘록시모 뜨렌', mk: 'qa', ans: {es: 'Sale a las tres y media.', ko: '3시 반에 출발해요.'}},
    {es: '¿De qué andén sale?', ko: '몇 번 플랫폼에서 출발해요?', pr: '데 께 안덴 살레', mk: 'qa', ans: {es: 'Del andén cuatro.', ko: '4번 플랫폼이요.'}},
    {es: 'De ida y vuelta, por favor.', ko: '왕복으로 주세요.', pr: '데 이다 이 부엘따, 뽀르 파보르'},
    {es: '¿Cuánto dura el viaje?', ko: '가는 데 얼마나 걸려요?', pr: '꾸안또 두라 엘 비아헤'},
    {es: '¿Este autobús va al centro?', ko: '이 버스 시내 가나요?', pr: '에스떼 아우또부스 바 알 센뜨로'},
    {es: '¿Me avisa cuando lleguemos?', ko: '도착하면 알려 주시겠어요?', pr: '메 아비사 꾸안도 예게모스'},
    {es: 'A esta dirección, por favor.', ko: '이 주소로 가 주세요. (택시)', pr: '아 에스따 디렉시온, 뽀르 파보르', mk: 'short'},
    {es: 'Pare aquí, por favor.', ko: '여기 세워 주세요.', pr: '빠레 아끼, 뽀르 파보르'},
    {es: 'Llegadas / Salidas', ko: '도착 / 출발 (전광판)', pr: '예가다스 / 살리다스', mk: 'look'},
    {es: 'El tren lleva retraso.', ko: '기차가 지연되고 있습니다.', pr: '엘 뜨렌 예바 레뜨라소', mk: 'listen'},
    {es: 'Está completo.', ko: '만석입니다.', pr: '에스따 꼼쁠레또', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '표는 스페인에서 billete, 중남미에서는 보통 boleto라고 해요. "편도"는 de ida, "왕복"은 de ida y vuelta — 이 두 표현만 알면 매표소 대화의 절반이 끝납니다.'},
    {mk: 'culture', ko: '스페인 고속열차(AVE 등)는 탑승 전 짐 검사를 하는 역이 많아 출발 20~30분 전에 도착하는 게 안전해요. 중남미 장거리 버스는 등급(semicama, cama)에 따라 좌석 각도가 달라요.'},
    {mk: 'lang', ko: '"버스"는 지역마다 달라요: 스페인 autobús, 멕시코 camión, 아르헨티나 colectivo, 쿠바·카리브 guagua.'}
  ],
  vocab: [
    {es: 'el billete', ko: '표'}, {es: 'el andén', ko: '플랫폼'}, {es: 'la taquilla', ko: '매표소'},
    {es: 'el horario', ko: '시간표'}, {es: 'la estación', ko: '역'}, {es: 'la parada', ko: '정류장'},
    {es: 'el asiento', ko: '좌석'}, {es: 'la maleta', ko: '여행 가방'}, {es: 'el retraso', ko: '지연'},
    {es: 'el aeropuerto', ko: '공항'}, {es: 'la vía', ko: '선로'}
  ],
  quiz: [
    {q: '"왕복표"를 스페인어로?', opts: ['billete de ida', 'billete de ida y vuelta', 'billete de salida', 'billete de llegada'], a: 1, ex: 'ida(가는 것) + vuelta(돌아오는 것) = 왕복'},
    {q: '전광판의 "Salidas"는?', opts: ['도착', '환승', '출발', '취소'], a: 2, ex: 'salir(나가다·출발하다)에서 온 말이에요.'},
    {q: '"¿De qué andén sale?"에 알맞은 대답은?', opts: ['A las cinco.', 'Veinte euros.', 'Dos horas.', 'Del andén siete.'], a: 3, ex: 'andén = 플랫폼. 플랫폼 번호로 답해요.'},
    {q: '택시에서 "여기 세워 주세요"는?', opts: ['Pare aquí, por favor.', 'Siga recto, por favor.', 'Más rápido, por favor.', 'Abra la puerta.'], a: 0, ex: 'parar(멈추다)의 명령형 pare를 써요.'},
    {q: '"El tren lleva retraso."의 뜻은?', opts: ['기차가 일찍 왔어요.', '기차가 지연 중이에요.', '기차가 만석이에요.', '기차가 취소됐어요.'], a: 1, ex: 'retraso = 지연'}
  ],
  poll: {q: '스페인어권 여행에서 도시 간 이동, 어떤 수단을 가장 선호하세요?', opts: ['🚄 고속열차', '🚌 장거리 버스', '✈️ 국내선 비행기', '🚗 렌터카', '🚲 자전거·도보']},
  write: {prompt: '가고 싶은 도시와 원하는 조건을 넣어 표를 사는 문장을 만들어 보세요.', pattern: 'Un billete ___ para ___, por favor.', hint: 'de ida / de ida y vuelta + 도시 이름', example: 'Un billete de ida y vuelta para Sevilla, por favor.'},
  dialog: { title: '아토차역 매표소에서 톨레도행 표 사기', lines: [
    {who: 'npc', es: 'Buenas tardes. ¿Adónde va?', ko: '안녕하세요. 어디 가세요?'},
    {who: 'me', opts: [
      {es: 'Estoy bien, gracias.', ko: '잘 지내요, 고마워요.', ok: false, why: '안부가 아니라 목적지를 물었어요.'},
      {es: 'A Toledo. Un billete, por favor.', ko: '톨레도요. 표 한 장 주세요.', ok: true},
      {es: 'Son las dos.', ko: '두 시예요.', ok: false, why: '시간이 아니라 행선지를 말해야 해요.'}
    ]},
    {who: 'npc', es: '¿De ida o de ida y vuelta?', ko: '편도요, 왕복이요?'},
    {who: 'me', opts: [
      {es: 'De ida y vuelta, por favor. Vuelvo esta noche.', ko: '왕복이요. 오늘 밤에 돌아와요.', ok: true},
      {es: 'En el andén, por favor.', ko: '플랫폼에서요.', ok: false, why: '편도/왕복 중 하나를 골라야 해요.'}
    ]},
    {who: 'npc', es: 'Muy bien. Son veintidós euros. El tren sale a las tres y diez.', ko: '좋아요. 22유로입니다. 기차는 3시 10분에 출발해요.'},
    {who: 'me', opts: [
      {es: '¿Cuántos años tiene?', ko: '몇 살이세요?', ok: false, why: '상황과 무관한 질문이에요.'},
      {es: 'No me gusta el tren.', ko: '저는 기차가 싫어요.', ok: false, why: '표를 사는 중이니 플랫폼을 확인해야죠.'},
      {es: 'Vale. ¿De qué andén sale?', ko: '좋아요. 몇 번 플랫폼에서 출발해요?', ok: true}
    ]},
    {who: 'npc', es: 'Del andén cinco. Mire la pantalla de salidas, por si acaso.', ko: '5번 플랫폼이요. 혹시 모르니 출발 전광판도 확인하세요.'},
    {who: 'me', opts: [
      {es: 'Muchas gracias. ¡Hasta luego!', ko: '정말 감사합니다. 안녕히 계세요!', ok: true},
      {es: 'Perdón, no tengo hambre.', ko: '미안해요, 배 안 고파요.', ok: false, why: '감사 인사로 마무리하면 돼요.'}
    ]}
  ]}
});

/* ───────── 9. En la frontera ───────── */
VAMOS.chapters.push({
  id: 'border', part: 'practical', no: 9, emoji: '🛂',
  ko: '입국 심사', es: 'En la frontera', en: 'Border Crossing', pages: '55–56',
  scene: '멕시코시티 공항에 막 착륙했습니다. 입국 심사관의 질문에 차분히 답하고, 세관 신고까지 통과하는 것이 미션입니다.',
  goals: ['방문 목적·체류 기간 말하기', '숙소·동행 여부에 답하기', '세관에서 신고할 물건 유무 말하기'],
  phrases: [
    {es: 'Su pasaporte, por favor.', ko: '여권 주세요.', pr: '수 빠사뽀르떼, 뽀르 파보르', mk: 'listen'},
    {es: '¿Cuál es el motivo de su viaje?', ko: '여행 목적이 무엇입니까?', pr: '꾸알 에스 엘 모띠보 데 수 비아헤', mk: 'qa', ans: {es: 'Vengo de turismo.', ko: '관광하러 왔습니다.'}},
    {es: '¿Cuánto tiempo va a quedarse?', ko: '얼마나 머무를 예정입니까?', pr: '꾸안또 띠엠뽀 바 아 께다르세', mk: 'qa', ans: {es: 'Dos semanas.', ko: '2주요.'}},
    {es: 'Estoy de vacaciones.', ko: '휴가 중이에요.', pr: '에스또이 데 바까시오네스', mk: 'short'},
    {es: 'Estoy aquí por negocios.', ko: '출장으로 왔어요.', pr: '에스또이 아끼 뽀르 네고시오스'},
    {es: 'Me alojo en el Hotel Sol.', ko: '솔 호텔에 묵어요.', pr: '메 알로호 엔 엘 오뗄 솔'},
    {es: 'Viajo solo. / Viajo sola.', ko: '혼자 여행해요. (남/여)', pr: '비아호 솔로 / 비아호 솔라'},
    {es: 'Viajo con mi familia.', ko: '가족과 함께 여행해요.', pr: '비아호 꼰 미 파밀리아'},
    {es: 'No tengo nada que declarar.', ko: '신고할 물건이 없습니다.', pr: '노 뗑고 나다 께 데끌라라르', mk: 'short'},
    {es: 'Es para uso personal.', ko: '개인 용도예요.', pr: '에스 빠라 우소 뻬르소날'},
    {es: 'Aduana', ko: '세관', pr: '아두아나', mk: 'look'},
    {es: 'Control de pasaportes', ko: '출입국 심사', pr: '꼰뜨롤 데 빠사뽀르떼스', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '심사관은 대부분 존칭 usted로 말해요. 그래서 "당신의"가 su로 나옵니다: su pasaporte(당신의 여권), su viaje(당신의 여행). 들을 때 su가 나오면 나에 대한 질문이에요.'},
    {mk: 'culture', ko: '중남미 여러 나라는 출국 항공권이나 숙소 주소를 물어보는 경우가 있어요. 예약 확인서를 휴대폰에 바로 열 수 있게 준비해 두면 대화가 짧아집니다.'}
  ],
  vocab: [
    {es: 'el pasaporte', ko: '여권'}, {es: 'el visado', ko: '비자(스페인)'}, {es: 'la visa', ko: '비자(중남미)'},
    {es: 'la aduana', ko: '세관'}, {es: 'el equipaje', ko: '수하물'}, {es: 'el formulario', ko: '서식, 신고서'},
    {es: 'la frontera', ko: '국경'}, {es: 'el motivo', ko: '목적, 이유'}, {es: 'la estancia', ko: '체류'},
    {es: 'el vuelo', ko: '항공편'}
  ],
  quiz: [
    {q: '"¿Cuál es el motivo de su viaje?"에 맞는 대답은?', opts: ['En el hotel.', 'Diez días.', 'Vengo de turismo.', 'Con mi esposa.'], a: 2, ex: 'motivo = 목적. 관광/출장 등으로 답해요.'},
    {q: '"신고할 물건이 없습니다"는?', opts: ['No tengo nada que declarar.', 'No tengo pasaporte.', 'No hablo español.', 'No tengo maleta.'], a: 0, ex: 'declarar = 신고하다'},
    {q: '여자 혼자 여행할 때 맞는 표현은?', opts: ['Viajo solo.', 'Viajo sola.', 'Viajo solos.', 'Viajo solas.'], a: 1, ex: '형용사 solo는 말하는 사람의 성에 맞춰 sola가 돼요.'},
    {q: '"Aduana" 표지판은 무엇을 뜻할까요?', opts: ['환전소', '출구', '수하물 찾는 곳', '세관'], a: 3, ex: 'aduana = 세관'},
    {q: '"¿Cuánto tiempo va a quedarse?"에서 묻는 것은?', opts: ['체류 기간', '숙소', '여행 비용', '직업'], a: 0, ex: 'cuánto tiempo = 얼마 동안'}
  ],
  poll: {q: '입국 심사대 앞, 가장 긴장되는 순간은?', opts: ['😰 질문을 못 알아들을 때', '📄 서류를 찾을 때', '🧳 세관 검사', '⏳ 긴 줄', '😎 전혀 긴장 안 돼요']},
  write: {prompt: '자신의 실제(또는 꿈의) 여행에 맞게 방문 목적과 기간을 한 문장으로 말해 보세요.', pattern: 'Vengo de ___ y me quedo ___.', hint: 'turismo / negocios / estudios + 기간(una semana, diez días…)', example: 'Vengo de turismo y me quedo diez días.'},
  dialog: { title: '멕시코시티 공항 입국 심사', lines: [
    {who: 'npc', es: 'Buenos días. Su pasaporte, por favor.', ko: '안녕하세요. 여권 주세요.'},
    {who: 'me', opts: [
      {es: 'No, gracias.', ko: '아니요, 괜찮아요.', ok: false, why: '여권은 거절할 수 없어요!'},
      {es: 'Buenos días. Aquí tiene.', ko: '안녕하세요. 여기 있습니다.', ok: true}
    ]},
    {who: 'npc', es: '¿Cuál es el motivo de su viaje?', ko: '방문 목적이 무엇입니까?'},
    {who: 'me', opts: [
      {es: 'Me llamo Minsu.', ko: '제 이름은 민수예요.', ok: false, why: '이름이 아니라 목적을 물었어요.'},
      {es: 'En avión.', ko: '비행기로요.', ok: false, why: '교통수단이 아니라 방문 목적을 답해야 해요.'},
      {es: 'Vengo de turismo.', ko: '관광하러 왔습니다.', ok: true}
    ]},
    {who: 'npc', es: '¿Cuánto tiempo va a quedarse en México?', ko: '멕시코에 얼마나 머무르실 건가요?'},
    {who: 'me', opts: [
      {es: 'Dos semanas. Vuelvo a Seúl el día veinte.', ko: '2주요. 20일에 서울로 돌아가요.', ok: true},
      {es: 'Tengo treinta años.', ko: '서른 살이에요.', ok: false, why: '나이가 아니라 체류 기간을 물었어요.'}
    ]},
    {who: 'npc', es: '¿Dónde se aloja?', ko: '어디에 묵으세요?'},
    {who: 'me', opts: [
      {es: 'Me gusta mucho.', ko: '아주 좋아요.', ok: false, why: '숙소 이름이나 주소를 말해야 해요.'},
      {es: 'En el Hotel Reforma, en el centro.', ko: '시내에 있는 레포르마 호텔이요.', ok: true}
    ]},
    {who: 'npc', es: 'Perfecto. Bienvenido a México.', ko: '좋습니다. 멕시코에 오신 것을 환영합니다.'}
  ]}
});

/* ───────── 10. Direcciones ───────── */
VAMOS.chapters.push({
  id: 'directions', part: 'practical', no: 10, emoji: '🧭',
  ko: '길 찾기', es: 'Direcciones', en: 'Directions', pages: '57–59',
  widget: 'map',
  scene: '세비야 구시가지 골목에서 휴대폰 배터리가 꺼졌어요! 현지인에게 길을 묻고, 들은 설명대로 대성당까지 찾아가는 것이 미션입니다.',
  goals: ['장소 위치 묻기 (¿Dónde está…?)', '방향 지시(직진·좌회전·우회전) 알아듣기', '거리·소요 시간 묻기'],
  phrases: [
    {es: 'Perdone, ¿dónde está la catedral?', ko: '실례합니다, 대성당이 어디 있어요?', pr: '뻬르도네, 돈데 에스따 라 까떼드랄', mk: 'qa', ans: {es: 'Está muy cerca, a dos calles.', ko: '아주 가까워요, 두 블록 거리예요.'}},
    {es: '¿Cómo llego a la estación?', ko: '역에 어떻게 가요?', pr: '꼬모 예고 아 라 에스따시온'},
    {es: '¿Está lejos?', ko: '멀어요?', pr: '에스따 레호스', mk: 'short'},
    {es: '¿Se puede ir a pie?', ko: '걸어서 갈 수 있어요?', pr: '세 뿌에데 이르 아 삐에'},
    {es: '¿Me lo puede mostrar en el mapa?', ko: '지도에서 보여 주실 수 있어요?', pr: '메 로 뿌에데 모스뜨라르 엔 엘 마빠', mk: 'short'},
    {es: 'Siga todo recto.', ko: '쭉 직진하세요.', pr: '시가 또도 렉또', mk: 'listen'},
    {es: 'Gire a la izquierda.', ko: '왼쪽으로 도세요.', pr: '히레 아 라 이스끼에르다', mk: 'listen'},
    {es: 'Gire a la derecha.', ko: '오른쪽으로 도세요.', pr: '히레 아 라 데레차', mk: 'listen'},
    {es: 'Está en la esquina.', ko: '모퉁이에 있어요.', pr: '에스따 엔 라 에스끼나'},
    {es: 'Está enfrente del banco.', ko: '은행 맞은편에 있어요.', pr: '에스따 엔프렌떼 델 반꼬'},
    {es: 'Está a diez minutos andando.', ko: '걸어서 10분 거리예요.', pr: '에스따 아 디에스 미누또스 안단도'},
    {es: 'Calle / Plaza / Avenida', ko: '거리 / 광장 / 대로 (표지판)', pr: '까예 / 쁠라사 / 아베니다', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: 'derecha(오른쪽)와 derecho(곧장)는 헷갈리기 쉬워요. 중남미에서는 "직진"을 siga derecho라고 하는 경우가 많고, 스페인에서는 siga recto가 흔해요. a la derecha처럼 a la가 붙으면 "오른쪽으로"입니다.'},
    {mk: 'culture', ko: '스페인 사람은 길을 물으면 아주 친절하게, 그리고 손짓을 섞어 길게 설명해 주는 편이에요. 다 못 알아들어도 izquierda/derecha/recto 세 단어만 잡으면 방향은 놓치지 않아요.'}
  ],
  vocab: [
    {es: 'la calle', ko: '거리'}, {es: 'la esquina', ko: '모퉁이'}, {es: 'el semáforo', ko: '신호등'},
    {es: 'la plaza', ko: '광장'}, {es: 'el cruce', ko: '교차로'}, {es: 'la manzana', ko: '블록(스페인)'},
    {es: 'la cuadra', ko: '블록(중남미)'}, {es: 'el mapa', ko: '지도'}, {es: 'el puente', ko: '다리'},
    {es: 'el norte', ko: '북쪽'}, {es: 'el sur', ko: '남쪽'}
  ],
  quiz: [
    {q: '"Gire a la izquierda."의 뜻은?', opts: ['오른쪽으로 도세요', '직진하세요', '왼쪽으로 도세요', '돌아가세요'], a: 2, ex: 'izquierda = 왼쪽'},
    {q: '"걸어서 갈 수 있어요?"는?', opts: ['¿Está lejos?', '¿Se puede ir a pie?', '¿Dónde está?', '¿Cuánto cuesta?'], a: 1, ex: 'a pie = 걸어서'},
    {q: '"enfrente de"의 뜻은?', opts: ['~옆에', '~뒤에', '~안에', '~맞은편에'], a: 3, ex: 'enfrente del banco = 은행 맞은편'},
    {q: '"Siga todo recto."를 들었다면?', opts: ['쭉 직진한다', '멈춘다', '오른쪽으로 돈다', '길을 건넌다'], a: 0, ex: 'recto = 곧은, 똑바로'},
    {q: '중남미에서 "블록"을 주로 뭐라고 할까요?', opts: ['la manzana', 'la plaza', 'la cuadra', 'la esquina'], a: 2, ex: '스페인은 manzana, 중남미는 cuadra가 흔해요.'}
  ],
  poll: {q: '처음 가는 도시에서 길을 찾을 때 나는?', opts: ['📱 무조건 지도 앱', '🙋 현지인에게 묻기', '🗺️ 종이 지도', '🚶 일단 걷고 본다', '🚕 택시 탄다']},
  write: {prompt: '가고 싶은 장소를 넣어 길을 묻는 문장을 만들어 보세요.', pattern: 'Perdone, ¿dónde está ___?', hint: 'el museo, la estación, la farmacia, el Hotel… 등', example: 'Perdone, ¿dónde está el Museo del Prado?'},
  dialog: { title: '세비야 골목에서 대성당 가는 길 묻기', lines: [
    {who: 'me', opts: [
      {es: 'Perdone, ¿dónde está la catedral?', ko: '실례합니다, 대성당이 어디 있어요?', ok: true},
      {es: '¡Adiós! ¿La catedral?', ko: '안녕히 가세요! 대성당?', ok: false, why: '대화를 시작할 때는 Perdone(실례합니다)이 자연스러워요.'}
    ]},
    {who: 'npc', es: 'La catedral… Está cerca. Siga todo recto por esta calle.', ko: '대성당이라… 가까워요. 이 길로 쭉 직진하세요.'},
    {who: 'me', opts: [
      {es: 'Me gusta el fútbol.', ko: '저는 축구를 좋아해요.', ok: false, why: '길 안내 중이에요. 거리를 묻는 게 자연스러워요.'},
      {es: 'Hace calor.', ko: '날씨가 덥네요.', ok: false, why: '설명을 더 듣기 위한 질문이 필요해요.'},
      {es: 'Vale. ¿Está lejos?', ko: '네. 멀어요?', ok: true}
    ]},
    {who: 'npc', es: 'No, está a cinco minutos andando. En la plaza, gire a la derecha.', ko: '아니요, 걸어서 5분이에요. 광장에서 오른쪽으로 도세요.'},
    {who: 'me', opts: [
      {es: 'En la plaza, ¿a la derecha?', ko: '광장에서, 오른쪽이요?', ok: true},
      {es: 'En la plaza, ¿a la izquierda? Gracias.', ko: '광장에서 왼쪽이요? 감사해요.', ok: false, why: 'derecha는 오른쪽이에요. 잘못 알아들었네요.'}
    ]},
    {who: 'npc', es: 'Eso es. La catedral está enfrente de la plaza, no tiene pérdida.', ko: '맞아요. 대성당은 광장 맞은편에 있어요. 못 찾을 수가 없어요.'},
    {who: 'me', opts: [
      {es: 'Lo siento mucho.', ko: '정말 죄송합니다.', ok: false, why: '사과할 상황이 아니라 감사할 상황이에요.'},
      {es: '¡Muchas gracias, muy amable!', ko: '정말 감사합니다, 친절하시네요!', ok: true}
    ]}
  ]}
});

/* ───────── 11. Alojamiento ───────── */
VAMOS.chapters.push({
  id: 'accommodation', part: 'practical', no: 11, emoji: '🏨',
  ko: '숙소', es: 'Alojamiento', en: 'Accommodation', pages: '60–73',
  scene: '바르셀로나의 작은 호텔에 밤늦게 도착했습니다. 예약을 확인해 체크인하고, 방에 문제가 생기면 요청하고, 다음 날 체크아웃까지 마치는 것이 미션입니다.',
  goals: ['예약 확인·체크인 하기', '방 조건·편의시설 묻고 요청하기', '불편 사항 말하고 체크아웃하기'],
  phrases: [
    {es: 'Tengo una reserva a nombre de Kim.', ko: '김(Kim) 이름으로 예약했어요.', pr: '뗑고 우나 레세르바 아 놈브레 데 김', mk: 'short'},
    {es: '¿Tiene una habitación libre?', ko: '빈방 있어요?', pr: '띠에네 우나 아비따시온 리브레', mk: 'qa', ans: {es: 'Sí, ¿para cuántas noches?', ko: '네, 몇 박 하실 건가요?'}},
    {es: 'Una habitación doble para dos noches.', ko: '더블룸 2박이요.', pr: '우나 아비따시온 도블레 빠라 도스 노체스'},
    {es: '¿Cuánto cuesta por noche?', ko: '1박에 얼마예요?', pr: '꾸안또 꾸에스따 뽀르 노체'},
    {es: '¿El desayuno está incluido?', ko: '조식 포함인가요?', pr: '엘 데사유노 에스따 잉끌루이도', mk: 'qa', ans: {es: 'Sí, de siete a diez.', ko: '네, 7시부터 10시까지예요.'}},
    {es: '¿Cuál es la contraseña del wifi?', ko: '와이파이 비밀번호가 뭐예요?', pr: '꾸알 에스 라 꼰뜨라세냐 델 위피'},
    {es: '¿Puedo dejar la maleta aquí?', ko: '여기에 가방 맡겨도 돼요?', pr: '뿌에도 데하르 라 말레따 아끼'},
    {es: 'El aire acondicionado no funciona.', ko: '에어컨이 작동하지 않아요.', pr: '엘 아이레 아꼰디시오나도 노 푼시오나'},
    {es: 'No hay agua caliente.', ko: '뜨거운 물이 안 나와요.', pr: '노 아이 아구아 깔리엔떼'},
    {es: '¿A qué hora hay que dejar la habitación?', ko: '몇 시까지 방을 비워야 해요?', pr: '아 께 오라 아이 께 데하르 라 아비따시온'},
    {es: 'Completo', ko: '만실', pr: '꼼쁠레또', mk: 'look'},
    {es: 'Firme aquí, por favor.', ko: '여기에 서명해 주세요.', pr: '피르메 아끼, 뽀르 파보르', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '"방"은 habitación, "1인실"은 individual, "2인실(침대 하나)"은 doble, "트윈"은 con dos camas라고 요청하면 정확해요. 동사 funcionar(작동하다)는 고장 신고에 두루 쓸 수 있어요: La ducha no funciona.'},
    {mk: 'culture', ko: '스페인에는 hotel 외에도 hostal(소규모 숙소), pensión, 국영 역사 호텔 parador가 있어요. 체크인 때 여권을 보여 달라고 하는 건 법적 등록 절차이니 당황하지 마세요.'},
    {mk: 'culture', ko: '중남미 일부 지역에서는 수도꼭지의 C가 caliente(뜨거운 물), F가 fría(찬물)예요. C를 cold로 착각하지 마세요!'}
  ],
  vocab: [
    {es: 'la habitación', ko: '방'}, {es: 'la reserva', ko: '예약'}, {es: 'la llave', ko: '열쇠'},
    {es: 'la recepción', ko: '프런트'}, {es: 'el desayuno', ko: '아침 식사'}, {es: 'la toalla', ko: '수건'},
    {es: 'la cama', ko: '침대'}, {es: 'la ducha', ko: '샤워기'}, {es: 'el ascensor', ko: '엘리베이터'},
    {es: 'la almohada', ko: '베개'}, {es: 'la factura', ko: '계산서, 영수증'}
  ],
  quiz: [
    {q: '"Tengo una reserva."의 뜻은?', opts: ['방이 있나요?', '예약했어요.', '취소하고 싶어요.', '열쇠를 잃어버렸어요.'], a: 1, ex: 'reserva = 예약'},
    {q: '"조식 포함인가요?"는?', opts: ['¿Dónde está el desayuno?', '¿Hay ascensor?', '¿El desayuno está incluido?', '¿Tiene toallas?'], a: 2, ex: 'incluido = 포함된'},
    {q: '수도꼭지의 "C"는 스페인어권에서 무엇일까요?', opts: ['caliente (뜨거운 물)', 'cold (찬물)', 'cerrado (닫힘)', 'cocina (부엌)'], a: 0, ex: 'C = caliente, F = fría'},
    {q: '"El aire acondicionado no funciona."는 어떤 상황?', opts: ['와이파이가 안 돼요', '물이 안 나와요', '방이 시끄러워요', '에어컨이 고장 났어요'], a: 3, ex: 'no funciona = 작동하지 않는다'},
    {q: '숙소 문 앞의 "Completo"는?', opts: ['영업 중', '만실', '할인', '조식 제공'], a: 1, ex: 'completo = 꽉 찬'}
  ],
  poll: {q: '여행 숙소를 고를 때 가장 중요한 기준은?', opts: ['📍 위치', '💶 가격', '🧼 청결', '🍳 조식', '📶 와이파이', '⭐ 후기 평점']},
  write: {prompt: '호텔 프런트에 요청하는 문장을 만들어 보세요.', pattern: '¿Me puede dar ___, por favor?', hint: 'otra toalla, otra almohada, la llave, la factura…', example: '¿Me puede dar otra toalla, por favor?'},
  dialog: { title: '바르셀로나 호텔 체크인', lines: [
    {who: 'npc', es: 'Buenas noches. ¿En qué puedo ayudarle?', ko: '안녕하세요. 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Buenas noches. Tengo una reserva a nombre de Lee.', ko: '안녕하세요. 이(Lee) 이름으로 예약했어요.', ok: true},
      {es: 'Quiero un café con leche.', ko: '카페라테 주세요.', ok: false, why: '여기는 카페가 아니라 호텔 프런트예요.'}
    ]},
    {who: 'npc', es: 'Sí, aquí está. Una habitación doble, tres noches. ¿Me deja su pasaporte?', ko: '네, 여기 있네요. 더블룸 3박이요. 여권 주시겠어요?'},
    {who: 'me', opts: [
      {es: 'No sé.', ko: '모르겠어요.', ok: false, why: '체크인에는 여권 제시가 필요해요.'},
      {es: 'Claro, aquí tiene. ¿El desayuno está incluido?', ko: '물론이죠, 여기요. 조식 포함인가요?', ok: true},
      {es: 'Dos noches, por favor.', ko: '2박이요.', ok: false, why: '이미 3박으로 예약되어 있고, 여권을 달라고 했어요.'}
    ]},
    {who: 'npc', es: 'Sí, de siete a diez y media, en la primera planta.', ko: '네, 7시부터 10시 반까지, 1층(한국식 2층)에서요.'},
    {who: 'me', opts: [
      {es: 'Muy bien. ¿Y cuál es la contraseña del wifi?', ko: '좋아요. 와이파이 비밀번호는요?', ok: true},
      {es: '¿Dónde está la catedral?', ko: '대성당은 어디예요?', ok: false, why: '틀린 말은 아니지만, 체크인 흐름에 맞는 질문이 아니에요.'}
    ]},
    {who: 'npc', es: 'Está en la tarjeta, con la llave. Habitación 305. ¡Que descanse!', ko: '열쇠와 함께 드린 카드에 있어요. 305호입니다. 편히 쉬세요!'},
    {who: 'me', opts: [
      {es: '¡Buen provecho!', ko: '맛있게 드세요!', ok: false, why: '식사 인사예요. 감사 인사가 맞아요.'},
      {es: '¡Gracias, buenas noches!', ko: '감사합니다, 안녕히 주무세요!', ok: true}
    ]}
  ]}
});

/* ───────── 12. De compras ───────── */
VAMOS.chapters.push({
  id: 'shopping', part: 'practical', no: 12, emoji: '🛍️',
  ko: '쇼핑', es: 'De compras', en: 'Shopping', pages: '74–83',
  widget: 'price',
  scene: '부에노스아이레스의 산텔모 벼룩시장과 옷가게를 돌아봅니다. 가격을 묻고, 옷을 입어 보고, 시장에서는 살짝 흥정까지 해서 기념품을 사는 것이 미션입니다.',
  goals: ['가격 묻고 숫자 알아듣기', '사이즈·색상 말하고 입어 보기', '결제 수단 묻고 흥정하기'],
  phrases: [
    {es: '¿Cuánto cuesta esto?', ko: '이거 얼마예요?', pr: '꾸안또 꾸에스따 에스또', mk: 'short'},
    {es: 'Solo estoy mirando, gracias.', ko: '그냥 구경하는 중이에요, 고마워요.', pr: '솔로 에스또이 미란도, 그라시아스'},
    {es: '¿Puedo probármelo?', ko: '입어 봐도 돼요?', pr: '뿌에도 쁘로바르멜로', mk: 'qa', ans: {es: 'Sí, los probadores están al fondo.', ko: '네, 탈의실은 안쪽에 있어요.'}},
    {es: '¿Lo tiene en otra talla?', ko: '다른 사이즈 있어요?', pr: '로 띠에네 엔 오뜨라 따야'},
    {es: '¿Lo tiene en azul?', ko: '파란색 있어요?', pr: '로 띠에네 엔 아술'},
    {es: 'Me queda grande / pequeño.', ko: '저한테 커요 / 작아요.', pr: '메 께다 그란데 / 뻬께뇨'},
    {es: 'Me lo llevo.', ko: '이걸로 살게요.', pr: '메 로 예보', mk: 'short'},
    {es: '¿Aceptan tarjeta de crédito?', ko: '신용카드 돼요?', pr: '아셉딴 따르헤따 데 끄레디또', mk: 'qa', ans: {es: 'Sí, pero el mínimo son diez euros.', ko: '네, 하지만 최소 10유로부터예요.'}},
    {es: 'Es un poco caro. ¿Me hace un descuento?', ko: '좀 비싸네요. 깎아 주실 수 있어요?', pr: '에스 운 뽀꼬 까로. 메 아세 운 데스꾸엔또'},
    {es: '¿Me lo puede escribir?', ko: '(가격을) 적어 주실 수 있어요?', pr: '메 로 뿌에데 에스끄리비르'},
    {es: 'Rebajas', ko: '세일', pr: '레바하스', mk: 'look'},
    {es: '¿Algo más?', ko: '더 필요한 거 있으세요?', pr: '알고 마스', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '"Me queda bien."은 "나한테 잘 맞아요/어울려요"라는 뜻이에요. quedar 동사는 옷이 몸에 맞는지 말할 때 쓰고, 주어는 옷이에요: La camisa me queda grande(셔츠가 나한테 커요).'},
    {mk: 'culture', ko: '정찰제 매장에서는 흥정하지 않지만, 시장(mercado, feria)에서는 여러 개를 사면서 가볍게 할인을 묻는 건 자연스러워요. 웃으면서 ¿Y si compro dos?(두 개 사면요?)라고 해 보세요.'},
    {mk: 'culture', ko: '스페인은 1월과 7월에 대규모 세일(rebajas) 시즌이 있어요. 일요일에는 문을 닫는 상점이 많으니 쇼핑 계획은 평일·토요일에!'}
  ],
  vocab: [
    {es: 'la tienda', ko: '가게'}, {es: 'el precio', ko: '가격'}, {es: 'la talla', ko: '(옷) 사이즈'},
    {es: 'el probador', ko: '탈의실'}, {es: 'el recibo', ko: '영수증'}, {es: 'la tarjeta', ko: '카드'},
    {es: 'el efectivo', ko: '현금'}, {es: 'el descuento', ko: '할인'}, {es: 'el regalo', ko: '선물'},
    {es: 'la bolsa', ko: '봉투'}, {es: 'el mercado', ko: '시장'}
  ],
  quiz: [
    {q: '"이걸로 살게요."는?', opts: ['Solo estoy mirando.', 'Me lo llevo.', 'Es muy caro.', '¿Algo más?'], a: 1, ex: 'llevarse = 가져가다 → 사다'},
    {q: '"Me queda pequeño."의 뜻은?', opts: ['저한테 작아요', '저한테 커요', '잘 어울려요', '마음에 들어요'], a: 0, ex: 'pequeño = 작은'},
    {q: '가게 창문에 "Rebajas"가 붙어 있다면?', opts: ['임시 휴업', '신상품', '현금만 가능', '세일 중'], a: 3, ex: 'rebajas = 할인 판매'},
    {q: '"신용카드 돼요?"로 알맞은 것은?', opts: ['¿Tiene otra talla?', '¿Puedo probármelo?', '¿Aceptan tarjeta de crédito?', '¿Dónde está la caja?'], a: 2, ex: 'aceptar = 받다, 허용하다'},
    {q: '"efectivo"는?', opts: ['카드', '현금', '영수증', '거스름돈'], a: 1, ex: 'en efectivo = 현금으로'}
  ],
  poll: {q: '스페인어권 여행에서 꼭 사 오고 싶은 기념품은?', opts: ['🫒 올리브오일·식재료', '🍷 와인', '👞 가죽 제품', '🎨 수공예품', '☕ 커피·마테차', '👕 축구 유니폼']},
  write: {prompt: '가게에서 원하는 색이나 사이즈를 묻는 문장을 만들어 보세요.', pattern: '¿Lo tiene en ___?', hint: '색(negro, rojo, verde…) 또는 사이즈(la talla M, la talla 40…)', example: '¿Lo tiene en negro, en la talla M?'},
  dialog: { title: '산텔모 시장에서 가죽 지갑 사기', lines: [
    {who: 'npc', es: '¡Hola! ¿Te puedo ayudar?', ko: '안녕하세요! 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Hola. ¿Cuánto cuesta esta cartera?', ko: '안녕하세요. 이 지갑 얼마예요?', ok: true},
      {es: 'Hola. ¿Dónde está el baño?', ko: '안녕하세요. 화장실 어디예요?', ok: false, why: '쇼핑 중이니 가격을 먼저 물어보세요.'}
    ]},
    {who: 'npc', es: 'Esa cuesta cuarenta mil pesos. Es de cuero auténtico.', ko: '그건 4만 페소예요. 진짜 가죽이에요.'},
    {who: 'me', opts: [
      {es: 'Me queda grande.', ko: '저한테 커요.', ok: false, why: '지갑은 입는 게 아니에요. 가격 흥정이 자연스러워요.'},
      {es: 'Es muy bonita, pero un poco cara. ¿Me hace un descuento?', ko: '아주 예쁜데 좀 비싸요. 깎아 주실 수 있어요?', ok: true},
      {es: 'Cuarenta, gracias. Adiós.', ko: '40이요, 감사해요. 안녕히.', ok: false, why: '사지도 않고 대화를 끝내 버렸어요.'}
    ]},
    {who: 'npc', es: 'Mmm… Si llevás dos, te las dejo en setenta mil.', ko: '음… 두 개 사면 7만 페소에 드릴게요.'},
    {who: 'me', opts: [
      {es: 'Vale, me llevo dos. ¿Aceptan tarjeta?', ko: '좋아요, 두 개 살게요. 카드 돼요?', ok: true},
      {es: 'No hablo inglés.', ko: '영어 못해요.', ok: false, why: '상인은 스페인어로 말하고 있어요.'}
    ]},
    {who: 'npc', es: 'Mejor en efectivo, si puede ser.', ko: '가능하면 현금이 좋아요.'},
    {who: 'me', opts: [
      {es: 'Muy bien, aquí tiene. ¡Muchas gracias!', ko: '좋아요, 여기 있습니다. 감사합니다!', ok: true},
      {es: '¿Me lo puedo probar?', ko: '입어 봐도 돼요?', ok: false, why: '결제 단계예요. 현금을 건네며 인사하면 돼요.'}
    ]}
  ]}
});

/* ───────── 13. Comunicaciones ───────── */
VAMOS.chapters.push({
  id: 'communications', part: 'practical', no: 13, emoji: '📱',
  ko: '통신·인터넷', es: 'Comunicaciones', en: 'Communications', pages: '84–90',
  scene: '보고타에 도착해 현지 유심(SIM)이 필요합니다. 휴대폰 매장에서 데이터 요금제를 고르고, 카페에서 와이파이를 연결하고, 숙소에 전화로 도착 시간을 알리는 것이 미션입니다.',
  goals: ['유심·데이터 요금제 구입하기', '와이파이·충전 관련 질문하기', '전화 통화의 기본 표현 쓰기'],
  phrases: [
    {es: 'Quisiera una tarjeta SIM.', ko: '유심 카드를 사고 싶어요.', pr: '끼시에라 우나 따르헤따 심', mk: 'short'},
    {es: '¿Cuántos gigas incluye?', ko: '데이터가 몇 기가 포함돼요?', pr: '꾸안또스 히가스 잉끌루예'},
    {es: '¿Hay wifi aquí?', ko: '여기 와이파이 있어요?', pr: '아이 위피 아끼', mk: 'qa', ans: {es: 'Sí, la clave está en el ticket.', ko: '네, 비밀번호는 영수증에 있어요.'}},
    {es: 'No tengo conexión.', ko: '인터넷 연결이 안 돼요.', pr: '노 뗑고 꼬넥시온'},
    {es: '¿Dónde puedo cargar el móvil?', ko: '휴대폰 어디서 충전할 수 있어요?', pr: '돈데 뿌에도 까르가르 엘 모빌'},
    {es: 'Me he quedado sin batería.', ko: '배터리가 다 됐어요.', pr: '메 에 께다도 신 바떼리아'},
    {es: '¿Diga? / ¿Aló?', ko: '여보세요? (스페인 / 중남미)', pr: '디가 / 알로', mk: 'listen'},
    {es: '¿Puedo hablar con…?', ko: '…와 통화할 수 있을까요?', pr: '뿌에도 아블라르 꼰', mk: 'qa', ans: {es: 'Un momento, por favor.', ko: '잠시만 기다리세요.'}},
    {es: 'Le llamo más tarde.', ko: '나중에 다시 전화할게요.', pr: '레 야모 마스 따르데'},
    {es: '¿Puede hablar más despacio?', ko: '좀 더 천천히 말씀해 주시겠어요?', pr: '뿌에데 아블라르 마스 데스빠시오', mk: 'short'},
    {es: 'Se ha cortado.', ko: '전화가 끊겼어요.', pr: '세 아 꼬르따도'},
    {es: 'Fuera de servicio', ko: '고장 / 사용 불가', pr: '푸에라 데 세르비시오', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '휴대폰은 스페인에서 el móvil, 중남미에서는 el celular예요. 전화를 받을 때도 스페인은 ¿Diga?/¿Sí?, 멕시코는 ¿Bueno?, 콜롬비아 등은 ¿Aló?처럼 지역마다 달라요.'},
    {mk: 'culture', ko: '스페인어권에서는 WhatsApp이 사실상 국민 메신저예요. 숙소·투어·식당 예약도 WhatsApp으로 하는 경우가 많으니 현지 번호나 데이터를 꼭 준비하세요.'}
  ],
  vocab: [
    {es: 'el móvil', ko: '휴대폰(스페인)'}, {es: 'el celular', ko: '휴대폰(중남미)'}, {es: 'el cargador', ko: '충전기'},
    {es: 'la batería', ko: '배터리'}, {es: 'la contraseña', ko: '비밀번호'}, {es: 'la llamada', ko: '통화, 전화'},
    {es: 'el mensaje', ko: '메시지'}, {es: 'la cobertura', ko: '(통신) 수신 범위'}, {es: 'el enchufe', ko: '콘센트'},
    {es: 'los datos', ko: '데이터'}, {es: 'el correo electrónico', ko: '이메일'}
  ],
  quiz: [
    {q: '"Me he quedado sin batería."는 어떤 상황?', opts: ['와이파이가 없어요', '배터리가 다 됐어요', '충전기를 잃어버렸어요', '전화가 끊겼어요'], a: 1, ex: 'sin batería = 배터리 없이'},
    {q: '중남미에서 휴대폰을 주로 뭐라고 할까요?', opts: ['el móvil', 'el teléfono fijo', 'el celular', 'el cargador'], a: 2, ex: '스페인 móvil, 중남미 celular'},
    {q: '"좀 더 천천히 말씀해 주시겠어요?"는?', opts: ['¿Puede hablar más despacio?', '¿Puede hablar más alto?', '¿Puedo hablar con Ana?', 'Le llamo más tarde.'], a: 0, ex: 'despacio = 천천히'},
    {q: '"Fuera de servicio" 표지가 붙은 공중전화는?', opts: ['무료', '카드 전용', '국제전화 가능', '고장'], a: 3, ex: '서비스 밖 = 사용 불가'},
    {q: '"contraseña"의 뜻은?', opts: ['요금제', '비밀번호', '충전기', '메시지'], a: 1, ex: 'la contraseña del wifi = 와이파이 비밀번호'}
  ],
  poll: {q: '해외여행 중 인터넷, 어떻게 쓰세요?', opts: ['📶 현지 유심', '🌐 eSIM', '📡 포켓 와이파이', '💳 통신사 로밍', '☕ 무료 와이파이만']},
  write: {prompt: '카페나 숙소에서 필요한 것을 묻는 문장을 만들어 보세요.', pattern: '¿Dónde puedo ___?', hint: 'cargar el móvil, conectarme al wifi, comprar una tarjeta SIM…', example: '¿Dónde puedo comprar una tarjeta SIM?'},
  dialog: { title: '보고타 휴대폰 매장에서 유심 사기', lines: [
    {who: 'npc', es: 'Buenas. ¿En qué le puedo colaborar?', ko: '안녕하세요. 무엇을 도와드릴까요? (콜롬비아식 표현)'},
    {who: 'me', opts: [
      {es: 'Quisiera una pizza grande.', ko: '라지 피자 하나 주세요.', ok: false, why: '휴대폰 매장이에요!'},
      {es: 'Buenas. Quisiera una tarjeta SIM con datos.', ko: '안녕하세요. 데이터 있는 유심을 사고 싶어요.', ok: true}
    ]},
    {who: 'npc', es: 'Claro. Tenemos un plan de diez gigas por treinta días.', ko: '물론이죠. 30일에 10기가 요금제가 있어요.'},
    {who: 'me', opts: [
      {es: '¿Cuánto cuesta? ¿Incluye llamadas?', ko: '얼마예요? 통화도 포함인가요?', ok: true},
      {es: 'Me queda pequeño.', ko: '저한테 작아요.', ok: false, why: '옷 사이즈 표현이에요. 가격이나 조건을 물어보세요.'},
      {es: 'Siga todo recto.', ko: '쭉 직진하세요.', ok: false, why: '길 안내 표현이에요.'}
    ]},
    {who: 'npc', es: 'Cuesta cuarenta mil pesos e incluye llamadas nacionales. Necesito su pasaporte para registrarla.', ko: '4만 페소이고 국내 통화 포함이에요. 등록하려면 여권이 필요해요.'},
    {who: 'me', opts: [
      {es: 'Perfecto. Aquí tiene mi pasaporte.', ko: '좋아요. 여기 제 여권이요.', ok: true},
      {es: 'No tengo nada que declarar.', ko: '신고할 물건이 없어요.', ok: false, why: '세관에서 쓰는 표현이에요.'}
    ]},
    {who: 'npc', es: 'Listo. Ya tiene conexión. Reinicie el celular, por favor.', ko: '다 됐습니다. 이제 연결돼요. 휴대폰을 재부팅해 주세요.'},
    {who: 'me', opts: [
      {es: '¡Funciona! Muchas gracias.', ko: '돼요! 정말 감사합니다.', ok: true},
      {es: '¿Diga?', ko: '여보세요?', ok: false, why: '전화를 받는 표현이에요. 감사 인사로 마무리하세요.'}
    ]}
  ]}
});
