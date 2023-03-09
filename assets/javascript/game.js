// Declare variables
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('option-text'));
const questionProgress = document.querySelector('#questionProgress');
const scoreText = document.querySelector('#score');
const questionProgressBarFull = document.querySelector('#questionProgressBarFull');

const scorePoints = 25;
const maxQuestions = 8;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; 
let questionCounter = 0; 
let availableQuestions = []; 

let questions = [
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
        choice1: 'Guess',
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
        question: 'assets/images/logos/question-8-logo.png',
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
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.src = currentQuestion.question;
    
    choices.forEach((choice) => {
        const option = choice.dataset['option'];
        choice.innerText = currentQuestion['choice' + option];
    });
    
    availableQuestions.splice(questionIndex, 1);
    
    acceptingAnswers = true; 
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['option'];
        
        getNewQuestion();
    });
});

startGame();