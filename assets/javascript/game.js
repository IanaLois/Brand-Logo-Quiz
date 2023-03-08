// Declare variables
const logoQuestion = document.querySelector('#logo-question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 2 + 2?',
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
]