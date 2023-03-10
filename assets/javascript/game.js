// Declare variables
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('option-text'));
const questionProgress = document.getElementById('questionProgress');
const scoreText = document.querySelector('#score');
const questionProgressBarFull = document.getElementById('questionProgressBarFull');

const scorePoints = 25;
const maxQuestions = 8;

// Variables to be assigned
let currentQuestion, acceptingAnswers, score, questionCounter, availableQuestions;

const questions = [
    {
        question: 'assets/images/logos/question-1-logo.png',
        choice1: 'Dickies',
        choice2: 'Carhartt',
        choice3: 'North Face',
        choice4: 'Columbia',
        answer: 2,
    },
    {
        question: 'assets/images/logos/question-2-logo.jpg',
        choice1: 'Yamaha',
        choice2: 'Gibson',
        choice3: 'Fender',
        choice4: 'Heritage',
        answer: 3,
    },
    {
        question: 'assets/images/logos/question-3-logo.png',
        choice1: 'Longchamp',
        choice2: 'Prada',
        choice3: 'Coach',
        choice4: 'Versace',
        answer: 3,
    },
    {
        question: 'assets/images/logos/question-4-logo.jpg',
        choice1: 'Nintendo',
        choice2: 'Steam',
        choice3: 'Xbox',
        choice4: 'Playstation',
        answer: 4,
    },
    {
        question: 'assets/images/logos/question-5-logo.jpg',
        choice1: 'Jollibee',
        choice2: 'Five Guys',
        choice3: 'KFC',
        choice4: 'Greggs',
        answer: 1,
    },
    {
        question: 'assets/images/logos/question-6-logo.jpg',
        choice1: 'Slack',
        choice2: 'Discord',
        choice3: 'Skype',
        choice4: 'Viber',
        answer: 2,
    },
    {
        question: 'assets/images/logos/question-7-logo.jpg',
        choice1: 'Birkenstock',
        choice2: 'Dr. Martens',
        choice3: 'Converse',
        choice4: 'Vans',
        answer: 4,
    },
    {
        question: 'assets/images/logos/question-8-logo.jpg',
        choice1: 'Dunkin\' Donuts',
        choice2: 'Krispy Kreme',
        choice3: 'Donut King',
        choice4: 'Tim Hortons',
        answer: 1,
    }
];

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionProgress.innerText = `Question ${questionCounter}/${maxQuestions}`;
    questionProgressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.src = currentQuestion.question;
    
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionIndex, 1);
    
    acceptingAnswers = true; 
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        if (selectedAnswer == currentQuestion.answer) {
            increaseScore();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Spot on!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                getNewQuestion();
            });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops! That was incorrect',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                getNewQuestion();
            });
        }
    });
});

function increaseScore () {
    score += scorePoints;
    scoreText.innerText = score;
    localStorage.setItem('mostRecentScore', score);
}

startGame();