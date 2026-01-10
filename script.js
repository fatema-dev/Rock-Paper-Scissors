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
var round = 0;

function playRound(humanChoice, computerChoice){
    let player = humanChoice.toLowerCase();
    let playerWins = true;
    let computerWins = false;
    if(player === computerChoice){
       console.log("Tie");
    }else if(player === "rock" && computerChoice ==="scissors"){
        console.log("You win! Rock beats Scissors!");
    }else if(player === "paper" && computerChoice==="rock"){
        console.log("You win! Paper beats Rock!");
    }else if(player === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper!");
    }else{
        console.log("You lose! Paper beats Rock!");
        playerWins= false;
        computerWins= true;
    }

    if(computerWins){
        computerScore++;
    }else{
        humanScore++;
    }
    round++;
    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);