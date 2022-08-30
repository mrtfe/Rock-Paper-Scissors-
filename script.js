const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const playerLiveResult = document.querySelector(".player-live-result");
const computerLiveResult = document.querySelector(".computer-live-result");
const gameLog = document.querySelector(".game-log__container");

ROCK.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  playerLiveResult.innerHTML = playerPoints;
  computerLiveResult.innerHTML = computerPoints;
});
PAPER.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  playerLiveResult.innerHTML = playerPoints;
  computerLiveResult.innerHTML = computerPoints;
});
SCISSORS.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  playerLiveResult.innerHTML = playerPoints;
  computerLiveResult.innerHTML = computerPoints;
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (gameLog.innerHTML = "Tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    return (gameLog.innerHTML = "You Lose! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerPoints++;
    return (gameLog.innerHTML = "You Win! Rock beats scissors");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints++;
    return (gameLog.innerHTML = "You Lose! Scissors beat paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    return (gameLog.innerHTML = "You Win! Paper beats rock");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints++;
    return (gameLog.innerHTML = "You Lose! Rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerPoints++;
    return (gameLog.innerHTML = "You Win! Scissors beat paper");
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

// const computerSelection = getComputerChoice();
// console.log(`Computer choice: ${computerSelection}`);

// const playerSelection = "paper";
// console.log(`Player choice: ${playerSelection}`);

// console.log(playRound(playerSelection, computerSelection));

// console.log(`Player points: ${playerPoints}`);
// console.log(`Computer points: ${computerPoints}`);
