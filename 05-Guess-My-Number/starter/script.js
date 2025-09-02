'use strict';

let randomNumberInteger = Math.trunc(Math.random() * 21);
let scoreInteger = 20;
let highscore = 0;
console.log(`Secret: ${randomNumberInteger}`);

const checkUpdate = () => {
  const guessNumberText = document.querySelector('.guess').value;
  const guessNumberInteger = Number(guessNumberText);
  const isRightNumber = guessNumberInteger === randomNumberInteger;
  const isLowerNumber = guessNumberInteger < randomNumberInteger;
  const isHigherNumber = guessNumberInteger > randomNumberInteger;
  const hasWon = document.querySelector('.message').textContent === '🎉 Correct Number!';
  let message = '😔 You lost the game!';

  if (guessNumberText && !isRightNumber && scoreInteger > 0 && !hasWon) {
    scoreInteger--;
  }

  const hasLost = scoreInteger === 0;
  const isOver = hasLost || hasWon;

  if (!guessNumberText && !isOver){
    message = '⛔️ No Number!';
  } else if (isLowerNumber && !isOver){
    message = '📉 Too low!';
  } else if (isHigherNumber && !isOver){
    message = '📈 Too high!';
  } else if (!isOver || hasWon) {
    message = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumberInteger;
    if (scoreInteger > highscore) {
      highscore = scoreInteger;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = scoreInteger;

}

const restartUpdate = () => {
  scoreInteger = 20;
  randomNumberInteger = Math.trunc(Math.random() * 21);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = scoreInteger;
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.btn.check').addEventListener('click', checkUpdate);
document.querySelector('.btn.again').addEventListener('click', restartUpdate);
