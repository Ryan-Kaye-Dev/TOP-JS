let playGame = (numberOfGames) => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numberOfGames; i++) {
    let getComputerChoice = () => {
      let choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * 3)];
    };
    let computerChoice = getComputerChoice();

    let playerChoice = prompt(
      "Choose your weapon",
      "Rock, Paper or Scissors?"
    ).toLowerCase();

    if (playerChoice === computerChoice) {
      console.log("Tie");
      playerScore = playerScore;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Win");
      playerScore++;
    } else if (
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log("Lose");
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `The Score was ` + `${playerScore}` + ` : ` + `${computerScore} You won!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `The Score was ` + `${playerScore}` + ` : ` + `${computerScore} You lost!`
    );
  } else {
    console.log(
      `The Score was ` +
        `${playerScore}` +
        ` : ` +
        `${computerScore} So it was a Tie!`
    );
  }
};

playGame(5);
