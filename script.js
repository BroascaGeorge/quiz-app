const quizData = [
    {
        question: 'How old is George?',
        a: '21',
        b: '41',
        c: '23',
        d: '10',
        correct: 'c' 
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'HTML',
        c: '.NET',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the president of the United States?',
        a: 'Barack Obama',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Ronald Reagan',
        answer: 'c'
    }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

submitBtn.addEventListener(click, () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert('You finished!');
    }

})