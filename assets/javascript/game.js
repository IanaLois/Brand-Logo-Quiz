// Declare variables
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};

// User cannot answer until content has been loaded
let acceptingAnswers = false;

// Score begins at zero
let score = 0; 

// What question the user is on
let questionCounter = 0; 

// Provide a unique question to give the user
let availableQuestions = []; 

// Core Question Structure
let questions = [
    {
        question: 'What is 2 + 2',
        choice1: '1',
        choice2: '3',
        choice3: '5',
        choice4: '4',
        answer: 4,
    },
    {
        question: 'What is 4 + 2?',
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

// Declare core game constants
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // Copy all questions from question array
    getNewQuestion();
};

getNewQuestion = () => {
    // When user has answered all available questions
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html'); // Direct to game end page
    }
    questionCounter++; // Increment question by 1
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Get random question between 0 and max questions
    currentQuestion = availableQuestions[questionIndex]; // Current question taken from array
    question.innerText = currentQuestion.question; // Display current question for the user
    
    // Display all choices to its corresponding question
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionIndex, 1); // Removes used question from array
    
    acceptingAnswers = true; // Allow user to answer after question has loaded
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        // When content is not ready to be answered
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false; // New question delay
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        getNewQuestion();
    });
});

startGame();