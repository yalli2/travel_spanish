window.VAMOS = window.VAMOS || {chapters: []};

/* ───────── 14. 돈과 은행 ───────── */
window.VAMOS.chapters.push({
  id: 'money', part: 'practical', no: 14, emoji: '💶',
  ko: '돈과 은행', es: 'Dinero y banco', en: 'Money & Banking', pages: '91–93',
  scene: '마드리드 여행 셋째 날, 현금이 떨어졌어요. 식당에서 계산을 마치고 ATM과 환전소에서 돈 문제를 해결해 보세요.',
  goals: ['카드·현금 결제 가능 여부를 묻고 계산서를 요청할 수 있다', '환전하고 환율·수수료를 물어볼 수 있다', 'ATM이 카드를 삼켰을 때 문제 상황을 설명할 수 있다'],
  phrases: [
    {es: '¿Aceptan tarjeta?', ko: '카드 받나요?', pr: '아셉딴 따르헤따', mk: 'qa', ans: {es: 'Sí, pero solo a partir de diez euros.', ko: '네, 하지만 10유로 이상부터요.'}},
    {es: 'La cuenta, por favor.', ko: '계산서 주세요.', pr: '라 꾸엔따, 뽀르 파보르', mk: 'short'},
    {es: '¿Dónde hay un cajero automático?', ko: '현금인출기(ATM)가 어디 있나요?', pr: '돈데 아이 운 까헤로 아우또마띠꼬'},
    {es: 'Quisiera cambiar dinero.', ko: '환전하고 싶어요.', pr: '끼시에라 깜비아르 디네로'},
    {es: '¿A cuánto está el cambio?', ko: '환율이 얼마예요?', pr: '아 꾸안또 에스따 엘 깜비오', mk: 'qa', ans: {es: 'Un euro son mil cuatrocientos wones.', ko: '1유로에 1,400원이에요.'}},
    {es: '¿Cuál es la comisión?', ko: '수수료가 얼마예요?', pr: '꾸알 에스 라 꼬미시온'},
    {es: '¿Puedo pagar en efectivo?', ko: '현금으로 내도 되나요?', pr: '뿌에도 빠가르 엔 에펙띠보'},
    {es: '¿Me da el recibo?', ko: '영수증 주시겠어요?', pr: '메 다 엘 레시보', mk: 'short'},
    {es: 'El cajero se ha tragado mi tarjeta.', ko: 'ATM이 제 카드를 먹어 버렸어요.', pr: '엘 까헤로 세 아 뜨라가도 미 따르헤따'},
    {es: 'Cambio / Exchange', ko: '환전 (간판)', pr: '깜비오', mk: 'look'},
    {es: 'Introduzca su PIN.', ko: '비밀번호를 입력하세요.', pr: '인뜨로두스까 수 삔', mk: 'look'},
    {es: '¿Va a pagar con tarjeta o en efectivo?', ko: '카드로 하세요, 현금으로 하세요?', pr: '바 아 빠가르 꼰 따르헤따 오 엔 에펙띠보', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '"현금으로"는 en efectivo, "카드로"는 con tarjeta라고 해요. 전치사가 다르니 묶음 표현으로 통째로 외워 두세요.'},
    {mk: 'culture', ko: '스페인에서는 비접촉 카드 결제가 아주 흔하지만, 작은 바나 시장 노점은 아직 현금만 받는 곳도 있어요. 팁은 의무가 아니고 잔돈을 조금 남기는 정도면 충분해요.'},
    {mk: 'lang', ko: 'ATM 화면에서 "원화로 결제(DCC)"를 고르면 환율이 불리할 수 있어요. 현지 통화(euros)로 결제를 선택하는 게 보통 유리합니다.'}
  ],
  vocab: [
    {es: 'el dinero', ko: '돈'}, {es: 'el efectivo', ko: '현금'}, {es: 'la tarjeta de crédito', ko: '신용카드'},
    {es: 'el billete', ko: '지폐'}, {es: 'la moneda', ko: '동전 / 통화'}, {es: 'el cambio', ko: '환전 / 잔돈'},
    {es: 'la comisión', ko: '수수료'}, {es: 'el cajero automático', ko: '현금인출기'}, {es: 'el recibo', ko: '영수증'},
    {es: 'la cuenta', ko: '계산서 / 계좌'}, {es: 'el banco', ko: '은행'}, {es: 'la propina', ko: '팁'}
  ],
  quiz: [
    {q: '"계산서 주세요"를 스페인어로?', opts: ['La carta, por favor.', 'La cuenta, por favor.', 'El cambio, por favor.', 'La tarjeta, por favor.'], a: 1, ex: 'la cuenta = 계산서. la carta는 메뉴판이에요.'},
    {q: '"¿Aceptan tarjeta?"의 뜻은?', opts: ['카드 받나요?', '카드 잃어버렸어요.', '카드 비밀번호가 뭐예요?', '카드를 만들고 싶어요.'], a: 0, ex: 'aceptar = 받다, 허용하다.'},
    {q: '"현금으로 낼게요"에 맞는 표현은?', opts: ['Pago con efectivo.', 'Pago a efectivo.', 'Pago de efectivo.', 'Pago en efectivo.'], a: 3, ex: '현금은 en efectivo, 카드는 con tarjeta.'},
    {q: 'ATM 화면의 "Introduzca su PIN"은 무슨 뜻일까요?', opts: ['카드를 빼세요', '금액을 선택하세요', '비밀번호를 입력하세요', '영수증을 받으세요'], a: 2, ex: 'introducir = 넣다, 입력하다.'},
    {q: '"la comisión"은?', opts: ['환율', '수수료', '잔액', '영수증'], a: 1, ex: '¿Cuál es la comisión? = 수수료가 얼마예요?'}
  ],
  poll: {q: '해외여행에서 주로 어떻게 결제하나요?', opts: ['💳 신용카드', '📱 모바일 페이', '💶 현지 현금', '🏧 트래블 체크카드', '🤝 섞어서 그때그때']},
  write: {prompt: '환전소나 가게에서 쓸 "~할 수 있나요?" 문장을 만들어 보세요.', pattern: '¿Puedo ___?', hint: 'pagar con tarjeta / cambiar dólares / sacar dinero 등을 넣어 보세요.', example: '¿Puedo pagar con tarjeta?'},
  dialog: { title: '환전소에서 유로 바꾸기', lines: [
    {who: 'npc', es: 'Buenos días, ¿en qué puedo ayudarle?', ko: '안녕하세요, 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Quiero comer paella.', ko: '빠에야 먹고 싶어요.', ok: false, why: '여기는 식당이 아니라 환전소예요.'},
      {es: 'Quisiera cambiar dólares a euros.', ko: '달러를 유로로 바꾸고 싶어요.', ok: true},
      {es: 'La cuenta, por favor.', ko: '계산서 주세요.', ok: false, why: '계산서는 식사 후 식당에서 요청하는 말이에요.'}
    ]},
    {who: 'npc', es: 'Claro. ¿Cuánto quiere cambiar?', ko: '물론이죠. 얼마나 바꾸실 건가요?'},
    {who: 'me', opts: [
      {es: 'Doscientos dólares. ¿Cuál es la comisión?', ko: '200달러요. 수수료가 얼마예요?', ok: true},
      {es: 'Son las dos.', ko: '두 시예요.', ok: false, why: '시간이 아니라 금액을 묻고 있어요.'}
    ]},
    {who: 'npc', es: 'La comisión es del tres por ciento. Necesito su pasaporte.', ko: '수수료는 3%예요. 여권이 필요합니다.'},
    {who: 'me', opts: [
      {es: 'No, gracias.', ko: '아니요, 괜찮아요.', ok: false, why: '환전하려면 여권을 보여줘야 해요.'},
      {es: 'Lo siento, no tengo hambre.', ko: '죄송해요, 배가 안 고파요.', ok: false, why: '대화와 상관없는 말이에요.'},
      {es: 'Aquí tiene.', ko: '여기 있습니다.', ok: true}
    ]},
    {who: 'npc', es: 'Perfecto. Aquí tiene sus euros y el recibo.', ko: '좋습니다. 여기 유로와 영수증이요.'},
    {who: 'me', opts: [
      {es: 'Muchas gracias. ¡Adiós!', ko: '정말 감사합니다. 안녕히 계세요!', ok: true},
      {es: '¿Aceptan tarjeta?', ko: '카드 받나요?', ok: false, why: '이미 환전이 끝났어요. 감사 인사로 마무리해요.'}
    ]}
  ]}
});

