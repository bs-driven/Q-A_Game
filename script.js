var startBtn = document.getElementById("startBtn");
var timeEl = document.querySelector(".time");
var quizCardEl = document.querySelector(".quizCard");
var scoreTableEl = document.querySelector("#scoreTable");
var scoreBoardEl = document.querySelector("#scoreBoard");
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
var first = document.getElementById("1st");
var second = document.getElementById("2nd");
// var third = document.querySelector("#3rd");
// var forth = document.querySelector("#4th");
// var fifth = document.querySelector("#5th");
var scoreColumn = document.querySelector("#pointscore");
var userIntial = document.querySelector("#userIntials");
var ranks = document.querySelector("#rank");
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
},
{
  title: "A if statement is found in which of these?",
  choices: ["HTML", "CSS", "Bootstrap", "Javascript"],
  answer: "Javascript",
},
{
  title:"Which of these is the way to make comments in Javascript?",
  choices:["<--", "/*", "##", "//"],
  answer: "//",
}
]

startBtn.addEventListener("click", beginQuiz);
// console.log("test");

function setTime() {
  // Sets interval in variable
  
}

function beginQuiz() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " time left.";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      quizEnd = true;
      endGame();

    }

  }, 1000);
// generates the question and choices available
  function questAndAnswers() {

    if (questionCount >= quizQuestions.length){
      quizEnd = true;
      endGame();
      // console.log("hit");
      return;
    }
    questionEl.textContent = quizQuestions[questionCount].title;
    valueAEl.textContent = quizQuestions[questionCount].choices[0];
    valueBEl.textContent = quizQuestions[questionCount].choices[1];
    valueCEl.textContent = quizQuestions[questionCount].choices[2];
    valueDEl.textContent = quizQuestions[questionCount].choices[3];
    console.log(quizQuestions[questionCount].choices[0]);
    // Math.floor(Math.random() * choices; 
    formEl.addEventListener("click", nextQuestion);
  }

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
      // console.log("correct")
    } else{
      secondsLeft -=8;
      timeEl.textContent = secondsLeft + "time left";
      // console.log("wrong answer");
    }
  
    questionCount ++;
    questAndAnswers();
    
  }

  function endGame() {
    clearInterval(timerInterval);
    var confirmMsg = window.confirm("GAME OVER!! Would you like to see your score?");
    if(confirmMsg == true){
      var userIdQuestion = window.prompt("Please give your name or intials.");
      console.log("hit");
      var userId = userIdQuestion.valueOf("").trim();
      var userPointTotal = totalScore;
      saveDetails(userId, userPointTotal);
      // var userIdanPoints = {userId, totalScore};
      // localStorage.setItem("userInfo", JSON.stringify(userIdanPoints));
      quizCardEl.classList.add("hidden");
      scoreBoardEl.classList.remove("hidden");
      scoreBoardEl.classList.add("scoreCard"); 
    } else{
      window.alert("Thank you. Try again by refreshing the page. I'm sure you'll do better next time.");
      quizCardEl.classList.add("hidden");
      preventDefault();
      beginQuiz();
    };

    console.log(userId);
    console.log(totalScore);
   
    scoreList(userId, totalScore);

  }

  function saveDetails() {
    localStorage.setItem("userName",JSON.stringify(userId));
    localStorage.setItem("userScore",JSON.stringify(userPointTotal));
  
  //   JSON.parse(localStorage.getItem("userName"));
  // // JSON.parse(localStorage.getItem("userScore"));

    }

  function scoreList(){
    //   localStorage.setItem(totalScore,JSON.stringify(scoreValue))
    // JSON.parse(localStorage.getItem("userName"));
    // JSON.parse(localStorage.getItem("userScore"));

    
    var newTD = document.createElement("td");
    var tdContent = document.createTextNode(`${JSON.parse(localStorage.getItem("userName"))}`);
    var firstTD = first.appendChild(newTD);
    var firstContent = firstTD.append(tdContent);
    // console.log(firstTdContent, "hit");
    var newTd2 = document.createElement("td");
    var td2Content = document.createTextNode(`${JSON.parse(localStorage.getItem("userScore"))}`);
    var firstTD2 = first.appendChild(newTd2);
    var firstTdContent2 = firstTD2.append(td2Content);
    // localStorage.setItem(firstTdContent2,JSON.stringify(firstplacescore))
    // var firstTdContent2= JSON.parse(localStorage.getItem("firstplacescore"));

    // here i need to save the info generated to localstorage!!

    // var secondNewTD = document.createElement("td");
    // var secondTD = second.appendChild(secondNewTD);
    // var secondTdcontent = secondTD.append(tdContent);
    // var secondNewTD2 = document.createElement("td");
    // var secondTD2 = second.appendChild(secondNewTD2);
    // var secondTdcontent2 = secondTD2.append(td2Content);
    
    


    }

  questAndAnswers();
};
  





