window.VAMOS = window.VAMOS || {chapters: []};

/* ===== 27. Emergencias ===== */
window.VAMOS.chapters.push({
  id: 'emergencies', part: 'safe', no: 27, emoji: '🚨',
  ko: '긴급 상황', es: 'Emergencias', en: 'Emergencies', pages: '154–155',
  widget: 'signs',
  scene: '마드리드 거리에서 일행이 갑자기 쓰러졌습니다. 주변 사람에게 도움을 요청하고 구급차를 부르는 미션입니다.',
  goals: ['위급한 순간에 짧고 크게 도움을 요청할 수 있다', '구급차·경찰·소방을 불러 달라고 말할 수 있다', '비상 표지판을 읽고 의미를 파악할 수 있다'],
  phrases: [
    {es: '¡Socorro!', ko: '도와주세요! (위급)', pr: '소꼬로', mk: 'short'},
    {es: '¡Ayuda, por favor!', ko: '도와주세요, 제발!', pr: '아유다, 뽀르 파보르'},
    {es: '¡Cuidado!', ko: '조심해요!', pr: '꾸이다도', mk: 'short'},
    {es: '¡Fuego!', ko: '불이야!', pr: '푸에고'},
    {es: 'Llame a una ambulancia, por favor.', ko: '구급차를 불러 주세요.', pr: '야메 아 우나 암불란시아, 뽀르 파보르'},
    {es: 'Llame a la policía.', ko: '경찰을 불러 주세요.', pr: '야메 알 라 뽈리시아'},
    {es: 'Es una emergencia.', ko: '긴급 상황이에요.', pr: '에스 우나 에메르헨시아'},
    {es: '¿Hay un médico aquí?', ko: '여기 의사 계세요?', pr: '아이 운 메디꼬 아끼', mk: 'qa', ans: {es: 'Sí, yo soy enfermera.', ko: '네, 저는 간호사예요.'}},
    {es: '¿Puedo usar su teléfono?', ko: '전화 좀 써도 될까요?', pr: '뿌에도 우사르 수 뗄레포노', mk: 'qa', ans: {es: 'Claro, tome.', ko: '물론이죠, 여기요.'}},
    {es: 'Me he perdido.', ko: '길을 잃었어요.', pr: '메 에 뻬르디도'},
    {es: 'Salida de emergencia', ko: '비상구', pr: '살리다 데 에메르헨시아', mk: 'look'},
    {es: '¿Está usted herido?', ko: '다치셨어요?', pr: '에스따 우스뗃 에리도', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '위급할 때는 문장을 완성하려 애쓰지 말고 ¡Socorro!, ¡Ayuda! 처럼 한 단어로 크게 외치는 것이 가장 빠릅니다. 부탁할 때는 Llame a... (~를 불러 주세요) 한 패턴만 기억해도 충분해요.'},
    {mk: 'culture', ko: '스페인을 포함한 EU 국가에서는 112 한 번호로 경찰·구급·소방을 모두 부를 수 있습니다. 중남미는 나라마다 달라서 멕시코는 911, 아르헨티나 구급은 107처럼 출국 전 확인이 필요해요.'},
    {mk: 'culture', ko: '스페인 지하철·건물의 비상구 표시는 초록색 바탕에 Salida(출구)라고 적혀 있습니다. Salida de emergencia만 알아 두어도 대피 동선을 찾기 쉽습니다.'}
  ],
  vocab: [
    {es: 'la ambulancia', ko: '구급차'}, {es: 'la policía', ko: '경찰'}, {es: 'los bomberos', ko: '소방관'},
    {es: 'el incendio', ko: '화재'}, {es: 'el accidente', ko: '사고'}, {es: 'el hospital', ko: '병원'},
    {es: 'el herido', ko: '부상자'}, {es: 'la salida', ko: '출구'}, {es: 'el extintor', ko: '소화기'},
    {es: 'la urgencia', ko: '응급(실)'}
  ],
  quiz: [
    {q: '"도와주세요!"를 위급하게 외칠 때 가장 알맞은 말은?', opts: ['¡Salud!', '¡Socorro!', '¡Hola!', '¡Vale!'], a: 1, ex: '¡Socorro!는 위급 상황에서 도움을 청하는 외침입니다. ¡Salud!는 건배/재채기할 때 쓰는 말이에요.'},
    {q: 'Llame a una ambulancia. 의 뜻은?', opts: ['구급차를 불러 주세요.', '택시를 불러 주세요.', '경찰서가 어디예요?', '병원에 가고 싶어요.'], a: 0, ex: 'Llame a ~ 는 "~를 불러 주세요(존댓말)", ambulancia는 구급차입니다.'},
    {q: '스페인에서 경찰·구급·소방을 모두 부를 수 있는 번호는?', opts: ['119', '911', '110', '112'], a: 3, ex: 'EU 공통 긴급번호는 112입니다.'},
    {q: '건물 안에서 "Salida de emergencia" 표지판이 가리키는 것은?', opts: ['화장실', '엘리베이터', '비상구', '안내 데스크'], a: 2, ex: 'salida(출구) + de emergencia(비상의) = 비상구.'},
    {q: '"불이야!"는 스페인어로?', opts: ['¡Agua!', '¡Cuidado!', '¡Fuego!', '¡Ladrón!'], a: 2, ex: 'fuego는 불, ¡Cuidado!는 "조심해요!"입니다.'}
  ],
  poll: {q: '해외여행 중 가장 걱정되는 긴급 상황은?', opts: ['🤒 갑자기 아플 때', '👜 소지품 분실·도난', '🧭 길을 잃었을 때', '🚗 교통사고', '🔥 화재·자연재해']},
  write: {prompt: 'Llame a ___ 패턴으로 누군가를 불러 달라는 문장을 만들어 보세요.', pattern: 'Llame a ___, por favor.', hint: 'una ambulancia / la policía / los bomberos / un médico', example: 'Llame a los bomberos, por favor.'},
  dialog: {title: '길에서 일행이 쓰러졌어요', lines: [
    {who: 'npc', es: '¿Qué ha pasado? ¿Necesita ayuda?', ko: '무슨 일이에요? 도움이 필요하세요?'},
    {who: 'me', opts: [
      {es: 'Sí, es una emergencia. Mi amigo se ha desmayado.', ko: '네, 긴급 상황이에요. 친구가 기절했어요.', ok: true},
      {es: 'No, gracias. Estoy bien.', ko: '아니요, 괜찮아요.', ok: false, why: '친구가 쓰러진 상황인데 도움을 거절하면 안 되죠.'},
      {es: '¿Dónde está el museo?', ko: '박물관이 어디예요?', ok: false, why: '지금 상황과 전혀 관계없는 질문입니다.'}
    ]},
    {who: 'npc', es: '¡Dios mío! ¿Llamo a una ambulancia?', ko: '세상에! 구급차 부를까요?'},
    {who: 'me', opts: [
      {es: 'Mañana, por favor.', ko: '내일요.', ok: false, why: '응급 상황에서 내일 부르면 늦어요!'},
      {es: 'Sí, por favor, llame al 112 rápido.', ko: '네, 112에 빨리 전화해 주세요.', ok: true},
      {es: 'Quiero un café.', ko: '커피 주세요.', ok: false, why: '카페에서 주문할 때 쓰는 말입니다.'}
    ]},
    {who: 'npc', es: 'Ya vienen. ¿Su amigo respira? ¿Está herido?', ko: '오고 있어요. 친구분 숨은 쉬어요? 다쳤나요?'},
    {who: 'me', opts: [
      {es: 'Sí, respira, pero tiene sangre en la cabeza.', ko: '네, 숨은 쉬는데 머리에 피가 나요.', ok: true},
      {es: 'Me llamo Minji.', ko: '제 이름은 민지예요.', ok: false, why: '질문은 친구의 상태입니다. 자기소개는 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Tranquila, no lo mueva. ¿Hay un médico aquí? ¡Ah, mire, ya llega la ambulancia!', ko: '진정하세요, 움직이지 마세요. 여기 의사 있나요? 아, 보세요, 구급차가 도착해요!'},
    {who: 'me', opts: [
      {es: '¡Adiós!', ko: '안녕히 가세요!', ok: false, why: '도와준 사람에게 감사 인사를 먼저 해야겠죠.'},
      {es: '¡Muchísimas gracias por su ayuda!', ko: '도와주셔서 정말 감사합니다!', ok: true},
      {es: 'No hablo español.', ko: '스페인어 못해요.', ok: false, why: '지금까지 잘 대화했잖아요!'}
    ]},
    {who: 'npc', es: 'De nada. ¡Que se mejore!', ko: '천만에요. 쾌차하길 바라요!'}
  ]}
});

/* ===== 28. La policía ===== */
window.VAMOS.chapters.push({
  id: 'police', part: 'safe', no: 28, emoji: '👮',
  ko: '경찰서', es: 'La policía', en: 'Police', pages: '156–157',
  scene: '바르셀로나 지하철에서 가방을 잃어버렸습니다. 경찰서에 가서 분실 신고를 하고 보험용 신고서(denuncia)를 받아 오는 미션입니다.',
  goals: ['분실·도난 사실과 잃어버린 물건을 설명할 수 있다', '언제·어디서 일어났는지 말할 수 있다', '보험용 신고서와 대사관 연락을 요청할 수 있다'],
  phrases: [
    {es: '¿Dónde está la comisaría?', ko: '경찰서가 어디예요?', pr: '돈데 에스따 라 꼬미사리아', mk: 'qa', ans: {es: 'Está al final de esta calle.', ko: '이 길 끝에 있어요.'}},
    {es: 'Quiero denunciar un robo.', ko: '도난 신고를 하고 싶어요.', pr: '끼에로 데눈시아르 운 로보'},
    {es: 'He perdido mi pasaporte.', ko: '여권을 잃어버렸어요.', pr: '에 뻬르디도 미 빠사뽀르떼'},
    {es: 'Me han robado la cartera.', ko: '지갑을 도둑맞았어요.', pr: '메 안 로바도 라 까르떼라'},
    {es: '¡Al ladrón!', ko: '도둑이야!', pr: '알 라드론', mk: 'short'},
    {es: 'Fue en el metro, esta mañana.', ko: '오늘 아침 지하철에서였어요.', pr: '푸에 엔 엘 메뜨로, 에스따 마냐나'},
    {es: 'Necesito una denuncia para mi seguro.', ko: '보험용 신고서가 필요해요.', pr: '네세시또 우나 데눈시아 빠라 미 세구로'},
    {es: 'Quiero llamar a mi embajada.', ko: '대사관에 연락하고 싶어요.', pr: '끼에로 야마르 아 미 엠바하다'},
    {es: '¿Hay alguien que hable inglés?', ko: '영어 하시는 분 있나요?', pr: '아이 알기엔 께 아블레 잉글레스'},
    {es: '¿Qué le han robado?', ko: '무엇을 도둑맞으셨나요?', pr: '께 레 안 로바도', mk: 'listen'},
    {es: 'Rellene este formulario.', ko: '이 서식을 작성해 주세요.', pr: '레예네 에스떼 포르물라리오', mk: 'listen'},
    {es: 'Objetos perdidos', ko: '분실물 센터', pr: '오브헤또스 뻬르디도스', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '"잃어버렸다"는 He perdido ~ (내가 잃음), "도둑맞았다"는 Me han robado ~ (누군가 훔쳐 감)로 구분합니다. 보험 청구에는 도난(robo)인지 분실(pérdida)인지가 중요해요.'},
    {mk: 'culture', ko: '스페인에는 국가경찰(Policía Nacional), 지역경찰(Policía Local), 그리고 카탈루냐의 Mossos d\'Esquadra처럼 여러 경찰이 있습니다. 관광객 도난 신고는 보통 Policía Nacional의 comisaría에서 받아요.'},
    {mk: 'culture', ko: '여권을 잃어버렸다면 경찰 신고서를 받은 뒤 한국 대사관·영사관에서 여행증명서나 긴급여권을 발급받아야 합니다. 여권 사본과 사진을 따로 보관해 두면 훨씬 빨라져요.'}
  ],
  vocab: [
    {es: 'la comisaría', ko: '경찰서'}, {es: 'el robo', ko: '도난'}, {es: 'el ladrón', ko: '도둑'},
    {es: 'la denuncia', ko: '신고(서)'}, {es: 'el pasaporte', ko: '여권'}, {es: 'la cartera', ko: '지갑'},
    {es: 'el bolso', ko: '핸드백'}, {es: 'la mochila', ko: '배낭'}, {es: 'el seguro', ko: '보험'},
    {es: 'la embajada', ko: '대사관'}, {es: 'el abogado', ko: '변호사'}
  ],
  quiz: [
    {q: '"여권을 잃어버렸어요."를 스페인어로?', opts: ['He perdido mi pasaporte.', 'Tengo mi pasaporte.', 'Busco el pasaporte.', 'Me gusta mi pasaporte.'], a: 0, ex: 'He perdido = 잃어버렸다 (현재완료).'},
    {q: 'comisaría는 무엇일까요?', opts: ['약국', '대사관', '경찰서', '은행'], a: 2, ex: 'comisaría (de policía) = 경찰서.'},
    {q: '보험 청구를 위해 경찰에게 받아야 하는 서류는?', opts: ['la carta', 'la denuncia', 'la receta', 'la factura'], a: 1, ex: 'denuncia는 신고서. receta는 처방전, factura는 영수증(세금계산서)입니다.'},
    {q: '경찰이 "¿Qué le han robado?"라고 물었습니다. 알맞은 대답은?', opts: ['En el metro.', 'Esta mañana.', 'Soy coreano.', 'Mi móvil y mi cartera.'], a: 3, ex: '"무엇을 도둑맞았냐"는 질문이므로 물건을 답해야 합니다.'},
    {q: '"Objetos perdidos" 표지판이 있는 곳은?', opts: ['분실물 센터', '출입 금지 구역', '면세점', '매표소'], a: 0, ex: 'objetos(물건) + perdidos(잃어버린) = 분실물.'}
  ],
  poll: {q: '여행 중 가장 잃어버리기 싫은 물건은?', opts: ['🛂 여권', '📱 휴대폰', '💳 지갑·카드', '📷 카메라', '🎒 배낭 전체']},
  write: {prompt: 'Me han robado ___ 패턴으로 도둑맞은 물건을 말해 보세요.', pattern: 'Me han robado ___.', hint: 'el móvil / la cartera / el bolso / la cámara / el pasaporte', example: 'Me han robado el móvil en la plaza.'},
  dialog: {title: '경찰서에서 도난 신고하기', lines: [
    {who: 'npc', es: 'Buenas tardes. ¿En qué puedo ayudarle?', ko: '안녕하세요. 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Una mesa para dos, por favor.', ko: '두 명 자리 부탁해요.', ok: false, why: '레스토랑에서 쓰는 표현입니다.'},
      {es: 'Quiero denunciar un robo.', ko: '도난 신고를 하고 싶어요.', ok: true},
      {es: 'Hace buen tiempo hoy.', ko: '오늘 날씨 좋네요.', ok: false, why: '경찰서에 온 목적을 말해야 해요.'}
    ]},
    {who: 'npc', es: 'De acuerdo. ¿Qué le han robado?', ko: '알겠습니다. 무엇을 도둑맞으셨죠?'},
    {who: 'me', opts: [
      {es: 'Me han robado la mochila con el pasaporte dentro.', ko: '여권이 든 배낭을 도둑맞았어요.', ok: true},
      {es: 'Me han robado ayer.', ko: '어제 도둑맞았어요.', ok: false, why: '무엇을 잃었는지 물었는데 시간만 답했어요.'}
    ]},
    {who: 'npc', es: '¿Dónde y cuándo ocurrió?', ko: '언제 어디서 일어났나요?'},
    {who: 'me', opts: [
      {es: 'Soy de Corea del Sur.', ko: '한국에서 왔어요.', ok: false, why: '국적이 아니라 장소와 시간을 말해야 합니다.'},
      {es: 'Muy bien, gracias.', ko: '잘 지내요, 감사합니다.', ok: false, why: '안부 인사에 대한 대답이에요.'},
      {es: 'En el metro, en la línea 3, sobre las diez de la mañana.', ko: '지하철 3호선에서, 오전 10시쯤이요.', ok: true}
    ]},
    {who: 'npc', es: 'Bien. Rellene este formulario, por favor.', ko: '좋습니다. 이 서식을 작성해 주세요.'},
    {who: 'me', opts: [
      {es: 'Vale. ¿Me puede dar una copia de la denuncia para mi seguro?', ko: '네. 보험용으로 신고서 사본을 받을 수 있을까요?', ok: true},
      {es: '¿Cuánto cuesta el formulario?', ko: '서식은 얼마예요?', ok: false, why: '신고 서식은 돈을 내는 것이 아닙니다. 보험용 사본을 요청하는 게 핵심이에요.'}
    ]},
    {who: 'npc', es: 'Claro. Y para el pasaporte, contacte con su embajada.', ko: '물론이죠. 여권은 대사관에 연락하세요.'}
  ]}
});

