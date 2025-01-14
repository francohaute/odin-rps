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

function getUserChoice() {
  let choice = prompt("Select: rock, paper or scissors").toLowerCase();
  if (!isChoiceValid(choice)) {
    choice = getUserChoice();
  } else {
    return choice;
  }
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

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let ties = 0;

  while (userScore < 3 && computerScore < 3) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = getResult(userChoice, computerChoice);
    if (result == "tie") {
      ties++;
    } else if (result == "computer") {
      computerScore++;
    } else {
      userScore++;
    }
    console.log(
      "User: " +
        userScore +
        " | Computer: " +
        computerScore +
        " | Ties: " +
        ties,
    );
  }
  console.log("User: " + userScore);
  console.log("Computer: " + computerScore);
  console.log("Ties: " + ties);
  if (userScore == 3) {
    console.log("User WON!!!");
  } else {
    console.log("Computer won");
  }
}

playGame();
