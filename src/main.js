'use strict';

function App() {

  let number = Math.floor(Math.random() * 3)
  console.log(number);

  let Cards = ["Imgs/Cards/10_C.png", "/Imgs/Cards/K_H.fb0b14b3.png", "/Imgs/Cards/7_C.fb0b14b3.png"]

  console.log(Cards[number]);

  var card = document.getElementById("card")

  card.src = Cards[number];

}

App();
