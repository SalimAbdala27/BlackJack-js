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
      deck.push(card)
    }}
}
deckOfCard();


const shuffledDeck = () => {
  for (let index = 0; index < deck.length - 1; index++) {
    let random = Math.floor(Math.random() * index);
    let temp = deck[index];
    deck[index] = deck[random];
    deck[random] = temp;
  }
}

shuffledDeck()

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
  let addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML);
  const addedPlayerTwo = parseInt(firstTwo[2].children[0].innerHTML) + parseInt(firstTwo[3].children[0].innerHTML)
  if (addedPlayerOne < 17 && addedPlayerOne <21){
    document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML +firstTwo[1].outerHTML + firstTwo[4].outerHTML;
    addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML) + parseInt(firstTwo[4].children[0].innerHTML);
    if(addedPlayerOne < 17 && addedPlayerOne <21){
      document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML +firstTwo[1].outerHTML + firstTwo[4].outerHTML + firstTwo[5].outerHTML;
      addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML) + parseInt(firstTwo[4].children[0].innerHTML) + parseInt(firstTwo[5].children[0].innerHTML);
    }
    if(addedPlayerOne < 17 && addedPlayerOne <21){
      document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML +firstTwo[1].outerHTML + firstTwo[4].outerHTML + firstTwo[5].outerHTML + firstTwo[6].outerHTML;
      addedPlayerOne = parseInt(firstTwo[0].children[0].innerHTML) + parseInt(firstTwo[1].children[0].innerHTML) + parseInt(firstTwo[4].children[0].innerHTML) + parseInt(firstTwo[5].children[0].innerHTML) + parseInt(firstTwo[6].children[0].innerHTML);
    }
  }
  
  document.querySelector(".Player1").innerHTML = `Dealer's Score : ${addedPlayerOne}`
  document.querySelector(".Player2").innerHTML = `Your Score : ${addedPlayerTwo}`
})


endGame.addEventListener("click", () => {
  let regex  = /[\d]/g;
  let Player1 = document.querySelector(".Player1").innerHTML;
  let grabbedNumberOne = Player1.match(regex)
  let Player2 = document.querySelector(".Player2").innerHTML;
  let grabbedNumberTwo = Player2.match(regex)
  if (parseInt(grabbedNumberOne.join("")) > 21){
    document.querySelector("#title").innerHTML = "Dealer BUST"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log(grabbedNumberOne);
  } else if (parseInt(grabbedNumberTwo.join("")) > 21){
    document.querySelector("#title").innerHTML = "You BUST"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log("Player 1 wins");
  }else if (21 - parseInt( grabbedNumberOne.join(""))  < 21 - parseInt( grabbedNumberTwo.join(""))) {
    document.querySelector("#title").innerHTML = "Dealer WINS"
    document.querySelector("#title").classList.add("animate__animated");
    document.querySelector("#title").classList.add("animate__flash");
    console.log("Player 1 wins");
  } else if (21 - parseInt( grabbedNumberTwo.join(""))  < 21 - parseInt( grabbedNumberOne.join(""))) {
    document.querySelector("#title").innerHTML = "YOU WIN"
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

// hitMe.addEventListener("click", () => {
//   const firstTwo = document.querySelectorAll(".card")
//   document.querySelector(".deck").innerHTML += firstTwo[5].outerHTML +firstTwo[6].outerHTML;
// })