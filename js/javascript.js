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

function resultsOutput(results) {
    if (results) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}

function gameRound(playerSelection, computerSelection) {
    //run through game logic to determine winner
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultsOutput(0);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsOutput(1);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsOutput(1);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsOutput(0);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultsOutput(0);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultsOutput(1);
    } else if (playerSelection === computerSelection) {
        console.log('You tied!');
    }
    //output results
}

//input from player (rock, paper, scissors) that is case insensitive
let playerHand = prompt('What hand do you play? (rock, paper, scissors): ', '');
playerHand = playerHand.toLowerCase();


if (playerChoiceCheck(playerHand)) {
    gameRound(playerHand, getComputerChoice());
} else {
    console.log('Sorry, that is not a valid hand. Please try again.');
}

