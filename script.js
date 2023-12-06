const selection = "";
const playButton = "";
const restartButton = "";

// initialize scores and set to 0.
let playerScore = 0;
let computerScore = 0;

// create function to generate random number.
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}

// create function getComputerChoice to generate random rock, paper, scissor selection for the computer.
function getComputerChoice() {
    // create int variable of computerChoice with value 0.
    let computerChoice = 0;
    // set variable of randomNumber to random integer between 1 and 3.
    computerChoice = randomNumberGenerator(1, 3);
    // set int variable of computerChoice to str.
    if(computerChoice === 1) {
        computerChoice = "Rock"
    } else if(computerChoice === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissor"
    }
    // return variable of computerChoice.
    return computerChoice;
}

// create function playRound with 2 parameters and return the winner.
function playRound(playerSelection, computerSelection) {
    // keep track of round winner.
    // 0 = computer wins
    // 1 = player wins
    // 2 = draw
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

// delegate click event from selection to rock, paper, scissor button.
selection.addEventListener('click', (event) => {
    let target = event.target;
    playerChoice = target.id;

    switch(playerChoice) {
        case 'rock':
            displayPlayerChoice.textContent = ("You selected ROCK!");
            break;
        case 'paper':
            displayPlayerChoice.textContent = ("You selected PAPER!");
            break;
        case 'scissor':
            displayPlayerChoice.textContent = ("You selected SCISSOR!");
            break;
    }

    playButton.disabled = false;
});

// create click event to play game to play the game.
playButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let roundWinner = playRound(playerChoice.toUpperCase(), computerChoice.toUpperCase());
    let announceText = `You select ${playerChoice.toUpperCase()} vs Computer select ${computerChoice.toUpperCase()}`;
    let gameWinner = '';

    switch(roundWinner) {
        case(0):
            roundText.textContent = `${announceText}, Computer wins!`;
            computerScore += 1;
            break;
        case(1):
            roundText.textContent = `${announceText}, You win!`;
            playerScore += 1;
            break;
        case(2):
            roundText.textContent = `${announceText}, round draw!`;
            break;
    }

    scoreText.textContent = `Player ${playerScore} - Computer ${computerScore}`;

    if(playerScore >= 5) {
        gameText.textContent = "Player WIN the game!";
        playButton.disabled = true;
        document.body.appendChild(restartButton);
    }
    
    if(computerScore >= 5){
        gameText.textContent = "Computer WIN the game!";
        playButton.disabled = true;
        document.body.appendChild(restartButton);
    }
});

restartButton.addEventListener('click', () => {
    location.reload();
});