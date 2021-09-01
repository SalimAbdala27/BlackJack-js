const startBtn = document.querySelector(".onload__Welcome-btn");
const startBlackjackBtn = document.querySelector("#btnStart");
const shuffleBtn = document.querySelector("#shuffle")
const hitMe = document.querySelector("#hitMe")
const check = document.querySelector("#checkbox")
const endGame = document.querySelector("#endGame")
const Player1 = document.querySelector(".Player1")
const Player2 = document.querySelector(".Player2")

  startBtn.addEventListener("click", () => {
    document.querySelector(".onload__Welcome").style.display = "none";
    document.querySelector("#game-area").style.display = "flex"
  });

  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let deck = [];
  const deckOfCard = () =>{
  for (let index = 0; index < suits.length; index++) {
    for (let element = 0; element < values.length; element++) {
      let card = {Value: values[element], Suit: suits[index]}
      deck.push(card)}}
}
deckOfCard();
console.log(deck);
// console.log(deckOfCard(deck));
// const unshuffledDeck = deckOfCard(deck);

const shuffledDeck = () => {
  for (let index = 0; index < deck.length - 1; index++) {
    let random = Math.floor(Math.random() * index);
    let temp = deck[index];
    deck[index] = deck[random];
    deck[random] = temp;
  }
}

shuffledDeck()
// const shuffled = shuffledDeck();

// for (let index = 0; index < 10; index++) {
//   console.log(`${deck[index].Value} of ${deck[index].Suit}`)
// }

shuffleBtn.addEventListener("click", () => {
  document.querySelector(".deck").classList.remove("testOne");
  document.querySelector(".deck").innerHTML = "";
  for (let index = 0; index < deck.length; index++) {
    let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[index].Suit;
    // suit.innerHTML = deck[index].Suit
		value.innerHTML = deck[index].Value;
		card.appendChild(value);
		card.appendChild(suit);
    document.querySelector(".deck").appendChild(card);
    document.querySelector(".Player1").innerHTML = "";
    document.querySelector(".Player2").innerHTML = "";
    document.querySelector(".players").style.display = "none";
  }
  shuffledDeck()
})


startBlackjackBtn.addEventListener("click", () =>{
  document.querySelector(".deck").classList.add("testOne");
  document.querySelector(".players").style.display = "flex";
  const firstTwo = document.querySelectorAll(".card")
  document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML +firstTwo[1].outerHTML;
  document.querySelector(".players").innerHTML = firstTwo[2].outerHTML +firstTwo[3].outerHTML;
  // const deckValues = parseInt(firstTwo)
  // // console.log(deckValues[0].value + deckValues[1].value)
  // console.log(deckValues[0]);
  // console.log(parseInt(firstTwo.values[0]))
  
  
  for (let index = 0; index < firstTwo.length; index++) {
    switch(firstTwo[index].children[0].innerHTML){
      case "J":
        firstTwo[index].children[0].innerHTML = 10;
        break
      case "Q":
        firstTwo[index].children[0].innerHTML = 10;
        break
      case "K":
        firstTwo[index].children[0].innerHTML = 10;
        break
      case "A":
        firstTwo[index].children[0].innerHTML = 11;
    }
  }
  const addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML)
  const addedPlayerTwo = parseInt(firstTwo[2].children[0].innerHTML) + parseInt(firstTwo[3].children[0].innerHTML)
  // if (firstTwo[0].children[0].innerHTML === "J" || firstTwo[0].children[0].innerHTML === "Q" || firstTwo[0].children[0].innerHTML === "K") {
  //   firstTwo[0].children[0].innerHTML = 10;
  // }
  
  document.querySelector(".Player1").innerHTML = `Player One = ${addedPlayerOne}`
  document.querySelector(".Player2").innerHTML = `Player Two = ${addedPlayerTwo}`
  // console.log(addedPlayerOne)
})


endGame.addEventListener("click", () => {
  let regex  = /[\d]/g;
  let Player1 = document.querySelector(".Player1").innerHTML;
  let grabbedNumberOne = Player1.match(regex)
  // console.log(parseInt( grabbedNumberOne.join("")))
  let Player2 = document.querySelector(".Player2").innerHTML;
  let grabbedNumberTwo = Player2.match(regex)
  // console.log(parseInt( grabbedNumberTwo.join("")))
  if (21 - parseInt( grabbedNumberOne.join(""))  < 21 - parseInt( grabbedNumberTwo.join(""))) {
    document.querySelector("#title").innerHTML = "Player 1 WINS"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log("Player 1 wins");
  } else if (21 - parseInt( grabbedNumberTwo.join(""))  < 21 - parseInt( grabbedNumberOne.join(""))) {
    document.querySelector("#title").innerHTML = "Player 2 WINS"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log("Player 2 wins");
  } else {
    document.querySelector("#title").innerHTML = "Its a draw"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log("Its a draw")
  }
})

// 21 - parseInt( grabbedNumberOne.join(""))  < 21 - parseInt( grabbedNumberTwo.join(""))
// hitMe.addEventListener("click", () => {
//   const firstTwo = document.querySelectorAll(".card")
//   document.querySelector(".deck").innerHTML += firstTwo[5].outerHTML +firstTwo[6].outerHTML;
// })


