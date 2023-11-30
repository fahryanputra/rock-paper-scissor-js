// create function getComputerChoice to generate random rock, paper, scissor selection for the computer
function getComputerChoice() {
    // create int variable of computerChoice with value 0
    let computerChoice = 0;
    // set variable of randomNumber to random integer between 1 and 3
    computerChoice = Math.floor(Math.random() * 3) + 1;
    // set int variable of computerChoice to str
    if(computerChoice === 1) {
        computerChoice = "Rock"
    } else if(computerChoice === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissor"
    }
    // return variable of computerChoice
    return computerChoice;
}

// create const of playerSelection to get player choice
const playerSelection = "rock";
// create const of computerSelection to get computer choice
const computerSelection = getComputerChoice();

// create function playRound with 2 parameters and return the winner
function playRound(playerSelection, computerSelection) {
    if(
        playerSelection.toUpperCase() === "ROCK" &&
        computerSelection.toUpperCase() === "PAPER"
    ) {
        return "Computer wins!";
    } else if(
        playerSelection.toUpperCase() === "PAPER" &&
        computerSelection.toUpperCase() === "SCISSOR"
    ) {
        return "Computer wins!";
    } else if(
        playerSelection.toUpperCase() === "SCISSOR" &&
        computerSelection.toUpperCase() === "ROCK"
    ) {
        return "Computer wins!";
    } else if(
        playerSelection.toUpperCase() === computerSelection.toUpperCase()
    ) {
        return "Draw!";
    } else {
        return "You win!";
    }
}