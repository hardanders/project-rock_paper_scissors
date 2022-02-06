const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors'; 
const ask = prompt("Rock, Paper, or Scissors?");
const playerSelection = ask.toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {
    let numberSelection = Math.floor(Math.random() * 3)
    switch (Number(numberSelection)) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
    }
}

function convert(gestureName) {
    if (gestureName == "rock") {
        return 0;
    } else if (gestureName == "paper") {
        return 1;
    } else if (gestureName == "scissors") {
        return 2;
    } else {
        return null;
    }
}

function playRound(playerSelection, computerSelection) {
    let playerNum = convert(playerSelection);
    let computerNum = convert(computerSelection);
    if (playerNum === computerNum) {
        console.log("It looks like we have a tie this time!");
    } else if (playerNum == 0 && computerNum == 2) {
        console.log("You win! Rock beats scissors!");
    } else if (playerNum > computerNum) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (computerNum > playerNum) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}

function game() {
    
}