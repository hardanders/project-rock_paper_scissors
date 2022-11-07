let compScore = 0;
let playerScore = 0;
let ties = 0;

const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    return compChoice = Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (playerChoice == "rock") {
        return 0;
    } else if (playerChoice == "paper") {
        return 1;
    } else if (playerChoice == "scissors") {
        return 2;
    } else {
        alert("I said PICK ONE!");
        getPlayerChoice();
    }
}

function playRound(player = getPlayerChoice(), comp = getComputerChoice()) {
    console.log(player, comp);
    if (player === comp) {
        console.log("Looks like it's a tie!");
        ties++;
    } else if (player == 0 && comp == 2 || player == 1 && comp == 0 || player == 2 && comp == 1) {
        player = convert(player);
        comp = convert(comp);
        console.log(`Player wins! Your ${player} beat the PCs ${comp}!`);
        playerScore++;
    } else {
        player = convert(player);
        comp = convert(comp);
        console.log(`Computer wins! Its ${comp} beat your ${player}`);
        compScore++;
    }
}

function convert(pick) {
    switch (Number(pick)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function determineRounds() {
    let numberOfRounds = parseInt(prompt("How many rounds of Rock, Paper, Scissors should we play?"));
    if (!(numberOfRounds == Number(numberOfRounds))) {
        alert("ENTER A NUMBER!");
        determineRounds();
    } else {
        return numberOfRounds;
    }
}

function determineScore() {
    if (playerScore > compScore) {
        alert(`You win! You beat the PC ${playerScore} times!`)
    } else if (playerScore < compScore) {
        alert(`Robots win today! ${compScore} times to your ${playerScore}!`)
    } else if (playerScore == compScore) {
        alert(`No victors today! Score: ${playerScore} to ${compScore}!`)
    }
}

function game() { 
    let rounds = determineRounds();
    for (i = 0; i < rounds; i++) {
        playRound();
        console.log(`Humans - ${playerScore} : Robots - ${compScore} : Ties ${ties}`);
    }
    determineScore();
}