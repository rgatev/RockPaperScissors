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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // function to check who wins

  function checkWinner() {
    if (humanScore == 5) {
      final.innerHTML = "You win!<br>Game Over!";
      return true;
    } else if (computerScore == 5) {
      final.innerHTML = "You lose!<br>Game Over!";
      return true;
    }
    return false;
  }

  // btn event listeners section

  btn1.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn1") {
      if (humanScore >= 0 || computerScore >= 0) {
        final.textContent = "";
      }
      const humanChoice = "Rock";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;
      checkWinner();

      const isGameOver = checkWinner();
      if (isGameOver) {
        humanScore = 0;
        computerScore = 0;
      }
    }
  });

  btn2.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn2") {
      if (humanScore >= 0 || computerScore >= 0) {
        final.textContent = "";
      }
      const humanChoice = "Paper";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;
      checkWinner();

      const isGameOver = checkWinner();
      if (isGameOver) {
        humanScore = 0;
        computerScore = 0;
      }
    }
  });

  btn3.addEventListener("click", function (e) {
    if (e.target && e.target.id === "btn3") {
      if (humanScore >= 0 || computerScore >= 0) {
        final.textContent = "";
      }
      const humanChoice = "Scissors";
      const computerChoice = getComputerChoice();
      const playRoundResult = playRound(humanChoice, computerChoice);
      displayText.textContent = `You have selected: ${humanChoice}`;
      displayCPU.textContent = `CPU chose: ${computerChoice}`;
      roundResult.textContent = playRoundResult;
      userScore.textContent = `Your score: ${humanScore}`;
      cpuScore.textContent = `CPU score: ${computerScore}`;
      checkWinner();

      const isGameOver = checkWinner();
      if (isGameOver) {
        humanScore = 0;
        computerScore = 0;
      }
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
