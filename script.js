let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player-choice').textContent = 'Player choice: ' + formatChoice(playerChoice);
    document.getElementById('computer-choice').textContent = 'Computer choice: ' + formatChoice(computerChoice);

    const result = getResult(playerChoice, computerChoice);
    document.getElementById('result').textContent = result;

    updateScore(result);
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw!';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    }

    return 'You Lose!';
}

function updateScore(result) {
    if (result === 'You Win!') {
        playerScore++;
    } else if (result === 'You Lose!') {
        computerScore++;
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('player-choice').textContent = 'Player choice: -';
    document.getElementById('computer-choice').textContent = 'Computer choice: -';
    document.getElementById('result').textContent = 'Choose an option to start!';
}

function formatChoice(choice) {
    if (choice === 'rock') {
        return 'ROCK';
    }

    if (choice === 'paper') {
        return 'PAPER';
    }

    return 'SCISSORS';
}
