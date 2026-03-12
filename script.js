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


function playRound(humanChoice, computerChoice) {
    const player = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    
    if (player === computer) {
        console.log("Tie!");
        return; // Exit early on tie
    }
    
    // Player win conditions
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log(`You win! ${player} beats ${computer}!`);
        humanScore++;
    } else {
        console.log(`You lose! ${computer} beats ${player}!`);
        computerScore++;
    }
	return;
}

// Adding event listeners for buttons
const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () => playRound("paper",getComputerChoice()));

const scissorsbtn = document.querySelector("#scisbtn");
scissorsbtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

