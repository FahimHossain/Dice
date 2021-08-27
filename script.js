var x = Math.random()*6;
x = Math.floor(x)+1;
console.log(x);

var y = (Math.random())*6;
y = Math.floor(y)+1;
console.log(y);

var randomDiceImg = "images/dice"+(x)+".png";
var randomDiceImg2 = "images/dice"+(y)+".png";

var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", randomDiceImg);

var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", randomDiceImg2);

if (x>y){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (y>x){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}