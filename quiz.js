const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn =  document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('.output');

const correctAnswers = ["50", "right angled"];

function calculateScore(e){
    e.preventDefault();
    let score = 0;
    let index=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score +1;
        } 
        index = index +1;
    }
    console.log(score);
    outputEl.innerText = "Your score is " +score;
}

submitAnswerBtn.addEventListener('click', calculateScore);

