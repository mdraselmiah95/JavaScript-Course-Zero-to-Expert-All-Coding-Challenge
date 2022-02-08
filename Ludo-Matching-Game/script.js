"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// console.log(
//   player0El,
//   player1El,
//   score0El,
//   score1El,
//   current0El,
//   current1El,
//   diceEl,
//   btnNew,
//   btnRoll.btnHold
// );

// Starting conditions

scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //change later
  } else {
    // Switch to next player
  }
});
