var timeEl = document.querySelector("#counter");
var questionsEl = document.querySelector("#question-rendered");

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
    setTime();
    startBtn.style.display = 'none';
    displayQuestions();
})

var questionIndex = 0;

/*function displayQuestions() {
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");
   
    questionText.textContent = questions.title; 
    questionDiv.appendChild(questionText);

    for (i=0; i < question.choices.length; i++) {
        var answer = document.createElement("button");
        answer.textContent = question.choices[i];
        answer.setAttribute("class", "answer");
        answer.addEventListener("click", function() {
            alert("clicked on an answer");
        }
        )
    }
    questionsDiv.appendChild(answer);
} */


function displayQuestions(i) {
    questionsEl.textContent = questions[i].title;
    choice1.textContent = questions[i].choices[0];
    choice2.textContent = questions[i].choices[1];
    choice3.textContent = questions[i].choices[2];
    choice4.textContent = questions[i].choices[3];

}
console.log(questions);
     /*for (i=0; i < question.choices.length; i++) {
        var answer = document.createElement("button");
        answer.textContent = question.choices[i];
        answer.setAttribute("class", "answer");
        answer.addEventListener("click", function() {
            alert("clicked on an answer");
        }
        )
    }
    questionsDiv.appendChild(answer);*/




/*let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;



    /*function nextQuestion(questionNumber) {
        var option = document.createElement("button");
        option.textContent = question.choices[i];
        option.setAttribute("class", "answer");
        option.addEventListener("click", function(e) {
            alert("clicked on an option");
            var optionClicked = (e.target.innerHTML);
            if (optionClicked === questions[questionIndex].answer)
           { 
               alert("correct");
           }
           {
               alert("incorrect");
           }
        })

        questionDiv.appendChild(answer);
    } */
        

