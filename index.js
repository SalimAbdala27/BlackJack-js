const startBtn = document.querySelector(".onload__Welcome-btn");

const startBlackjackBtn = document.querySelector("#btnStart");

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
shuffledDeck();
// const shuffled = shuffledDeck();

for (let index = 0; index < 10; index++) {
  console.log(`${deck[index].Value} of ${deck[index].Suit}`)
}