var giphy_url = "http://api.giphy.com/v1/gifs/search?q=kids&api_key=cwa0QFQaDVpqX74kWi8oygXzdghLiMJV&limit=5";
var trivia_api = "https://the-trivia-api.com/api/question/63951fffe55fa75b149597b7";
//var trivia_api = "https://the-trivia-api.com/api/questions?&tags=colours&difficulty=easy";


// Giphy API
fetch(giphy_url, {})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// Trivia API
var questionBonus = function () {
    fetch(trivia_api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            randomQuiz.push({
                question: data.question,
                answer1: data.correctAnswer,
                answer2: data.incorrectAnswers[0],
                correctAnswer: data.correctAnswer,
            });
        })
};
questionBonus();

// Questions
let questions = [
    {
        question: "True or False: Red, Green, and Yellow are the three primary colors?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    },
    {
        question: "True or False: White is the color you create when you add all colors together?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    },
    {
        question: "True or False: Teal, Peach, and Plum are the three secondary colors ",
        answer1: "True",
        answer2: "False",
        correctAnswer: "False",
    },
    {
        question: "True or False- Brown is made by mixing red, yellow, and black?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "False",
    },
    {
        question: "True or False: Brown is the color you create when you mix Red and Yellow?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "False",
    },
    {
        question: "True or False: Pink is the color you create when you mix Red and white?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    },
    {
        question: "True or False: Green is the color you create when you mix Yellow and Blue?",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    },
    {
        question: "True or False: Blue mixed with Red make green.",
        answer1: "True",
        answer2: "False",
        correctAnswer: "False",
    },
    {
        question: "True or False: Secondary colors are made from the three primary colors.",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    },
    {
        question: "True or False: Primary colors are colors that can be mixed together to make other colors",
        answer1: "True",
        answer2: "False",
        correctAnswer: "True",
    }];


//Randomizing Quiz (w/ help from Michael)
var quiz = [...questions];
var randomQuiz = [];
var usedIndex = [];
function chooseRandomIndex() {
    var randomIndex = Math.floor(Math.random() * 10);
    if (!usedIndex.includes(randomIndex)) {
        usedIndex.push(randomIndex);
        return (randomIndex);
    }
    else {
        return (chooseRandomIndex());
    };
};
for (i = 0; i < 10; i++) {
    randomQuiz.push(quiz[chooseRandomIndex()]);
};
console.log(randomQuiz);

//Getting elements
var quizQuestion = document.getElementById("question");
var trueButton = document.getElementById("true");
var falseButton = document.getElementById("false");
var submitButton = document.getElementById("submit");

//Setting score & question number
let score = 0;
let questionCounter = 0;

//Sets question
function nextQuestion() {
    quizQuestion.innerText = randomQuiz[questionCounter].question;
    trueButton.innerText = randomQuiz[questionCounter].answer1;
    falseButton.innerText = randomQuiz[questionCounter].answer2;
};
nextQuestion();

function lastQuestion() {
    console.log(questionCounter);
    if (questionCounter === randomQuiz.length) {
        console.log("hi");
    } else {
        setTimeout(() => {
            nextQuestion();
        }, "1500");
    }
};

//Button listeners
trueButton.addEventListener("click", function () {
    if (randomQuiz[questionCounter].correctAnswer === this.textContent) {
        this.style.backgroundColor = "lightgreen";
        score++;
    }else {
        this.style.backgroundColor = "red";
    };
    console.log(score);
    questionCounter++;
    lastQuestion();
    setTimeout(() => {
        this.style.backgroundColor = "#fff";
    }, "1500");
});

falseButton.addEventListener("click", function () {
    if (randomQuiz[questionCounter].correctAnswer === this.textContent) {
        this.style.backgroundColor = "lightgreen";
        score++;
    }else {
        this.style.backgroundColor = "red";
    };
    console.log(score);
    questionCounter++;
    lastQuestion();
    setTimeout(() => {
        this.style.backgroundColor = "#fff";
    }, "1500");
});

submitButton.addEventListener("click", function () {
    var submittedQuizzes = localStorage.getItem("answered");
    submittedQuizzes++;
    localStorage.setItem("answered", submittedQuizzes);
});