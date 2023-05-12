let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random() * 3)];
}

let playerChoice = prompt("Choose your weapon", "Rock, Paper or Scissors?").toLowerCase();
let computerChoice  = getComputerChoice();

let playGame = (playerChoice,computerChoice) => {
    if ( playerChoice === computerChoice){
        return console.log("It's a tie!");
    } else if ( playerChoice === "rock" && computerChoice === "scissors"){
        return "You win!"
    } else if ( playerChoice === "rock" && computerChoice === "paper"){
        return "You lose!"
    } else if ( playerChoice === "paper" && computerChoice === "scissors"){
        return "You lose!"
    } else if ( playerChoice === "paper" && computerChoice === "rock"){
        return "You win!"
    } else if ( playerChoice === "scissors" && computerChoice === "rock"){
        return "You lose!"
    } else if ( playerChoice === "scissors" && computerChoice === "paper"){
        return "You win!"
    } else return "Error"
}

console.log(computerChoice,playGame(playerChoice,computerChoice));