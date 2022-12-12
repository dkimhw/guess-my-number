'use strict';


const mysteryNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (msg) => {
  document.querySelector('.message').textContent = msg;
}

const resetGame = () => {
  document.querySelector('.check').disabled = false;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  mysteryNumber = Math.trunc(Math.random() * 100) + 1;
}

const setEndGameStyle = (result) => {
  if (result === 'won') {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = mysteryNumber;
    document.querySelector('.highscore').textContent = Math.max(score, highscore);
  } else if (result === 'lost') {
    displayMessage('💥 You lost the game!');
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#FF5733';
  }
}

document.querySelector('.start').addEventListener('click', () => {
  score = 20;
  resetGame();
});

// document.querySelector('.number').textContent = mysteryNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  const gameScore = document.querySelector('.score');

  if (!guess) {
    displayMessage('🛑 No Number!');
  } else if (guess === mysteryNumber) {
    displayMessage('🥳 Correct Number!');
    setEndGameStyle('won');
  } else if (guess !== mysteryNumber) {
    if (score > 1) {
      let scoreMsg = guess < mysteryNumber ? '📉 Too Low!' : '📈 Too High!';
      score--;
      gameScore.textContent = score;
      displayMessage(scoreMsg);
    } else {
      score--;
      gameScore.textContent = score;
      setEndGameStyle('lost');
    }
  }
});
