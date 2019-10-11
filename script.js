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
    setTime();
    startBtn.style.display = 'none';
    displayQuestions();
})

var questionIndex = 0;
var score = 0;

function displayQuestions() {
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var choiceButton1 = document.createElement("button");
    var choiceButton2 = document.createElement("button");
    var choiceButton3 = document.createElement("button");
    var choiceButton4 = document.createElement("button");
    var questionText = document.createElement("p");

    questionText.textContent = question.title;
    choiceButton1.textContent = question.choices[0];
    choiceButton2.textContent = question.choices[1];
    choiceButton3.textContent = question.choices[2];
    choiceButton4.textContent = question.choices[3];

    questionsEl.appendChild(questionText);
    buttonEl.appendChild(choiceButton1);
    buttonEl.appendChild(choiceButton2);
    buttonEl.appendChild(choiceButton3);
    buttonEl.appendChild(choiceButton4);

    buttonEl.addEventListener("click", function(e){
        var optionClicked = (e.target.innerHTML);
        if (optionClicked === questions[questionIndex].answer) {
            resultEl.textContent = ("Correct!");
            score += 5;
            localStorage.setItem("score", score);
            console.log(score);
            displayQuestions(questionIndex++);
           
        }
        else {
            resultEl.textContent = ("Wrong!");
            displayQuestions(questionIndex++);
        }
    })

    
}

//for (i = 0; i < questions.length; i++) {

//}


    /*for (i = 0; i < questions.choices.length; i++) {
        var option = document.createElement("button");
        option.textContent = question.choices[i];
        option.setAttribute("class", "answer");
        option.addEventListener("click", function(){
            alert("clicked on answer");
        })
    }
}

/*function nextQuestion() {
        var madeChoice = ""
        madeChoice.setAttribute("class", "answer");
        madeChoice.addEventListener("click", function(e) {
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
    }
        //questionDiv.appendChild(answer);

/*questionText.appendChild(questionDiv);
document.body.appendChild(questionText);
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

var questionIndex = 0;
var choicesIndex = 0;
var options = questions.choices[choicesIndex];

function displayQuestions() {
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    //var options = questions.choices[choicesIndex];
    var questionText = document.createElement("p");
   
    questionText.textContent = question.title; 
    questionsEl.appendChild(questionText);

for (var i=0; i < questions.length; i++) {
    var button = document.createElement("button");
    button.textContent = choices[i];
    options.setAttribute("class", "answer");
    options.addEventListener("click", function(){
        alert("clicked on an answer");
    })
}
   
}

    
     */
        

