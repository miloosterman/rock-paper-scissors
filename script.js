const choices = ["Rock", "Paper", "Scissors"];

let computerSelection = computerPlay();
let playerSelection = "rock";
console.log(computerSelection);
// playRound(playerSelection, computerSelection);

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];


}

// function playRound(playerSelection, computerSelection){
    
// }