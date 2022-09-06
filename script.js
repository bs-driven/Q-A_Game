var startBtn= document.getElementById("startBtn");
var timeEl= document.querySelector(".time");
// var mainEl= document.getElementById("main");
var formEl= document.getElementsById("quiz");
var questionEl= document.getElementById("theQuestion");
var valueAEl= document.getElementById("A");
var valueBEl= document.getElementById("B");
var valueCEl= document.getElementById("C");
var valueDEl= document.getElementById("D");
var secondsLeft = 60;
var totalScore = 0;
// var questions= quizQuestions

startBtn.addEventListener("click", beginQuiz);

var beginQuiz = function() {
    questAndAnswers();
  setTime();
}



  

var questAndAnswers= function(){
 questionEl.innnerHTML("what is the symbol that starts a array?");
  // //  var valueChoices= [valueAEl, valueBEl, valueCEl, valueDEl,];
  //  var answerChoices = ["<>","{}","[]","()"];
  // //  var soltion1= [valueAEl, valueBEl, valueCEl, valueDEl];
  //  var correctAnswer= "[]";
 
 }

// [
//   {what
//     title: "quetsion 1",
//     choices: ['option 1', 'option 2'],
//     answer: 'option 2'
//   } is ,
//   {
//     title: "quetsion 2",
//     choices: ['option 1', 'option 2'],
//     answer: 'option 1'
//   }
// ]



// var quizQuestions = function() {
  // var question1 = [
  //   {
  //     title: "what symbol starts a array",
  //     choices:["<>","()","{}","[]"],
  //     answer: "[]",

  //   }
  // ]

// }







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


//  setTime()