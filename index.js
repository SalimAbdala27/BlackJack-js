const startBtn = document.querySelector(".onload__Welcome-btn");
const startBlackjackBtn = document.querySelector("#btnStart");
const shuffleBtn = document.querySelector("#shuffle")

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
  }
  shuffledDeck()
})


startBlackjackBtn.addEventListener("click", () =>{
  const firstTwo = document.querySelectorAll(".card")
  document.querySelector(".deck").innerHTML = firstTwo[0].outerHTML +firstTwo[1].outerHTML;
  document.querySelector(".players").innerHTML = firstTwo[2].outerHTML +firstTwo[3].outerHTML;
  // const deckValues = parseInt(firstTwo)
  // // console.log(deckValues[0].value + deckValues[1].value)
  // console.log(deckValues[0]);
  console.log(firstTwo[0])
})
