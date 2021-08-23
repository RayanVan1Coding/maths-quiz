var player_1= document.getElementById("name1").innerHTML;
var player_2=document.getElementById("name2").innerHTML;
function saveNames(){
    localStorage.setItem("Player 1 Name",player_1);
    localStorage.setItem("Player 2 Name", player_2);
    window.location="quiz.html";
}