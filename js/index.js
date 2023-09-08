let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';


// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;

fourthPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;
fifthPossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors;
sixthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock;

seventhPossiblity = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility){
  console.log('first player won');
}
 else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log('second player won');
 } else if (seventhPossibility)
 { console.log('A tie!!!');
 } else {
   console.log('something went wrong!');
 }

console.log(firstPossibility)

// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
