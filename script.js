let humanScore = 0;
let computerScore = 0;

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

  let resultMessage;

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${capitalize(humanChoice)}`;
  } else if (
    (humanChoice === "warrior" && computerChoice === "archer") ||
    (humanChoice === "mage" && computerChoice === "warrior") ||
    (humanChoice === "archer" && computerChoice === "mage")
  ) {
    resultMessage = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    humanScore++;
  } else {
    resultMessage = `You lose! ${capitalize(humanChoice)} beaten by ${capitalize(computerChoice)}`;
    computerScore++;
  }

  const resultDiv = document.querySelector(".result p");
  resultDiv.textContent = resultMessage;

  document.getElementById("playerWins").textContent = `Player: ${humanScore}`;
  document.getElementById("computerWins").textContent = `Computer: ${computerScore}`;

  if (humanScore === 5) {
    announceWinner("Player");
  } else if (computerScore === 5) {
    announceWinner("Computer");
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function announceWinner(winner) {
  const resultDiv = document.querySelector(".result p");
  resultDiv.textContent = `${winner} wins the game! Congratulations!`;

  document.getElementById("warrior").disabled = true;
  document.getElementById("mage").disabled = true;
  document.getElementById("archer").disabled = true;
}

document.getElementById("warrior").addEventListener("click", function () {
  playRound("warrior");
});

document.getElementById("mage").addEventListener("click", function () {
  playRound("mage");
});

document.getElementById("archer").addEventListener("click", function () {
  playRound("archer");
});
