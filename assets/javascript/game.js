// Declare variables
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('option-text'));
const questionProgress = document.querySelector('#questionProgress');
const scoreText = document.querySelector('#score');
const questionProgressBarFull = document.querySelector('#questionProgressBarFull');

const scorePoints = 10;
const maxQuestions = 5;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; 
let questionCounter = 0; 
let availableQuestions = []; 

let questions = [
    {
        question: 'https://media.graphassets.com/PdRpmfEjRWyXsmF3Z4Ex',
        choice1: 'Dickies',
        choice2: 'Carhartt',
        choice3: 'North Face',
        choice4: 'Columbia',
        answer: 2,
    },
    {
        question: 'https://pbs.twimg.com/profile_images/1628100176437968910/pCKhYh2f_400x400.jpg',
        choice1: '1',
        choice2: '6',
        choice3: '5',
        choice4: '4',
        answer: 2,
    },
    {
        question: 'What is 6 + 2?',
        choice1: '8',
        choice2: '3',
        choice3: '5',
        choice4: '4',
        answer: 1,
    },
    {
        question: 'What is 8 + 2?',
        choice1: '1',
        choice2: '3',
        choice3: '10',
        choice4: '4',
        answer: 3,
    },
    {
        question: 'What is 0 + 2?',
        choice1: '2',
        choice2: '3',
        choice3: '5',
        choice4: '4',
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