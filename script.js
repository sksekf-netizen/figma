// 행운의 말 배열
const quotes = [
    {
        quote: "오늘 당신의 미소는 누군가에게 행운이 될 것입니다.",
        author: "익명의 친구"
    },
    {
        quote: "작은 시작이 위대한 결과를 가져올 수 있습니다. 지금 바로 시작하세요.",
        author: "레오나르도 다빈치"
    },
    {
        quote: "가장 어두운 밤이 가장 밝은 별을 만듭니다.",
        author: "랄프 왈도 에머슨"
    },
    {
        quote: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아닙니다. 중요한 것은 계속하려는 용기입니다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "행복은 이미 만들어진 것이 아닙니다. 그것은 당신의 행동에서 나옵니다.",
        author: "달라이 라마"
    },
    // 더 많은 행운의 말을 여기에 추가할 수 있습니다.
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// 무작위로 행운의 말을 가져와 화면에 표시하는 함수
function generateRandomQuote() {
    // 0부터 quotes.length - 1 사이의 무작위 인덱스 생성
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // HTML 요소 업데이트
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// '새로운 말 가져오기' 버튼에 이벤트 리스너 추가
newQuoteBtn.addEventListener('click', generateRandomQuote);

// 페이지 로드 시 처음 한 번 실행
generateRandomQuote();
