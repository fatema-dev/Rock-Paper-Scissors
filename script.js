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
// try {
// 	console.log("Computer Choose: " + getComputerChoice());
// } catch (e) {
// 	console.log("An Error Occured: " + e.message);
// }

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
// try {
// 	console.log("Your Choice: " + getHumanChoice());
// } catch (e) {
// 	console.log("An Error Occured: " + e.message);
// }
    var humanScore = 0;
	var computerScore = 0;

function playGame() {

	function playRound(humanChoice, computerChoice) {
		let player = humanChoice.toLowerCase();
		let playerWins = true;
		let computerWins = false;
		if (player === computerChoice) {
			playerWins = false;
			console.log("Tie"); 
            computerScore++; humanScore++;
		} else if (player === "rock" && computerChoice === "scissors") {
			console.log("You win! Rock beats Scissors!");
		} else if (player === "paper" && computerChoice === "rock") {
			console.log("You win! Paper beats Rock!");
		} else if (player === "scissors" && computerChoice === "paper") {
			console.log("You win! Scissors beats Paper!");
		} else {
			console.log("You lose! Paper beats Rock!");
			playerWins = false;
			computerWins = true;
		}

		if (computerWins) {
			computerScore++;
		} else if (playerWins) {
			humanScore++;
		}
		return;
	}

	for (let round = 1; round < 6; round++) {
		let computerSelection = getComputerChoice();
		let humanSelection = getHumanChoice();
		try {
			console.log("Computer Choose: " + computerSelection);
			console.log("Your Choice: " + humanSelection);
		} catch (e) {
			console.log("An Error Occured: " + e.message);
		}
		playRound(humanSelection, computerSelection);
	}
}

playGame();
console.log(" ===== SCOREBOARD ===== ");
console.log("Your Score: "+humanScore +"/ 5");
console.log("Computer Score: "+computerScore +"/ 5");


// variables updating tests
// console.log(humanScore);
// console.log(computerScore);
// console.log(round);
