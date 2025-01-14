function getComputerChoice() {
  let rand = Math.random();
  let int = Math.round(rand * 100);
  let randomResult = "";
  if (int < 33) {
    randomResult = "rock";
  } else if (int < 66) {
    randomResult = "paper";
  } else {
    randomResult = "scissors";
  }
  return randomResult;
}

function isChoiceValid(choice) {
  return choice == "rock" || choice == "paper" || choice == "scissors";
}

function getResult(userChoice, computerChoice) {
  switch (true) {
    case userChoice == computerChoice:
      return "tie";

    case userChoice == "rock" && computerChoice == "scissors":
    case userChoice == "paper" && computerChoice == "rock":
    case userChoice == "scissors" && computerChoice == "paper":
      return "user";

    case computerChoice == "rock" && userChoice == "scissors":
    case computerChoice == "paper" && userChoice == "rock":
    case computerChoice == "scissors" && userChoice == "paper":
      return "computer";

    default:
      return "Invalid choice!";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
rockButton.addEventListener("click", () => {
  playRound("rock");
});
paperButton.addEventListener("click", () => {
  playRound("paper");
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

const resultBoard = document.querySelector("#result");
const winnerBoard = document.querySelector("#winner");

let userScore = 0;
let computerScore = 0;
let ties = 0;

function clearBoard() {
  userScore = 0;
  computerScore = 0;
  ties = 0;
}

function updateScore(result) {
  switch (result) {
    case "tie":
      ties++;
      break;
    case "computer":
      computerScore++;
      break;
    case "user":
      userScore++;
      break;
  }
  resultBoard.textContent = `Results: User ${userScore} | Computer ${computerScore} | Ties: ${ties}`;
  if (userScore == 3) {
    winnerBoard.textContent = "The User WINS!!!";
    clearBoard();
  } else if (computerScore == 3) {
    winnerBoard.textContent = "The Computer WINS!!!";
    clearBoard();
  }
}

function playRound(userChoiceSelected) {
  let computerChoice = getComputerChoice();
  let roundResult = getResult(userChoiceSelected, computerChoice);
  updateScore(roundResult);
}
