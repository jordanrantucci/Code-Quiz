var body = document.body // setting the body to a variable

var startButton = document.getElementById("start")
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";



function questionOne(){
document.getElementById("question-title").innerHTML = "Question 1: What is an array?";
document.getElementById("choices").innerHTML = (listEl.appendChild(li1), listEl.appendChild(li2), listEl.appendChild(li3), listEl.appendChild(li4))
}




startButton.addEventListener("click", questionOne);