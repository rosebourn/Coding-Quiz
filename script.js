var timeEl = document.querySelector("#counter");
var questionsEl = document.querySelector(".instructions");
var resultEl = document.querySelector(".result");
var highscoresEl = document.querySelector(".highscores"); 
var buttonEl = document.querySelector(".choices");

var secondsLeft = 75;
var timerInterval;

function setTime() 
{
    timerInterval = setInterval(function() 
    {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;
        if(secondsLeft === 0) 
        {
            clearInterval(timerInterval);
        }

    }, 1000);
} 

const startBtn = document.getElementById("start");
startBtn.addEventListener('click', function()
{
    console.log("start");
    setTime();
    startBtn.style.display = 'none';
    displayQuestions();
})

var questionIndex = 0;
var score = 0;

function displayQuestions() {
   while (buttonEl.firstChild) {
       buttonEl.firstChild.remove();
   }
    
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    console.log(questionIndex, question);
    var questionText = document.createElement("p");
    questionText.textContent = question.title;
    questionsEl.appendChild(questionText);

    for (var i = 0; i < question.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = question.choices[i];
        choiceButton.setAttribute("class", "response");
        choiceButton.onclick = response;
        buttonEl.appendChild(choiceButton);
    }

function response() {
   var optionClicked = (this.innerHTML);
   console.log("question", questionIndex, optionClicked);
   if (optionClicked === questions[questionIndex].answer) {
       resultEl.textContent = ("Correct!");
       score += 5;
       localStorage.setItem("score", score);
       console.log(score);
   }
   else {
       resultEl.textContent = ("Wrong!");
       secondsLeft -= 15;

   }
   if (questionIndex === questions.length - 1 || secondsLeft === 0) {
       results();

   }
   else {
       displayQuestions(questionIndex++);
   }
}
}

function results() {
   
}