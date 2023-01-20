let computerPoints = 0;
let playerPoints = 0;

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
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('its a tie');
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerPoints++;
        console.log(`${playerSelection} beats ${computerSelection}, player wins and has ${playerPoints} points`)
    } else {
        computerPoints++;
        console.log(`${computerSelection} beats ${playerSelection}, computer wins and has ${computerPoints} points`)

    }

}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('What do u choose?').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }
}

game();