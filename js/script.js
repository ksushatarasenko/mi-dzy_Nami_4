function showAnswer(){
document.getElementById("answer").style.display="block"
}

function quiz1(){
document.getElementById("quizResult1").innerHTML="❌ To jest litera"
}

function quiz2(){
document.getElementById("quizResult1").innerHTML="✅ Dobrze! To jest głoska"
}

function quiz3(){
document.getElementById("quizResult1").innerHTML="❌ To nie jest głoska"
}


function checkAnswer(word){

if(word === "igliwie"){
document.getElementById("quizResult2").innerHTML="✅ Dobrze! Igliwie to хвоя"
}
else{
document.getElementById("quizResult2").innerHTML="❌ Spróbuj jeszcze raz"
}

}

// Pytania
function toggleAnswer(id){

const answer = document.getElementById(id);

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

}

// Вопрос с вариантами ответов

document.querySelectorAll(".option").forEach(option => {

option.addEventListener("click", function(){

const question = this.parentElement;
const options = question.querySelectorAll(".option");

options.forEach(o => o.classList.remove("selected"));

this.classList.add("selected");

});

});


function checkQuiz(){

document.querySelectorAll(".question").forEach(question => {

const correct = question.dataset.correct;
const options = question.querySelectorAll(".option");

options.forEach(option => {

const letter = option.textContent.trim().charAt(0);

if(letter === correct){
option.classList.add("correct");
}

if(option.classList.contains("selected") && letter !== correct){
option.classList.add("wrong");
}

});

});

}