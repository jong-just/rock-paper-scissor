let playerHand;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
    //create a integer variable called randomNumber
    let randomNumber;

    //create a string variable called computerHand
    let computerHand;

    //get random number between 1-3 (3 choices) and input to randomNumber
    randomNumber = getRandomInt(1,4);

    //convert numbers 0-2 to rock, paper, scissors and input to computerHand
    if (randomNumber === 1) {
        computerHand = 'rock';
    } else if (randomNumber === 2) {
        computerHand = 'paper';
    } else computerHand = 'scissors'

    //return computerHand
    return computerHand;

}

//honestly had to just look this one up, RNG for 1-3
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//function to check if player made a valid choice
function playerChoiceCheck(playerChoice) {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return true;
    } else {
        return false;
    }
}


//result announcement
function winnerOutput (playerHand, computerHand, results) {
    if (results) {
        console.log(`You win! ${playerHand} beats ${computerHand}`);
        ++playerScore;
    } else {
        console.log(`You lose! ${computerHand} beats ${playerHand}`);
        ++computerScore;
    }
}


//game logic: compares both hands, determine who wins, output results
function gameRound(playerSelection, computerSelection) {
    //run through game logic to determine winner
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        winnerOutput(playerSelection, computerSelection, 0);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        winnerOutput(playerSelection, computerSelection, 1);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winnerOutput(playerSelection, computerSelection, 1);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        winnerOutput(playerSelection, computerSelection, 0);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        winnerOutput(playerSelection, computerSelection, 0);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winnerOutput(playerSelection, computerSelection, 1);
    } else if (playerSelection === computerSelection) {
        //for tied game
        console.log(`You tied! ${playerSelection} ties with ${computerSelection}`);
        ++tieScore;
    }

}

//game function
function game() {
    //loop to allow for 5 rounds
    for (let i = 0; i < 5; i++) {
        playerHand = getPlayerHand();
        console.log(`Round: ${i + 1}`);
        playRound(playerHand);
        console.log(`You: ${playerScore} | Computer: ${computerScore} | Tied: ${tieScore}`);
    }
}

//function for playing a round. 
function playRound(playerHand) {
    if (playerChoiceCheck(playerHand)) {
        gameRound(playerHand, getComputerChoice());
    } else {
        console.log('Sorry, that is not a valid hand. Please try again.');
    }
}

//prompt for player's hand and makes it case insensitive
function getPlayerHand() {
    let playerChoice = prompt('What hand do you play? (rock, paper, scissors): ', '');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

//call game, this is what actually starts the whole thing
game();