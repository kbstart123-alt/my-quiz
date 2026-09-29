// 질문 데이터 (연애 관련 12문항)
const questions = [
  {
    q: "주말 데이트가 없는 날, 집에서 혼자 쉬고 있을 때 나는?",
    a: [
      { text: "연인이나 친구에게 연락해서 번개 데이트를 만든다.", type: "E" },
      { text: "혼자만의 충전 시간을 즐기며 집콕 데이트를 꿈꾼다.", type: "I" }
    ]
  },
  {
    q: "소개팅 자리에 나갔을 때 나의 행동은?",
    a: [
      { text: "어색한 분위기를 깨려고 먼저 질문을 던지고 대화를 이끈다.", type: "E" },
      { text: "상대방의 리드나 말을 리액션하며 조용히 반응한다.", type: "I" }
    ]
  },
  {
    q: "연인이 '다음 달에 단둘이 여행 갈까?' 라고 했을 때 나는?",
    a: [
      { text: "'어디 갈까? 맛집이랑 숙소 리스트 당장 알아볼게!'", type: "S" },
      { text: "'우와 재미있겠다! 바닷가에서 석양 보면 로맨틱하겠다~'", type: "N" }
    ]
  },
  {
    q: "데이트 장소를 정할 때 더 끌리는 방식은?",
    a: [
      { text: "인스타그램이나 블로그 후기가 확실한 검증된 맛집/카페", type: "S" },
      { text: "남들이 잘 모르는 독특한 분위기의 감성 스팟", type: "N" }
    ]
  },
  {
    q: "연인이 '나 오늘 일하다가 너무 힘들어서 상사랑 싸웠어...' 할 때 내 반응은?",
    a: [
      { text: "'헐 진짜 힘들었겠다... 많이 속상했지? ㅠㅠ (토닥토닥)'", type: "F" },
      { text: "'무슨 일 때문에 싸웠는데? 상사가 뭐라고 했는데?'", type: "T" }
    ]
  },
  {
    q: "연인이 선물해 준 옷이 내 취향이 전혀 아닐 때 나는?",
    a: [
      { text: "선물해 준 마음이 고마워서 감동받고 기쁘게 입는다.", type: "F" },
      { text: "고맙다고 인사하지만 다음엔 같이 골라보자고 조언한다.", type: "T" }
    ]
  },
  {
    q: "내일 연인과 1박 2일 여행을 떠나기 전날 밤 나의 상태는?",
    a: [
      { text: "동선과 시간별 플랜 B까지 완벽히 계획해 둔다.", type: "J" },
      { text: "짐만 대충 싸두고 '가서 기분 나는 대로 움직이지 뭐!' 생각한다.", type: "P" }
    ]
  },
  {
    q: "데이트 중 예상치 못한 상황으로 식당 문이 닫혔을 때 나는?",
    a: [
      { text: "미리 찾아둔 2순위, 3순위 맛집으로 바로 이동한다.", type: "J" },
      { text: "'근처 아무 데나 끌리는 곳 가볼까?' 하고 발길 닿는 대로 간다.", type: "P" }
    ]
  },
  {
    q: "연인과 기념일에 가고 싶은 데이트 스타일은?",
    a: [
      { text: "사람들로 북적이는 야경 명소나 핫플레이스 축제", type: "E" },
      { text: "조용한 프라이빗 레스토랑이나 홈 파티", type: "I" }
    ]
  },
  {
    q: "연인이 '나 만약 나중에 해외 발령받으면 어떡할 거야?' 라고 물어볼 때 나는?",
    a: [
      { text: "'갑자기 해외 발령? 그럴 가능성이 몇 %나 되는데?' 생각한다.", type: "S" },
      { text: "'롱디는 힘들 텐데... 같이 따라가야 하나?' 온갖 상상을 펼친다.", type: "N" }
    ]
  },
  {
    q: "연인과 의견 차이로 말다툼이 일어났을 때 중요한 것은?",
    a: [
      { text: "서로 서운했던 감정을 알아주고 마음을 다독여주는 것", type: "F" },
      { text: "문제의 원인을 파악하고 합리적인 해결책을 찾는 것", type: "T" }
    ]
  },
  {
    q: "연인과의 데이트 일정 약속을 잡을 때 나의 연애 성향은?",
    a: [
      { text: "며칠 전부터 시간과 장소를 미리 고정해 둬야 마음이 편하다.", type: "J" },
      { text: "'당일 날 컨디션 봐서 만나자!' 식의 즉흥적인 만남도 즐긴다.", type: "P" }
    ]
  }
];

