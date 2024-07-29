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

let userOutput = "";

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  btn1.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn1") {
      const humanChoice = "Rock";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;

      if (humanScore == 5) {
        final.textContent = "You win !" + "\n" + "Game over";
      } else if (computerScore == 5) {
        final.textContent = "You lose !" + "\n" + "Game over";
      }

      console.log(displayText.textContent);
      console.log(`CPU picked: ${computerChoice}`);
      console.log(playRoundResult);
      console.log("\n");
    }
  });

  btn2.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn2") {
      const humanChoice = "Paper";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;

      if (humanScore == 5) {
        final.textContent = "You win !" + "\n" + "Game over";
      } else if (computerScore == 5) {
        final.textContent = "You lose !" + "\n" + "Game over";
      }

      console.log(displayText.textContent);
      console.log(`CPU picked: ${computerChoice}`);
      console.log(result);
      console.log(`Your score = ${humanScore}`);
      console.log(`CPU score = ${computerScore}`);
      console.log("\n");
    }
  });

  btn3.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn3") {
      const humanChoice = "Scissors";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;

      if (humanScore == 5) {
        final.textContent = "You win !" + "\n" + "Game over";
      } else if (computerScore == 5) {
        final.textContent = "You lose !" + "\n" + "Game over";
      }

      console.log(displayText.textContent);
      console.log(`CPU picked: ${computerChoice}`);
      console.log(result);
      console.log("\n");
    }
  });

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      result = "It's a draw";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      result = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      result = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      result = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      result = "You lose! ";
      computerScore++;
    }
    return result;
  }
}

const final = document.querySelector(".final");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const displayText = document.querySelector(".displayUser");
const displayCPU = document.querySelector(".displayCPU");
const roundResult = document.querySelector(".result");
const userScore = document.querySelector(".humanScore");
const score = document.querySelector(".score");
const cpuScore = document.querySelector(".cpuScore");

playGame();
