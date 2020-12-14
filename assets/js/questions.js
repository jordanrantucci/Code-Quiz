var body = document.body // setting the body to a variable

var startButton = document.getElementById("start")
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


//li1.SetAttribute(correct, "correct")


li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";


startButton.addEventListener("click", questionOne);


function questionOne(){
document.getElementById("question-title").innerHTML = "Question 1: What is an array?";
document.getElementById("choices").appendChild(listEl);
document.getElementById("choices").appendChild(li1); //I would like to say correct for this response like adding an .onclick = correct
document.getElementById("choices").appendChild(li2);
document.getElementById("choices").appendChild(li3);
document.getElementById("choices").appendChild(li4);

}

//li1.SetAttribute("choices", "specialListItem")

li1.addEventListener("click", questionTwo)

function questionTwo(){
    document.getElementById("question-title").innerHTML = "Question 2: What is an array?";
    document.getElementById("choices").removeChild(listEl);
}

