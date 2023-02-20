function adduser(){
var player1name=document.getElementById("player1_name_input").value;
var player2name=document.getElementById("player2_name_input").value;
localStorage.setItem("adduser",player1name);
localStorage.setItem("adduser",player2name);
window.location="gamepage.html";
}