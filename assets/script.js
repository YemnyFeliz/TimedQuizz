//Selected id elements from html and made them variables//

var Intro = document.getElementById("intro");
var startButton = document.getElementById("startbtn");
var Quiz = document.getElementById("Quiz");
var timerEL = document.getElementById("Timer-count");
var Questions = document.getElementById("Questions");
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");
var QuizEnd = document.getElementById("QuizEnd");
var showCorrect = document.getElementById("showCorrect");
var submit = document.getElementById("submitbtn");

//Set timer to 110 and created QuestionIndex//
var timeLeft = 110;
var QuestionIndex = 0;
var Scores = document.getElementById("scores");
var timerInterval;

//When clich on the start btn, intro hides, Quiz shows, timer and quiz start//
startButton.addEventListener("click", function () {
    Intro.style.display = "none";
    QuizEnd.style.display = "none";
    scoreArea.style.display = "none";
    Quiz.style.display = "block";
    startTimer();
    startQuiz();
});

//makes time goes down and the if statement clear intervals and show scores if time is <=0//
function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timerEL.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);

}
//Object with questions, answers, and correct answers for the quiz//
var QuizQuestions = [
    {
        Quest: "Which one is used to make the app interactive?",
        Options: [
            "CSS",
            "HTML",
            "JavaScript",
            "Header",
        ],
        correctAns: "JavaScript",
    },

    {
        Quest: "It can have a true or false value",
        Options: [
            "Boolean",
            "String",
            "Number",
            "Array",
        ],
        correctAns: "Boolean",
    },
    {
        Quest: "In the HTML the script.js file is usually located in",
        Options: [
            "The Title",
            "The footer",
            "At the end of the body",
            "Above the style.css link",
        ],
        correctAns: "At the end of the body",
    },
    {
        Quest: "An array may contain",
        Options: [
            "Numbers",
            "Strings",
            "Boolean",
            "All of the above",
        ],
        correctAns: "All of the above",
    },
    {
        Quest: "Functions are created ",
        Options: [
            "funtion = nameFunction",
            "function nameFunction()",
            "var = functionName()",
            "function{}",
        ],
        correctAns: "function nameFunction()",
    },

];

//This function starts the quiz.
//The if statement says that the function will run until it goes through each question.
//The else statement says that if there are no more questions then timer is cleared and the score showed.
//text.Content adds the questions and answers to html divs so they can be displayed.
function startQuiz() {
    if (QuestionIndex < QuizQuestions.length) {
        Questions.textContent = QuizQuestions[QuestionIndex].Quest;
        //console.log(QuizQuestions[QuestionIndex].Options);

        //The forloop gets the options for the answers
        for (var i = 0; i < QuizQuestions[QuestionIndex].Options.length; i++) {
            console.log(QuizQuestions[QuestionIndex].Options[i]);
            document.getElementById("answer" + (i + 1)).textContent = QuizQuestions[QuestionIndex].Options[i];
        }

    } else {
        clearInterval(timerInterval);
        showScore();                
    }
}

//checkAns function determines what happens when users select correct and wrong answers and moves to the next question.
//if the answer is correct it will say correct, and if it is wrong it will say wrong//
//If the wrong answer is chosen 10 secons is substracted from the timer//
function checkAns(event) {
    console.log(event.target.textContent);
    var clickAns = event.target.textContent;
    var currentAns = QuizQuestions[QuestionIndex].correctAns;

    if (clickAns == currentAns) {
        showCorrect.style.display = "inline"
        showCorrect.textContent = "correct!"
        QuestionIndex++;
        startQuiz();

    } else {
        timeLeft -= 10;
        showCorrect.style.display = "inline";
        showCorrect.textContent = "Wrong!";
        QuestionIndex++;
        console.log("next!");
        startQuiz();
    }

}
//These are the events for checkAns function//
choice1.addEventListener("click", checkAns);
choice2.addEventListener("click", checkAns);
choice3.addEventListener("click", checkAns);
choice4.addEventListener("click", checkAns);

//showScore tells the user their score once they answer all the questions or the timer reaches 0//
function showScore() {
    var initials = document.getElementById("initials");
    Quiz.style.display = "none";
    QuizEnd.style.display = "block";
    initials.style.display = "block";
    submit.style.display = "block";
    Scores.textContent = "Your Score " + timeLeft;
    Scores.style.display = "block";    
}

//When click submit, highscores, which is the user info, will become a JS object with parse//
//Usersinfo is stored in the local storage with .push//
//Userinfo becomes a string using .stringify//
submit.addEventListener("click", function () {
    var UserInfo = JSON.parse(localStorage.getItem("HighScores")) || [];
    var initials = document.getElementById("initials").value;
    UserInfo.push(
        {
            initial: initials,
            score: timeLeft,
        }
    )
    if (!initials) {
        alert("Please enter your initials");
        return;
    }
    localStorage.setItem("HighScores", JSON.stringify(UserInfo));
})

//When click on the scoreBtn, all scores are shown//
//Userinfo push into the local storage in return as JS object using parse//
//The forloop goes through all userinfo//
//A li element is created to contain all scores and initials//
//The userinfo is displayed by attaching it to the inner HTML with appendChild//
var scoreBtn = document.getElementById("showScore");
var scoreArea = document.getElementById("highScore");
scoreBtn.addEventListener("click", function () {
    QuizEnd.style.display = "none";
    scoreArea.style.display = "block";
    var UserInfo = JSON.parse(localStorage.getItem("HighScores")) || [];
    console.log(UserInfo);
    for (var i = 0; i < UserInfo.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = UserInfo[i].initial + " = " + UserInfo[i].score;
        document.getElementById("allScores").appendChild(liEl);
    }

})

var goBack = document.getElementById("GoBack");
var clear = document.getElementById("Clear");
//When click on goBack the page reloads and the quiz can be retaken//
goBack.addEventListener("click", function () {
    window.location.reload();
})

//When click on clear the local storage is cleared//
clear.addEventListener("click", function () {
    localStorage.clear();
    console.log("history cleared!");
    allScores.innerHTML = "";
})



