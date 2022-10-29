const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startButton");
const score_playerOne = document.getElementById("score_playerOne");
const score_playerTwo = document.getElementById("score_playerTwo");
const wonText = document.querySelector(".wonText");
const player_one = document.getElementById("player_one");
const player_two = document.getElementById("player_two");

let playerOneScore = 0;
let playerTwoScore = 0;
let gameRunning = false;
let time = 0;
//💫💫🍉🍉🍉🍉🍉🍉🍉
// let time = 5000;
let timer;
let alarmSet;
function setAlarm() {
  let timeRemaining = document.querySelector(".count");
  alarmSet = (time / 100000) * 100;
  timer = setInterval(() => {
    if (alarmSet > 0) {
      timeRemaining.textContent = `${--alarmSet}`;
      timeRemaining.style.backgroundColor = "azure";
    } else if (alarmSet === 0) {
      stopTimers();
    }
  }, 1000);
}
//💫
function stopTimers() {
  clearInterval(timer);
  let timerBack = document.querySelector(".count");
  timerBack.textContent = "";
  timerBack.style.backgroundColor = "aqua";
}
//💫💫🍉🍉🍉🍉🍉🍉🍉
startButton.addEventListener("click", startGame);
document.addEventListener("keypress", keyBoardEvents);

const jsConfetti = new JSConfetti();
async function myConfetti() {
  await jsConfetti.addConfetti({
    emojis: ["🎉", "🥳", "👏", "⚡", "🎈", "🍉"],
    emojiSize: 100,
    confettiNumber: 300,
    confettiColors: [
      "#ff0a54",
      "#ff477e",
      "#ff7096",
      "#ff85a1",
      "#fbb1bd",
      "#f9bec7",
    ],
  });
  return confetti();
}
//💫🍉
import confetti from "https://cdn.skypack.dev/canvas-confetti";
//💫
function startGame(e) {
  // Convert the seconds into milliseconds
  e.preventDefault();
  restartGame();
  time = timerInput.value * 1000;
  setAlarm();
  setTimer(time);
  gameRunning = true;
}
function setTimer(time) {
  setTimeout(() => {
    gameRunning = false;
    setWinner();
  }, time);
}
function setWinner() {
  if (playerOneScore > playerTwoScore) {
    wonText.textContent = "Player One Won!!";
    playerOne("green", "white");
    myConfetti();
  } else if (playerOneScore < playerTwoScore) {
    wonText.textContent = "Player Two Won!!";
    playerTwo("green", "white");
    myConfetti();
    confetti();
  } else if (playerOneScore === playerTwoScore) {
    wonText.textContent = "Players Tied!";
  }
}

function restartGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  score_playerOne.textContent = "Score: " + playerOneScore;
  score_playerTwo.textContent = "Score: " + playerTwoScore;
  playerOne("#00ffff", "black");
  playerTwo("#00ffff", "black");
  wonText.textContent = "";
}

function keyBoardEvents(e) {
  if (gameRunning) {
    if (e.keyCode === 97) {
      playerOneScore++;
    } else if (e.keyCode === 108) {
      playerTwoScore++;
    }

    score_playerOne.textContent = "Score: " + playerOneScore;
    score_playerTwo.textContent = "Score: " + playerTwoScore;
  }
}
function playerOne(backgroundColor, color) {
  player_one.style.backgroundColor = backgroundColor;
  player_one.style.color = color;
}
function playerTwo(backgroundColor, color) {
  player_two.style.backgroundColor = backgroundColor;
  player_two.style.color = color;
}

// document.addEventListener("keypress", keyBoardEvents);
