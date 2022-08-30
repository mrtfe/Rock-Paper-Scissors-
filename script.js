const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
let playerPoints = 0;
let computerPoints = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerPoints++;
    return "You Win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints++;
    return "You Lose! Scissors beat paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    return "You Win! Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints++;
    return "You Lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerPoints++;
    return "You Win! Scissors beat paper";
  }
}

function game() {
  for (i = 0; i <= 5; i++) {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    console.log(`result is: `, playRound(playerSelection, computerSelection));
    console.log(playerPoints);
    console.log(computerPoints);
  }
}

const computerSelection = getComputerChoice();
console.log(`Computer choice: ${computerSelection}`);

const playerSelection = "paper";
console.log(`Player choice: ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));

console.log(`Player points: ${playerPoints}`);
console.log(`Computer points: ${computerPoints}`);
