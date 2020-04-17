let playerScore = 0;
let compScore = 0;
let roundNumber = 0;

const playerScoreText = document.querySelector("#yourScore");
playerScoreText.textContent = "YOU: " + playerScore;

const compScoreText = document.querySelector("#compScore");
compScoreText.textContent = "COMP: " + compScore;

const roundNumberText = document.querySelector("#roundNumber");

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);;
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function convert(string) {
    if (string.toLowerCase() == "rock") {
        return "👊";
    }
    else if (string.toLowerCase() == "paper") {
        return "✋";
    }
    else {
        return "✌️";
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    roundNumber++;
    roundNumberText.textContent = roundNumber;
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        return "You win! Paper beats rock.";

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") {
        playerScore++;
        return "You win! Scissors beats paper!";

    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        compScore++;
        return "You lose! Paper beats rock.";

    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() == "scissors") {
        compScore++;
        return "You lose! Rock beats scissors! ";

    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() == "paper") {
        compScore++;
        return "You lose! Scissors beats paper!";

    } else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        return "It's a tie! You both chose " + playerSelection.toLowerCase() + ".";
    }
}

function run(playerChoice) {
    let playerSelection = playerChoice;
    const playerMove = document.querySelector("#yourMove");
    playerMove.textContent = convert(playerSelection);
    let computerSelection = computerPlay();
    const computerMove = document.querySelector("#compMove");
    computerMove.textContent = convert(computerSelection);
    let game = playRound(playerSelection, computerSelection);
    const text = document.querySelector("#text");
    text.textContent = game;
    console.log(game);
    playerScoreText.textContent = "YOU: " + playerScore;
    compScoreText.textContent = "COMP: " + compScore;
}

const btn = document.querySelector('#rock');
btn.addEventListener('click', () => {
    run("rock");
});

const btn1 = document.querySelector('#paper');
btn1.addEventListener('click', () => {
    run("paper");
});

const btn2 = document.querySelector('#scissors');
btn2.addEventListener('click', () => {
    run("scissors");
});




// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
//         return "You win! Paper beats rock.";

//     } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
//         return "You win! Rock beats scissors!";

//     } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") {
//         return "You win! Scissors beats paper!";

//     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
//         return "You lose! Paper beats rock.";

//     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() == "scissors") {
//         return "You lose! Rock beats scissors! ";

//     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() == "paper") {
//         return "You lose! Scissors beats paper!";

//     } else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
//         return "It's a tie! You both chose " + playerSelection.toLowerCase() + ".";

//     }
// }

// let round;
// for (let index = 0; index < 5; index++) {
//     let playerSelection = prompt("Rock, paper or scissors?");
//     let computerSelection = computerPlay()
//     console.log("You said " + playerSelection);
//     console.log("Computer said " + computerSelection);
//     console.log("Round " + (index + 1) + ": ");
//     round = playRound(playerSelection, computerSelection);
//     console.log(round);
// }
// console.log()