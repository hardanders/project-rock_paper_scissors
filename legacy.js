// Doc for code no longer needed after the transition to GUI



/* // Compare the final scores for the winner
function determineScore() {
    if (playerScore > compScore) {
        alert(`You win! You beat the PC ${playerScore} times!`)
    } else if (playerScore < compScore) {
        alert(`Robots win today! ${compScore} times to your ${playerScore}!`)
    } else if (playerScore == compScore) {
        alert(`No victors today! Score: ${playerScore} to ${compScore}!`)
    }
} */

/* // Prompt for how many rounds to play
function determineRounds() {
    let numberOfRounds = parseInt(prompt("How many rounds of Rock, Paper, Scissors should we play?"));
    if (!(numberOfRounds == Number(numberOfRounds))) {
        alert("ENTER A NUMBER!");
        determineRounds();
    } else {
        return numberOfRounds;
    }
} */

/* // Main game initialization
function game() { 
    let rounds = determineRounds();
    for (i = 0; i < rounds; i++) {
        playRound();
        console.log(`Humans - ${playerScore} : Robots - ${compScore} : Ties ${ties}`);
    }
    determineScore();
} */

/* // Prompt the player to provide R,P,S
function getPlayerChoice() {
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
}*/