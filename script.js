const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = getComputerChoice();
console.log(`Computer choice: ${getComputerChoice()}`);

const playerSelection = "paper";
console.log(`Player choice: ${playerSelection}`);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beat paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beat paper";
  }
}

// console.log(playRound(playerSelection, computerSelection));
