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

console.log(getComputerChoice());

//input from player (rock, paper, scissors) that is case insensitive
let playerHand = prompt('What hand do you play? (rock, paper, scissors): ', '');
playerHand = playerHand.toLowerCase();

//function to check if player made a valid choice
function playerChoiceCheck(playerChoice) {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors')
        return true;
}

//function to of game