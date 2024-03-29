var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2 = (Math.floor(Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src","/Dicee+Challenge+-+Starting+Files/images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","/Dicee+Challenge+-+Starting+Files/images/dice"+randomNumber2+".png");



if (randomNumber1>randomNumber2){
    var winner="Player One Wins!"
} else if (randomNumber1<randomNumber2){
    var winner="Player Two Wins!"
} else {
    var winner="Draw!"
};

document.querySelector("h1").innerHTML=winner;

