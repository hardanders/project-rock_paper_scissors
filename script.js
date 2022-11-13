let compScore = 0;
let playerScore = 0;
let ties = 0;

// Randomize the computer choice of R,P,S
function getComputerChoice() {
    return compChoice = Math.floor(Math.random() * 3);
}

// Play a round, comparing the player and computer choices
function playRound(player = getPlayerChoice(), comp = getComputerChoice()) {
    console.log(convert(player), convert(comp));
    playSelect.textContent = `Player Selection: ${convert(player)}`;
    compSelect.textContent = `Computer Selection: ${convert(comp)}`;
    if (player === comp) {
        ++ties;
        updateScore();
        battleText.textContent = `Two ${convert(player)}s makes a tie!`
    } else if (player == 0 && comp == 2 || player == 1 && comp == 0 || player == 2 && comp == 1) {
        ++playerScore;
        updateScore();
        battleText.textContent = `Your ${convert(player)} has beaten the PCs ${convert(comp)}. Congratulations!`;
        if (playerScore >= 5) {
            weapBtns.forEach(button => button.disabled = true);
            battleText.textContent = "YOU WIN! Congratulations!";
        }
    } else {
        ++compScore;
        updateScore();
        battleText.textContent = `The PCs ${convert(comp)} has beaten your ${convert(player)}`;
        if (compScore >= 5) {
            weapBtns.forEach(button => button.disabled = true);
            battleText.textContent = "YOU LOSE! What a LOSER!";
        }
    }
}

function updateScore() {
    psField.textContent = `Player Score: ${playerScore}`;
    compField.textContent = `Computer Score: ${compScore}`;
    tieField.textContent = `Ties: ${ties}`;
}

// Function to convert choice integer to R,P,S selection
function convert(pick) {
    switch (Number(pick)) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function initializeButtons() {
    rock.addEventListener("click", () => {
        playRound(0);
    })

    paper.addEventListener("click", () => {
        playRound(1);
    })

    scissors.addEventListener("click", () => {
        playRound(2);
    })

    reset.addEventListener("click", () => {
        resetScore();
    })
}

function resetScore() {
    weapBtns.forEach(button => button.disabled = false);
    playSelect.textContent = '';
    compSelect.textContent = '';
    battleText.textContent = '';
    playerScore = 0;
    compScore = 0;
    ties = 0;
    updateScore();
}



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