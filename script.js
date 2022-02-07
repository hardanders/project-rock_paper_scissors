let playerScore = '0';
let computerScore = '0';

const numberOfRounds = prompt("How many rounds would you like to play?")
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors'; 
const ask = prompt("Rock, Paper, or Scissors?");
const playerSelection = ask.toLowerCase();
const computerSelection = computerPlay();
const draw = 'tie';
const win = 'win';
const lose = 'lose';
const win_or_lose = playRound(playerSelection, computerSelection);

function computerPlay() {
    let numberSelection = Math.floor(Math.random() * 3);
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
        return draw;
    } else if (playerNum == 0 && computerNum == 2 || playerNum > computerNum) {
        console.log(`You win! Your draw, ${playerSelection}, beats the computer's draw, ${computerSelection}!`);
        return win;
    } else if (computerNum > playerNum) {
        console.log(`You lose! The computer's draw, ${computerSelection}, beats your draw, ${playerSelection}!`);
        return lose;
    }
}

function game() {
    calculateScore(playRound(playerSelection, computerSelection));
    determineWinner(playerScore, computerScore);
}

function calculateScore(win_or_lose) {
    if (win_or_lose == win) {
        playerScore = ++playerScore;
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (win_or_lose == lose) {
        computerScore = ++computerScore;
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else {
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("Congratulations! You beat the computer at rock, paper, scissors!")
    } else if (playerScore < computerScore) {
        console.log("Unfortunately, you did not win this time. Better luck next time!")
    } else {
        console.log("Wot in tarnation! We have ourselves a tie!")
    }
}