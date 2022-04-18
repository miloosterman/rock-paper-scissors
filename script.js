const choices = {
	Rock: {weakTo: "Paper", strongTo: "Scissors"},
	Paper: {weakTo: "Scissors", strongTo: "Rock"},
	Scissors: {weakTo: "Rock", strongTo: "Paper"}
};

const weapons = Object.keys(choices);
const gameStatus = document.querySelector(".game-status");
const roundCount = document.querySelector(".rounds");
const maxRounds = 5;

let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

const btns = document.querySelectorAll("button");
for (let btn of btns) {
	btn.addEventListener("click", () => playRound(btn.textContent, computerPlay()));
}

function computerPlay(){
	return weapons[Math.floor(Math.random() * weapons.length)];
}

function playRound(playerSelection, computerSelection){
	gameStatus.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
	if (choices[playerSelection].strongTo === computerSelection){
		 gameStatus.textContent += `Winner! ${playerSelection} beats ${computerSelection}!`;
		 playerWins++
	} else if (choices[playerSelection].weakTo === computerSelection){
			gameStatus.textContent += `You lose... ${computerSelection} beats ${playerSelection}`;
			computerWins++;
	} else { gameStatus.textContent += `Tie game... No winner between ${playerSelection} and ${computerSelection}. How boring.`; }
	roundCount.textContent = `Player wins = ${playerWins}, Computer wins = ${computerWins}`;
	if (computerWins === maxRounds || playerWins === maxRounds){
		declareWinner();
	}
}

function declareWinner(){
	computerWins > playerWins ? gameStatus.textContent = `Game over! The computer won by ${computerWins} to ${playerWins}, better luck next time!` :
	gameStatus.textContent = `Congratulations! You beat the computer by ${playerWins} to ${computerWins}!`;
	roundsPlayed = 0;
	playerWins = 0;
	computerWins = 0;
}
