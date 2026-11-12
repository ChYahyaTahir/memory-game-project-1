// =========================================
// easy.js - the Easy level game
// Click two cards:
//   - same symbol  -> they stay open (a match)
//   - different    -> they flip back after 1 second
// Find all pairs to win.
// =========================================

const board = document.getElementById("game-board");
const cards = document.querySelectorAll("#game-board .card");
const movesText = document.getElementById("moves");
const pairsText = document.getElementById("pairs-found");
const winMessage = document.getElementById("win-message");
const finalMoves = document.getElementById("final-moves");

let firstCard = null;    // the first card clicked in this turn
let secondCard = null;   // the second card clicked in this turn
let lockBoard = false;   // true while two wrong cards are flipping back
let moves = 0;
let pairsFound = 0;
const totalPairs = cards.length / 2;


// ---------- Shuffle the cards ----------
// Move the cards to the end of the board in a random order,
// so they are in different places every time the page loads.
for (let i = 0; i < cards.length; i++) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  board.appendChild(cards[randomIndex]);
}


// ---------- Listen for clicks on every card ----------
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}


// ---------- Runs when a card is clicked ----------
function flipCard() {
  // Ignore the click if:
  // - two wrong cards are still flipping back
  // - the same card is clicked twice
  // - the card is already matched
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  if (this.classList.contains("matched")) {
    return;
  }

  // Show the card
  this.classList.add("flipped");

  // Is this the first card of the turn?
  if (firstCard === null) {
    firstCard = this;
    return;
  }

  // Otherwise it is the second card
  secondCard = this;

  moves = moves + 1;
  movesText.textContent = moves;

  checkForMatch();
}


// ---------- Compare the two open cards ----------
function checkForMatch() {
  const firstSymbol = firstCard.querySelector(".card-front").textContent;
  const secondSymbol = secondCard.querySelector(".card-front").textContent;

  if (firstSymbol === secondSymbol) {
    // It's a match! Keep both cards open.
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    pairsFound = pairsFound + 1;
    pairsText.textContent = pairsFound;

    resetTurn();

    // Did the player find every pair?
    if (pairsFound === totalPairs) {
      setTimeout(showWinMessage, 600);
    }
  } else {
    // Not a match. Lock the board so no other card can be
    // clicked, then flip both cards back after 1 second.
    lockBoard = true;

    setTimeout(function () {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 1000);
  }
}


// ---------- Get ready for the next turn ----------
function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}


// ---------- Show the "You Win!" box ----------
function showWinMessage() {
  finalMoves.textContent = moves;
  winMessage.classList.add("show");
}