/* ───────── 15. 비즈니스 ───────── */
window.VAMOS.chapters.push({
  id: 'business', part: 'practical', no: 15, emoji: '💼',
  ko: '비즈니스', es: 'Negocios', en: 'Business', pages: '94–95',
  scene: '멕시코시티 출장 첫날, 거래처 사무실 안내 데스크에 도착했어요. 약속을 확인하고 담당자와 인사·명함 교환을 해 보세요.',
  goals: ['회의 약속이 있음을 알리고 담당자를 찾을 수 있다', '자기소개와 명함 교환을 격식 있게 할 수 있다', 'usted / señor·señora 등 존칭을 상황에 맞게 쓸 수 있다'],
  phrases: [
    {es: 'Tengo una reunión con la señora López.', ko: '로페스 씨와 회의가 있습니다.', pr: '뗑고 우나 레우니온 꼰 라 세뇨라 로뻬스'},
    {es: 'Estoy aquí por negocios.', ko: '출장으로 왔습니다.', pr: '에스또이 아끼 뽀르 네고시오스', mk: 'short'},
    {es: 'Aquí tiene mi tarjeta.', ko: '제 명함입니다.', pr: '아끼 띠에네 미 따르헤따'},
    {es: '¿Me da su tarjeta?', ko: '명함 한 장 주시겠어요?', pr: '메 다 수 따르헤따'},
    {es: 'Encantado de conocerle.', ko: '만나 뵙게 되어 반갑습니다. (남성이 말할 때)', pr: '엔깐따도 데 꼬노세를레'},
    {es: '¿Tiene cita?', ko: '약속(예약) 있으세요?', pr: '띠에네 시따', mk: 'qa', ans: {es: 'Sí, a las diez con el señor Ruiz.', ko: '네, 10시에 루이스 씨와요.'}},
    {es: 'Trabajo para una empresa coreana.', ko: '한국 회사에서 일합니다.', pr: '뜨라바호 빠라 우나 엠쁘레사 꼬레아나'},
    {es: '¿Dónde puedo conectarme a internet?', ko: '어디서 인터넷에 접속할 수 있나요?', pr: '돈데 뿌에도 꼬넥따르메 아 인떼르넷'},
    {es: 'Le envío la propuesta por correo.', ko: '제안서를 이메일로 보내드리겠습니다.', pr: '레 엔비오 라 쁘로뿌에스따 뽀르 꼬레오'},
    {es: 'Recepción', ko: '안내 데스크 (표지판)', pr: '레셉시온', mk: 'look'},
    {es: 'Siéntese, por favor. Ahora viene.', ko: '앉으세요. 곧 오실 거예요.', pr: '시엔떼세, 뽀르 파보르. 아오라 비에네', mk: 'listen'},
    {es: '¡Ha sido un placer!', ko: '즐거운 만남이었습니다!', pr: '아 시도 운 쁠라세르', mk: 'short'}
  ],
  tips: [
    {mk: 'lang', ko: '처음 만난 비즈니스 상대에게는 tú 대신 usted를 쓰세요. 동사도 3인칭 형태(tiene, puede)가 됩니다. 상대가 "tutéame"(말 편하게 해요)라고 하면 그때 tú로 바꾸면 돼요.'},
    {mk: 'culture', ko: '중남미에서는 직함을 중시해서 Licenciado(Lic.), Ingeniero(Ing.)처럼 학위·직업 호칭을 이름 앞에 붙여 부르는 경우가 많아요. 명함에 적힌 호칭을 그대로 불러 주면 좋은 인상을 줍니다.'},
    {mk: 'culture', ko: '스페인은 점심이 늦고(14~16시) 길어서, 이 시간대에는 회의를 잡지 않는 편이 좋아요. 8월은 휴가철이라 업무 연락이 느려질 수 있어요.'}
  ],
  vocab: [
    {es: 'la reunión', ko: '회의'}, {es: 'la cita', ko: '약속, 예약'}, {es: 'la empresa', ko: '회사'},
    {es: 'la tarjeta de visita', ko: '명함'}, {es: 'el cliente', ko: '고객, 거래처'}, {es: 'la propuesta', ko: '제안서'},
    {es: 'el contrato', ko: '계약서'}, {es: 'la oficina', ko: '사무실'}, {es: 'el correo electrónico', ko: '이메일'},
    {es: 'la sala de reuniones', ko: '회의실'}, {es: 'el gerente', ko: '매니저, 관리자'}
  ],
  quiz: [
    {q: '"출장으로 왔습니다"는?', opts: ['Estoy aquí de vacaciones.', 'Estoy aquí por negocios.', 'Estoy aquí con mi familia.', 'Estoy aquí para estudiar.'], a: 1, ex: 'por negocios = 비즈니스(업무)로.'},
    {q: '처음 만난 거래처 사장님께 알맞은 질문은?', opts: ['¿Tienes tarjeta?', '¿Qué tal, tío?', '¿Me da su tarjeta?', '¿Me das tu tarjeta, guapo?'], a: 2, ex: '격식 상황에서는 usted 형태(da, su)를 써요.'},
    {q: '"¿Tiene cita?"의 의미는?', opts: ['약속 있으세요?', '시간 있으세요?', '명함 있으세요?', '여권 있으세요?'], a: 0, ex: 'la cita = 약속, 예약.'},
    {q: '"la reunión"의 뜻은?', opts: ['계약', '사무실', '휴가', '회의'], a: 3, ex: 'Tengo una reunión = 회의가 있어요.'},
    {q: '헤어질 때 쓰기 좋은 격식 있는 인사는?', opts: ['¡Ha sido un placer!', '¡Qué guay!', '¡Vale, tío!', '¡Hasta nunca!'], a: 0, ex: '"즐거운 만남이었습니다"라는 정중한 인사예요.'}
  ],
  poll: {q: '해외 출장에서 가장 긴장되는 순간은?', opts: ['🤝 첫인사·명함 교환', '🎤 프레젠테이션', '🍽️ 비즈니스 식사', '📞 전화 통화', '💬 스몰토크']},
  write: {prompt: '스페인어로 짧은 자기소개 비즈니스 문장을 만들어 보세요.', pattern: 'Trabajo en ___ como ___.', hint: '회사 이름과 직무(gerente, ingeniero/a, profesor/a…)를 넣어 보세요.', example: 'Trabajo en Dain Edu como directora.'},
  dialog: { title: '거래처 안내 데스크에서', lines: [
    {who: 'npc', es: 'Buenos días. ¿Tiene cita?', ko: '안녕하세요. 약속 있으세요?'},
    {who: 'me', opts: [
      {es: 'Sí, tengo una reunión con el señor Ruiz a las diez.', ko: '네, 10시에 루이스 씨와 회의가 있습니다.', ok: true},
      {es: 'No, gracias, solo estoy mirando.', ko: '아니요, 그냥 구경 중이에요.', ok: false, why: '가게에서 쓰는 말이에요. 회의 약속을 말해야 해요.'},
      {es: 'Una mesa para dos, por favor.', ko: '두 명 자리 부탁해요.', ok: false, why: '식당에서 자리를 요청하는 말이에요.'}
    ]},
    {who: 'npc', es: 'Muy bien. ¿Su nombre, por favor?', ko: '네. 성함이 어떻게 되시죠?'},
    {who: 'me', opts: [
      {es: 'Tengo treinta años.', ko: '서른 살이에요.', ok: false, why: '나이가 아니라 이름을 묻고 있어요.'},
      {es: 'Me llamo Kim Minji, de la empresa Hanbit.', ko: '한빛 회사의 김민지입니다.', ok: true}
    ]},
    {who: 'npc', es: 'Siéntese, por favor. El señor Ruiz ahora viene.', ko: '앉으세요. 루이스 씨가 곧 오십니다.'},
    {who: 'npc', es: 'Buenos días, señora Kim. Soy Carlos Ruiz.', ko: '안녕하세요, 김 선생님. 카를로스 루이스입니다.'},
    {who: 'me', opts: [
      {es: '¿Qué pasa, Carlitos?', ko: '어이, 카를리토스 무슨 일이야?', ok: false, why: '첫 비즈니스 만남에는 너무 친근한 말투예요.'},
      {es: 'Adiós, señor Ruiz.', ko: '안녕히 가세요, 루이스 씨.', ok: false, why: '만나자마자 작별 인사를 하고 있어요.'},
      {es: 'Encantada de conocerle. Aquí tiene mi tarjeta.', ko: '만나 뵙게 되어 반갑습니다. 제 명함입니다.', ok: true}
    ]},
    {who: 'npc', es: 'Gracias. Pasemos a la sala de reuniones.', ko: '감사합니다. 회의실로 가시죠.'}
  ]}
});

