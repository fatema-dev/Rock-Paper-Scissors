function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3); //this will generate either 0,1 or 2
	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	} else {
		throw new Error("Undefined Behaviour.");
	}
}

function getHumanChoice() {
	let choice = prompt("Enter your choice (rock, paper or scissors): ");
	if (choice.toLowerCase() === "rock") {
		return "rock";
	} else if (choice.toLowerCase() === "paper") {
		return "paper";
	} else if (choice.toLowerCase() === "scissors") {
		return "scissors";
	} else {
		throw new Error("Input is Invalid. Please try again.");
	}
}

var humanScore = 0;
var computerScore = 0;
var round = 1;
const game = document.querySelector(".gameplay");
const rounds = document.createElement("h3");
const result = document.createElement("p");


const scoreboard = document.createElement("div");
const pScore = document.createElement("p");
const cScore = document.createElement("p");
const final = document.createElement("h4");


function playRound(humanChoice, computerChoice) {
	if (humanScore >= 5) {
		displayScoreboard();
		return;
	}

	const player = humanChoice.toLowerCase();
	const computer = computerChoice.toLowerCase();
	rounds.textContent = "Round: " + round;
	game.appendChild(rounds);
	round++;

	if (player === computer) {
		result.textContent = "Tie";
		game.appendChild(result);
		return; // Exit early on tie
	}

	// Player win conditions
	if (
		(player === "rock" && computer === "scissors") ||
		(player === "paper" && computer === "rock") ||
		(player === "scissors" && computer === "paper")
	) {
		result.textContent = `You win! ${player} beats ${computer}!`;
		humanScore++;
	} else {
		result.textContent = `You lose! ${computer} beats ${player}!`;
		computerScore++;
	}

	game.appendChild(result);
	return;
}

// Adding event listeners for buttons
const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () =>
	playRound("paper", getComputerChoice()),
);

const scissorsbtn = document.querySelector("#scisbtn");
scissorsbtn.addEventListener("click", () =>
	playRound("scissors", getComputerChoice()),
);

const resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", () => resetGame());

function displayScoreboard() {
	pScore.textContent = "Your Score is:			" + humanScore;
	cScore.textContent = "Your Opponent Score is:	" + computerScore;

	scoreboard.appendChild(pScore);
	scoreboard.appendChild(cScore);

	if (humanScore > computerScore) {
		final.textContent = "Congratulations! You won!!";
	} else {
		final.textContent = "You lost! Try again.";
	}
	scoreboard.appendChild(final);
	game.appendChild(scoreboard);
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	round = 1;

	scoreboard.removeChild(pScore);
	scoreboard.removeChild(cScore);
	scoreboard.removeChild(final);
	game.removeChild(scoreboard);

	game.removeChild(result);
	game.removeChild(rounds);
}
