let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

upadateScoreElement();

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you loose";
    } else if (computerMove === "paper") {
      result = "you win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "you loose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "you loose";
    } else if (computerMove === "scissors") {
      result = "you win";
    }
  }
  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you loose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  upadateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `you <img src="images/${playerMove}-emoji.png" class="move-icon"> 

computer <img src="images/${computerMove}-emoji.png" class="move-icon" >
`;
}

function upadateScoreElement() {
  document.querySelector(".js-score").innerHTML = `win:${score.wins},
loss:${score.losses},
ties:${score.ties}`;
}
function pickComputerMove() {
  let computerMove = "";

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
