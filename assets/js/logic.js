var startButton = document.getElementById("start")
var submitInitials = document.getElementById("submit") //defining variables
var timeDisplay = document.getElementById("time")
var endScreen = document.getElementById("end-screen")
var startScreen = document.getElementById("start-screen")
var questionScreen = document.getElementById("questions")
var timeRemaining = 5


function startQuiz(){
var quizTimer = setInterval(function(){
    timeDisplay.textContent = timeRemaining;
    timeRemaining --;
    if(timeRemaining === -1){
        clearInterval(quizTimer);
        endScreen.style.display="block";
    }else {
        startScreen.style.display="none";
        questionScreen.style.display="block";
    }
}, 1000);
}





startButton.addEventListener("click", startQuiz);





// I have to create a countdown timer that starts when startQuiz button is clicked
// The timer has to stat at 90 seconds and if a wrong answer is selected 10 seconds are subtracted
// I have to hide the Coding quiz challenge and paragraph when startQuiz button is clicked
// On click I have to have question 1 appear with a numbered list of choices 1,2,3,4 and have one be the correct response
// When correct response is clicked if it is correct move on the next question if it is wrong alert wrong try again and 10 seconds subtracted from timer
// 4 additional questions will have to be written 
// Once quiz is complete the end-screen will appear
// I will have to create a box that you can enter initials and it will store your score and initials
