'use strict';

const rollDiceButton = document.querySelector('.btn--roll');
const holdCurrentScoreButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');
const winnerMessage0 = document.querySelector('.winner--0');
const winnerMessage1 = document.querySelector('.winner--1');
const diceImage = document.querySelector('.dice');
let scores;
let playerActive;
let isOver;

const init = () => {
  playerActive = 0;
  isOver = false;
  scores = [0, 0];
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
  winnerMessage0.classList.add('hidden');
  winnerMessage1.classList.add('hidden');
  diceImage.classList.remove('hidden');
  scoreElement0.textContent = scores[0];
  scoreElement1.textContent = scores[1];
}

const switchPlayer = () => {
  playerActive = playerActive === 0 ? 1 : 0;
  sectionPlayer0.classList.toggle('player--active');
  sectionPlayer1.classList.toggle('player--active');
}

init();

rollDiceButton.addEventListener('click', function() {
  if (!isOver) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    const currentScoreElement = document.querySelector(`#current--${playerActive}`);
    let currentScore = Number(currentScoreElement.textContent);

    diceImage.src =  `dice-${diceNumber}.png`;

    if (diceNumber === 1) {
      currentScore = 0;
      switchPlayer();
    } else {
      currentScore = currentScore + diceNumber;
    }
    currentScoreElement.textContent = currentScore;
  }
});

holdCurrentScoreButton.addEventListener('click', function() {
  if (!isOver) {
    const currentScoreElement = document.querySelector(`#current--${playerActive}`);
    scores[playerActive] = scores[playerActive] + Number(currentScoreElement.textContent);
    currentScoreElement.textContent = 0;
    scoreElement0.textContent = scores[0];
    scoreElement1.textContent = scores[1];
    if (scores[playerActive] >= 100) {
      const winner = document.querySelector(`.player--${playerActive}`);
      const winnerMessage = document.querySelector(`.winner--${playerActive}`);
      winner.classList.toggle('player--winner');
      winnerMessage.classList.remove('hidden');
      diceImage.classList.add('hidden');
      isOver = true;
    } else {
      switchPlayer();
    }
  }
});

newGameButton.addEventListener('click', function() {
  init();
});