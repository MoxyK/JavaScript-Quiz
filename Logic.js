// Quiz variables
let startButton = document.getElementById('start');
let timerEl = document.querySelector('.timer');
let timeEl = document.querySelector('#time');
let intialEl = document.getElementById('intitials');
    // Questions related variables
    let currentQuestionIndex = 0;
    let qTime = questions.length * 15;
    let questionsEl = document.getElementById('questions');
    let choicesEl = document.getElementById('choices');
    let submitButton = document.getElementById('submit');

// On click: begin 2 min timer and start quiz w/ first question
function getQuestion() {

}

function clickQuestion() {
    // When answer 'clicked/submitted' 
        // Alert correct/incorrect

        // next question appears

    // 'If' answer incorrect then subtract 15 sec from timer
}

function startQuiz() {
    let startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class');
}

// Timer Function
let timeLeft = 120;
function startTimer() {

    let timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if(timeLeft === 0) {
            quizGameEnd();
            sendMessage();
        }
    }, 1000);
}

// Start Button
startButton.onclick = function () {
    startTimer();
    return;
};

function sendMessage() {
    timeEl.textContent = 'Out of Time';
}

// 'When' all questions are answered, game ends

// 'If' timer reaches 0, game ends

    // When game ends
function quizGameEnd() {
    clearInterval(timerInterval);

    let endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    let finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = timeEl;

    questionsEl.setAttribute('class','hide');
}
        // Display score
     
        
// Offer option to save initials and score to local storage

function saveHighScore() {

}

function userEnter() {

}

intialEl.onkeyup = function () {
    userEnter();
};

// Submit Button
submitButton.onclick = function () {
    saveHighScore();
    return;
};