/* ===== 29. La salud ===== */
window.VAMOS.chapters.push({
  id: 'health', part: 'safe', no: 29, emoji: '🩺',
  ko: '건강·약국', es: 'La salud', en: 'Health', pages: '158–166',
  widget: 'body',
  scene: '세비야 여행 사흘째, 열이 나고 목이 아픕니다. 약국(farmacia)에서 증상을 설명하고 필요하면 병원 진료를 받는 미션입니다.',
  goals: ['아픈 곳과 증상을 Me duele ~ / Tengo ~ 로 말할 수 있다', '알레르기와 복용 중인 약을 알릴 수 있다', '약국에서 약을 사고 복용법을 이해할 수 있다'],
  phrases: [
    {es: 'Me encuentro mal.', ko: '몸이 안 좋아요.', pr: '메 엔꾸엔뜨로 말', mk: 'short'},
    {es: 'Me duele la cabeza.', ko: '머리가 아파요.', pr: '메 두엘레 라 까베사'},
    {es: 'Me duele la garganta.', ko: '목이 아파요.', pr: '메 두엘레 라 가르간따'},
    {es: 'Tengo fiebre.', ko: '열이 있어요.', pr: '뗑고 피에브레'},
    {es: 'Tengo diarrea.', ko: '설사를 해요.', pr: '뗑고 디아레아'},
    {es: 'Soy alérgico a la penicilina.', ko: '페니실린 알레르기가 있어요.', pr: '소이 알레르히꼬 알 라 뻬니실리나'},
    {es: 'Necesito un médico.', ko: '의사가 필요해요.', pr: '네세시또 운 메디꼬'},
    {es: '¿Tiene algo para el resfriado?', ko: '감기약 있나요?', pr: '띠에네 알고 빠라 엘 레스프리아도', mk: 'qa', ans: {es: 'Sí, tome este jarabe.', ko: '네, 이 시럽을 드세요.'}},
    {es: '¿Desde cuándo?', ko: '언제부터요?', pr: '데스데 꾸안도', mk: 'listen'},
    {es: 'Tómelo tres veces al día.', ko: '하루 세 번 드세요.', pr: '또멜로 뜨레스 베세스 알 디아', mk: 'listen'},
    {es: 'Farmacia de guardia', ko: '당번 약국(야간·휴일 영업)', pr: '파르마시아 데 과르디아', mk: 'look'},
    {es: 'Necesito un recibo para el seguro.', ko: '보험용 영수증이 필요해요.', pr: '네세시또 운 레시보 빠라 엘 세구로'}
  ],
  tips: [
    {mk: 'lang', ko: 'Me duele + 단수 신체부위, Me duelen + 복수 신체부위입니다. Me duele el estómago(배가 아파요) / Me duelen los pies(발이 아파요). 스페인어는 "내 머리"가 아니라 la cabeza처럼 정관사를 써요.'},
    {mk: 'culture', ko: '스페인 약국은 초록색 십자가 간판이 표시입니다. 약사가 가벼운 증상에 꽤 자세히 상담해 주니 병원보다 약국을 먼저 찾는 경우가 많아요. 밤이나 일요일엔 문 앞에 붙은 farmacia de guardia(당번 약국) 안내를 확인하세요.'},
    {mk: 'culture', ko: '항생제 등 많은 약은 처방전(receta) 없이는 살 수 없습니다. 여행자보험 청구를 위해 진료비 영수증과 진단서(informe médico)를 꼭 받아 두세요.'}
  ],
  vocab: [
    {es: 'la cabeza', ko: '머리'}, {es: 'la garganta', ko: '목(목구멍)'}, {es: 'el estómago', ko: '배·위'},
    {es: 'la espalda', ko: '등·허리'}, {es: 'el diente', ko: '이(치아)'}, {es: 'el oído', ko: '귀(속)'},
    {es: 'la fiebre', ko: '열'}, {es: 'la tos', ko: '기침'}, {es: 'la receta', ko: '처방전'},
    {es: 'el jarabe', ko: '시럽(물약)'}, {es: 'la pastilla', ko: '알약'}, {es: 'la tirita', ko: '반창고'}
  ],
  quiz: [
    {q: '"머리가 아파요."를 스페인어로?', opts: ['Tengo cabeza.', 'Me duele la cabeza.', 'Me gusta la cabeza.', 'Es la cabeza.'], a: 1, ex: 'Me duele + 신체부위 = ~가 아파요.'},
    {q: 'Tengo fiebre. 의 뜻은?', opts: ['열이 있어요.', '배고파요.', '추워요.', '피곤해요.'], a: 0, ex: 'fiebre = 열. Tengo hambre는 배고파요, Tengo frío는 추워요입니다.'},
    {q: '발(los pies)이 아플 때 알맞은 표현은?', opts: ['Me duele los pies.', 'Me duelo los pies.', 'Me duelen los pies.', 'Tengo duele pies.'], a: 2, ex: '복수 신체부위에는 duelen을 씁니다.'},
    {q: '밤 11시에 약이 필요합니다. 어떤 간판을 찾아야 할까요?', opts: ['Farmacia de guardia', 'Cerrado', 'Rebajas', 'Consigna'], a: 0, ex: 'farmacia de guardia는 야간·휴일 당번 약국입니다.'},
    {q: '약사가 "Tómelo tres veces al día."라고 했습니다. 뜻은?', opts: ['사흘 동안 쉬세요.', '세 알을 한 번에 드세요.', '3일 뒤에 다시 오세요.', '하루 세 번 드세요.'], a: 3, ex: 'tres veces al día = 하루에 세 번.'}
  ],
  poll: {q: '여행 갈 때 꼭 챙기는 상비약은?', opts: ['💊 진통·해열제', '🤢 소화제·지사제', '🤧 감기약', '🩹 반창고·연고', '🚗 멀미약']},
  write: {prompt: '바디 맵에서 고른 부위로 Me duele ___ 문장을 써 보세요. (복수면 Me duelen!)', pattern: 'Me duele ___.', hint: 'la cabeza / el estómago / la espalda / el oído / los pies(→duelen)', example: 'Me duele el estómago desde ayer.'},
  dialog: {title: '약국에서 증상 설명하기', lines: [
    {who: 'npc', es: 'Buenos días. ¿Qué le pasa?', ko: '안녕하세요. 어디가 불편하세요?'},
    {who: 'me', opts: [
      {es: 'Me duele mucho la garganta y tengo fiebre.', ko: '목이 많이 아프고 열이 있어요.', ok: true},
      {es: 'Me llamo Jisoo.', ko: '제 이름은 지수예요.', ok: false, why: '"무슨 일이냐"는 질문엔 증상을 말해야 해요.'},
      {es: 'Quiero una habitación doble.', ko: '더블룸 주세요.', ok: false, why: '호텔에서 쓰는 표현입니다.'}
    ]},
    {who: 'npc', es: '¿Desde cuándo?', ko: '언제부터요?'},
    {who: 'me', opts: [
      {es: 'Por la mañana.', ko: '아침에요.', ok: false, why: '"언제부터"에는 desde(~부터)로 답하는 게 자연스러워요.'},
      {es: 'Desde anoche.', ko: '어젯밤부터요.', ok: true}
    ]},
    {who: 'npc', es: '¿Es alérgico a algún medicamento?', ko: '알레르기 있는 약이 있나요?'},
    {who: 'me', opts: [
      {es: 'Sí, me gustan mucho.', ko: '네, 아주 좋아해요.', ok: false, why: '약 알레르기 여부를 묻는 질문입니다.'},
      {es: 'Sí, soy alérgico a la aspirina.', ko: '네, 아스피린 알레르기가 있어요.', ok: true},
      {es: 'Tres euros.', ko: '3유로요.', ok: false, why: '가격을 묻는 게 아니에요.'}
    ]},
    {who: 'npc', es: 'Entonces le doy paracetamol. Tómelo tres veces al día, después de comer.', ko: '그럼 파라세타몰을 드릴게요. 하루 세 번, 식후에 드세요.'},
    {who: 'me', opts: [
      {es: 'Muy bien. ¿Me da un recibo para el seguro, por favor?', ko: '알겠습니다. 보험용 영수증 주시겠어요?', ok: true},
      {es: '¿Tres veces a la semana?', ko: '일주일에 세 번이요?', ok: false, why: 'al día(하루에)라고 했어요. 잘못 알아들었네요.'}
    ]},
    {who: 'npc', es: 'Claro. Si mañana sigue con fiebre, vaya al centro de salud.', ko: '물론이죠. 내일도 열이 계속되면 보건소(병원)에 가세요.'}
  ]}
});

