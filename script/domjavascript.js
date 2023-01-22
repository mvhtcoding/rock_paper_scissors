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
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn-close');
let modalText = document.querySelector('.modalText')

//Checks button that is clicked and puts clicked item and computer choice img on playground
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playerImage.innerHTML = `<img src='img/${playerSelection}.png' alt='${playerSelection} image'/>`;
        computerSelection = getComputerChoice();
        computerImage.innerHTML = `<img src='img/${computerSelection}.png' alt='${computerSelection} image'/>`;
        playRound(playerSelection, computerSelection);
    });
});

// function to get computers choice
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

// playround function that checks wether or not player or computer has 5 points and pops up modal box
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
           openModal();
           modalText.textContent = 'Congratulations! U win the best of 5!';
        }
    } else {
        computerPoints++;
        roundWinner.textContent = 'Computer wins';
        computerScore.textContent = `Computer: ${computerPoints}`;
        if (computerPoints === 5) {
            openModal();
            modalText.textContent = 'Game over! Computer wins the best of 5';
        }
    }
}

// close modal function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  window.location.reload()
};

// close the modal when the close button is clicked
closeModalBtn.addEventListener('click', closeModal);

// open modal function
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
