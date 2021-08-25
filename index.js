// const welcome = () => {
//   document.querySelector(".onload__Welcome").getElementsByClassName.display = "block";
// }
// function load() {
//   document.querySelector(".onload__Welcome").style.display = "flex";
// }
const startBtn = document.querySelector(".onload__Welcome-btn");

const startBlackjackBtn = document.querySelector("#btnStart");

  startBtn.addEventListener("click", () => {
    document.querySelector(".onload__Welcome").style.display = "none";
    document.querySelector("#game-area").style.display = "flex"
  });

  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let deck = new Array();

  const createDeck = () => {
    deck = new Array();
    for (let index = 0; index < values.length; index++) {
      for (let element = 0; element < suits.length; element++) {
        let weight = parseInt(values[index]);
        if (values[index] == "J" || values[index] == "Q" || values[index] == "K")
        weight = 10;
        if (values[index] == "A")
        weight = 11;
        let card = {Value: values[index], Suit: suits[element], Weight: weight};
      }
    }
  }

  const shuffle = () => {
    for (let index = 0; index < 1000; index++) {
      let position1 = Math.floor((Math.random() * deck.length));
      let position2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[position1];
      deck[position1] = deck[position2];
      deck[position2] = tmp;
    }
  }

  let players = new Array();
  const createPlayers = (num) =>{
    players = new Array();
    for (let index = 1; index <= num; index++) {
      let hand = new Array();
      let player = {Name: 'Player ' + index, ID: index, Points: 0, Hand: hand};
      players.push(player);
    }
  }

  const createPlayersUI = () =>{
    document.querySelector(".players").innerHTML = "";
    for (let index = 0; index < players.length; index++) {
      let div_player = document.createElement('div');
      let div_playerid = document.createElement('div');
      let div_hand = document.createElement('div');
      let div_points = document.createElement('div');
      div_points.className = 'points';
      div_points.id = 'points_' + i;
      div_player.id = 'player_' + i;
      div_player.className = 'player';
      div_hand.id = 'hand_' + i;

      div_playerid.innerHTML = players[i].ID;
      div_player.appendChild(div_playerid);
      div_player.appendChild(div_hand);
      div_player.appendChild(div_points);
      document.getElementById('players').appendChild(div_player);
    }
  }


  startBlackjackBtn.addEventListener("click", () => {
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display="none";
    // deal 2 cards to every player object
    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(2);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');
  })