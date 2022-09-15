var startBtn = document.getElementById("startBtn");
var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");
var formEl = document.querySelector("#quiz");
var questionEl = document.getElementById("theQuestion");
var valueAEl = document.getElementById("A");
var valueBEl = document.getElementById("B");
var valueCEl = document.getElementById("C");
var valueDEl = document.getElementById("D");
var secondsLeft = 40;
var totalScore = 0;
var questionCount = 0;
var quizEnd = false;
var quizQuestions =[ 
  {
    title: "What symbol starts a array?",
    choices:["<>", "()", "{}", "[]"],
    answer: "[]",
  },
  {
    title: "What symbols are used in making a Javascript object?",
    choices: ["&&", "{}", "===", "[]"],
    answer: "{}",
},
{
    title:" Which API is CSS related?",
    choices: ["Bootstrap", "Weather","Cat Facts","Intellexer"],
    answer: "Bootstrap",
},
{
  title:" Which of these is a example of a pseudo-clas? ",
  choices:["<p>",".article","p:hover", "p::first-letter"],
  answer:"p:hover",
}
]

startBtn.addEventListener("click", beginQuiz);
// console.log("test");

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " time left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      window.alert("Times Up.")
      quizEnd = true;

    }

  }, 1000);
}



function beginQuiz() {
  setTime();
  questAndAnswers();

};
  

function questAndAnswers() {

questionEl.textContent = quizQuestions[questionCount].title;
valueAEl.textContent = quizQuestions[questionCount].choices[0];
valueBEl.textContent = quizQuestions[questionCount].choices[1];
valueCEl.textContent = quizQuestions[questionCount].choices[2];
valueDEl.textContent = quizQuestions[questionCount].choices[3];
console.log(quizQuestions[questionCount].choices[0]);
// Math.floor(Math.random() * choices;
}

formEl.addEventListener("click", nextQuestion)
function nextQuestion(event) {
  if(!event.target.matches("button")){
    console.log("not a buuton");
    return  null;
  }
  event.preventDefault();
  console.log(event.target);
  var userChoice = event.target.textContent;
  console.log(userChoice);
  console.log(quizQuestions[questionCount].answer)
  if(userChoice === quizQuestions[questionCount].answer){
    totalScore ++;
    secondsLeft +=6;
    timeEl.textContent = secondsLeft + "time left";
    console.log("correct")
  }

  questionCount ++;
  questAndAnswers();
  
}