/* ===== 30. Comer fuera ===== */
window.VAMOS.chapters.push({
  id: 'eatingout', part: 'food', no: 30, emoji: '🍽️',
  ko: '레스토랑·바', es: 'Comer fuera', en: 'Eating Out', pages: '168–181',
  widget: 'menu',
  scene: '마드리드의 레스토랑에서 오늘의 메뉴(menú del día)로 점심을 먹고, 저녁엔 바에서 타파스와 음료를 주문한 뒤 계산까지 마치는 미션입니다.',
  goals: ['자리 요청부터 주문·추가 요청까지 할 수 있다', '고기 굽기·음료 등 원하는 방식을 말할 수 있다', '계산서를 요청하고 맛에 대한 칭찬·불만을 표현할 수 있다'],
  phrases: [
    {es: 'Una mesa para dos, por favor.', ko: '두 명 자리 부탁해요.', pr: '우나 메사 빠라 도스, 뽀르 파보르'},
    {es: '¿Me trae la carta, por favor?', ko: '메뉴판 좀 갖다 주시겠어요?', pr: '메 뜨라에 라 까르따, 뽀르 파보르'},
    {es: '¿Qué me recomienda?', ko: '뭘 추천하세요?', pr: '께 메 레꼬미엔다', mk: 'qa', ans: {es: 'El cordero asado está buenísimo.', ko: '양고기 구이가 정말 맛있어요.'}},
    {es: '¿Qué lleva este plato?', ko: '이 요리엔 뭐가 들어가요?', pr: '께 예바 에스떼 쁠라또'},
    {es: 'Para mí, el menú del día.', ko: '저는 오늘의 메뉴로 할게요.', pr: '빠라 미, 엘 메누 델 디아'},
    {es: 'Una caña, por favor.', ko: '생맥주 한 잔이요.', pr: '우나 까냐, 뽀르 파보르', mk: 'short'},
    {es: 'Poco hecho / Al punto / Muy hecho', ko: '레어 / 미디엄 / 웰던', pr: '뽀꼬 에초 / 알 뿐또 / 무이 에초'},
    {es: '¿Qué van a tomar?', ko: '뭘 드시겠어요?', pr: '께 반 아 또마르', mk: 'listen'},
    {es: '¡Está riquísimo!', ko: '정말 맛있어요!', pr: '에스따 리끼시모'},
    {es: 'La cuenta, por favor.', ko: '계산서 주세요.', pr: '라 꾸엔따, 뽀르 파보르', mk: 'short'},
    {es: 'Esto está frío.', ko: '이거 식었어요.', pr: '에스또 에스따 프리오'},
    {es: 'Menú del día', ko: '오늘의 메뉴(점심 코스)', pr: '메누 델 디아', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '스페인에서 메뉴판은 la carta이고, el menú는 보통 정해진 코스(menú del día)를 뜻합니다. 주문할 때는 Para mí... (저는…) 또는 ¿Me pone...? (~ 주시겠어요?)가 자연스러워요.'},
    {mk: 'culture', ko: '스페인 점심은 보통 오후 2~4시, 저녁은 9시 이후입니다. 평일 점심의 menú del día는 전채·메인·디저트(또는 커피)와 음료·빵이 포함된 실속 코스예요.'},
    {mk: 'culture', ko: '계산서는 직접 요청하기 전엔 잘 가져다주지 않습니다. 팁은 의무가 아니며 만족했다면 잔돈을 남기거나 5~10% 정도면 충분해요. 바에서는 카운터에 서서 먹으면 더 싸기도 합니다.'}
  ],
  vocab: [
    {es: 'la carta', ko: '메뉴판'}, {es: 'el primer plato', ko: '첫 번째 요리(전채)'}, {es: 'el segundo plato', ko: '메인 요리'},
    {es: 'el postre', ko: '디저트'}, {es: 'la bebida', ko: '음료'}, {es: 'el camarero', ko: '웨이터'},
    {es: 'la cuenta', ko: '계산서'}, {es: 'la propina', ko: '팁'}, {es: 'la ración', ko: '(요리) 1인분 큰 접시'},
    {es: 'la tapa', ko: '타파(작은 안주)'}, {es: 'el vaso', ko: '잔·컵'}, {es: 'la servilleta', ko: '냅킨'}
  ],
  quiz: [
    {q: '"계산서 주세요."는?', opts: ['La carta, por favor.', 'La mesa, por favor.', 'La cuenta, por favor.', 'La caña, por favor.'], a: 2, ex: 'cuenta = 계산서, carta = 메뉴판, caña = 생맥주.'},
    {q: '스테이크를 미디엄으로 원할 때?', opts: ['Al punto', 'Poco hecho', 'Muy hecho', 'Crudo'], a: 0, ex: 'poco hecho 레어 / al punto 미디엄 / muy hecho 웰던.'},
    {q: 'menú del día에 대한 설명으로 맞는 것은?', opts: ['밤에만 나오는 고급 코스', '전채·메인·디저트가 포함된 평일 점심 코스', '타파스 메뉴판', '음료 목록'], a: 1, ex: '보통 평일 점심에 제공되는 실속 세트입니다.'},
    {q: '웨이터가 "¿Qué van a tomar?"라고 물으면?', opts: ['네 명이에요.', '화장실이 어디예요?', '맛있었어요.', '뭘 드시겠어요? → 주문하면 된다'], a: 3, ex: 'tomar는 "먹다/마시다"로도 쓰여, 주문을 받는 말입니다.'},
    {q: '음식이 아주 맛있을 때 칭찬하는 말은?', opts: ['¡Está riquísimo!', '¡Está frío!', '¡Qué caro!', '¡Socorro!'], a: 0, ex: 'rico(맛있는)의 최상급 riquísimo.'}
  ],
  poll: {q: '스페인 바에서 제일 먼저 시켜 보고 싶은 타파스는?', opts: ['🥔 파타타스 브라바스', '🍤 감바스 알 아히요', '🥘 미니 파에야', '🫒 올리브·하몬', '🧀 크로케타']},
  write: {prompt: '메뉴판 위젯에서 고른 음식으로 주문 문장을 만들어 보세요.', pattern: 'Para mí, ___, por favor.', hint: 'una ración de calamares / el gazpacho / un vaso de vino tinto', example: 'Para mí, unas patatas bravas y una caña, por favor.'},
  dialog: {title: '레스토랑에서 점심 주문하기', lines: [
    {who: 'npc', es: 'Hola, buenas. ¿Cuántos son?', ko: '안녕하세요. 몇 분이세요?'},
    {who: 'me', opts: [
      {es: 'Somos dos. ¿Tienen mesa en la terraza?', ko: '두 명이에요. 테라스 자리 있나요?', ok: true},
      {es: 'Son las dos.', ko: '두 시예요.', ok: false, why: '시간이 아니라 인원을 물었어요.'},
      {es: 'Dos euros.', ko: '2유로요.', ok: false, why: '가격이 아니라 인원을 말해야 합니다.'}
    ]},
    {who: 'npc', es: 'Sí, pasen. Aquí tienen la carta. ¿Qué van a tomar?', ko: '네, 들어오세요. 메뉴판 여기 있습니다. 뭘 드시겠어요?'},
    {who: 'me', opts: [
      {es: 'La cuenta, por favor.', ko: '계산서 주세요.', ok: false, why: '아직 주문도 안 했어요!'},
      {es: 'Para mí, el menú del día. ¿Qué hay de primero?', ko: '저는 오늘의 메뉴요. 전채는 뭐가 있어요?', ok: true}
    ]},
    {who: 'npc', es: 'De primero hay gazpacho o ensalada, y de segundo, filete o merluza.', ko: '전채는 가스파초나 샐러드, 메인은 스테이크나 대구 요리가 있어요.'},
    {who: 'me', opts: [
      {es: 'Gazpacho y filete, por favor.', ko: '가스파초랑 스테이크 주세요.', ok: true},
      {es: 'No tengo hambre.', ko: '배 안 고파요.', ok: false, why: '이미 오늘의 메뉴를 시키겠다고 했잖아요.'},
      {es: 'Me duele la cabeza.', ko: '머리가 아파요.', ok: false, why: '건강 상황에서 쓰는 표현이에요.'}
    ]},
    {who: 'npc', es: '¿Cómo quiere el filete?', ko: '스테이크는 어떻게 구워 드릴까요?'},
    {who: 'me', opts: [
      {es: 'Muy frío, gracias.', ko: '아주 차갑게요.', ok: false, why: '굽기 정도를 물었어요. poco hecho / al punto / muy hecho 중에 고르세요.'},
      {es: 'Al punto, por favor. Y para beber, agua sin gas.', ko: '미디엄으로요. 음료는 탄산 없는 물이요.', ok: true}
    ]},
    {who: 'npc', es: 'Perfecto. Enseguida se lo traigo.', ko: '좋습니다. 바로 가져다 드릴게요.'}
  ]}
});

