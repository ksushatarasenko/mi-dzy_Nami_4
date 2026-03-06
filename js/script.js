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