/* ───────── 16. 관광 ───────── */
window.VAMOS.chapters.push({
  id: 'sightseeing', part: 'practical', no: 16, emoji: '🏛️',
  ko: '관광', es: 'Turismo', en: 'Sightseeing', pages: '96–100',
  scene: '바르셀로나 관광 안내소에 들렀다가 미술관 매표소로 가요. 운영 시간·입장료·할인·투어 정보를 스페인어로 알아내세요.',
  goals: ['관광지의 운영 시간과 입장료를 물어볼 수 있다', '학생·경로 할인, 무료 입장 시간을 확인할 수 있다', '가이드 투어를 예약하고 사진 촬영 가능 여부를 물어볼 수 있다'],
  phrases: [
    {es: '¿Tiene un mapa de la ciudad?', ko: '시내 지도 있나요?', pr: '띠에네 운 마빠 데 라 시우닷'},
    {es: '¿Qué me recomienda visitar?', ko: '어디를 가 보라고 추천하시겠어요?', pr: '께 메 레꼬미엔다 비시따르'},
    {es: '¿A qué hora abre el museo?', ko: '박물관은 몇 시에 열어요?', pr: '아 께 오라 아브레 엘 무세오', mk: 'qa', ans: {es: 'Abre a las diez y cierra a las ocho.', ko: '10시에 열고 8시에 닫아요.'}},
    {es: '¿Cuánto cuesta la entrada?', ko: '입장료가 얼마예요?', pr: '꾸안또 꾸에스따 라 엔뜨라다', mk: 'short'},
    {es: '¿Hay descuento para estudiantes?', ko: '학생 할인 있나요?', pr: '아이 데스꾸엔또 빠라 에스뚜디안떼스'},
    {es: '¿Cuándo es gratis la entrada?', ko: '무료 입장은 언제예요?', pr: '꾸안도 에스 그라띠스 라 엔뜨라다'},
    {es: '¿Se pueden hacer fotos?', ko: '사진 찍어도 되나요?', pr: '세 뿌에덴 아세르 포또스', mk: 'qa', ans: {es: 'Sí, pero sin flash.', ko: '네, 하지만 플래시는 안 돼요.'}},
    {es: '¿Hay visitas guiadas en inglés?', ko: '영어 가이드 투어 있나요?', pr: '아이 비시따스 기아다스 엔 잉글레스'},
    {es: '¿A qué hora sale el tour?', ko: '투어는 몇 시에 출발해요?', pr: '아 께 오라 살레 엘 뚜르'},
    {es: 'Dos entradas, por favor.', ko: '입장권 두 장 주세요.', pr: '도스 엔뜨라다스, 뽀르 파보르', mk: 'short'},
    {es: 'Prohibido hacer fotos', ko: '사진 촬영 금지', pr: '쁘로이비도 아세르 포또스', mk: 'look'},
    {es: 'Cerrado por obras', ko: '공사로 휴관', pr: '세라도 뽀르 오브라스', mk: 'look'}
  ],
  tips: [
    {mk: 'culture', ko: '스페인의 많은 국립 박물관은 특정 요일 저녁이나 일요일 오후에 무료로 개방해요. 대신 줄이 길어지니 미리 공식 사이트에서 시간을 확인하세요. 월요일 휴관인 곳도 많아요.'},
    {mk: 'lang', ko: '"¿Se puede…?"는 "~해도 되나요?"라는 만능 허락 표현이에요. 뒤에 동사원형을 붙이면 돼요: ¿Se puede entrar? (들어가도 되나요?), ¿Se puede comer aquí? (여기서 먹어도 되나요?)'},
    {mk: 'culture', ko: '성당 같은 종교 시설은 어깨와 무릎을 가리는 복장을 요구하기도 해요. 미사 시간에는 관광 입장이 제한될 수 있어요.'}
  ],
  vocab: [
    {es: 'el museo', ko: '박물관, 미술관'}, {es: 'la catedral', ko: '대성당'}, {es: 'el castillo', ko: '성'},
    {es: 'la entrada', ko: '입장권 / 입구'}, {es: 'la visita guiada', ko: '가이드 투어'}, {es: 'el horario', ko: '운영 시간표'},
    {es: 'la oficina de turismo', ko: '관광 안내소'}, {es: 'la exposición', ko: '전시회'}, {es: 'el casco antiguo', ko: '구시가지'},
    {es: 'el descuento', ko: '할인'}, {es: 'el folleto', ko: '안내 책자, 팸플릿'}, {es: 'la audioguía', ko: '오디오 가이드'}
  ],
  quiz: [
    {q: '"입장료가 얼마예요?"는?', opts: ['¿Dónde está la entrada?', '¿Cuánto cuesta la entrada?', '¿Cuándo es la entrada?', '¿Qué es la entrada?'], a: 1, ex: 'la entrada = 입장권/입장료, ¿Cuánto cuesta? = 얼마예요?'},
    {q: '미술관 입구의 "Prohibido hacer fotos"는?', opts: ['사진 촬영 가능', '사진 판매처', '기념사진 촬영 장소', '사진 촬영 금지'], a: 3, ex: 'prohibido = 금지된.'},
    {q: '"학생 할인 있나요?"에 맞는 것은?', opts: ['¿Hay descuento para estudiantes?', '¿Hay estudiantes aquí?', '¿Es usted estudiante?', '¿Dónde estudian?'], a: 0, ex: 'descuento = 할인.'},
    {q: '"Cerrado por obras"를 보면?', opts: ['오늘 무료 입장', '공사 중이라 닫혀 있음', '예술 작품 전시 중', '공연 중'], a: 1, ex: 'obras = 공사. 안타깝지만 다른 곳으로!'},
    {q: '"la visita guiada"는?', opts: ['오디오 가이드', '안내 책자', '가이드 투어', '관광 안내소'], a: 2, ex: 'guiada = 안내받는.'}
  ],
  poll: {q: '스페인어권 여행에서 가장 가 보고 싶은 관광지 유형은?', opts: ['🏛️ 박물관·미술관', '⛪ 성당·유적지', '🏘️ 구시가지 골목 산책', '🌄 자연 경관', '💃 공연·축제', '🛍️ 시장·쇼핑가']},
  write: {prompt: '관광지에서 허락을 구하는 문장을 만들어 보세요.', pattern: '¿Se puede ___?', hint: 'entrar con mochila / hacer fotos / tocar la obra 등을 넣어 보세요.', example: '¿Se puede entrar con mochila?'},
  dialog: { title: '미술관 매표소에서', lines: [
    {who: 'npc', es: 'Hola, buenas tardes. ¿Qué desea?', ko: '안녕하세요. 무엇을 원하세요?'},
    {who: 'me', opts: [
      {es: 'Un café con leche, por favor.', ko: '카페라테 한 잔 주세요.', ok: false, why: '여기는 카페가 아니라 매표소예요.'},
      {es: 'Dos entradas, por favor. ¿Cuánto cuestan?', ko: '입장권 두 장 주세요. 얼마예요?', ok: true}
    ]},
    {who: 'npc', es: 'Son doce euros cada una.', ko: '한 장에 12유로입니다.'},
    {who: 'me', opts: [
      {es: '¿Dónde está el baño?', ko: '화장실 어디예요?', ok: false, why: '지금은 표를 사는 중이에요. 할인을 물어볼 기회예요.'},
      {es: 'Doce años.', ko: '열두 살이에요.', ok: false, why: '나이가 아니라 가격 이야기를 하고 있어요.'},
      {es: '¿Hay descuento para estudiantes?', ko: '학생 할인 있나요?', ok: true}
    ]},
    {who: 'npc', es: 'Sí, con el carné de estudiante son seis euros.', ko: '네, 학생증이 있으면 6유로예요.'},
    {who: 'me', opts: [
      {es: 'Perfecto, aquí tiene mi carné. ¿Se pueden hacer fotos?', ko: '좋아요, 학생증 여기 있어요. 사진 찍어도 되나요?', ok: true},
      {es: 'No tengo hambre.', ko: '배 안 고파요.', ok: false, why: '대화와 상관없는 대답이에요.'}
    ]},
    {who: 'npc', es: 'Sí, pero sin flash. La visita guiada sale a las cinco.', ko: '네, 하지만 플래시는 안 돼요. 가이드 투어는 5시에 출발해요.'},
    {who: 'me', opts: [
      {es: 'Lo siento, está cerrado.', ko: '죄송해요, 문 닫았어요.', ok: false, why: '그건 직원이 할 말이에요.'},
      {es: '¡Genial! Muchas gracias.', ko: '좋네요! 정말 감사합니다.', ok: true}
    ]}
  ]}
});