/* ===== 31. Hacer la compra ===== */
window.VAMOS.chapters.push({
  id: 'selfcatering', part: 'food', no: 31, emoji: '🛒',
  ko: '장보기·요리', es: 'Hacer la compra', en: 'Self-Catering', pages: '182–186',
  scene: '발렌시아의 에어비앤비에 머물며 직접 저녁을 해 먹기로 했습니다. 시장(mercado)에서 원하는 양만큼 재료를 사고 조리법을 물어보는 미션입니다.',
  goals: ['무게·개수·포장 단위로 원하는 양을 말할 수 있다', '가격과 신선도·원산지를 물어볼 수 있다', '간단한 조리 방법 표현을 이해할 수 있다'],
  phrases: [
    {es: '¿Quién es el último?', ko: '마지막 순서가 누구예요? (줄 확인)', pr: '끼엔 에스 엘 울띠모', mk: 'qa', ans: {es: 'Soy yo.', ko: '저예요.'}},
    {es: 'Medio kilo de tomates, por favor.', ko: '토마토 500그램 주세요.', pr: '메디오 낄로 데 또마떼스, 뽀르 파보르'},
    {es: 'Cien gramos de jamón serrano.', ko: '하몬 세라노 100그램이요.', pr: '시엔 그라모스 데 하몬 세라노'},
    {es: 'Una docena de huevos.', ko: '달걀 한 판(12개)이요.', pr: '우나 도세나 데 우에보스'},
    {es: 'Póngame un poco más.', ko: '조금 더 주세요.', pr: '뽕가메 운 뽀꼬 마스'},
    {es: '¿Cuánto es el kilo?', ko: '1킬로에 얼마예요?', pr: '꾸안또 에스 엘 낄로'},
    {es: '¿Puedo probarlo?', ko: '맛봐도 돼요?', pr: '뿌에도 쁘로바를로'},
    {es: '¿Es de aquí?', ko: '이 지역 거예요?', pr: '에스 데 아끼'},
    {es: '¿Algo más?', ko: '더 필요한 건요?', pr: '알고 마스', mk: 'listen'},
    {es: 'Nada más, gracias.', ko: '그게 다예요, 감사합니다.', pr: '나다 마스, 그라시아스', mk: 'short'},
    {es: '¿Cómo se cocina esto?', ko: '이건 어떻게 요리해요?', pr: '꼬모 세 꼬시나 에스또'},
    {es: 'Consumir preferentemente antes de...', ko: '~까지 섭취 권장 (유통기한 표시)', pr: '꼰수미르 쁘레페렌떼멘떼 안떼스 데', mk: 'look'}
  ],
  tips: [
    {mk: 'lang', ko: '양을 말할 때는 [수량] + de + 재료: un kilo de, medio kilo de, cien gramos de, una botella de, una lata de(캔). 가게에서 ¿Me pone...? / Póngame...(~ 주세요)는 아주 흔한 주문 방식이에요.'},
    {mk: 'culture', ko: '스페인 시장에서는 번호표가 없을 때 들어서며 ¿Quién es el último?라고 묻고, 마지막 사람 다음에 줄을 섭니다. 자기 차례를 스스로 기억하는 문화예요.'},
    {mk: 'culture', ko: '슈퍼마켓 과일·채소 코너에서는 비닐장갑을 끼고 직접 담아 저울에 무게를 달아 가격표를 붙이는 곳이 많습니다. 맨손으로 만지면 눈총을 받을 수 있어요.'}
  ],
  vocab: [
    {es: 'el mercado', ko: '시장'}, {es: 'el supermercado', ko: '슈퍼마켓'}, {es: 'la panadería', ko: '빵집'},
    {es: 'la carnicería', ko: '정육점'}, {es: 'la pescadería', ko: '생선 가게'}, {es: 'la fruta', ko: '과일'},
    {es: 'la verdura', ko: '채소'}, {es: 'el aceite de oliva', ko: '올리브유'}, {es: 'la sartén', ko: '프라이팬'},
    {es: 'la olla', ko: '냄비'}, {es: 'la bolsa', ko: '봉투'}
  ],
  quiz: [
    {q: '"토마토 500그램"을 스페인어로?', opts: ['Quinientos tomates', 'Medio kilo de tomates', 'Un kilo de tomates', 'Cinco tomates'], a: 1, ex: 'medio kilo = 0.5kg = 500g.'},
    {q: '시장에서 줄 설 때 "¿Quién es el último?"는 무슨 뜻?', opts: ['마지막 순서가 누구예요?', '가장 싼 게 뭐예요?', '몇 시에 닫아요?', '사장님이 누구세요?'], a: 0, ex: 'último = 마지막. 줄 맨 끝 사람을 확인하는 말입니다.'},
    {q: 'una docena de huevos는 달걀 몇 개?', opts: ['6개', '10개', '20개', '12개'], a: 3, ex: 'docena = 12개(한 다스).'},
    {q: '생선을 사려면 어디로 가야 할까요?', opts: ['la panadería', 'la carnicería', 'la pescadería', 'la farmacia'], a: 2, ex: 'pescado(생선) → pescadería.'},
    {q: '점원이 "¿Algo más?"라고 물을 때 더 살 게 없다면?', opts: ['Nada más, gracias.', 'Sí, por favor.', 'Un poco más.', 'Me gusta.'], a: 0, ex: 'Nada más = 그게 다예요.'}
  ],
  poll: {q: '스페인 숙소에서 직접 요리한다면 무엇을 만들고 싶나요?', opts: ['🥘 파에야', '🍳 토르티야 에스파뇰라', '🥗 신선한 샐러드', '🍝 파스타', '🍜 결국 라면…']},
  write: {prompt: '시장에서 원하는 재료를 양과 함께 주문해 보세요.', pattern: '___ de ___, por favor.', hint: 'un kilo / medio kilo / cien gramos / una docena / una botella', example: 'Un kilo de naranjas y una botella de aceite de oliva, por favor.'},
  dialog: {title: '시장에서 재료 사기', lines: [
    {who: 'npc', es: '¡Buenos días! ¿Quién es el último?', ko: '안녕하세요! 마지막 순서 누구세요?'},
    {who: 'me', opts: [
      {es: 'Soy yo. ¿Me pone un kilo de tomates?', ko: '저예요. 토마토 1킬로 주시겠어요?', ok: true},
      {es: 'Es el martes.', ko: '화요일이에요.', ok: false, why: '"마지막 순서가 누구냐"는 질문입니다.'},
      {es: 'No, gracias.', ko: '아니요, 괜찮아요.', ok: false, why: '줄 순서를 묻는 질문에 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Aquí tiene. Son muy buenos, de la huerta valenciana. ¿Algo más?', ko: '여기 있어요. 발렌시아 밭에서 온 아주 좋은 거예요. 더 필요하세요?'},
    {who: 'me', opts: [
      {es: 'Sí, cien gramos de jamón. ¿Puedo probarlo?', ko: '네, 하몬 100그램이요. 맛봐도 돼요?', ok: true},
      {es: 'La cuenta, por favor.', ko: '계산서 주세요.', ok: false, why: '시장에서는 ¿Cuánto es?(얼마예요?)라고 묻는 게 자연스러워요. 레스토랑 표현이에요.'}
    ]},
    {who: 'npc', es: 'Claro, pruebe. ¿Qué tal?', ko: '물론이죠, 드셔 보세요. 어때요?'},
    {who: 'me', opts: [
      {es: 'Me duele.', ko: '아파요.', ok: false, why: '맛 평가가 필요해요.'},
      {es: 'Muy frío.', ko: '아주 차가워요.', ok: false, why: '하몬 맛을 칭찬하는 게 어울려요.'},
      {es: '¡Riquísimo! Póngame un poco más, por favor.', ko: '정말 맛있어요! 조금 더 주세요.', ok: true}
    ]},
    {who: 'npc', es: 'Muy bien. ¿Algo más?', ko: '좋아요. 더 필요하세요?'},
    {who: 'me', opts: [
      {es: 'Nada más, gracias. ¿Cuánto es?', ko: '그게 다예요. 얼마예요?', ok: true},
      {es: 'Un poco más, más, más.', ko: '조금 더, 더, 더.', ok: false, why: '이제 계산할 차례예요.'}
    ]},
    {who: 'npc', es: 'Son nueve euros con cincuenta. ¡Que aproveche!', ko: '9유로 50센트입니다. 맛있게 드세요!'}
  ]}
});

/* ===== 32. Comida vegetariana y especial ===== */
window.VAMOS.chapters.push({
  id: 'vegetarian', part: 'food', no: 32, emoji: '🥗',
  ko: '채식·알레르기', es: 'Comida vegetariana y especial', en: 'Vegetarian & Special Meals', pages: '187–189',
  scene: '함께 여행하는 동료는 채식주의자이고, 나는 견과류 알레르기가 있습니다. 레스토랑에서 식단 조건을 정확히 전달하고 안전한 메뉴를 고르는 미션입니다.',
  goals: ['채식·비건 등 식단을 설명할 수 있다', '알레르기 재료와 빼 달라는 요청을 말할 수 있다', '요리에 특정 재료가 들어가는지 확인할 수 있다'],
  phrases: [
    {es: 'Soy vegetariano / vegetariana.', ko: '저는 채식주의자예요.', pr: '소이 베헤따리아노 / 베헤따리아나'},
    {es: 'Soy vegano / vegana.', ko: '저는 비건이에요.', pr: '소이 베가노 / 베가나'},
    {es: 'No como carne ni pescado.', ko: '고기도 생선도 안 먹어요.', pr: '노 꼬모 까르네 니 뻬스까도'},
    {es: '¿Tienen platos vegetarianos?', ko: '채식 요리 있나요?', pr: '띠에넨 쁠라또스 베헤따리아노스', mk: 'qa', ans: {es: 'Sí, tenemos una parrillada de verduras.', ko: '네, 채소 그릴 요리가 있어요.'}},
    {es: '¿Lleva carne o caldo de carne?', ko: '고기나 고기 육수가 들어가요?', pr: '예바 까르네 오 깔도 데 까르네'},
    {es: 'Soy alérgico a los frutos secos.', ko: '견과류 알레르기가 있어요.', pr: '소이 알레르히꼬 알 로스 프루또스 세꼬스'},
    {es: '¿Puede prepararlo sin huevo?', ko: '달걀 빼고 만들어 줄 수 있어요?', pr: '뿌에데 쁘레빠라를로 신 우에보'},
    {es: 'Sin gluten', ko: '글루텐 프리', pr: '신 글루뗀', mk: 'look'},
    {es: 'Sin jamón, por favor.', ko: '하몬 빼 주세요.', pr: '신 하몬, 뽀르 파보르', mk: 'short'},
    {es: 'Es muy grave si lo como.', ko: '먹으면 아주 위험해요.', pr: '에스 무이 그라베 시 로 꼬모'},
    {es: 'Lleva un poco de atún.', ko: '참치가 조금 들어가요.', pr: '예바 운 뽀꼬 데 아뚠', mk: 'listen'},
    {es: '¿Está cocinado con mantequilla?', ko: '버터로 요리했나요?', pr: '에스따 꼬시나도 꼰 만떼끼야'}
  ],
  tips: [
    {mk: 'lang', ko: 'sin + 재료 = "~ 없이/빼고". Sin cebolla(양파 빼고), sin picante(안 맵게). 들어가는지 확인할 땐 ¿Lleva ~? (~가 들어가요?)를 쓰세요. 성별에 따라 vegetariano/vegetariana로 어미가 바뀌어요.'},
    {mk: 'culture', ko: '스페인에서는 "채소 요리"에도 하몬 조각이나 참치, 고기 육수가 들어가는 경우가 흔합니다. 샐러드(ensalada mixta)에도 참치·달걀이 기본이라 꼭 따로 확인하세요.'},
    {mk: 'culture', ko: 'EU 규정상 식당은 14가지 주요 알레르기 성분 정보를 제공해야 해서 ¿Tienen la carta de alérgenos?(알레르기 성분표 있나요?)라고 물으면 표를 보여 주는 곳이 많아요. 대도시엔 비건 식당도 빠르게 늘고 있습니다.'}
  ],
  vocab: [
    {es: 'la carne', ko: '고기'}, {es: 'el pescado', ko: '생선'}, {es: 'los mariscos', ko: '해산물'},
    {es: 'el huevo', ko: '달걀'}, {es: 'los lácteos', ko: '유제품'}, {es: 'los frutos secos', ko: '견과류'},
    {es: 'el gluten', ko: '글루텐'}, {es: 'el caldo', ko: '육수'}, {es: 'la verdura', ko: '채소'},
    {es: 'las legumbres', ko: '콩류'}, {es: 'los alérgenos', ko: '알레르기 유발 성분'}
  ],
  quiz: [
    {q: '"견과류 알레르기가 있어요."를 스페인어로?', opts: ['Me gustan los frutos secos.', 'Soy alérgico a los frutos secos.', 'No tengo frutos secos.', 'Quiero frutos secos.'], a: 1, ex: 'Soy alérgico/a a ~ = ~에 알레르기가 있다.'},
    {q: 'Sin jamón, por favor. 의 뜻은?', opts: ['하몬 추가요.', '하몬만 주세요.', '하몬 빼 주세요.', '하몬 얼마예요?'], a: 2, ex: 'sin = ~ 없이.'},
    {q: '요리에 고기 육수가 들어가는지 확인하는 질문은?', opts: ['¿Lleva caldo de carne?', '¿Dónde está la carne?', '¿Cuánto es la carne?', '¿Le gusta la carne?'], a: 0, ex: '¿Lleva ~? = ~가 들어가요?'},
    {q: '포장지에 "Sin gluten"이라고 적혀 있다면?', opts: ['글루텐 함유', '유기농', '무설탕', '글루텐 프리'], a: 3, ex: 'sin gluten = 글루텐이 없음.'},
    {q: '여성 채식주의자가 자신을 소개할 때 알맞은 말은?', opts: ['Soy vegetariana.', 'Soy vegetariano.', 'Estoy vegetal.', 'Tengo vegetariana.'], a: 0, ex: '여성은 -a 어미: vegetariana.'}
  ],
  poll: {q: '해외 식당에서 식단 요청을 해 본 적이 있나요?', opts: ['🙋 자주 해요', '🙂 한두 번', '😅 말하기 어려워 그냥 먹었어요', '🤷 필요 없었어요']},
  write: {prompt: 'sin 또는 ¿Lleva...? 로 나만의 식단 요청 문장을 만들어 보세요.', pattern: '¿Puede prepararlo sin ___?', hint: 'cebolla / ajo / huevo / mantequilla / picante / gluten', example: '¿Puede prepararlo sin cebolla, por favor?'},
  dialog: {title: '채식·알레르기 조건으로 주문하기', lines: [
    {who: 'npc', es: '¿Ya saben qué van a pedir?', ko: '주문하실 것 정하셨어요?'},
    {who: 'me', opts: [
      {es: 'Mi compañera es vegetariana. ¿Tienen platos vegetarianos?', ko: '제 동료가 채식주의자예요. 채식 요리 있나요?', ok: true},
      {es: 'Somos de Corea.', ko: '저희는 한국에서 왔어요.', ok: false, why: '주문을 묻는 질문엔 식단 조건부터 알려야 해요.'}
    ]},
    {who: 'npc', es: 'Sí, el pisto manchego o la ensalada mixta.', ko: '네, 피스토 만체고나 믹스 샐러드가 있어요.'},
    {who: 'me', opts: [
      {es: 'Dos ensaladas, rápido.', ko: '샐러드 두 개, 빨리요.', ok: false, why: '믹스 샐러드엔 보통 참치·달걀이 들어가요. 확인이 필요합니다.'},
      {es: '¿La ensalada mixta lleva atún o huevo?', ko: '믹스 샐러드에 참치나 달걀이 들어가요?', ok: true},
      {es: '¿Dónde está el baño?', ko: '화장실 어디예요?', ok: false, why: '주문 흐름과 관계없는 질문입니다.'}
    ]},
    {who: 'npc', es: 'Sí, lleva atún y huevo. Pero el pisto es solo de verduras.', ko: '네, 참치와 달걀이 들어가요. 하지만 피스토는 채소만 들어가요.'},
    {who: 'me', opts: [
      {es: 'Perfecto, un pisto para ella. Y yo soy alérgico a los frutos secos.', ko: '좋아요, 그녀에겐 피스토 하나요. 그리고 저는 견과류 알레르기가 있어요.', ok: true},
      {es: 'Entonces, la ensalada con atún para ella.', ko: '그럼 그녀에겐 참치 샐러드로요.', ok: false, why: '채식주의자에게 참치가 든 샐러드는 맞지 않아요.'}
    ]},
    {who: 'npc', es: 'Entendido. El salmorejo no lleva frutos secos. ¿Quiere el jamón por encima?', ko: '알겠습니다. 살모레호에는 견과류가 없어요. 위에 하몬 올려 드릴까요?'},
    {who: 'me', opts: [
      {es: 'Sí, con mucho jamón y almendras.', ko: '네, 하몬과 아몬드 듬뿍이요.', ok: false, why: '아몬드는 견과류! 알레르기가 있다고 했잖아요.'},
      {es: 'Sí, con jamón, pero sin nada de frutos secos, por favor. Es muy grave.', ko: '네, 하몬은 올리되 견과류는 절대 빼 주세요. 아주 위험해요.', ok: true}
    ]},
    {who: 'npc', es: 'No se preocupe, se lo digo al cocinero.', ko: '걱정 마세요, 요리사에게 전달할게요.'}
  ]}
});

/* ===== 33. Descifrar el menú ===== */
window.VAMOS.chapters.push({
  id: 'decoder', part: 'food', no: 33, emoji: '📜',
  ko: '메뉴판 해독', es: 'Descifrar el menú', en: 'Menu Decoder', pages: '190–204',
  scene: '그림 하나 없는 스페인어 메뉴판을 받았습니다. 요리 이름과 조리법 단어를 해독해서 스페인·중남미 대표 요리를 골라 보는 미션입니다.',
  goals: ['스페인·중남미 대표 요리 이름과 특징을 알 수 있다', 'a la plancha, frito, asado 등 조리법 단어를 해독할 수 있다', '메뉴판 구조(entrantes·principales·postres)를 이해할 수 있다'],
  phrases: [
    {es: 'paella valenciana', ko: '파에야: 넓은 팬에 쌀·닭고기·토끼고기·콩을 사프란과 함께 익힌 발렌시아 쌀 요리', pr: '빠에야 발렌시아나', mk: 'look'},
    {es: 'gazpacho', ko: '가스파초: 토마토·오이·피망·마늘을 갈아 차갑게 먹는 안달루시아 수프', pr: '가스빠초'},
    {es: 'tortilla española', ko: '토르티야 에스파뇰라: 감자(와 양파)를 넣어 두툼하게 부친 스페인식 오믈렛', pr: '또르띠야 에스빠뇰라'},
    {es: 'pulpo a la gallega', ko: '뿔뽀 아 라 가예가: 삶은 문어에 파프리카 가루·올리브유·소금을 뿌린 갈리시아 요리', pr: '뿔뽀 알 라 가예가'},
    {es: 'gambas al ajillo', ko: '감바스 알 아히요: 올리브유에 마늘·고추와 새우를 끓이듯 익힌 요리', pr: '감바스 알 아히요'},
    {es: 'patatas bravas', ko: '파타타스 브라바스: 튀긴 감자에 매콤한 소스(와 마요 소스)를 얹은 타파스', pr: '빠따따스 브라바스'},
    {es: 'churros con chocolate', ko: '추로스 콘 초콜라테: 길쭉한 튀김 반죽을 진한 핫초코에 찍어 먹는 간식', pr: '추로스 꼰 초꼴라떼'},
    {es: 'ceviche', ko: '세비체: 생선·해산물을 라임즙에 재워 양파·고수와 먹는 페루식 요리', pr: '세비체'},
    {es: 'empanada', ko: '엠파나다: 고기·채소 등 속을 채워 굽거나 튀긴 반달 모양 파이 (아르헨티나·칠레 등)', pr: '엠빠나다'},
    {es: 'arepa', ko: '아레파: 옥수수 반죽을 동그랗게 구워 속을 채워 먹는 베네수엘라·콜롬비아 빵', pr: '아레빠'},
    {es: '¿Qué es esto exactamente?', ko: '이건 정확히 뭐예요?', pr: '께 에스 에스또 엑삭따멘떼', mk: 'qa', ans: {es: 'Es un guiso de garbanzos con chorizo.', ko: '초리소를 넣은 병아리콩 스튜예요.'}},
    {es: 'Es la especialidad de la casa.', ko: '저희 집 대표 요리예요.', pr: '에스 라 에스뻬시알리닫 델 라 까사', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '메뉴 이름은 [재료] + [조리법] 공식으로 해독하세요. calamares a la romana(오징어 튀김), merluza a la plancha(대구 철판구이), pollo asado(통닭구이). "a la ~"는 "~식으로"라는 뜻이에요.'},
    {mk: 'culture', ko: '같은 단어라도 지역마다 다릅니다. 스페인의 tortilla는 감자 오믈렛이지만 멕시코의 tortilla는 옥수수·밀가루 전병이에요. 중남미에서 감자는 patata 대신 papa라고 해요.'},
    {mk: 'lang', ko: '메뉴판 구조: entrantes(전채) → principales / segundos(메인) → postres(디저트). raciones는 여럿이 나눠 먹는 큰 접시, media ración은 반 접시예요.'}
  ],
  vocab: [
    {es: 'a la plancha', ko: '철판에 구운'}, {es: 'frito', ko: '튀긴'}, {es: 'asado', ko: '(오븐·불에) 구운'},
    {es: 'al horno', ko: '오븐에 구운'}, {es: 'al ajillo', ko: '마늘 올리브유에 익힌'}, {es: 'guisado', ko: '스튜로 끓인'},
    {es: 'relleno', ko: '속을 채운'}, {es: 'crudo', ko: '날것의'}, {es: 'a la romana', ko: '튀김옷을 입혀 튀긴'},
    {es: 'el cerdo', ko: '돼지고기'}, {es: 'el cordero', ko: '양고기'}, {es: 'los garbanzos', ko: '병아리콩'}
  ],
  quiz: [
    {q: 'merluza a la plancha는 어떤 요리일까요?', opts: ['대구 수프', '대구 철판구이', '대구 튀김', '대구 회'], a: 1, ex: 'a la plancha = 철판에 구운.'},
    {q: '차갑게 먹는 토마토 수프는?', opts: ['paella', 'churros', 'gazpacho', 'empanada'], a: 2, ex: '가스파초는 안달루시아의 차가운 수프입니다.'},
    {q: 'gambas al ajillo의 주재료와 조리법은?', opts: ['문어 / 삶기', '감자 / 튀기기', '돼지고기 / 굽기', '새우 / 마늘 올리브유'], a: 3, ex: 'gambas = 새우, al ajillo = 마늘 올리브유에 익힌.'},
    {q: '스페인에서 tortilla española를 주문하면 나오는 것은?', opts: ['감자 오믈렛', '옥수수 전병', '초콜릿 케이크', '해산물 볶음밥'], a: 0, ex: '스페인 tortilla는 감자 오믈렛, 멕시코 tortilla는 전병입니다.'},
    {q: '라임즙에 생선을 재워 먹는 페루 대표 요리는?', opts: ['arepa', 'ceviche', 'pulpo a la gallega', 'patatas bravas'], a: 1, ex: '세비체는 페루를 대표하는 해산물 요리입니다.'}
  ],
  poll: {q: '메뉴판에서 가장 먹어 보고 싶은 요리는?', opts: ['🥘 paella valenciana', '🐙 pulpo a la gallega', '🍤 gambas al ajillo', '🐟 ceviche', '🫓 arepa', '🍫 churros con chocolate']},
  write: {prompt: '[재료] + [조리법] 공식으로 나만의 메뉴 이름을 만들고 뜻을 적어 보세요.', pattern: '___ a la plancha / ___ al horno / ___ frito', hint: 'pollo / cerdo / calamares / verduras / salmón + a la plancha / al ajillo / al horno', example: 'Salmón a la plancha con verduras asadas.'},
  dialog: {title: '낯선 메뉴판 해독하기', lines: [
    {who: 'npc', es: 'Aquí tiene la carta. Hoy la especialidad de la casa es el cocido madrileño.', ko: '메뉴판 여기 있습니다. 오늘 대표 요리는 코시도 마드릴레뇨예요.'},
    {who: 'me', opts: [
      {es: '¿Qué es el cocido madrileño exactamente?', ko: '코시도 마드릴레뇨가 정확히 뭐예요?', ok: true},
      {es: 'La cuenta, por favor.', ko: '계산서 주세요.', ok: false, why: '이제 막 메뉴판을 받았어요!'},
      {es: 'Soy alérgico al agua.', ko: '물 알레르기가 있어요.', ok: false, why: '맞지 않는 말이에요. 모르는 요리는 무엇인지 물어보세요.'}
    ]},
    {who: 'npc', es: 'Es un guiso de garbanzos con carne, chorizo y verduras.', ko: '병아리콩에 고기·초리소·채소를 넣은 스튜예요.'},
    {who: 'me', opts: [
      {es: '¿Está frito?', ko: '튀긴 거예요?', ok: false, why: 'guiso는 스튜, 끓인 요리라고 이미 설명했어요.'},
      {es: 'Suena bien. ¿Y qué es "calamares a la romana"?', ko: '좋네요. "칼라마레스 아 라 로마나"는 뭐예요?', ok: true}
    ]},
    {who: 'npc', es: 'Son calamares rebozados y fritos. Muy típicos.', ko: '튀김옷을 입혀 튀긴 오징어예요. 아주 대표적이죠.'},
    {who: 'me', opts: [
      {es: 'Entonces, una media ración de calamares de entrante y el cocido de principal.', ko: '그럼 전채로 오징어 튀김 반 접시, 메인으로 코시도 주세요.', ok: true},
      {es: 'Entonces, el postre primero y el entrante al final.', ko: '그럼 디저트 먼저, 전채는 마지막에요.', ok: false, why: '메뉴 순서는 entrante → principal → postre예요.'},
      {es: 'No me gusta comer.', ko: '먹는 거 안 좋아해요.', ok: false, why: '식당에서 주문하는 상황이에요.'}
    ]},
    {who: 'npc', es: 'Muy bien. ¿Y de postre? Tenemos churros con chocolate y flan.', ko: '좋습니다. 디저트는요? 추로스 콘 초콜라테와 플란이 있어요.'},
    {who: 'me', opts: [
      {es: 'Churros con chocolate, ¡claro!', ko: '추로스 콘 초콜라테, 당연하죠!', ok: true},
      {es: 'Gambas al ajillo de postre.', ko: '디저트로 감바스 알 아히요요.', ok: false, why: '감바스는 디저트가 아니라 타파스·전채예요.'}
    ]},
    {who: 'npc', es: '¡Excelente elección! ¡Que aproveche!', ko: '탁월한 선택이에요! 맛있게 드세요!'}
  ]}
});
