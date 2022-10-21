//Global variables
var overalScor = 0;
var initials = " ";
var body = document.body;
var secondsLeft = 30;
var secondsLeft1 = 0;
var timerInterval;

// navigation vars for div elements
var bodyEl = document.querySelector("#body");
var start = document.getElementById("start");
var header1 = document.getElementById("header");
var header2 = document.getElementById("headerAllDone");
var questioanary = document.getElementById("questionary");
var allDoneLocateDiv = document.getElementById("allDone");
var hScore1Div = document.getElementById("hScore1");
var hScore2Div = document.getElementById("hScore2");

// navigation vars for buttons
/* var startQuizBtn = document.getElementById("start-button");
var allDoneBtn = document.getElementById("submitInitBtn");
var highscoreOutBtnGoBack = document.getElementById("highscoreOutBtnGoBack");
var highscoreOutBtnClear = document.getElementById("highscoreOutBtnClear");
var highscoreFinalOutBtnGoBack = document.getElementById("highscoreFinalOutBtnGoBack");
var highscoreFinalOutBtnClear = document.getElementById("highscoreFinalOutBtnClear");
var submitAnswer1 = document.getElementById("answer1Btn");
var submitAnswer2 = document.getElementById("answer2Btn");
var submitAnswer3 = document.getElementById("answer3Btn");
var submitAnswer4 = document.getElementById("answer4Btn"); */

// navigation for elements
var questionH2 = document.getElementById("dispQuest");
var answerListBtn = document.getElementsByClassName("answerBtn");
var allDoneBtn = document.getElementById("submitInitBtn");
var ulEl = document.getElementById("dispHighscoreList");
var inputAll = document.getElementById("inputEl");

var localStore = [];
// store to the local storage
// access local localStore, get localStore[i], li.textContext= localStore[i]

// Global JSON varible to store result in the local storage
var highscoreLockalStorage = [
    {
        initials: [],
        score: []
    }
];

// Global JSON varible to keep data for quiz questionary
var questions = [
    {
    question: "question 1",
    options: ["a", "b", "c", "d"],
    answer : "a"
    },
    {
    question: "question 2",
    options: ["a", "b", "c", "d"],
    answer : "b"
    },
    {
    question: "question 3",
    options: ["a", "b", "c", "d"],
    answer : "b"
    },
    {
    question: "question 4",
    options: ["a", "b", "c", "d"],
    answer : "c"
    },
    {
    question: "question 5",
    options: ["a", "b", "c", "d"],
    answer : "d"
    },
    {
    question: "question 6",
    options: ["a", "b", "c", "d"],
    answer : "c"
    },
    {
    question: "question 7",
    options: ["a", "b", "c", "d"],
    answer : "c"
    },
    {
    question: "question 8",
    options: ["a", "b", "c", "d"],
    answer : "d"
    },
    {
    question: "question 9",
    options: ["a", "b", "c", "d"],
    answer : "c"
    }
];

// Global function  to launch time when quiz is started
function setTime() {
    // Sets interval in variable
      timerInterval = setInterval(function() {
      secondsLeft--;
      var timer = document.getElementById('timerHeader1');
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        submitAnswer();
      }
    }, 1000);
}
// Global function to get time when quiz was finished
function allDoneTime() {
    if (secondsLeft <= 0) {
        secondsLeft1 = 0;
    }
    else{
        secondsLeft1 = secondsLeft;
    }
    return secondsLeft1;
}


