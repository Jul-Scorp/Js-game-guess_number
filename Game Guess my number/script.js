'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; 
const Setmassage = function (message) {
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		Setmassage('⛔you didnt pass a number!');

	} else if (guess<=0) {
		Setmassage('👀 enter a number that is greater then zero!')
	}


	else if (guess === secretNumber) {
		Setmassage('🎉correct number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	} else if (guess !== secretNumber) {
		if (score > 1) {
			Setmassage(guess > secretNumber ?
			'🐱‍🏍Too High!' : '🤦‍♀️Too low!');
			score--;
			document.querySelector('.score').textContent = score;	
		} else {
			Setmassage('😕Game over!');
			document.querySelector('.score').textContent = 0;
		}
	}
});	
	
console.log(secretNumber);
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	document.querySelector('.score').textContent = score;
	secretNumber = secretNumber = Math.trunc(Math.random() * 20) + 1
	console.log(secretNumber);
	Setmassage('Start guessing...');
	document.querySelector('.guess').value = null;
	document.body.style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
});







