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

// create function playRound with 2 parameters and return the winner
function playRound(playerSelection, computerSelection) {
    // create int variable of winner to keep track of round winner
    // 0 = computer wins
    // 1 = player wins
    // 2 = draw
    let winner = 0;
    if(
        playerSelection === "ROCK" &&
        computerSelection === "PAPER"
    ) {
        return 0;
    } else if(
        playerSelection === "PAPER" &&
        computerSelection === "SCISSOR"
    ) {
        return 0;
    } else if(
        playerSelection === "SCISSOR" &&
        computerSelection === "ROCK"
    ) {
        return 0;
    } else if(
        playerSelection === computerSelection
    ) {
        return 2;
    } else {
        return 1;
    }
}

//create game function to play 5 round of rock, paper, scissor
function game() {
    // create int variable of round to keep track of round number
    let round = 1;
    // create variable to loop the game
    let keepGoing = true;
    // create variable to track player score
    let playerScore = 0;
    //create variable to track computer score
    let computerScore = 0;

    // loop until 5 round
    while(keepGoing) {   
        // create variable of playerSelection to get player choice
        let playerSelection = "";
        // check if player input is valid. If not, repeat the prompt
        while(!playerSelection){
            let playerInput = prompt("Type your choice: Rock, Paper or Scissor!").toUpperCase();
            switch(playerInput) {
                case("ROCK"):
                    playerSelection = playerInput;
                    break;
                case("PAPER"):
                    playerSelection = playerInput;
                    break;
                case("SCISSOR"):
                    playerSelection = playerInput;
                    break;
                default:
                    alert("The entered option is not available, try again!")
                    playerSelection = "";
                    break;
            }
        }
        // create variable of computerSelection to get computer choice
        let computerSelection = getComputerChoice().toUpperCase();


        // show the rounds
        console.log(`Round: ${round}`);
        // show player score
        console.log(`Player Score: ${playerScore}`);
        // show computer score
        console.log(`Computer Score: ${computerScore}`);

        // create switch to check the winner each round
        switch(playRound(playerSelection, computerSelection)){
            case(0):
                console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
            case(1):
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            default:
                console.log(`Draw! both are ${playerSelection}s`);
                break;
        }

        // round increment to keep track of rounds
        round++;

        // check if player or computer has reached a score of 5
        if(round <= 5) {
            keepGoing = true;
        } else {
            keepGoing = false;
        }
    }

    // check final winner and show final score
    if(playerScore > computerScore) {
        console.log(`Final score ${playerScore} - ${computerScore}. Player wins!`)
    } else {
        console.log(`Final score ${playerScore} - ${computerScore}. Computer wins!`)   
    }
}

game();