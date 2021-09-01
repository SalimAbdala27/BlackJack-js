"use strict";

var startBtn = document.querySelector(".onload__Welcome-btn");
var startBlackjackBtn = document.querySelector("#btnStart");
var shuffleBtn = document.querySelector("#shuffle");
var hitMe = document.querySelector("#hitMe");
var check = document.querySelector("#checkbox");
var endGame = document.querySelector("#endGame");
var Player1 = document.querySelector(".Player1");
var Player2 = document.querySelector(".Player2");
startBtn.addEventListener("click", function () {
  document.querySelector(".onload__Welcome").style.display = "none";
  document.querySelector("#game-area").style.display = "flex";
});
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];

var deckOfCard = function deckOfCard() {
  for (var index = 0; index < suits.length; index++) {
    for (var element = 0; element < values.length; element++) {
      var card = {
        Value: values[element],
        Suit: suits[index]
      };
      deck.push(card);
    }
  }
};

deckOfCard();
console.log(deck); // console.log(deckOfCard(deck));
// const unshuffledDeck = deckOfCard(deck);

var shuffledDeck = function shuffledDeck() {
  for (var index = 0; index < deck.length - 1; index++) {
    var random = Math.floor(Math.random() * index);
    var temp = deck[index];
    deck[index] = deck[random];
    deck[random] = temp;
  }
};

shuffledDeck(); // const shuffled = shuffledDeck();
// for (let index = 0; index < 10; index++) {
//   console.log(`${deck[index].Value} of ${deck[index].Suit}`)
// }

shuffleBtn.addEventListener("click", function () {
  document.querySelector(".deck").innerHTML = "";

  for (var index = 0; index < deck.length; index++) {
    document.querySelector(".deck").classList.toggle(".deck");
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[index].Suit; // suit.innerHTML = deck[index].Suit

    value.innerHTML = deck[index].Value;
    card.appendChild(value);
    card.appendChild(suit);
    document.querySelector(".deck").appendChild(card);
    document.querySelector(".Player1").innerHTML = "";
    document.querySelector(".Player2").innerHTML = "";
    document.querySelector(".players").style.display = "none";
  }

  shuffledDeck();
});
startBlackjackBtn.addEventListener("click", function () {
  document.querySelector(".players").style.display = "flex";
  var firstTwo = document.querySelectorAll(".card");
  document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML + firstTwo[1].outerHTML;
  document.querySelector(".players").innerHTML = firstTwo[2].outerHTML + firstTwo[3].outerHTML; // const deckValues = parseInt(firstTwo)
  // // console.log(deckValues[0].value + deckValues[1].value)
  // console.log(deckValues[0]);
  // console.log(parseInt(firstTwo.values[0]))

  for (var index = 0; index < firstTwo.length; index++) {
    switch (firstTwo[index].children[0].innerHTML) {
      case "J":
        firstTwo[index].children[0].innerHTML = 10;
        break;

      case "Q":
        firstTwo[index].children[0].innerHTML = 10;
        break;

      case "K":
        firstTwo[index].children[0].innerHTML = 10;
        break;

      case "A":
        firstTwo[index].children[0].innerHTML = 11;
    }
  }

  var addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML);
  var addedPlayerTwo = parseInt(firstTwo[2].children[0].innerHTML) + parseInt(firstTwo[3].children[0].innerHTML); // if (firstTwo[0].children[0].innerHTML === "J" || firstTwo[0].children[0].innerHTML === "Q" || firstTwo[0].children[0].innerHTML === "K") {
  //   firstTwo[0].children[0].innerHTML = 10;
  // }

  document.querySelector(".Player1").innerHTML = "Player One = ".concat(addedPlayerOne);
  document.querySelector(".Player2").innerHTML = "Player Two = ".concat(addedPlayerTwo); // console.log(addedPlayerOne)
});
endGame.addEventListener("click", function () {
  var regex = /[\d]/g;
  var Player1 = document.querySelector(".Player1").innerHTML;
  var grabbedNumberOne = Player1.match(regex); // console.log(parseInt( grabbedNumberOne.join("")))

  var Player2 = document.querySelector(".Player2").innerHTML;
  var grabbedNumberTwo = Player2.match(regex); // console.log(parseInt( grabbedNumberTwo.join("")))

  if (21 - parseInt(grabbedNumberOne.join("")) < 21 - parseInt(grabbedNumberTwo.join(""))) {
    console.log("Player 1 wins");
  } else if (21 - parseInt(grabbedNumberTwo.join("")) < 21 - parseInt(grabbedNumberOne.join(""))) {
    console.log("Player 2 wins");
  } else {
    console.log("Its a draw");
  }
}); // 21 - parseInt( grabbedNumberOne.join(""))  < 21 - parseInt( grabbedNumberTwo.join(""))
// hitMe.addEventListener("click", () => {
//   const firstTwo = document.querySelectorAll(".card")
//   document.querySelector(".deck").innerHTML += firstTwo[5].outerHTML +firstTwo[6].outerHTML;
// })