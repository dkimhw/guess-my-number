'use strict';


const mysteryNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.start').addEventListener('click', () => {
  score = 20;
  document.querySelector('.check').disabled = false;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  mysteryNumber = Math.trunc(Math.random() * 100) + 1;
});

// document.querySelector('.number').textContent = mysteryNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  } else if (guess === mysteryNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    // When player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = Math.max(score, highscore);

  } else if (guess > mysteryNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < mysteryNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!'
    document.querySelector('.check').disabled = true;

    // When player loses
    document.querySelector('body').style.backgroundColor = '#FF5733';
  }
});
