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
var questionBonus = function(){
    fetch(trivia_api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })};
questionBonus();

// Questions
var question1 = {
    question: "True or False: Red, Green, and Yellow are the three primary colors?",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

var question2 = {
    question: "True or False: White is the color you create when you add all colors together?",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

var question3 = {
    question: "True or False: Teal, Peach, and Plum are the three secondary colors ",
    correctAnswer: "False",
    incorrectAnswer: "True",
};

var question4 = {
    question: "True or False- Brown is made by mixing red, yellow, and black?",
    correctAnswer: "False",
    incorrectAnswer: "True",
};

var question5 = {
    question: "True or False: Brown is the color you create when you mix Red and Yellow?",
    correctAnswer: "False",
    incorrectAnswer: "True",
};

var question6 = {
    question: "True or False: Pink is the color you create when you mix Red and white?",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

var question7 = {
    question: "True or False: Green is the color you create when you mix Yellow and Blue?",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

var question8 = {
    question: "True or False: Blue mixed with Red make green.",
    correctAnswer: "False",
    incorrectAnswer: "True",
};

var question9 = {
    question: "True or False: Secondary colors are made from the three primary colors.",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

var question10 = {
    question: "True or False: Primary colors are colors that can be mixed together to make other colors",
    correctAnswer: "True",
    incorrectAnswer: "False",
};

//Randomizing Quiz (w/ help from Michael)
var quiz = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var randomQuiz = [];
var usedIndex = [];
function chooseRandomIndex() {
    var randomIndex = Math.floor(Math.random() * 10);
    if (!usedIndex.includes(randomIndex)) {
        usedIndex.push(randomIndex);
        return(randomIndex);
    }
    else {
        return(chooseRandomIndex());
    };
};
for (i = 0; i < 10; i++) {
    randomQuiz.push(quiz[chooseRandomIndex()]);
};
console.log(randomQuiz);

var submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var submittedQuizzes = localStorage.getItem("completed");
    submittedQuizzes++;
    localStorage.setItem("completed", submittedQuizzes);
});
