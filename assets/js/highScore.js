//vars to display html elements
var bodyEl = document.querySelector("#body");
var hScore1Div = document.getElementById("hScore1");
var ulEl = document.getElementById("dispHighscoreList");
hScore1Div.style.display = "flex";

// vars to get data from localStore and pass it to an array
var dataScores = localStorage.getItem("allScorses");
var allScores = JSON.parse(dataScores);

//function to display data got from localStorage
function displayResult(){
    ulEl.innerHTML = "";
    if(allScores) {
        for (var i=0; i < allScores.length; i++ )
        {
            var newLi = document.createElement("li");
            newLi.textContent = allScores[i];
            ulEl.append(newLi);
        }
    }else{
        ulEl.innerHTML = "Nothing to display";
    }
}

//call function on upload webpage event
displayResult();

// event listener to handle buttons
bodyEl.addEventListener("click", function (event) {
    var element = event.target;
    if(element.matches("#highscoreOutBtnGoBack")){
        goBackToQuiz(); 
    }
    if(element.matches("#highscoreOutBtnClear")){
        localStorage.clear();
        goBackToQuiz(); 
    }
});

// to link to the main page
function goBackToQuiz(){
    window.location="../../index.html";
}