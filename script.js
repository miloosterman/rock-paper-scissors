const choices = {
	Rock: {weakTo: "Paper", strongTo: "Scissors"},
	Paper: {weakTo: "Scissors", strongTo: "Rock"},
	Scissors: {weakTo: "Rock", strongTo: "Paper"}
};

const weapons = Object.keys(choices);
const gameStatus = document.querySelector(".game-status");

const btns = document.querySelectorAll("button");
for (let btn of btns) {
	btn.addEventListener("click", () => playRound(btn.textContent, computerPlay()));
}


// game();

function computerPlay(){
	return weapons[Math.floor(Math.random() * weapons.length)];
}

// function getPlayerSelection(){
// 	let playerSelection = prompt("Please enter your choice of rock/paper/scissors.");
// 	playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
// 	while(!weapons.includes(playerSelection)){
// 		playerSelection = prompt("That was not a valid selection, please choose from rock/paper/scissors");
// 		playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
// 	}
	
// 	return playerSelection;
// }

function playRound(playerSelection, computerSelection){
	gameStatus.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
	if (choices[playerSelection].strongTo === computerSelection){
		 gameStatus.textContent += `Winner! ${playerSelection} beats ${computerSelection}!`;
	} else if (choices[playerSelection].weakTo === computerSelection){
		gameStatus.textContent += `You lose... ${computerSelection} beats ${playerSelection}`;
	} else { gameStatus.textContent += `Tie game... No winner between ${playerSelection} and ${computerSelection}. How boring.`; }
}

function game(){
	// for (let i = 0; i < 5; i++){
		let computerSelection = computerPlay();
		let playerSelection = getPlayerSelection();
		let result = playRound(playerSelection, computerSelection);
		console.log(result);
	// }
}