const selection = document.querySelector(".hand-btn-container");
const announceText = document.querySelector(".announce-text")
const playButtonContainer = document.querySelector(".play-btn-container");
const playButton = document.querySelector(".play");
const playerHandImage = document.querySelector(".hand-player");
const computerHandImage = document.querySelector(".hand-computer")
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");

// initialize scores and set to 0.
let playerScore = 0;
let computerScore = 0;

// check if game ends.
let endGame = false;

// disable play button at the start.
playButton.disabled = true;

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
        computerChoice = "Rock";
        computerHandImage.setAttribute("src", "./images/rock.png");
    } else if(computerChoice === 2) {
        computerChoice = "Paper";
        computerHandImage.setAttribute("src", "./images/paper.png");
    } else {
        computerChoice = "Scissor";
        computerHandImage.setAttribute("src", "./images/scissor.png");
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
            announceText.textContent = ("You selected ROCK!");
            playerHandImage.setAttribute('src', './images/rock.png')
            break;
        case 'paper':
            announceText.textContent = ("You selected PAPER!");
            playerHandImage.setAttribute('src', './images/paper.png')
            break;
        case 'scissor':
            announceText.textContent = ("You selected SCISSOR!");
            playerHandImage.setAttribute('src', './images/scissor.png')
            break;
    }

    playButton.disabled = false;
});

// create click event to play game to play the game.
playButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let roundWinner = playRound(playerChoice.toUpperCase(), computerChoice.toUpperCase());
    let gameWinner = '';

    switch(roundWinner) {
        case(0):
            announceText.textContent = "Computer wins!";
            computerScore += 1;
            break;
        case(1):
            announceText.textContent = "You win!";
            playerScore += 1;
            break;
        case(2):
            announceText.textContent = "Round draw!";
            break;
    }

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    // check player and computer score.
    if(playerScore >= 5) {
        announceText.textContent = "PLAYER win the game!";
        endGame = true;
    }
    
    if(computerScore >= 5){
        announceText.textContent = "COMPUTER win the game!";
        endGame = true;
    }

    // create restart button when game ends.
    if(endGame === true) {
        playButton.disabled = true;

        // disable player hand selection.
        const handButton = selection.children;
        Object.values(handButton).forEach(button => {
            button.disabled = true;
        });
        
        // create restart button.
        const restartButton = document.createElement('button');
        restartButton.setAttribute('class', 'restart');
        restartButton.textContent = "Restart";

        playButtonContainer.appendChild(restartButton);

        restartButton.addEventListener('click', () => {
            location.reload();
        });
    }
});