bodyEl.addEventListener("click", function (event) {
    var element = event.target;

    // display Questionary div
    if (element.matches("#start-button")) {
        start.style.display = "none";
        header1.style.display = "block";
        questioanary.style.display = "block";
        setTime();
        renderQuestion();
    } else if(element.matches("#answerBtn")){
        if(element.textContent == questions[questionIndex-1].answer){
            overalScor += 10;
        }else{
            secondsLeft -= 5;
        }

        if (questionIndex >= questions.length){ // 9, index 8
            submitAnswer();
            clearInterval(timerInterval);
        }else{
            renderQuestion();
        }
    }
    // display All Done div
    else if(element.matches("#submitInitBtn")){
        allDoneLocateDiv.style.display = "none";
        header1.style.display = "none";
        hScore1Div.style.display = "block";
        header2.style.display = "none";

        // Local storage to save and get data
        var highscoreString = overalScor + "," + inputAll.textContent;
        var oldScores = localStorage.getItem("quizHighScore");
        if(oldScores.length > 0){
            oldScores = oldScores + ":";
        }
        oldScores = oldScores + highscoreString;
        localStorage.setItem("quizHighScore", oldScores);

        var dataScores = localStorage.getItem("quizHighScore");
        var allScores = dataScores.split(":");
        ulEl.innerHTML = "";
        for (var i=0; i < allScores.length; i++ ){
            console.log(allScores[i]);
            var newLi = document.createElement("li");
            newLi.textContent = allScores[i];
            ulEl.append(newLi);
        }
        





    }
    // display Higscore 1 div
    else if(element.matches("#highscoreOutBtnGoBack")){
        hScore1Div.style.display = "none";
        allDoneLocateDiv.style.display = "block";
        header2.style.display = "block";
    }
    else if(element.matches("#highscoreOutBtnClear")){
        hScore1Div.style.display = "none";
        header1.style.display = "none";
        hScore2Div.style.display = "block";
    }
    // display Start div
    else if(element.matches("#highscoreFinalOutBtnGoBack")){
        hScore2Div.style.display = "none";
        hScore1Div.style.display = "block";
    }
    else if(element.matches("#highscoreFinalOutBtnClear")){
        hScore2Div.style.display = "none";
        start.style.display = "block";
        secondsLeft = 30;
    }
  });
// Start display
// Start quiz button event startQuizBtn

// Header


/* function createHeader2El(){
    var highSc2 = document.createElement("button");
    var timerAllDone = document.createElement("p");
    
    header2.appendChild(highSc2);
    header2.appendChild(timerAllDone);
    
    highSc2.textContent = "View Highscores";
}
 */
// All done section
// Final score indicator (p)
// Enter initials (form) + (submit button)


// Adding event listener for All Done Submit Button

// timerAllDone.textContent = "Time: " + secondsLeft1;
// Timer and events: 
// 1. Wrong answer slash
// 2. End time to get to All done section


function createQuestionaryEl(){
// 1. questions h1

var question = document.createElement("h2");
question.textContent = "This is question # "; // questions[0].question
questioanary.appendChild(question);

/*for (var i = 0; i <= 6; i++) {
    if (i = 0) {
        question.textContent = "This is question # ";
        body.appendChild(question);
    }
    else {
        question.appendChild(submitAnswer);
        // answ.appendChild(submitAnswer);
    }
}*/

// 2. Answer options 4 (submit buttons)
var submitAnswer1 = document.createElement("button");
var submitAnswer2 = document.createElement("button");
var submitAnswer3 = document.createElement("button");
var submitAnswer4 = document.createElement("button");

submitAnswer1.textContent = "Wrong Answer"; // questions[0].options[0]
submitAnswer2.textContent = "Wrong Answer";
submitAnswer3.textContent = "Wrong Answer";
submitAnswer4.textContent = "Correct Answer";

questioanary.appendChild(submitAnswer1);  
questioanary.appendChild(submitAnswer2);
questioanary.appendChild(submitAnswer3);
questioanary.appendChild(submitAnswer4);

submitAnswer1.setAttribute("id","btnAnsw1");
submitAnswer2.setAttribute("id","btnAnsw2");
submitAnswer3.setAttribute("id","btnAnsw3");
submitAnswer4.setAttribute("id","btnAnsw4");

// 3. Wrong/Correct indicator (p)
var answerLine = document.createElement("p");
var answerResult = submitAnswer4.textContent;
answerLine.textContent = answerResult;
questioanary.appendChild(answerLine);
}

function submitAnswer() {
    questioanary.style.display = "none";
    header1.style.display = "block";
    allDoneLocateDiv.style.display = "block";
    header2.style.display = "block";
    header1.style.display = "none";
    // to collect final data
    //answerResult = "Wrong";
    secondsLeft -= 10;
    secondsLeft1 = secondsLeft;
    //timerAllDone.textContent = "Time: " + allDoneTime();

}

  


