"use-strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const questionMark = document.querySelector("h2");
const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Enter number";
  } else if (guess === secretNumber) {
    document.querySelector(".guess").value = "";
    message.textContent = "You WON!";
    message.style.color = "green";
    questionMark.textContent = secretNumber;
    questionMark.style.color = "green";
    questionMark.style.border = "5px solid green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      message.textContent = "You LOST!";
    }
  }
});
document.querySelector(".restart").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
  message.textContent = "Guess ?";
  document.querySelector(".score").textContent = score;
  questionMark.textContent = "?";
  questionMark.style.border = "3px solid white";
  message.style.color = "white";
  questionMark.style.color = "white";
});
