let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let firstPlayerChoice = scissors;
let secondPlayerChoice = rock;

let firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
let thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;

let fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
let fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
let sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;

let seventhPossibility = secondPlayerChoice === firstPlayerChoice;

if(firstPossibility || secondPossibility || thirdPossibility)
    console.log("First Player Won!!!")
else if(fourthPossibility || fifthPossibility || sixthPossibility)
    console.log("Second Player Won!!!")
else if (secondPossibility)
    console.log("It's a TIE, Try Again")
else 
    console.log("Something went Wrong!")