// Highscorce section
// Read only (form) with initials and score displayed
// Go Back (button) to get back to All done section
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header

/* function createHighScoreEl(){
    var highScoreH = document.createElement("h2");
    var resultInput = document.createElement("li");
    var goBackBtn = document.createElement("button");
    var clearScoreBtn = document.createElement("button");
    
    resultInput.setAttribute("id","input2");
    
    highScoreH.textContent = "Highscores";
    //resultInput.textContent = initials + " - " + overalScor;
    goBackBtn.textContent = "Go Back";
    clearScoreBtn.textContent = "Clear Highscores";
    
    hScore1Div.appendChild(highScoreH);
    hScore1Div.appendChild(resultInput);
    hScore1Div.appendChild(goBackBtn);
    hScore1Div.appendChild(clearScoreBtn);

    goBackBtn.setAttribute("id", "highscoreOutBtnGoBack");
    clearScoreBtn.setAttribute("id", "highscoreOutBtnClear");
}
 */
// Adding event listener for HighScore1 Go Back Button
/* highscoreOutBtnGoBack.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore1Div div
    hScore1Div.style.display = "none";
    //to display Highscore div
    allDoneLocateDiv.style.display = "block";

    header2.style.display = "block";
}); */

// Adding event listener for HighScore1 Clear Highscores Button
/* highscoreOutBtnClear.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore1Div div
    hScore1Div.style.display = "none";
    // to hide header
    header1.style.display = "none";
    //to display Highscore div
    hScore2Div.style.display = "block";
}); */


// Highscorce section (Clear Highscore event)
// Go Back (button) to get to Codding Quiz Chalange
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header
/* function createHighscoreFinalEl(){
    var highScoreH1 = document.createElement("h2");
    var goBackBtn1 = document.createElement("button");
    var clearScoreBtn1 = document.createElement("button");
    
    highScoreH1.textContent = "Highscores";
    goBackBtn1.textContent = "Go Back";
    clearScoreBtn1.textContent = "Clear Highscores";
    
    hScore2Div.appendChild(highScoreH1);
    hScore2Div.appendChild(goBackBtn1);
    hScore2Div.appendChild(clearScoreBtn1);

    goBackBtn1.setAttribute("id", "highscoreFinalOutBtnGoBack");
    clearScoreBtn1.setAttribute("id", "highscoreFinalOutBtnClear");
} */

// Adding event listener for Highscore Go Back Button
/* highscoreFinalOutBtnGoBack.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide Highscore2 div
    hScore2Div.style.display = "none";
    //to display Highscore1 div
    hScore1Div.style.display = "block";
}); */

// Adding event listener for HighScore2 Clear Highscores Button
/* highscoreFinalOutBtnClear.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore2Div div
    hScore2Div.style.display = "none";
    //to display Start div
    start.style.display = "block";
    secondsLeft = 30;
      //location.reload();
}); */


//create event listener for all buttons
// Coding Quiz Chalange
// Intro paragraph (h3)
// Start quiz (button)

/*function createStartQuiz() {
    var start = document.getElementById("start");
    var codingChalange = document.createElement("h1");
    var codingChalangeP = document.createElement("p");
    var startQuizBtn = document.createElement("button");
    
    
    codingChalange.textContent = "Coding Quiz Challenge";
    codingChalangeP.textContent = "Try to answer the following code related questions whithin the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startQuizBtn.textContent = "Start Quiz";
    
    start.appendChild(codingChalange);
    start.appendChild(codingChalangeP);
    start.appendChild(startQuizBtn);
}*/



 

  var questionIndex = 0

console.log(questions[0].question);
console.log(questionH2.textContent = questions[0].question);

  function renderQuestion() {  // to create quiz question inside div
    // Handle Dom to display question
    // for (var i = 0; i < questions.length; i++) {
        questionH2.textContent = questions[questionIndex].question;
        console.log(answerListBtn);
        for (var j = 0; j < questions[questionIndex].options.length; j++ ){
            
            answerListBtn[j].textContent = questions[questionIndex].options[j];
        
        }
        questionIndex++;
    }
    // questions[questionIndex].question
//   }


  // questionIndex++; // 0 -> 1
