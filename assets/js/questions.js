var body = document.body // setting the body to a variable

var startButton = document.getElementById("start")
var endScreen = document.getElementById("end-screen")
var questionScreen = document.getElementById("questions")
var listEl1 = document.createElement("ol"); //list elements for questions 1-5
var listEl2 = document.createElement("ol");
var listEl3 = document.createElement("ol");
var listEl4 = document.createElement("ol");
var listEl5 = document.createElement("ol");

// var correctAudio = new Audio(src="./assets/sfx/correct.wav");  trying to figure out how to add audio

// var audio;
// function setupAudio(){
//     var audio = new Audio(src="./assets/sfx/correct.wav")
// }



//question 1 variables
var li1a = document.createElement("li");
var li2a = document.createElement("li");
var li3a = document.createElement("li");
var li4a = document.createElement("li");
//question 2 variables
var li1b = document.createElement("li");
var li2b = document.createElement("li");
var li3b = document.createElement("li");
var li4b = document.createElement("li");
//question 3 variables
var li1c = document.createElement("li");
var li2c = document.createElement("li");
var li3c = document.createElement("li");
var li4c = document.createElement("li");
//question 4 variables
var li1d = document.createElement("li");
var li2d = document.createElement("li");
var li3d = document.createElement("li");
var li4d = document.createElement("li");
//question 5 variables
var li1e = document.createElement("li");
var li2e = document.createElement("li");
var li3e = document.createElement("li");
var li4e = document.createElement("li");


//li1.SetAttribute(correct, "correct")

//Question 1 list elements
li1a.textContent = "A 'self-contained' module of code that accomplishes a specific task";
li2a.textContent = "A procedure in JavaScript that waits for an event to occur";
li3a.textContent = "A set of instructions for accomplishing a well-defined task";
li4a.textContent = "A division or a section in an HTML docuement";
//Question 2 list elements
li1b.textContent = "An attribute most used to point to a style in a style sheet and by JavaScript";
li2b.textContent = "A data structure consisting of a collection of Elements (values or variables)";
li3b.textContent = "A class that is responsible for encapsulating all visual elements on the page";
li4b.textContent = "A collection of properties, and a property is an association between a name (or key) and a value";
//Question 3 list elements
li1c.textContent = "Something used to store information to be referened and manipulated in a computer program";
li2c.textContent = "Data values that stay the same every time a program is executed";
li3c.textContent = "'Self-contained' modules of code that accomplish a specific task";
li4c.textContent = "A keyword added to a selector that specifies a special state of the selected elements";
//question 4 list elements
li1d.textContent = "Document Object Model is the data representation of the objects that comprise the structure and content of a document on the web";
li2d.textContent = "Cascading Style Sheet is a style sheet language used for describing the presentations of a document writen in a markup language";
li3d.textContent = "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser";
li4d.textContent = "Often abbreviated as JS, a programming language that conforms to the ECMAScript specification.";
//question 5 list elements
li1e.textContent = "Converts a JavaScript object or value to a JSON string";
li2e.textContent = "Returns the first element that matches a specified CSS selector in the document";
li3e.textContent = "The child node to be removed from the DOM";
li4e.textContent = "A method of the Node interface that allows you to add a node to the end of the list of child nodes of a specified parent node";


startButton.addEventListener("click", questionOne);
//question 1 function
function questionOne(){
    document.getElementById("question-title").innerHTML = "Question 1: What is an Algorithm?";
    document.getElementById("choices").appendChild(listEl1);
    listEl1.appendChild(li1a); 
    listEl1.appendChild(li2a);
    listEl1.appendChild(li3a);
    listEl1.appendChild(li4a);
}

li1a.addEventListener("click", wrongAnswer);
li2a.addEventListener("click", wrongAnswer);
li3a.addEventListener("click", questionTwo) //when question 1 choice 3 is clicked question 2 appears
li4a.addEventListener("click", wrongAnswer);

//question 2 function
function questionTwo(){
    document.getElementById("question-title").innerHTML = "Question 2: What is an array?";
    document.getElementById("choices").removeChild(listEl1); // this removes question 1
    document.getElementById("choices").appendChild(listEl2); // this allows question 2 to appear
    listEl2.appendChild(li1b);
    listEl2.appendChild(li2b);
    listEl2.appendChild(li3b);
    listEl2.appendChild(li4b);
}

li1b.addEventListener("click", wrongAnswer);
li2b.addEventListener("click", questionThree); // correct answer when question 2 choice 2 is clicked question 3 appears
li3b.addEventListener("click", wrongAnswer);
li4b.addEventListener("click", wrongAnswer);

function questionThree() {
    document.getElementById("question-title").innerHTML = "Question 3: What is a function?";
    document.getElementById("choices").removeChild(listEl2); // this removes question 2
    document.getElementById("choices").appendChild(listEl3); // question 3 appears
    listEl3.appendChild(li1c);
    listEl3.appendChild(li2c);
    listEl3.appendChild(li3c);
    listEl3.appendChild(li4c);
}

li1c.addEventListener("click", wrongAnswer);
li2c.addEventListener("click", wrongAnswer);
li3c.addEventListener("click", questionFour); //correct answer
li4c.addEventListener("click", wrongAnswer);

function questionFour() {
    document.getElementById("question-title").innerHTML = "Question 4: What does DOM mean?";
    document.getElementById("choices").removeChild(listEl3);
    document.getElementById("choices").appendChild(listEl4);
    listEl4.appendChild(li1d);
    listEl4.appendChild(li2d);
    listEl4.appendChild(li3d);
    listEl4.appendChild(li4d);
}


li1d.addEventListener("click", questionFive);//correct answer
li2d.addEventListener("click", wrongAnswer);
li3d.addEventListener("click", wrongAnswer);
li4d.addEventListener("click", wrongAnswer);


// add event listers for each choice
//create another function for correct choice per question set
//create a function correct question 5 which will add a point and go to next question or action
//create a function wrong question 5 which will stop interval subtract time 
//add event listeners for all questions per set that define the behavior 
function questionFive() {
    document.getElementById("question-title").innerHTML = "Question 5: What does appendChild do?";
    document.getElementById("choices").removeChild(listEl4);
    document.getElementById("choices").appendChild(listEl5);
    listEl5.appendChild(li1e);
    listEl5.appendChild(li2e);
    listEl5.appendChild(li3e);
    listEl5.appendChild(li4e);
}


li1e.addEventListener("click", wrongAnswer)
li2e.addEventListener("click", wrongAnswer)
li3e.addEventListener("click", wrongAnswer)
li4e.addEventListener("click",endQuiz)

function wrongAnswer() {
    console.log("Wrong! Try again")
    let wrongAnswer = document.createElement('p')
    wrongAnswer.className = "feedback"
    wrongAnswer.id = "wrongFourAlert"
    wrongAnswer.textContent = "Wrong! Try Again!"
    console.log(wrongAnswer)
    questionScreen.appendChild(wrongAnswer)
}




function endQuiz() {
    clearInterval(interval)
    endScreen.style.display = "block";
    questionScreen.style.display = "none";
}





