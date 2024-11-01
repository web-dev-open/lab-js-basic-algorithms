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

// 3. store the first scenario in the firstPossibility variable
firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;

// 4. do the same for the other five possibilities with a winner
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;

// 5 store the value of a player tie, meaning the choices are the same
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

// 6, 7, 8. The conditional with the four possible outcomes!
if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log(`first player won!`);
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log(`second player won!`);
} else if (seventhPossibility) {
  console.log('there is a tie! pick again');
} else {
  console.log('something went wrong!');
}