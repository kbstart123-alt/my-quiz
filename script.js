// 질문 및 데이터 세팅 (12문항)
const questions = [
  {
    q: "주말에 약속이 없어서 하루 종일 집에 있게 되었을 때 나는?",
    a: [
      { text: "심심해서 견딜 수 없다! 누구든 연락해서 나간다.", type: "E" },
      { text: "아싸! 집에서 편하게 쉬는 완전 꿀 같은 시간이다.", type: "I" }
    ]
  },
  {
    q: "새로운 모임에 갔을 때 나의 모습은?",
    a: [
      { text: "먼저 인사를 건네며 사람들과 빠르게 친해진다.", type: "E" },
      { text: "누군가 말을 걸어줄 때까지 가만히 기다린다.", type: "I" }
    ]
  },
  {
    q: "길을 걷다가 문득 하늘을 보았을 때 드는 생각은?",
    a: [
      { text: "'오늘 날씨 참 맑고 좋다~'", type: "S" },
      { text: "'우주선이 갑자기 내려오면 어쩌지?' 온갖 상상을 한다.", type: "N" }
    ]
  },
  {
    q: "요리를 하거나 무언가를 만들 때 나는?",
    a: [
      { text: "레시피와 설명서를 정확하게 정석대로 따라 한다.", type: "S" },
      { text: "내 직감과 감대로 이것저것 응용해서 만든다.", type: "N" }
    ]
  },
  {
    q: "친구: '나 오늘 슬퍼서 우울해서 빵 샀어...'",
    a: [
      { text: "무슨 일 있어? 왜 슬퍼? ㅠㅠ (감정에 공감)", type: "F" },
      { text: "어떤 빵 샀는데? 맛있는 거 샀어? (상황에 집중)", type: "T" }
    ]
  },
  {
    q: "친한 친구가 시험이나 면접에 떨어졌을 때 나의 반응은?",
    a: [
      { text: "'많이 속상하겠다... 오늘 내가 맛있는 거 사줄게!'", type: "F" },
      { text: "'어떤 부분에서 실수했어? 다음엔 이렇게 해보자.'", type: "T" }
    ]
  },
  {
    q: "여행을 떠나기 전날 나의 준비 과정은?",
    a: [
      { text: "분 단위로 일정과 이동 동선을 완벽하게 계획한다.", type: "J" },
      { text: "큰 틀만 정해두고 그날 기분에 따라 유동적으로 움직인다.", type: "P" }
    ]
  },
  {
    q: "내 방 책상이나 인테리어의 상태는?",
    a: [
      { text: "항상 정돈되어 있고 물건들의 제자리가 정해져 있다.", type: "J" },
      { text: "조금 어질러져 있어도 어디에 뭐가 있는지 다 안다.", type: "P" }
    ]
  },
  {
    q: "낯선 사람이 다가와 길을 물어볼 때 나는?",
    a: [
      { text: "친절하고 적극적으로 목적지까지 안내해 준다.", type: "E" },
      { text: "당황스럽지만 빠르게 아는 대로만 알려주고 이동한다.", type: "I" }
    ]
  },
  {
    q: "영화나 드라마를 볼 때 나의 감정 변화는?",
    a: [
      { text: "주인공에 완벽히 빙의되어 같이 눈물 흘리고 분노한다.", type: "F" },
      { text: "스토리의 개연성과 연출력을 분석하면서 본다.", type: "T" }
    ]
  },
  {
    q: "내일 당장 마감인 과제나 업무가 있을 때 나는?",
    a: [
      { text: "이미 며칠 전에 미리 다 끝내두고 여유를 즐긴다.", type: "J" },
      { text: "마감 직전 초인의 집중력을 발휘해 벼락치기로 끝낸다.", type: "P" }
    ]
  },
  {
    q: "멍 때리고 있을 때 내 머릿속은?",
    a: [
      { text: "정말로 아무 생각도 하지 않고 멍하게 있는다.", type: "S" },
      { text: "생각에 꼬리를 물고 미래, 우주, 인생 생각을 한다.", type: "N" }
    ]
  }
];

// 결과 데이터 (MBTI 조합)
const results = {
  "ESTJ": {
    title: "체계적인 리더 강아지",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 규칙과 질서를 중요시하며 계획대로 일 추진하는 것을 잘해요.",
      "• 리더십이 뛰어나고 책임감이 강해 어디서든 신뢰받습니다.",
      "• 호불호가 확실하고 가끔 솔직한 발언으로 오해를 사기도 해요."
    ]
  },
  "INFP": {
    title: "감성 가득 몽상가 고양이",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 혼자만의 시간에 깊은 상상을 즐기는 분위기 파악 능력자!",
      "• 타인의 감정에 공감을 잘해주며 마음이 따뜻해요.",
      "• 관심 있는 일에는 엄청난 열정을 보이지만 귀찮음도 많습니다."
    ]
  },
  "ENFP": {
    title: "에너지 폭발 비글 강아지",
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 텐션이 높고 창의적이며 어디서나 인기가 넘쳐요.",
      "• 호기심이 많아서 궁금한 건 참지 못하고 바로 시도합니다.",
      "• 시작은 창대하나 마무리가 살짝 아쉬울 때가 있어요!"
    ]
  },
  "ISTJ": {
    title: "신중한 모범생 고양이",
    img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80",
    desc: [
      "• 침착하고 조용하지만 자기 맡은 바를 끝까지 해내요.",
      "• 헛된 상상보다는 눈앞의 현실과 데이터에 집중합니다.",
      "• 약속 시간을 매우 중요하게 생각하며 신중한 성격입니다."
    ]
  }
};

// 현재 진행 상태 변수
let currentQIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, J: 0, P: 0 };

// 화면 제어 함수
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

// 로딩 화면 처리
function showLoading() {
  showScreen('loading-screen');
  setTimeout(() => {
    calcResult();
  }, 1500); // 1.5초 후 결과 화면 이동
}

// 결과 계산 및 화면 출력
function calcResult() {
  // MBTI 결과 조합
  let mbti = "";
  mbti += scores.E >= scores.I ? "E" : "I";
  mbti += scores.S >= scores.N ? "S" : "N";
  mbti += scores.T >= scores.F ? "T" : "F";
  mbti += scores.J >= scores.P ? "J" : "P";

  // 매핑 데이터가 없는 경우 기본값 세팅
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

// 결과 다시하기
function restartQuiz() {
  showScreen('start-screen');
}

// 결과 공유하기 (URL 복사)
function shareResult() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert('테스트 링크가 클립보드에 복사되었습니다!');
}