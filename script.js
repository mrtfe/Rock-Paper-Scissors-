const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const playerLiveResult = document.querySelector(".player-live-result");
const computerLiveResult = document.querySelector(".computer-live-result");
const gameLog = document.querySelector(".game-log__container");
const winnerBox = document.querySelector(".winner__container");
const playAgainBtn = document.querySelector(".play-again-btn_container");

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
    gameLog.innerHTML = "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    gameLog.innerHTML = "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerPoints++;
    gameLog.innerHTML = "You Win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints++;
    gameLog.innerHTML = "You Lose! Scissors beat paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    gameLog.innerHTML = "You Win! Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints++;
    gameLog.innerHTML = "You Lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerPoints++;
    gameLog.innerHTML = "You Win! Scissors beat paper";
  }
  checkIfTheGameIsOver();
}

function gameReset() {
  playerPoints = 0;
  computerPoints = 0;
}

playAgainBtn.addEventListener("click", () => {
  gameReset();
  playerLiveResult.innerHTML = playerPoints;
  computerLiveResult.innerHTML = computerPoints;
  playAgainBtn.style.display = "none";
  winnerBox.style.display = "none";
  gameLog.style.display = "flex";
});

function gameOverAnimation() {
  gameLog.innerHTML = "";
  gameLog.style.display = "none";
  playAgainBtn.style.display = "flex";
  console.log("game finished");
}

function checkIfTheGameIsOver() {
  if (playerPoints == 5 || computerPoints == 5) {
    if (playerPoints > computerPoints) {
      winnerBox.innerHTML = "PLAYER WON!";
      winnerBox.style.display = "flex";
      gameOverAnimation();
    } else if (computerPoints > playerPoints) {
      winnerBox.innerHTML = "COMPUTER WON!";
      winnerBox.style.display = "flex";
      gameOverAnimation();
    } else {
      console.log("game is running");
    }
  }
}
