'use strict';

function App() {

  let number = Math.floor(Math.random() * 3)
  console.log(number);

  let Cards = ["/10_C.png", "/K_H.png", "/7_C.png"]

  console.log(Cards[number]);

  var card = document.getElementById("card")

  var cacheBustingString = card.getAttribute("data-cache-busting");

  card.src = "/Imgs/Cards/${Cards[number]}.${cacheBustingString}.png";

}

App();
