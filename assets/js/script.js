//Global variables
var overalScor = 0;
var initials = " ";
var body = document.body;
var secondsLeft = 30;
var secondsLeft1 = 0;

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

// Header
// View Highscorse and Timer elements (div)
var header1 = document.getElementById("header");
var highSc = document.createElement("p");
var timer = document.createElement("p");

highSc.textContent = "View Highscores";

header1.appendChild(highSc);
header1.appendChild(timer);

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
    // ??? How to stop execution ???
    /*if (clearInterval()) {
        return secondsLeft;
    }*/
  }, 1000);
}

setTime();

var header2 = document.getElementById("headerAllDone");
var highSc2 = document.createElement("p");
var timerAllDone = document.createElement("p");

header2.appendChild(highSc2);
header2.appendChild(timerAllDone);

highSc2.textContent = "View Highscores";
// timerAllDone.textContent = "Time: " + secondsLeft1;
// Timer and events: 
// 1. Wrong answer slash
// 2. End time to get to All done section


// Questionary 5 questions (div):
// 1. questions h1
var questioanary = document.getElementById("questionary")
var question = document.createElement("h2");
question.textContent = "This is question # ";
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

submitAnswer1.textContent = "Wrong Answer";
submitAnswer2.textContent = "Wrong Answer";
submitAnswer3.textContent = "Wrong Answer";
submitAnswer4.textContent = "Correct Answer";

questioanary.appendChild(submitAnswer1);
questioanary.appendChild(submitAnswer2);
questioanary.appendChild(submitAnswer3);
questioanary.appendChild(submitAnswer4);

// 3. Wrong/Correct indicator (p)
var answerLine = document.createElement("p");
var answerResult = submitAnswer4.textContent;
answerLine.textContent = answerResult;
questioanary.appendChild(answerLine);

// Adding event listener for Questionary SubmitSnswer1
submitAnswer1.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide and display div elements
    questioanary.style.display = "none";
    header1.style.display = "block";
    allDoneLocateDiv.style.display = "block";
    header2.style.display = "block";
    header1.style.display = "none";
    // to collect final data
    answerResult = "Wrong";
    secondsLeft -= 10;
    secondsLeft1 = secondsLeft;
    timerAllDone.textContent = "Time: " + allDoneTime();
});
// Adding event listener for Questionary SubmitSnswer2
submitAnswer2.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide and display div elements
    questioanary.style.display = "none";
    header1.style.display = "block";
    allDoneLocateDiv.style.display = "block";
    header2.style.display = "block";
    header1.style.display = "none";
    // to collect final data
    answerResult = "Wrong";
    secondsLeft -= 10;
    secondsLeft1 = secondsLeft;
    timerAllDone.textContent = "Time: " + allDoneTime();
});
// Adding event listener for Questionary SubmitSnswer3
submitAnswer3.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide and display div elements
    questioanary.style.display = "none";
    header1.style.display = "block";
    allDoneLocateDiv.style.display = "block";
    header2.style.display = "block";
    header1.style.display = "none";
    // to collect final data
    answerResult = "Wrong";
    secondsLeft -= 10;
    secondsLeft1 = secondsLeft;
    timerAllDone.textContent = "Time: " + allDoneTime();
});
// Adding event listener for Questionary SubmitSnswer3
submitAnswer4.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide and display div elements
    questioanary.style.display = "none";
    header1.style.display = "block";
    allDoneLocateDiv.style.display = "block";
    header2.style.display = "block";
    header1.style.display = "none";
    // to collect final data
    answerResult = "Correct";
    secondsLeft1 = secondsLeft;
    timerAllDone.textContent = "Time: " + allDoneTime();
    overalScor += 10 + secondsLeft1;
    finalScoreIndicator.textContent = "Your final score is: " + overalScor;
});








// All done section
// Final score indicator (p)
// Enter initials (form) + (submit button)
var allDoneLocateDiv = document.getElementById("allDone");
var allDone = document.createElement("h2");
var finalScoreIndicator = document.createElement("p");
var enterInitials = document.createElement("p");
var enterInitialsInput = document.createElement("input");
var initialsBtn = document.createElement("button");


allDone.textContent = "All done!";

enterInitials.textContent = "Enter initials: ";
initialsBtn.textContent = "Submit";

allDoneLocateDiv.appendChild(allDone);
allDoneLocateDiv.appendChild(finalScoreIndicator);
allDoneLocateDiv.appendChild(enterInitials);
enterInitials.appendChild(enterInitialsInput);
enterInitials.appendChild(initialsBtn);

enterInitialsInput.setAttribute("id","input");


// Adding event listener for All Done Submit Button
initialsBtn.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide and display div elements
    allDoneLocateDiv.style.display = "none";
    header1.style.display = "none";
    hScore1Div.style.display = "block";
    header2.style.display = "none";

    initials = document.getElementById("input").value;
});



// Highscorce section
// Read only (form) with initials and score displayed
// Go Back (button) to get back to All done section
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header
var hScore1Div = document.getElementById("hScore1");
var highScoreH = document.createElement("h2");
var resultInput = document.createElement("input");
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

// 10/16/22 to start here
document.getElementById('input2').value = " ";


// Adding event listener for HighScore1 Go Back Button
goBackBtn.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore1Div div
    hScore1Div.style.display = "none";
    //to display Highscore div
    allDoneLocateDiv.style.display = "block";

    header2.style.display = "block";
});

// Adding event listener for HighScore1 Clear Highscores Button
clearScoreBtn.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore1Div div
    hScore1Div.style.display = "none";
    // to hide header
    header1.style.display = "none";
    //to display Highscore div
    hScore2Div.style.display = "block";
});


// Highscorce section (Clear Highscore event)
// Go Back (button) to get to Codding Quiz Chalange
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header
var hScore2Div = document.getElementById("hScore2");
var highScoreH1 = document.createElement("h2");
var goBackBtn1 = document.createElement("button");
var clearScoreBtn1 = document.createElement("button");


highScoreH1.textContent = "Highscores";
goBackBtn1.textContent = "Go Back";
clearScoreBtn1.textContent = "Clear Highscores";

hScore2Div.appendChild(highScoreH1);
hScore2Div.appendChild(goBackBtn1);
hScore2Div.appendChild(clearScoreBtn1);

// Adding event listener for Highscore Go Back Button
goBackBtn1.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide Highscore2 div
    hScore2Div.style.display = "none";
    //to display Highscore1 div
    hScore1Div.style.display = "block";
});

// Adding event listener for HighScore2 Clear Highscores Button
clearScoreBtn1.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide hScore2Div div
    hScore2Div.style.display = "none";
    //to display Start div
    start.style.display = "block";
    location.reload();
});

// Coding Quiz Chalange
// Intro paragraph (h3)
// Start quiz (button)
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

// Adding event listener for startQuizBtn
startQuizBtn.addEventListener("click", function (event) {
    // Prevent the form from submitting. A button element without a type is a submit by default
    event.preventDefault();
    // to hide start div
    start.style.display = "none";
    // to display header
    header1.style.display = "block";
    //to display questioanary div
    questioanary.style.display = "block";
  });
 
