const choices = {
	Princess: {weakTo: "Dragon", strongTo: "Knight"},
	Dragon: {weakTo: "Knight", strongTo: "Princess"},
	Knight: {weakTo: "Princess", strongTo: "Dragon"}
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
	btn.addEventListener("click", () => playRound(btn.className, computerPlay()));
}

function computerPlay(){
	return weapons[Math.floor(Math.random() * weapons.length)];
}

function playRound(playerSelection, computerSelection){
	gameStatus.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. `;
	if (choices[playerSelection].strongTo === computerSelection){
		 gameStatus.textContent += generateMessage(playerSelection);
		 playerWins++;
	} else if (choices[playerSelection].weakTo === computerSelection){
			gameStatus.textContent += generateMessage(computerSelection);
			computerWins++;
	} else { gameStatus.textContent += generateMessage("tie"); }
	roundCount.textContent = `Player wins: ${playerWins} | Computer wins: ${computerWins}`;
	if (computerWins === maxRounds || playerWins === maxRounds){
		declareWinner();
	}
}

function declareWinner(){
	computerWins > playerWins ? gameStatus.textContent = `Game over! The computer won by ${computerWins} to ${playerWins}, better luck next time! Choose again to start a new game.` :
	gameStatus.textContent = `Congratulations! You beat the computer by ${playerWins} to ${computerWins}! Choose again to start a new game.`;
	roundsPlayed = 0;
	playerWins = 0;
	computerWins = 0;
	// askToPlayAgain();
}

// function askToPlayAgain(){
// 	let playAgainButton = document.createElement("button");
// 	playAgainButton.textContent = "Play Again?"
// 	gameStatus.appendChild(playAgainButton);
// 	roundsPlayed = 0;
// 	playerWins = 0;
// 	computerWins = 0;
// }

function generateMessage(winner){
	if (winner === "tie"){
		return "tie";
	}

	const princessVictory = [
		"The princess leaves this patriarchal system behind, leaving the knight, and pursuing a life of freedom in the woods.",
		"The princess watches a documentary about Henry the 8th and decides she doesn't like the head of the knight anymore.",
		"Finding the dragon much more interesting and funny, she stabs the knight and hops onto the dragons back."
	]

	const dragonVictory = [
		"The flame breath of the dragon scorches the princess into a pile of ash.",
		"The dragon picks the princess up in his mighty jaws and imprisons her in a tower.",
		"The dragon attacks the insecurities of the princess, resulting in debilitating depression."
	]

	const knightVictory = [
		"With a fierce thrust of the knight's sword, the dragon falls into a pile of it's own blood, it's hatchlings watching the scene with tears in their eyes.",
		"An avid poker player, the knight reveals his pocket aces and takes the dragon for all that it is worth.",
		"The knight casts his peanut butter sandwich at the dragon, knowing that this particular dragon was fatally allergic to peanuts."
	]

	let victoryMessage;

	switch (winner) {
		case "Princess":
			victoryMessage = princessVictory;
			break;
		case "Dragon":
			victoryMessage = dragonVictory;
			break;
		case "Knight":
			victoryMessage = knightVictory;
			break;
		default:
			break;
	}

	const maxSentences = victoryMessage.length;

	var index = Math.floor(Math.random() * (maxSentences - 1));
  return victoryMessage[index];

}
