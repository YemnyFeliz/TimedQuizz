var Intro = document.getElementsByClassName("intro");
var startButton = document.getElementById("startbtn");
var Quiz = document.getElementsByClassName("Quiz");
var timerEL = document.getElementById("Timer-count");
var Questions = document.getElementById("Questions");
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");

var timeLeft = 180;
QuestionIndex = 0;

startButton.addEventListener("click", startTimer);
function startTimer() {
    questionIndex = 0;
    timeLeft = 180;

    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEL.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}



var QuizQuestions = [
    {
        Quest1:"Which one is used to make the app interactive?",
        Options: [
            "1. CSS", 
            "2. HTML", 
            "3. JavaScript", 
            "4. Header", 
        ],
        correctAns: "3. JavaScript",
        
    },

    {
        Quest2:"It can have a true or false value",
        Options: [
            "1. Boolean", 
            "2. String", 
            "3. Number", 
            "4. Array", 
        ],
        correctAns: "1.Boolean",
    },
    {
        Quest3:"in the HTML the script.js file is usually located in",
        Options: [
            "1. The Title", 
            "2. The footer", 
            "3. At the end of the body", 
            "4. Above the style.css link", 
        ],
        correctAns: "3. At the end of the body",
    },
    {
        Quest4:"An array may contain",
        Options: [
            "1. Numbers",
            "2. Strings", 
            "3. Boolean", 
            "4. All of the above",
        ],
        correctAns: "4. All of the above",
    },
    {
        Quest5:"functions are created ",
        Options: [
            "1. funtion = nameFunction", 
            "2. function nameFunction()", 
            "3. var = functionName()", 
            "4. function{}",
        ],
        correctAns:"2. function nameFunction()",
    },

];




