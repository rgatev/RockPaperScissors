// computer choice output func
let computerOutput = "";

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);
  if (randomValue < 1) {
    computerOutput = "Rock";
  } else if (randomValue < 2) {
    computerOutput = "Paper";
  } else {
    computerOutput = "Scissors";
  }
  return computerOutput;
}
console.log(getComputerChoice());

alert("Enter 0 for Rock, 1 for paper, 2 for scissors");
let input = parseInt(prompt());
let userOutput = "";

// human choice input func
function getHumanChoice() {
  // input = Math.floor(Math.random() * 3);
  if (input < 1) {
    userOutput = "Rock";
  } else if (input < 2) {
    userOutput = "Paper";
  } else {
    userOutput = "Scissors";
  }
  return userOutput;
}
console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;
let result = "";

function playRound(humanChoice, computerChoice) {
  if (computerOutput === userOutput) {
    result = "draw";
  } else if (computerOutput === "Rock" && userOutput === "Scissors") {
    result = "Computer wins! Rock beats Scissors";
  } else if (computerOutput === "Paper" && userOutput === "Rock") {
    result = "Computer win! Paper beats rock";
  } else if (computerOutput === "Scissors" && userOutput === "Paper") {
    result = "Computer win! Scissors beats Scissors";
  } else {
    result = "User wins! ";
  }
  return result;
}

console.log(playRound());

alert(result);

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
