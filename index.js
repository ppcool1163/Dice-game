// document.querySelector('h1').textContent='Chal be chutiye'

var randomNumber1= Math.floor(Math.random()*6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


// if (randonNumber1==1){
//   document.querySelector('.img1').setAttribute('src', "images/dice1.png")
// }
// else if (randonNumber1==2){
//   document.querySelector('.img1').setAttribute('src', "images/dice2.png")
// }
// else if (randonNumber1==3){
//   document.querySelector('.img1').setAttribute('src', "images/dice3.png")
// }
// else if (randonNumber1==4){
//   document.querySelector('.img1').setAttribute('src', "images/dice4.png")
// }
// else if (randonNumber1==5){
//   document.querySelector('.img1').setAttribute('src', "images/dice5.png")
// }
// else {
//   document.querySelector('.img1').setAttribute('src', "images/dice6.png")
// }

// switch (randonNumber1){
//   case 1:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice1.png");
//
//   case 2:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice2.png");
//
//   case 3:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice3.png");
//
//   case 4:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice4.png");
//
//   case 5:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice5.png");
//
//   case 6:
//   document.querySelectorAll('img')[0].setAttribute('src', "images/dice6.png");
//
// }