// 결과 데이터 세팅
const results = {
  "ESTJ": {
    title: "플래너 엑셀형 연인 📊",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 데이트 코스와 예약은 완벽하게! 든든하고 신뢰감 넘치는 스타일입니다.",
      "• 빈말이나 가식보다는 솔직한 표현과 행동으로 마음을 보여줍니다.",
      "• 연인에게 현실적이고 실질적인 도움을 주는 든든한 조력자입니다."
    ]
  },
  "INFP": {
    title: "로맨틱 감성 댕댕이 💌",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 마음이 따뜻하고 상대방의 작은 변화나 감정도 섬세하게 잘 읽어냅니다.",
      "• 혼자 상상하고 감동받는 경우가 많으며 로맨틱한 연애를 꿈꿉니다.",
      "• 한 번 마음을 열면 상대를 향한 깊은 헌신과 애정을 쏟아냅니다."
    ]
  },
  "ENFP": {
    title: "인간 비타민 댕댕이 🐶",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 에너지가 넘치고 연인과 함께라면 언제나 즐거운 이벤트가 가득합니다.",
      "• 리액션이 크고 애정 표현이 직진형이라 연인을 행복하게 만듭니다.",
      "• 다채로운 데이트를 선호하며 기분 파이기도 합니다."
    ]
  },
  "ISTJ": {
    title: "은근히 다정한 츤데레 🐱",
    img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 표현은 서툴지만 행동 하나하나로 세심하게 챙겨주는 스타일입니다.",
      "• 약속 시간을 잘 지키고 변함없이 안정적인 연애를 지향합니다.",
      "• 연인의 말을 기억해 두었다가 조용히 챙겨주는 매력이 있습니다."
    ]
  }
};

// 진행 상태 변수
let currentQIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, J: 0, P: 0 };

// 화면 전환 함수
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// 퀴즈 시작
function startQuiz() {
  currentQIndex = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, J: 0, P: 0 };
  showScreen('quiz-screen');
  renderQuestion();
}

// 질문 출력
function renderQuestion() {
  const q = questions[currentQIndex];
  
  // 진행률 업데이트
  const progressPercent = ((currentQIndex) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;
  
  // 질문 텍스트 업데이트
  document.getElementById('q-number').innerText = `Q${currentQIndex + 1}.`;
  document.getElementById('q-text').innerText = q.q;
  
  // 선택지 버튼 생성
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  q.a.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsContainer.appendChild(btn);
  });
}

// 답변 선택
function selectOption(type) {
  scores[type]++;
  currentQIndex++;

  if (currentQIndex < questions.length) {
    renderQuestion();
  } else {
    showLoading();
  }
}

// 로딩 화면
function showLoading() {
  showScreen('loading-screen');
  setTimeout(() => {
    calcResult();
  }, 1500);
}

// 결과 계산
function calcResult() {
  let mbti = "";
  mbti += scores.E >= scores.I ? "E" : "I";
  mbti += scores.S >= scores.N ? "S" : "N";
  mbti += scores.T >= scores.F ? "T" : "F";
  mbti += scores.J >= scores.P ? "J" : "P";

  const resultData = results[mbti] || (mbti.includes("E") ? results["ENFP"] : results["INFP"]);

  document.getElementById('result-title').innerText = resultData.title;
  document.getElementById('result-img').src = resultData.img;
  
  const descContainer = document.getElementById('result-desc');
  descContainer.innerHTML = '';
  resultData.desc.forEach(pText => {
    const p = document.createElement('p');
    p.innerText = pText;
    descContainer.appendChild(p);
  });

  showScreen('result-screen');
}

// 다시하기
function restartQuiz() {
  showScreen('start-screen');
}

// 결과 링크 복사
function shareResult() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert('테스트 링크가 복사되었습니다! 친구들에게 공유해 보세요 💕');
}