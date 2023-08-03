var Intro = document.getElementById("intro");
var startButton = document.getElementById("startbtn");
var Quiz = document.getElementById("Quiz");
var timerEL = document.getElementById("Timer-count");
var Questions = document.getElementById("Questions");
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");

var timeLeft = 180;
var QuestionIndex = 0;

startButton.addEventListener("click", function (){
    Intro.style.display = "none";
    Quiz.style.display = "block";
    startTimer();
    startQuiz();

});

function startTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEL.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}

var QuizQuestions = [
    {
        Quest:"Which one is used to make the app interactive?",
        Options: [
            "1. CSS", 
            "2. HTML", 
            "3. JavaScript", 
            "4. Header", 
        ],
        correctAns: "3. JavaScript",
        
    },

    {
        Quest:"It can have a true or false value",
        Options: [
            "1. Boolean", 
            "2. String", 
            "3. Number", 
            "4. Array", 
        ],
        correctAns: "1. Boolean",
    },
    {
        Quest:"in the HTML the script.js file is usually located in",
        Options: [
            "1. The Title", 
            "2. The footer", 
            "3. At the end of the body", 
            "4. Above the style.css link", 
        ],
        correctAns: "3. At the end of the body",
    },
    {
        Quest:"An array may contain",
        Options: [
            "1. Numbers",
            "2. Strings", 
            "3. Boolean", 
            "4. All of the above",
        ],
        correctAns: "4. All of the above",
    },
    {
        Quest:"functions are created ",
        Options: [
            "1. funtion = nameFunction", 
            "2. function nameFunction()", 
            "3. var = functionName()", 
            "4. function{}",
        ],
        correctAns:"2. function nameFunction()",
    },

];

function startQuiz() {
    //startTimer()
        Questions.textContent = QuizQuestions[QuestionIndex].Quest;
        console.log(QuizQuestions[QuestionIndex].Options);
           
        for(var i = 0; i<QuizQuestions[QuestionIndex].Options.length; i++){
            console.log(QuizQuestions[QuestionIndex].Options[i]);
            document.getElementById("answer" + (i+1)).textContent = QuizQuestions[QuestionIndex].Options[i];

        } 
}

function checkAns(event) {
    console.log(event.target.textContent);
    var clickAns = event.target.textContent;
    var currentAns = QuizQuestions[QuestionIndex].correctAns;

    if(clickAns == currentAns){
        console.log("correct");
        QuestionIndex++;
        startQuiz();

    }else {
        timeLeft -= 10;
        
        QuestionIndex++;
        console.log("next!");
        startQuiz();
        

    }


}

choice1.addEventListener("click", checkAns);
choice2.addEventListener("click", checkAns);
choice3.addEventListener("click", checkAns);
choice4.addEventListener("click", checkAns);
