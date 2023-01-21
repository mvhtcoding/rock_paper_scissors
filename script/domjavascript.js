let computerPoints = 0;
let playerPoints = 0;
let playerSelection;
let computerSelection;
let roundWinner = document.querySelector('.roundWinner');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let playerImage = document.querySelector('.playerImage');
let computerImage = document.querySelector('.computerImage');
let buttons = document.querySelectorAll('button.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playerImage.innerHTML = `<img src='img/${playerSelection}.png' alt='${playerSelection} image'/>`;
        computerSelection = getComputerChoice();
        computerImage.innerHTML = `<img src='img/${computerSelection}.png' alt='${computerSelection} image'/>`;
        playRound(playerSelection, computerSelection);
    });
});

function getComputerChoice() {
    let computerChoice = '';
    const randomChoice = Math.floor(Math.random() * 3)
    switch (randomChoice) {
        case 0: computerChoice = 'rock';
            break;
        case 1: computerChoice = 'paper';
            break;
        case 2: computerChoice = 'scissors';
            break;
        default:
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner.textContent = 'It\'s a tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerPoints++;
        roundWinner.textContent = 'You win!';
        playerScore.textContent = `Player: ${playerPoints}`
        if (playerPoints === 5) {
            alert('Congratulations! U win the best of 5, care for a rematch?');
            window.location.reload();
        }
    } else {
        computerPoints++;
        roundWinner.textContent = 'Computer wins';
        computerScore.textContent = `Computer: ${computerPoints}`;
        if (computerPoints === 5) {
            alert('Game over! The computer wins, better luck next time!');
            window.location.reload();
        }
    }
}

