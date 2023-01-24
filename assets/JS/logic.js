// Quiz variables
let startButton = document.getElementById('start');
let timerEl = document.querySelector('.timer');
let timeEl = document.querySelector('#time');
let intialEl = document.getElementById('intitials');
    // Questions related variables
    let currentQuestionIndex = 0;
    let time = questions.length * 15;
    let questionsEl = document.getElementById('questions');
    let choicesEl = document.getElementById('choices');
    let submitButton = document.getElementById('submit');
    let feedbackEl = document.getElementById('feedback');

// On click: begin 2 min timer and start quiz w/ first question

function clickQuestion() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        timeLeft -= 10;
        if(timeLeft < 0) {
            timeLeft = 0;
        }
    // 'If' answer incorrect then subtract 10 sec from timer
        timeEl.textContent = timeLeft;
        feedbackEl.textContent = 'Wrong'
    } else {
        feedbackEl.textContent = 'Correct'
    }
    // When answer 'clicked/submitted' 
        // Alert correct/incorrect
    feedbackEl.setAttribute('class', 'feedback');

   setTimeout(function() {
    feedbackEl.setAttribute('class', 'feedback', 'hide')
   }, 1000);

   currentQuestionIndex++;
        // next question appears
   if(currentQuestionIndex === questions.length) {
    quizGameEnd();
   } else
   getQuestion();


}

function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let questionTitleEl = document.getElementById('question-title');
        
    questionTitleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'choice');
        choiceButton.setAttribute('value', choice);

        choiceButton.textContent = index + 1 + choice;

        choiceButton.addEventListener('click', clickQuestion);

        choicesEl.append(choiceButton);
    })
}

function startQuiz() {
    getQuestion();
    startTimer();
    let startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class');
}

// Timer Function
let timeLeft = 150;
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
    let initials = intialEl.value.trim();

    if(initials !== ''){
        let highScores = JSON.parse(localStorage.getItem('Highscores')) || [];
        let newScore = {
            score: time,
            initials: initials
        }
    
        highScores.push(newScore);
        localStorage.setItem('Highscores', JSON.stringify(highScores));

        window.location.href = 'highscores.html';
    }
}

function userEnter(event) {
    if(event.key === 'Enter') {
        saveHighScore();
    }

}

// Start Button
startButton.addEventListener('click', startQuiz);

// Submit Button
submitButton.onclick = function () {
    saveHighScore();
    return;
};

intialEl.addEventListener('keyup', userEnter);
