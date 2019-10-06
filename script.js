var timeEl = document.querySelector("#counter");
var questionsEl = document.querySelector(".questions-rendered");

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

function displayQuestions() {
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");
   
    questionText.textContent = question.title; 
    questionDiv.appendChild(questionText)

    function nextQuestion(questionNumber) {
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
    }
        // for each answer, all of the below steps happen:

        // creating a new button element and store it in the 'answer' variable
       
        // adding a click event for the newly-created button

            // YOUR LOGIC GOES HERE:
                // 1) get the answer the user clicked on and compare it to the correct answer
                //adding a click event for the newly-created button
               
                
                // 2) likely add to correct/incorrect counters
                // 3) increment 'questionIndex', to change pointer to next question
                // 4) call 'displayQuestions' function, which will then render the next question
                // 5) potentially reset timer? (or is timer for all questions?)
                // 6) consider moving this functionality into a separate function, maybe?
        
        // then adding the new button (containing the answer text) to the wrapper div
      
    }

    // by the time you reach this point in the code, you now have a question wrapper div
    // ('questionDiv') that contains a paragraph containing the question, and four buttons
    // containing the answers...

    // the next step is putting the wrapper div on the page!
    questionsEl.appendChild(questionDiv);

