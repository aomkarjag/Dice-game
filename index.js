var player1=Math.round(Math.random()*6)+1;
var player2=Math.round(Math.random()*6)+1;

var randomimagesource1="images/" + "dice" + player1 + ".png";

var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src","randomimagesource1");


var randomimagesource2="images/" + "dice" + player2 + ".png";

document.querySelectorAll("img")[2].setAttribute("src","randomimagesource2");


if(player1 > player2){
  document.querySelector('h1').innerHTML="Player1 Wins";

else{
  document.querySelector('h1').innerHTML="Player2 Wins";
}
