const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const clear = document.getElementById("clear");

let userChoice;
let computerChoice;
let result;
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice.toUpperCase();
    setTimeout(generateComputerChoice, 2000);
    setTimeout(getResult, 2500);
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if(randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase();
}

const getResult = () => {
    if(computerChoice === userChoice){
        result = "It's a Draw";
    }
    if(computerChoice === 'rock' && userChoice == 'paper'){
        result = "You win!";
    }
    if(computerChoice === 'rock' && userChoice == 'scissors'){
        result = "You lost!";
    }
    if(computerChoice === 'paper' && userChoice == 'scissors'){
        result = "You win!";
    }
    if(computerChoice === 'paper' && userChoice == 'rock'){
        result = "You lose!";
    }
    if(computerChoice === 'scissors' && userChoice == 'rock'){
        result = "You win!";
    }
    if(computerChoice === 'scissors' && userChoice == 'paper'){
        result = "You lose!";
    }
    resultDisplay.innerHTML = result;
}

