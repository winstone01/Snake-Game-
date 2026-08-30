const playBoard = document.querySelector(".play-board");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX;
let foodY;
let snakeX = 5;
let snakeY = 10;
let snakeBody = [];
let velocityX = 0;
let velocityY = 0;
let setIntervalId;
let score = 0;
const HIGH_SCORE_KEY = "high-score";

let highScore = Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
highScoreEl.innerText = `High Score: ${highScore}`;

const changeFoodPosition = () => {
	foodX = Math.floor(Math.random() * 30) + 1;
	foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
	clearInterval(setIntervalId);
	alert("Game over ! Press ok to replay...");
	location.reload();
};

const changeDirection = (event) => {
	event.preventDefault();
	if (event.key === "ArrowUp" && velocityY != 1) {
		velocityX = 0;
		velocityY = -1;
	} else if (event.key === "ArrowDown" && velocityY != -1) {
		velocityX = 0;
		velocityY = 1;
	} else if (event.key === "ArrowLeft" && velocityX != 1) {
		velocityX = -1;
		velocityY = 0;
	} else if (event.key === "ArrowRight" && velocityX != -1) {
		velocityX = 1;
		velocityY = 0;
	}
};

controls.forEach((key) => {
	key.addEventListener("click", () => changeDirection({ key: key.dataset.key }));
});

const initGame = () => {
	if (gameOver) return handleGameOver();
	let htmlMarkup = `<div class='food' style='grid-area:${foodY}/${foodX}'></div>`;

	if (snakeX === foodX && snakeY === foodY) {
		changeFoodPosition();
		snakeBody.push([foodX, foodY]);
		score++;
		highScore = Math.max(score, highScore);
		localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
		scoreEl.innerText = `Score: ${score}`;
		highScoreEl.innerText = `High Score: ${highScore}`;
	}

	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = snakeBody[i - 1];
	}

	snakeBody[0] = [snakeX, snakeY];
	snakeX += velocityX;
	snakeY += velocityY;

	if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
		gameOver = true;
	}

	for (let i = 0; i < snakeBody.length; i++) {
		htmlMarkup += `<div class='head' style='grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}'></div>`;
		if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
			gameOver = true;
		}
	}
	playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setIntervalId = setInterval(initGame, 120);
document.addEventListener("keydown", changeDirection);
