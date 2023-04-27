const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;

	this.classList.add('flipped');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return;
	}

	secondCard = this;

	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.classList.add('matched');
	secondCard.classList.add('matched');

	resetBoard();
}

function unflipCards() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList
    }
}
