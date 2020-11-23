
//Start fuction
var doneQuiz = false
const startButton = document.getElementById("start-btn")
const finishButton = document.getElementById("finish-btn")
const questionContainer = document.getElementById("questionBox")
const usernameElement = document.getElementById("username")
const gameDone = document.getElementById("gameOver")

startButton.addEventListener('click', startQuiz)

function startQuiz(){
    console.log("starting")
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
     
           
    // Countdown fuction
    const timeleft = 30;
    let time = timeleft * 1;
    const countDown = document.getElementById('timer');
    
    
    setInterval(startCountDown, 1000);
    
    
        function startCountDown(){
            let seconds = time % 60;
            seconds = seconds<10? "0"+seconds:seconds;
            countDown.innerHTML = `00:${seconds}`;
            
            time--;

            if(time <= 0){
                console.log("Time is up");
                clearInterval(time)
                countDown.innerHTML = "00:00"
                questionContainer.classList.add("hide")
                usernameElement.classList.remove("hide")
            }

            if(doneQuiz){
                console.log("Quiz is done");
                clearInterval(time)
                countDown.innerHTML = "00:00"
                countDown.classList.add("hide")
                questionContainer.classList.add("hide")
                usernameElement.classList.remove("hide")
            }
                 
        }

}

// selectAnswer Fuction and Scoring
var gameScore = 0
var questionIndex = 1
var correct = document.querySelector('answer')
var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')
var questionContainer3 = document.querySelector('.question3')
var questionContainer4 = document.querySelector('.question4')
var questionContainer5 = document.querySelector('.question5')

questionContainer1.addEventListener('click', checkAnswer)

function checkAnswer(event) {
        console.log(event.target.classList)
    if( event.target.classList.contains('answer') ){
        console.log('You are correct')
        gameScore++
        
    } else {
        console.log('Wrong')
        
    }

    if(event.target.classList.contains("lastQuestion")){
        doneQuiz = true
        
    }

 
    document.querySelector(`.question${questionIndex}`).classList.add('hide')
    document.querySelector(`.question${questionIndex}`).removeEventListener('click', checkAnswer )
    questionIndex++
    if(questionIndex <=5){
        document.querySelector(`.question${questionIndex}`).classList.remove('hide')
        document.querySelector(`.question${questionIndex}`).addEventListener('click', checkAnswer)
        console.log("Question is Done");
        
    }
    
    
}



// correctTotal.innerHTML = gameScore

const showScore = document.querySelector(".submit")
const userElement = document.getElementById("nameText")
const scoreElement = document.querySelector(".gameScore")
showScore.addEventListener("click", result)

function result(event){
    event.preventDefault();
    var user = userElement.value;
    console.log(user);
    document.querySelector(".result").classList.remove('hide')
    scoreElement.innerHTML = `${user}: ${gameScore}`
}