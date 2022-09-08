var startBtn = document.getElementById("startBtn");
var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");
// var formEl = document.querySelector("#quiz");
var questionEl = document.getElementById("theQuestion");
var valueAEl = document.getElementById("A");
var valueBEl = document.getElementById("B");
var valueCEl = document.getElementById("C");
var valueDEl = document.getElementById("D");
var secondsLeft = 40;
// var totalScore = 0;
// var questions= quizQuestions
var quizQuestions =[ 
  {
      title: "What symbol starts a array?",
      choices:["<>", "()", "{}", "[]"],
      answer: "[]",
  }]

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

    }

  }, 1000);
}



function beginQuiz() {
  setTime();
  questAndAnswers();

};
  
var questionCount = 0;
function questAndAnswers(){

questionEl.textContent = quizQuestions[questionCount].title;
valueAEl.textContent = quizQuestions[questionCount].choices[0];
valueBEl.textContent = quizQuestions[questionCount].choices[1];
valueCEl.textContent = quizQuestions[questionCount].choices[2];
valueDEl.textContent = quizQuestions[questionCount].choices[3];
console.log(quizQuestions[questionCount].choices[0]);
// Math.floor(Math.random() * choices;



}
// // ,{
// //   title: "What symbols are used in making a Javascript object?",
// //   choices: ["&&", "{}", "===", "[]"],
// //   answer: "{}",
// // }
// ];

// if (choices === answer) {
//   totalScore ++;
//   secondsLeft + 6;
  
// }

// };



// // formEl.addEventListener("click",nextQuestion)

// // function nextQuestion(){

  
// // }
//     // //  var valueChoices= [valueAEl, valueBEl, valueCEl, valueDEl,];
//   //  var answerChoices = ["<>","{}","[]","()"];
//   // //  var soltion1= [valueAEl, valueBEl, valueCEl, valueDEl];
//   //  var correctAnswer= "[]";
 


//  // [
//  //   {what
//  //     title: "quetsion 1",
//  //     choices: ['option 1', 'option 2'],
//  //     answer: 'option 2'
//  //   } is ,
//  //   {
//  //     title: "quetsion 2",
//  //     choices: ['option 1', 'option 2'],
//  //     answer: 'option 1'
//  //   }
