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
var answerKey = ["Lewis and Clark", "At the Mississippi River", "The Desert Land Act", "Wyatt Earp", "Texas | Abilene, Kansas", "Promontory Summit, Utah",
    "1848", "President Thomas Jefferson, 1803", "Illinois", "Manifest Destiny", "Tombstone, Arizona", "John Ford", "1920"
];
var questionsKey = [{
        question: "Who led the first expedition to explore the American West?",
        choice1: "Tacitus Kilgore",
        choice2: "Leviticus Cornwall",
        choice3: "Lewis and Clark",
        choice4: "John Cabot"
    }, {
        question: "Where does the West begin?",
        choice1: "At the border of Texas",
        choice2: "At the Mississippi River",
        choice3: "Past New York City",
        choice4: "Along the river Brazos"
    }, {
        question: "Which act did congress pass in 1877 that allowed settlers to land up to 25 cents an acre?",
        choice1: "The Desert Land Act",
        choice2: "The Settlers Act",
        choice3: "The Nevada Act of 1877",
        choice4: "The Oregon Trail Declaration"
    }, {
        question: "Which of the following was NOT a famous outlaw from the West?",
        choice1: "Belle Starr",
        choice2: "The Dalton Brothers",
        choice3: "Butch Cassidy and the Sundance Kid",
        choice4: "Wyatt Earp"
    }, {
        question: "In 1867, the first cattle drive went up the Chisholm Trail. Where did the drive start, and where was the destination?",
        choice1: "Louisiana | St. Louis, Missouri",
        choice2: "Tennessee | Oklahoma City, Oklahoma",
        choice3: "Texas | Abilene, Kansas",
        choice4: "Texas | St. Louis, Missouri"
    }, {
        question: "Where did the rails of the First Transcontinental Railroad join in unison?",
        choice1: "Moab, Utah",
        choice2: "Denver, Colorado",
        choice3: "Vail Ski Resort",
        choice4: "Promontory Summit, Utah"
    },
    {
        question: "When did the California Gold Rush start?",
        choice1: "1848",
        choice2: "1849",
        choice3: "1850",
        choice4: "1851"
    },
    {
        question: "Who bought the Louisiana Purchase, and when?",
        choice1: "King Louis XV, 1699",
        choice2: "President John Adams, 1802",
        choice3: "President Thomas Jefferson, 1803",
        choice4: "Davey Crocket, 1835"
    },
    {
        question: "Which state does NOT contain territory from the Louisiana Purchase?",
        choice1: "Illinois",
        choice2: "Arkansas",
        choice3: "Wyoming",
        choice4: "New Mexico"
    },
    {
        question: "What was the widely held belief that Americans were destined to expand across North America?",
        choice1: "The Great American Journey",
        choice2: "The 'We Just Want Cheap Rent' movement",
        choice3: "American Progress",
        choice4: "Manifest Destiny"
    },
    {
        question: "Where did the Gunfight at the O.K. Corral occur?",
        choice1: "Tuscon, Arizona",
        choice2: "Tombstone, Arizona",
        choice3: "Tulsa, Oklahoma",
        choice4: "Santa Fe, New Mexico"
    },
    {
        question: "Which director helped popularize the Western Genre?",
        choice1: "John Ford",
        choice2: "John Wayne",
        choice3: "Jesse James",
        choice4: "Leviticus Cornwall"
    },
    {
        question: "When did the American West officially 'end'?",
        choice1: "1920",
        choice2: "When there were no cowboys left",
        choice3: "1912",
        choice4: "When the sunset on the horizon and the last cowboy rode off"
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
        totalIncorrect++;
        console.log(submittedQuestions[questionCounter]);
    } else if (submittedQuestions[questionCounter] === answerKey[questionCounter]) {
        $(".questionBox").html(`You answered Correctly!`);
        totalCorrect++;
    } else {
        $(".questionBox").html(`Wrong! The correct answer was: ${answerKey[questionCounter]}`);
        totalIncorrect++;
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
    $("#resetBox").append(`<div id="reset"><button type="button" class="btn btn-primary" id="resetButton">Reset</button></div>`)
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
    $("#results").toggle();
    $("#time-Remaining").toggle();
    $("#timeBox").toggle();
    $("#choices").toggle();
    $("#resetBox").empty();
    setupQuestion();

});

$(document).on("click", ".list-group-item", function () {
    $(".list-group").empty();
    clearInterval(intervalId);

    submittedQuestions[questionCounter] = $(this).attr("value");
    questionResult();

});