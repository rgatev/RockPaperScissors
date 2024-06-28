// computer choice output func
let input = parseInt(prompt("Enter 0 for Rock, 1 for paper, 2 for scissors"));
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
// console.log(getComputerChoice());

let userOutput = "";

// human choice input func
function getHumanChoice() {
  if (input < 1) {
    userOutput = "Rock";
  } else if (input < 2) {
    userOutput = "Paper";
  } else {
    userOutput = "Scissors";
  }
  return userOutput;
}
// console.log(getHumanChoice());

let result = "";

// play round out of 5

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let playGame = 0; playGame < 5; playGame++) {
    console.log(`Round ${playGame + 1}:`);
    console.log(getHumanChoice());
    console.log(getComputerChoice());
    console.log(playRound(result));
    console.log(`Human: ${humanScore}`);
    console.log("Cpu: " + computerScore);
    console.log("------------");
    input = parseInt(prompt("Enter 0 for Rock, 1 for paper, 2 for scissors"));
    console.log("\n");
  }
  function playRound() {
    if (computerOutput === userOutput) {
      result = "draw";
    } else if (computerOutput === "Rock" && userOutput === "Scissors") {
      result = "Computer wins! Rock beats Scissors";
      computerScore++;
    } else if (computerOutput === "Paper" && userOutput === "Rock") {
      result = "Computer wins! Paper beats rock";
      computerScore++;
    } else if (computerOutput === "Scissors" && userOutput === "Paper") {
      result = "Computer wins! Scissors beats Paper";
      computerScore++;
    } else {
      result = "User wins! ";
      humanScore++;
    }
    return result;
    1;
  }
  if (humanScore > computerScore) {
    console.log("You win !!!");
  } else if (humanScore == computerScore) {
    console.log("Tie");
  } else {
    console.log("You lose!");
  }
}

playGame();
