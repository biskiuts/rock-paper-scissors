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

function getHumanChoice() {
    const userInput = prompt(`Select your class (Warrior, Mage, or Archer):`).toLowerCase();
    if (userInput === "warrior" || userInput === "mage" || userInput === "archer") {
        return userInput;
   } else {
        console.log(`Invalid class. Please choice your class "Warrior", "Mage", or "Archer".`);
        return getHumanChoice();
   }
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
        return "tie";
    } else if (
        (humanChoice === "warrior" && computerChoice === "archer") ||
        (humanChoice === "mage" && computerChoice === "warrior") ||
        (humanChoice === "archer" && computerChoice === "mage")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        humanScore++;
        return "win";
    } else {
        console.log(`You lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beaten by ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        computerScore++;
        return "lose";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 2; i <=5; i++) {
        console.log(`Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Scores: You ${humanScore}, Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();