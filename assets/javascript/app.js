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
var answerKey = ["Trevor", "To seek the holy grail", "Blurple", "Ashur", "African or European?", "Maybe", "What kind of quiz is this?"];
var questionsKey = [{
        question: "What is your name?",
        choice1: "Wait, what?",
        choice2: "How would you know?",
        choice3: "What kind of trivia game is this?",
        choice4: "Trevor"
    }, {
        question: "What is your quest?",
        choice1: "To complete this trivia game",
        choice2: "To click on the Facebook tab and scroll mindlessly",
        choice3: "To pass this class",
        choice4: "To seek the holy grail"
    }, {
        question: "What is your favorite color?",
        choice1: "Blue",
        choice2: "Yellow",
        choice3: "Purple",
        choice4: "Blurple"
    }, {
        question: "What is the capital of Assyria?",
        choice1: "How would I know?",
        choice2: "Aleppo",
        choice3: "Ashur",
        choice4: "Babylon"
    }, {
        question: "What is the airspeed velocity of an unladen swallow?",
        choice1: "I'm done with this game",
        choice2: "African or European?",
        choice3: "I don't know",
        choice4: "*coconut noises*"
    }, {
        question: "Is this the last question?",
        choice1: "Yes",
        choice2: "No",
        choice3: "Maybe",
        choice4: "So"
    },
    {
        question: "Too bad",
        choice1: "What kind of quiz is this?",
        choice2: "If you read this you don't need glasses",
        choice3: "Don't click this",
        choice4: "Click the above option"
    }
];
var submittedQuestions = []; // Watch this variable.
var questionCounter = 0;
var totalCorrect = 0;
var totalIncorrect = 0;
var percentage;
var time;


// start game
function setupGame() {
    $(".questionBox").html(`Press the button to start the quiz.`);
    $("#results").toggle();

}

function setupQuestion() {
    $(".questionBox").html(`<h3>${questionsKey[questionCounter]["question"]}</h3>`);
    var choices = $(`<li class="list-group-item" id="${questionsKey[questionCounter]["choice1"]}" value="${questionsKey[questionCounter]["choice1"]}">${questionsKey[questionCounter]["choice1"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice2"]}" value="${questionsKey[questionCounter]["choice2"]}">${questionsKey[questionCounter]["choice2"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice3"]}" value="${questionsKey[questionCounter]["choice3"]}">${questionsKey[questionCounter]["choice3"]}</li>
        <li class="list-group-item" id="${questionsKey[questionCounter]["choice4"]}" value="${questionsKey[questionCounter]["choice4"]}">${questionsKey[questionCounter]["choice4"]}</li>`);
    $(".list-group").append(choices);
    // Start interval timer
    time = 20;
    $("#time-Remaining").html("Time Remaining: " + time);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    time--;
    //  Show the number in the #show-number tag.
    $("#time-Remaining").html("Time Remaining: " + time);

    //  Once number hits zero...
    if (time === 0) {
        clearInterval(intervalId);
        questionResult();
    }
}

function questionResult() {
    if (time === 0) {
        $(".questionBox").html(`You ran out of time. The correct answer was: ${answerKey[questionCounter]}`);
        submittedQuestions[questionCounter] = "No Answer";
        totalIncorrect--;
        console.log(submittedQuestions[questionCounter]);
    } else if (submittedQuestions[questionCounter] === answerKey[questionCounter]) {
        $(".questionBox").html(`You answered Correctly!`);
        totalCorrect++;
    } else {
        $(".questionBox").html(`Wrong! The correct answer was: ${answerKey[questionCounter]}`);
        totalIncorrect--;
    }
    time = 20;
    $(".list-group").empty();
    questionCounter++;
    if (questionCounter == questionsKey.length)
        triviaResults();
    else
        setTimeout(setupQuestion, 500);
}

function triviaResults() {
    $(".questionBox").html(`Overall Results`);
    $("#time-Remaining").toggle();
    $("#timeBox").toggle();
    $("#choices").toggle();
    // Div "You answered X correctly out of N Questions"

    // Place results in Result Div. 
    $("#results").toggle();
    $("#results").append(`<div class="result">Total Questions: ${answerKey.length}</div>
        <div class="result">Total Correct: ${totalCorrect}</div>
        <div class="result">Total Incorrect: ${totalIncorrect}</div>`);
    $("#results").append(`<div id="reset"><button type="button" class="btn btn-primary" id="resetButton">Reset</button></div>`)
}

// triviaResults();
setupGame();

$(document).on("click", "#button", function () {
    $("#buttonDiv").toggle();
    setupQuestion();
});

$(document).on("click", "#resetButton", function () {
    $("#results").empty();
    questionCounter = 0;
    totalCorrect = 0;
    totalIncorrect = 0;
    submittedQuestions = [];
    setupQuestion();
});

$(document).on("click", "#reset", function () {
    questionCounter = 0;
    submittedQuestions = [];
    setupQuestion();
    $("#results").toggle();
});

$(document).on("click", ".list-group-item", function () {
    $(".list-group").empty();
    clearInterval(intervalId);

    submittedQuestions[questionCounter] = $(this).attr("value");
    questionResult();

});