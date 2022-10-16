//Global variables
var overalScor = 0;
var initials = "MR";


// Header
// View Highscorse and Timer elements (div)
var body = document.body;
var header1 = document.createElement("div");
var highSc = document.createElement("p");
var timer = document.createElement("p");

highSc.textContent = "View Highscores";

body.appendChild(header1);
header1.appendChild(highSc);
header1.appendChild(timer);

var secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

setTime();
// Timer and events: 
// 1. Wrong answer slash
// 2. End time to get to All done section

// Questionary 5 questions (div):
// 1. questions h1
var question = document.createElement("h2");
question.textContent = "This is question # ";
body.appendChild(question);

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

question.appendChild(submitAnswer1);
question.appendChild(submitAnswer2);
question.appendChild(submitAnswer3);
question.appendChild(submitAnswer4);

// 3. Wrong/Correct indicator (p)
var answerLine = document.createElement("p");
var answerResult = submitAnswer4.textContent;
answerLine.textContent = answerResult;
body.appendChild(answerLine);


// All done section
// Final score indicator (p)
// Enter initials (form) + (submit button)
var allDone = document.createElement("h2");
var finalScoreIndicator = document.createElement("p");
var enterInitials = document.createElement("p");
var enterInitialsInput = document.createElement("input");
var initialsBtn = document.createElement("button");


allDone.textContent = "All done!";
finalScoreIndicator.textContent = "Your final score is: " + overalScor;
enterInitials.textContent = "Enter initials: ";
initialsBtn.textContent = "Submit";

body.appendChild(allDone);
body.appendChild(finalScoreIndicator);
body.appendChild(enterInitials);
enterInitials.appendChild(enterInitialsInput);
enterInitials.appendChild(initialsBtn);


// Highscorce section
// Read only (form) with initials and score displayed
// Go Back (button) to get back to All done section
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header
var highScoreH = document.createElement("h2");
var resultInput = document.createElement("input"); // what is element
var goBackBtn = document.createElement("button");
var clearScoreBtn = document.createElement("button");


highScoreH.textContent = "Highscores";
resultInput.textContent = initials + " - " + overalScor; // what 
goBackBtn.textContent = "Go Back";
clearScoreBtn.textContent = "Clear Highscores";

body.appendChild(highScoreH);
body.appendChild(resultInput);
body.appendChild(goBackBtn);
body.appendChild(clearScoreBtn);


// Highscorce section (Clear Highscore event)
// Go Back (button) to get to Codding Quiz Chalange
// Clear Higscore (button) to get to Codding Quiz Chalange
// Without header
var highScoreH1 = document.createElement("h2");
var goBackBtn1 = document.createElement("button");
var clearScoreBtn1 = document.createElement("button");


highScoreH1.textContent = "Highscores";
goBackBtn1.textContent = "Go Back";
clearScoreBtn1.textContent = "Clear Highscores";

body.appendChild(highScoreH1);
body.appendChild(goBackBtn1);
body.appendChild(clearScoreBtn1);



// Coding Quiz Chalange
// Intro paragraph (h3)
// Start quiz (button)
var codingChalange = document.createElement("h1");
var codingChalangeP = document.createElement("p");
var startQuizBtn = document.createElement("button");


codingChalange.textContent = "Coding Quiz Chalange";
codingChalangeP.textContent = "Try to answer the following code related questions whithin the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuizBtn.textContent = "Start Quiz";

body.appendChild(codingChalange);
body.appendChild(codingChalangeP);
body.appendChild(startQuizBtn);