'use strict';


const mysteryNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;

document.querySelector('.start').addEventListener('click', () => {
  score = 20;
  document.querySelector('.check').disabled = false;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  mysteryNumber = Math.trunc(Math.random() * 100) + 1;
});

// document.querySelector('.number').textContent = mysteryNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  } else if (guess === mysteryNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
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
    alert('You lost the game!');
    document.querySelector('.check').disabled = true;
  }

  console.log(score);
});
