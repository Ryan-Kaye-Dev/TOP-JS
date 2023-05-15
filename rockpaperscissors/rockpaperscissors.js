    // set scores
let playerScore = 0;
let computerScore = 0;

let playGame = (playerChoice) => {
 
    // get computer choice randomly
  let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  };
  let computerChoice = getComputerChoice();

    // possible outcomes
  if (playerChoice === computerChoice) {
    document.getElementById("result-box").textContent = "Tie";
    playerScore = playerScore;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result-box").textContent = "Win";
    playerScore++;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    document.getElementById("result-box").textContent = "Lose";
    computerScore++;
  }
    updateScores();

    // define winner
    if (playerScore == 5) {
        document.getElementById("winner").textContent = "You Win!"
    } else if (computerScore ==5) {
        document.getElementById("winner").textContent = "You Lose!"
    }

    
};
    
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');

    rock.addEventListener('click', function(){
        playGame('rock')
    });
    paper.addEventListener('click', function(){
        playGame('paper')
    });
    scissors.addEventListener('click', function(){
        playGame('scissors')
    });

    let updateScores = () => {
        document.getElementById("player-score").textContent = `Player Score: ${playerScore}`;
        document.getElementById("pc-score").textContent = `Computer Score: ${computerScore}`;
    };