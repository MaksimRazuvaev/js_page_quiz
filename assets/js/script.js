//Global variables
var overalScor = 0;
var initials = " ";
var body = document.body;
var secondsLeft = 30;
var secondsLeft1 = 0;
var timerInterval;
var allResults = [];

// navigation vars for div elements
var bodyEl = document.querySelector("#body");
var start = document.getElementById("start");
var header1 = document.getElementById("header");
var header2 = document.getElementById("headerAllDone");
var questioanary = document.getElementById("questionary");
var allDoneLocateDiv = document.getElementById("allDone");
var hScore1Div = document.getElementById("hScore1");
var hScore2Div = document.getElementById("hScore2");

// traversing elements
var questionH2 = document.getElementById("dispQuest");
var answerListBtn = document.getElementsByClassName("answerBtn");
var allDoneBtn = document.getElementById("submitInitBtn");
var ulEl = document.getElementById("dispHighscoreList");
var yourScoreIs = document.getElementById("allDoneP");
var yourTimeIs = document.getElementById("timerHeader2");

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
    else {
        secondsLeft1 = secondsLeft;
    }
    return secondsLeft1;
}

// event listener for all buttons in the body html element
bodyEl.addEventListener("click", function (event) {
    var element = event.target;
    // display Questionary div
    if (element.matches("#start-button")) {
        start.style.display = "none";
        header1.style.display = "flex";
        questioanary.style.display = "flex";
        // to lunch quiz function: display questions and set time
        setTime();
        renderQuestion();
    // to evaluate answer
    } else if(element.matches("#answerBtn")){
        // to display status for answer
        var resultIndP = document.getElementById("answIndicP");
        var answerResult = element.textContent;

        // answer evaluation
        if(element.textContent == questions[questionIndex-1].answer){
            overalScor += 10;
            answerResult = "Correct!";
        }else{
            secondsLeft -= 5;
            answerResult = "Wrong";
        }
        resultIndP.textContent = answerResult;
        // to check if all questions are answered and refresh quiz for next run
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
        hScore1Div.style.display = "flex";
        header2.style.display = "none";
        
        // to save initials and score to array
        var initials = document.getElementById("inputEl").value;
        var saveHS = initials + "-" + overalScor + ";";
        var toAppendLi = 0;
        allResults.push(saveHS);
        //to add curent result in Highscore section
        var newLi = document.createElement("li");
        newLi.textContent = allResults[toAppendLi];
        ulEl.append(newLi);
        toAppendLi++;
        overalScor = 0;
        // safe global arrey to local storage
        localStorage.setItem("allScorses", JSON.stringify(allResults));
    }
    // event for "Go Back" button in Higscore1 div to display Higscore2 div
    else if(element.matches("#highscoreOutBtnGoBack")){
        hScore1Div.style.display = "none";
        allDoneLocateDiv.style.display = "flex";
        header2.style.display = "flex";
    }
    // event for "Clear Highscores" button in Higscore1 div to display Higscore2 div
    else if(element.matches("#highscoreOutBtnClear")){
        hScore1Div.style.display = "none";
        header1.style.display = "none";
        hScore2Div.style.display = "flex";
    }
    // event for "Go Back" button in Higscore2 div to display Start div
    else if(element.matches("#highscoreFinalOutBtnGoBack")){
        hScore2Div.style.display = "none";
        hScore1Div.style.display = "flex";
    }
    // event for "Clear Highscores" button in Higscore2 div to display Start div
    else if(element.matches("#highscoreFinalOutBtnClear")){
        hScore2Div.style.display = "none";
        start.style.display = "flex";
        secondsLeft = 30;
    }
    // event for "View Highscores" button in Header div to switch to another html page
    else if(element.matches("#header1Btn")){
        visitResultPage();
    }
    // event for "View Highscores" button in Header2 div to switch to another html page
    else if(element.matches("#header2Btn")){
        visitResultPage();
    }
});

// function to display quiz section
function submitAnswer() {
    questioanary.style.display = "none";
    header1.style.display = "flex";
    allDoneLocateDiv.style.display = "flex";
    header2.style.display = "flex";
    header1.style.display = "none";
    // to display final result
    yourScoreIs.innerHTML = "Yor final score is: " + overalScor;
    yourTimeIs.innerHTML = "Time: " + allDoneTime();
    questionIndex = 0; // to flash questionIndex after quiz got completed
}

var questionIndex = 0; // service var to track displayed questions and request questions JSON var 
// to create quiz question inside div
function renderQuestion() {  
    // Handle Dom to display question
    questionH2.textContent = questions[questionIndex].question;
    // for loop for displaying answers / options
    for (var j = 0; j < questions[questionIndex].options.length; j++ ){
        answerListBtn[j].textContent = questions[questionIndex].options[j];
    }
    questionIndex++;
}

// function to switch to another html page and review result from local storage
function visitResultPage(){
    window.location="./assets/html/allScores.html";
}