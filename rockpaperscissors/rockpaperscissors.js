let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

let playerChoice = prompt(
  "Choose your weapon",
  "Rock, Paper or Scissors?"
).toLowerCase();
let computerChoice = "rock";

let playerScore = 0;
let computerScore = 0;

let playGame = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    playerScore = playerScore;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
  }
}

let game = () => {
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
    return console.log(playerScore,computerScore)
};
