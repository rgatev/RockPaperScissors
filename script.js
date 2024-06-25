function getComputerChoice() {
  const randomValue = Math.random() * 1;
  if (randomValue < 1 / 3) {
    console.log("rock");
  } else if (randomValue < 2 / 3) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
  return randomValue;
}
console.log(getComputerChoice());

let input = parseInt(prompt());

function getHumanChoice() {
  input *= Math.random();
  if (input < 1 / 3) {
    console.log("rock");
  } else if (input < 2 / 3) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
  return input;
}
console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   let string = humanChoice.toUpperCase() === computerChoice.toLowerCase();

//   if (getComputerChoice === getHumanChoice) {
//     console.log("draw");
//   } else if (getComputerChoice < getHumanChoice) {
//     console.log("You lose! Paper beats Rock");
//   }
// }
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