/* ───────── 17. 시니어·장애인 여행 ───────── */
window.VAMOS.chapters.push({
  id: 'accessible', part: 'practical', no: 17, emoji: '♿',
  ko: '시니어·장애인 여행', es: 'Viaje accesible', en: 'Senior & Disabled Travellers', pages: '101–102',
  scene: '휠체어를 쓰는 부모님과 세비야를 여행해요. 호텔과 관광지에서 접근성 시설을 확인하고 필요한 도움을 정중하게 요청해 보세요.',
  goals: ['엘리베이터·경사로·장애인 화장실이 있는지 물어볼 수 있다', '자신이나 동행인의 필요(휠체어, 청각·시각 등)를 설명할 수 있다', '경로·장애인 할인과 우선 좌석을 확인할 수 있다'],
  phrases: [
    {es: '¿Hay ascensor?', ko: '엘리베이터 있나요?', pr: '아이 아스센소르', mk: 'short'},
    {es: '¿Hay acceso para sillas de ruedas?', ko: '휠체어로 들어갈 수 있나요?', pr: '아이 악세소 빠라 시야스 데 루에다스', mk: 'qa', ans: {es: 'Sí, hay una rampa a la derecha.', ko: '네, 오른쪽에 경사로가 있어요.'}},
    {es: '¿Hay un baño adaptado?', ko: '장애인 화장실 있나요?', pr: '아이 운 바뇨 아답따도'},
    {es: 'Mi madre usa silla de ruedas.', ko: '어머니가 휠체어를 사용하세요.', pr: '미 마드레 우사 시야 데 루에다스'},
    {es: 'Tengo dificultades para caminar.', ko: '걷는 게 불편해요.', pr: '뗑고 디피꿀따데스 빠라 까미나르'},
    {es: 'Soy sordo. ¿Puede escribirlo?', ko: '저는 청각장애가 있어요. 써 주실 수 있나요?', pr: '소이 소르도. 뿌에데 에스끄리비를로'},
    {es: '¿Cuántos escalones hay?', ko: '계단이 몇 개 있나요?', pr: '꾸안또스 에스깔로네스 아이'},
    {es: '¿Hay descuento para mayores?', ko: '경로 할인 있나요?', pr: '아이 데스꾸엔또 빠라 마요레스'},
    {es: '¿Me puede ayudar, por favor?', ko: '좀 도와주실 수 있나요?', pr: '메 뿌에데 아유다르, 뽀르 파보르', mk: 'short'},
    {es: 'Asiento reservado', ko: '우선 좌석 (교통약자석)', pr: '아시엔또 레세르바도', mk: 'look'},
    {es: 'Acceso adaptado', ko: '장애인 접근 가능 출입구', pr: '악세소 아답따도', mk: 'look'},
    {es: '¿Necesita ayuda?', ko: '도움이 필요하세요?', pr: '네세시따 아유다', mk: 'listen'}
  ],
  tips: [
    {mk: 'lang', ko: '"장애인용, 무장애"는 adaptado(맞춤화된) 또는 accesible라는 말을 많이 써요. baño adaptado, habitación adaptada처럼 명사 뒤에 붙이고, 명사의 성에 맞춰 -o/-a를 바꿔요.'},
    {mk: 'culture', ko: '스페인 주요 기차역에서는 교통약자 무료 안내·승하차 지원 서비스를 운영해요. 출발 전 미리 신청하면 직원이 승강장까지 동행해 줘요. 구시가지는 돌길과 계단이 많으니 경로를 미리 확인하세요.'},
    {mk: 'lang', ko: '나이 든 분을 가리킬 때는 viejo보다 mayor / personas mayores가 훨씬 정중한 표현이에요.'}
  ],
  vocab: [
    {es: 'el ascensor', ko: '엘리베이터'}, {es: 'la rampa', ko: '경사로'}, {es: 'la silla de ruedas', ko: '휠체어'},
    {es: 'el escalón', ko: '계단(한 칸)'}, {es: 'el bastón', ko: '지팡이'}, {es: 'el perro guía', ko: '안내견'},
    {es: 'el baño adaptado', ko: '장애인 화장실'}, {es: 'la persona mayor', ko: '어르신'}, {es: 'la discapacidad', ko: '장애'},
    {es: 'el asiento reservado', ko: '우선 좌석'}, {es: 'la ayuda', ko: '도움'}
  ],
  quiz: [
    {q: '"엘리베이터 있나요?"는?', opts: ['¿Hay escalera?', '¿Hay ascensor?', '¿Hay autobús?', '¿Hay asiento?'], a: 1, ex: 'el ascensor = 엘리베이터, la escalera = 계단.'},
    {q: '"silla de ruedas"는?', opts: ['흔들의자', '유모차', '휠체어', '지팡이'], a: 2, ex: 'silla(의자) + ruedas(바퀴들) = 휠체어.'},
    {q: '어르신 할인을 정중하게 물을 때 알맞은 말은?', opts: ['¿Hay descuento para viejos?', '¿Hay descuento para niños?', '¿Hay descuento para grupos?', '¿Hay descuento para mayores?'], a: 3, ex: 'mayores가 viejos보다 정중해요.'},
    {q: '"¿Necesita ayuda?"라고 들으면 무슨 뜻일까요?', opts: ['도움이 필요하세요?', '어디 가세요?', '예약하셨어요?', '표 있으세요?'], a: 0, ex: 'necesitar = 필요하다, ayuda = 도움.'},
    {q: '"baño adaptado"는?', opts: ['샤워실', '장애인 화장실', '남자 화장실', '유료 화장실'], a: 1, ex: 'adaptado = 맞춤형(접근 가능한).'}
  ],
  poll: {q: '여행지를 고를 때 가장 중요하게 확인하는 편의시설은?', opts: ['🛗 엘리베이터', '🚻 깨끗한 화장실', '🪑 쉴 수 있는 벤치', '🚕 택시·교통 접근성', '🧭 안내 표지판']},
  write: {prompt: '여행지에서 시설이 있는지 묻는 문장을 만들어 보세요.', pattern: '¿Hay ___ ?', hint: 'ascensor / rampa / baño adaptado / un banco para descansar 등을 넣어 보세요.', example: '¿Hay un baño adaptado cerca?'},
  dialog: { title: '호텔에서 접근성 확인하기', lines: [
    {who: 'npc', es: 'Bienvenidos al hotel. ¿En qué les puedo ayudar?', ko: '호텔에 오신 것을 환영합니다. 무엇을 도와드릴까요?'},
    {who: 'me', opts: [
      {es: 'Mi padre usa silla de ruedas. ¿Hay ascensor?', ko: '아버지가 휠체어를 쓰세요. 엘리베이터 있나요?', ok: true},
      {es: 'Quiero un helado de chocolate.', ko: '초콜릿 아이스크림 주세요.', ok: false, why: '호텔 리셉션에서 할 요청이 아니에요.'},
      {es: 'Mi padre es muy alto.', ko: '아버지는 키가 아주 커요.', ok: false, why: '필요한 시설과 관련 없는 정보예요.'}
    ]},
    {who: 'npc', es: 'Sí, el ascensor está al fondo, a la izquierda.', ko: '네, 엘리베이터는 안쪽 왼편에 있어요.'},
    {who: 'me', opts: [
      {es: '¿La habitación tiene baño adaptado?', ko: '객실에 장애인용 욕실이 있나요?', ok: true},
      {es: '¿A qué hora sale el tren?', ko: '기차는 몇 시에 출발해요?', ok: false, why: '지금은 호텔 객실에 대해 확인하는 중이에요.'}
    ]},
    {who: 'npc', es: 'Sí, tenemos una habitación adaptada en la primera planta.', ko: '네, 1층에 장애인용 객실이 있습니다.'},
    {who: 'me', opts: [
      {es: 'No me gusta el fútbol.', ko: '축구 안 좋아해요.', ok: false, why: '대화 흐름과 무관해요.'},
      {es: 'Lo siento, no hablo español.', ko: '죄송해요, 스페인어 못해요.', ok: false, why: '이미 스페인어로 잘 대화하고 있어요!'},
      {es: '¡Perfecto! ¿Me puede ayudar con las maletas?', ko: '완벽해요! 짐 좀 도와주실 수 있나요?', ok: true}
    ]},
    {who: 'npc', es: 'Por supuesto, ahora mismo.', ko: '물론이죠, 바로 도와드릴게요.'}
  ]}
});

