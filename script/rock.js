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
      result = "YOU LOOSE";
    } else if (computerMove === "paper") {
      result = "YOU WIN";
    } else if (computerMove === "scissors") {
      result = "TIE";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "YOU WIN";
    } else if (computerMove === "paper") {
      result = "TIE";
    } else if (computerMove === "scissors") {
      result = "YOU LOOSE";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "TIE";
    } else if (computerMove === "paper") {
      result = "YOU LOOSE";
    } else if (computerMove === "scissors") {
      result = "YOU WIN";
    }
  }
  if (result === "YOU WIN") {
    score.wins += 1;
  } else if (result === "YOU LOOSE") {
    score.losses += 1;
  } else if (result === "TIE") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  upadateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `
  <span style="color: black; font-weight: bold;">YOU</span> <img src="images/${playerMove}-emoji.png" class="move-icon" style="margin-right: 10px; width: 50px; height: 50px;"> 
  <span style="color: black; font-weight: bold;">COMPUTER</span> <img src="images/${computerMove}-emoji.png" class="move-icon" style="width: 50px; height: 50px;">
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
