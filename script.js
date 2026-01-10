function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3); //this will generate either 0,1 or 2
	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	} else {
		throw new Error("Undefined Behaviour");
	}
}
try {
	console.log("Computer Choose: " + getComputerChoice());
} catch (e) {
	console.log("An Error Occured: " + e.message);
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
		throw new Error("Undefined Behaviour");
	}
}
try {
	console.log("Your Choice: " + getHumanChoice());
} catch (e) {
	console.log("An Error Occured: " + e.message);
}

