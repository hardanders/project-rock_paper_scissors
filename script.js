let playerScore = '0';
let computerScore = '0';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors'; 
const draw = 'tie';
const win = 'win';
const lose = 'lose';

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
    }
}

function playerSelect() {
    const ask = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (!(ask == 'rock' || ask.toLowerCase() == 'paper' || ask.toLowerCase() == 'scissors')) {
        alert(`Did you misspell something... or are you just a dumbass?`);
        playerSelect();
        return ask;
    } else {
    console.log(`You have selected ${ask}.`);
    return ask;
    }
}

function roundPrompt() {
    numberOfRounds = prompt("How many rounds would you like to play?");
    if (!(numberOfRounds == Number(numberOfRounds))) {
        alert("ENTER A NUMBER!");
        roundPrompt(numberOfRounds);
        return numberOfRounds;
    } else {
        return numberOfRounds;
    }
}

function playRound(playerSelection, computerSelection = computerPlay) {
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
    let rounds = roundPrompt();
    for (let i = '0'; i < rounds; i++) {
        let playerChoice = playerSelect();
        let result = playRound(playerChoice, computerPlay());
        calculateScore(result);
    }
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
        console.log("Congratulations! You beat the computer at rock, paper, scissors!");
        console.log(`Final score: Humans - ${playerScore}, Robots - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log("Unfortunately, you did not win this time. Better luck next time!");
        console.log(`Final score: Humans - ${playerScore}, Robots - ${computerScore}`);
    } else {
        console.log("Wot in tarnation! We have ourselves a tie!");
        console.log(`Final score: Humans - ${playerScore}, Robots - ${computerScore}`);
    }
}