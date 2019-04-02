// interval variable / function
// stopTime variable / function
// object correctAnwer?s

// Create four divs to go on top of one another & place into container
// enable clicking on div
// take value and confirm whether value is in answerKey
// use counter to calculate total correct

// setInterval
// setTimeout
// Clear Interval

var intervalId; // can set Interval here
var clockBool;
var answerKey = {};
var questionsKey = [{
    question: "What is THE meaning of life?",
    choice1: "42",
    choice2: "Tea Time and silly walks",
    choice3: "Seeing Elon Musk land on Mars",
    choice4: "Hugging the ones you really care about"
}, {
    question: "Did this change",
    choice1: "No",
    choice2: "Yes",
    choice3: "Maybe",
    choice4: "So"
}, {
    question: "What is the meaning of life?",
    choice1: "42",
    choice2: "Something",
    choice3: "",
    choice4: ""
}, {
    question: "What is the meaning of life?",
    choice1: "42",
    choice2: "Something",
    choice3: "",
    choice4: ""
}, {
    question: "What is the meaning of life?",
    choice1: "42",
    choice2: "Something",
    choice3: "",
    choice4: ""
}, {
    question: "What is the meaning of life?",
    choice1: "42",
    choice2: "Something",
    choice3: "",
    choice4: ""
}, ];
var questionCounter = 0;
var totalQuestions;
var totalCorrect;
var percentage;
var time;


// start game
function setupGame() {
    $(".questionBox").html(`<h3>${questionsKey[questionCounter]["question"]}</h3>`);
    var choices = $(`<li class="list-group-item" id="${questionsKey[questionCounter]["choice1"]}" value="${questionsKey[questionCounter]["choice1"]}">${questionsKey[questionCounter]["choice1"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice2"]}" value="${questionsKey[questionCounter]["choice2"]}">${questionsKey[questionCounter]["choice2"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice3"]}" value="${questionsKey[questionCounter]["choice3"]}">${questionsKey[questionCounter]["choice3"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice4"]}" value="${questionsKey[questionCounter]["choice4"]}">${questionsKey[questionCounter]["choice4"]}</li>`);
    $(".list-group").append(choices);
    questionCounter++;

    // Start interval timer
}

// Click function for list item
// if clicked item is correct
// remove question text
// Put out proper status
// After a few seconds, begin interval again to next question

function intervalTimer() {

}

setupGame();

$(document).on("click", ".list-group-item", function () {
    $(".list-group").empty();
    setupGame();

});