/* ───────── 18. 아이와 함께 여행 ───────── */
window.VAMOS.chapters.push({
  id: 'children', part: 'practical', no: 18, emoji: '🧸',
  ko: '아이와 함께 여행', es: 'Viajar con niños', en: 'Travel with Children', pages: '103–104',
  scene: '다섯 살 아이와 함께 발렌시아로 가족 여행 중이에요. 식당·호텔·공원에서 아이에게 필요한 것들을 스페인어로 요청해 보세요.',
  goals: ['유아용 의자·아기 침대 등 아이 용품을 요청할 수 있다', '어린이 요금·할인과 아이에게 맞는 장소를 물어볼 수 있다', '아이의 나이와 필요(기저귀, 알레르기 등)를 설명할 수 있다'],
  phrases: [
    {es: '¿Tienen una trona?', ko: '유아용 의자 있나요?', pr: '띠에넨 우나 뜨로나'},
    {es: '¿Hay menú infantil?', ko: '어린이 메뉴 있나요?', pr: '아이 메누 인판띨', mk: 'qa', ans: {es: 'Sí, con pasta o pollo y un zumo.', ko: '네, 파스타나 치킨에 주스가 나와요.'}},
    {es: '¿Hay descuento para niños?', ko: '어린이 할인 있나요?', pr: '아이 데스꾸엔또 빠라 니뇨스', mk: 'short'},
    {es: '¿Pueden poner una cuna en la habitación?', ko: '객실에 아기 침대를 넣어 주실 수 있나요?', pr: '뿌에덴 뽀네르 우나 꾸나 엔 라 아비따시온'},
    {es: '¿Dónde puedo cambiar el pañal?', ko: '기저귀를 어디서 갈 수 있나요?', pr: '돈데 뿌에도 깜비아르 엘 빠냘'},
    {es: '¿Hay un parque infantil cerca?', ko: '근처에 놀이터 있나요?', pr: '아이 운 빠르께 인판띨 세르까'},
    {es: '¿Es apto para niños?', ko: '아이들이 해도(가도) 괜찮은가요?', pr: '에스 압또 빠라 니뇨스', mk: 'short'},
    {es: 'Mi hijo tiene cinco años.', ko: '제 아들은 다섯 살이에요.', pr: '미 이호 띠에네 신꼬 아뇨스'},
    {es: 'Mi hija es alérgica a los frutos secos.', ko: '제 딸은 견과류 알레르기가 있어요.', pr: '미 이하 에스 알레르히까 아 로스 프루또스 세꼬스'},
    {es: '¿Cuántos años tiene?', ko: '(아이가) 몇 살이에요?', pr: '꾸안또스 아뇨스 띠에네', mk: 'listen'},
    {es: 'Niños gratis hasta 3 años', ko: '3세 이하 무료', pr: '니뇨스 그라띠스 아스따 뜨레스 아뇨스', mk: 'look'},
    {es: '¡Qué niño más guapo!', ko: '아이가 정말 예쁘네요!', pr: '께 니뇨 마스 구아뽀', mk: 'listen'}
  ],
  tips: [
    {mk: 'culture', ko: '스페인과 중남미는 아이에게 아주 너그러운 문화예요. 밤 10시가 넘은 식당이나 광장에서도 아이들이 뛰어노는 모습을 흔히 볼 수 있고, 처음 보는 사람이 아이를 칭찬하거나 말을 거는 일도 자연스러워요.'},
    {mk: 'lang', ko: 'hijo는 아들, hija는 딸, 성별과 상관없이 "자녀들"은 hijos라고 해요. 나이를 말할 때는 ser가 아니라 tener를 써서 "Tiene cinco años"(다섯 살이에요)라고 해요.'},
    {mk: 'culture', ko: '대중교통과 관광지는 대개 아주 어린 아이는 무료, 그 이상은 어린이 요금을 받아요. 기준 나이가 곳마다 다르니 표지판의 "hasta ... años"(…세까지)를 꼭 확인하세요.'}
  ],
  vocab: [
    {es: 'el niño / la niña', ko: '남자아이 / 여자아이'}, {es: 'el bebé', ko: '아기'}, {es: 'la trona', ko: '유아용 식탁 의자'},
    {es: 'la cuna', ko: '아기 침대'}, {es: 'el pañal', ko: '기저귀'}, {es: 'el cochecito', ko: '유모차'},
    {es: 'el parque infantil', ko: '놀이터'}, {es: 'el menú infantil', ko: '어린이 메뉴'}, {es: 'el biberón', ko: '젖병'},
    {es: 'la canguro', ko: '베이비시터 (스페인)'}, {es: 'el chupete', ko: '공갈젖꼭지'}
  ],
  quiz: [
    {q: '식당에서 "유아용 의자 있나요?"는?', opts: ['¿Tienen una cuna?', '¿Tienen una mesa?', '¿Tienen una trona?', '¿Tienen un pañal?'], a: 2, ex: 'la trona = 유아용 식탁 의자, la cuna = 아기 침대.'},
    {q: '"제 딸은 여섯 살이에요"를 바르게 말한 것은?', opts: ['Mi hija tiene seis años.', 'Mi hija es seis años.', 'Mi hija está seis años.', 'Mi hija hay seis años.'], a: 0, ex: '나이는 tener로 말해요.'},
    {q: '"Niños gratis hasta 3 años"의 뜻은?', opts: ['3세 이상 무료', '어린이 3명까지 무료', '3시까지 어린이 무료', '3세 이하 어린이 무료'], a: 3, ex: 'hasta = ~까지.'},
    {q: '"el pañal"은?', opts: ['젖병', '기저귀', '유모차', '장난감'], a: 1, ex: '¿Dónde puedo cambiar el pañal? = 기저귀 어디서 갈아요?'},
    {q: '"¿Es apto para niños?"는 언제 쓸까요?', opts: ['아이 나이를 물을 때', '아이를 칭찬할 때', '아이가 가도(해도) 괜찮은 곳인지 물을 때', '아이를 잃어버렸을 때'], a: 2, ex: 'apto = 적합한.'}
  ],
  poll: {q: '아이와 여행할 때 가장 챙기기 어려운 것은?', opts: ['🍽️ 아이 입맛에 맞는 식사', '😴 낮잠·수면 시간', '🚻 화장실·기저귀', '🎡 아이가 즐길 거리', '🚌 이동·교통']},
  write: {prompt: '아이(또는 가족)에 대해 소개하는 문장을 만들어 보세요.', pattern: 'Mi ___ tiene ___ años.', hint: 'hijo, hija, sobrino(조카), hermano 등과 나이를 넣어 보세요.', example: 'Mi hija tiene siete años.'},
  dialog: { title: '가족 식당에서 주문하기', lines: [
    {who: 'npc', es: 'Buenas noches. ¿Mesa para cuántos?', ko: '안녕하세요. 몇 분이세요?'},
    {who: 'me', opts: [
      {es: 'Para tres: dos adultos y un niño. ¿Tienen una trona?', ko: '세 명이요: 어른 둘, 아이 하나. 유아용 의자 있나요?', ok: true},
      {es: 'Tengo treinta y cinco años.', ko: '저는 서른다섯 살이에요.', ok: false, why: '나이가 아니라 인원수를 묻고 있어요.'}
    ]},
    {who: 'npc', es: 'Sí, claro. ¿Cuántos años tiene el niño?', ko: '네, 물론이죠. 아이는 몇 살이에요?'},
    {who: 'me', opts: [
      {es: 'Es muy guapo.', ko: '아주 잘생겼어요.', ok: false, why: '나이를 묻는 질문에 대한 답이 아니에요.'},
      {es: 'Tiene cuatro años.', ko: '네 살이에요.', ok: true},
      {es: 'Son las cuatro.', ko: '4시예요.', ok: false, why: '시간을 말하는 표현이에요. 나이는 tener를 써요.'}
    ]},
    {who: 'npc', es: 'Tenemos menú infantil: pasta o pollo con patatas.', ko: '어린이 메뉴가 있어요: 파스타나 감자튀김을 곁들인 치킨이요.'},
    {who: 'me', opts: [
      {es: 'La cuenta, por favor.', ko: '계산서 주세요.', ok: false, why: '아직 주문도 안 했어요.'},
      {es: 'Pasta, por favor. Es alérgico a los frutos secos.', ko: '파스타로 주세요. 아이가 견과류 알레르기가 있어요.', ok: true}
    ]},
    {who: 'npc', es: 'Entendido, no lleva frutos secos. ¡Qué niño más simpático!', ko: '알겠습니다, 견과류는 안 들어가요. 아이가 참 귀엽네요!'},
    {who: 'me', opts: [
      {es: '¡Muchas gracias! Es muy simpático.', ko: '정말 감사해요! 아이가 붙임성이 좋아요.', ok: true},
      {es: 'No, gracias.', ko: '아니요, 괜찮아요.', ok: false, why: '칭찬에는 감사 인사로 답하는 게 자연스러워요.'}
    ]}
  ]}
});
