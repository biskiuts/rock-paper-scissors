let humanScore = 0;
let computerScore = 0;

const choices = ["warrior", "mage", "archer"];

choices.forEach((choice) => {
  document.getElementById(choice).addEventListener("click", function () {
    playRound(choice);
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "warrior";
  } else if (randomNumber === 1) {
    return "mage";
  } else {
    return "archer";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  let roundText;
  let actionText;

  const winText = {
    warrior: "You crush the Archer with sheer force!",
    mage: "You overwhelm the Warrior with magic!",
    archer: "You strike the Mage down with deadly precision!",
  };

  const loseText = {
    warrior: "The Warrior shatters your defenses!",
    mage: "The Mage's magic breaks you!",
    archer: "The Archer's shot pierces you!",
  };

  if (humanChoice === computerChoice) {
    roundText = "It's a tie!";
    actionText = "Both of you are evenly matched.";
  } else if (
    (humanChoice === "warrior" && computerChoice === "archer") ||
    (humanChoice === "mage" && computerChoice === "warrior") ||
    (humanChoice === "archer" && computerChoice === "mage")
  ) {
    roundText = "You win!";
    actionText = winText[humanChoice];
    humanScore++;
  } else {
    roundText = "You lose!";
    actionText = loseText[computerChoice];
    computerScore++;
  }

  document.getElementById("roundResult").textContent = roundText;
  document.getElementById("actionResult").textContent = actionText;

  document.getElementById("playerWins").textContent = `${humanScore}`;
  document.getElementById("compWins").textContent = `${computerScore}`;

  if (humanScore === 5) {
    announceWinner("Player");
  } else if (computerScore === 5) {
    announceWinner("Computer");
  }
}

function announceWinner(winner) {
  document.getElementById("roundResult").textContent = `${winner} wins the game!`;

  document.getElementById("warrior").disabled = true;
  document.getElementById("mage").disabled = true;
  document.getElementById("archer").disabled = true;

  const gameResult = document.getElementById("gameResult");
  const restartBtn = document.getElementById("restartBtn");

  if (winner === "Player") {
    gameResult.textContent = "Congrats, you win!";
  } else {
    gameResult.textContent = "Try again?";
  }

  gameResult.style.display = "block";
  restartBtn.style.display = "block";

  restartBtn.textContent = "Restart";
  restartBtn.addEventListener("click", restartGame);
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("playerWins").textContent = "0";
  document.getElementById("compWins").textContent = "0";

  document.getElementById("roundResult").textContent = "First to score 5 points wins";
  document.getElementById("actionResult").textContent = "Choose your class";

  const gameResult = document.getElementById("gameResult");
  const restartBtn = document.getElementById("restartBtn");
  gameResult.style.display = "none";
  restartBtn.style.display = "none";

  document.getElementById("warrior").disabled = false;
  document.getElementById("mage").disabled = false;
  document.getElementById("archer").disabled = false;
}
