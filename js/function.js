function sayHelloToMyFriend(name){
    console.log("Hello "+name+" it's nice to meet you!" );
}

sayHelloToMyFriend("Deniz") //-> "Hello, Deniz, it's nice to meet you!"
sayHelloToMyFriend("Eddie") //-> "Hello, Eddie, it's nice to meet you!"
sayHelloToMyFriend("Alaya") //-> "Hello, Alaya, it's nice to meet you!"


//Drill: Multiple arguments

// Let's practice by writing a function that takes in three arguments!

// Your function introduceSelf should have name, hometown, fun fact, and log an introduction. For instance, calling it like:

function introduceSelf(name, hometown, funFact){
    console.log("Hi! My name is "+name+ ". I'm from " +hometown+", and I love to"+funFact+".");
}
introduceSelf("Lina", "Fort Worth", "I love to juggle");


// Practice with functions that return values

// Let's practice returning values from functions and using the values that we get back from functions.

// Drill: Greet friend

// First, let's write a function that uses return.

// Write a function called greetFriend that takes in a name and returns a greeting like "[name], it's good to see you!"

// For instance, when called with "Khia", greetFriend should return "Khia, it's good to see you!"


// Write your function 'greetFriend' here
function greetFriend(name){
    return name + ", it's good to see you!";
  }
  
  // When called with "Khia", greetFriend should return "Khia, it's good to see you!"
  
  greetFriend("Khia"); //=> "Khia, it's good to see you!"


  //Drill: Build email address

//In this exercise, write a function buildEmailAddress that returns an email address.

function buildEmailAddress(name,email){
    return name+"@"+email+".com";
}
let em=buildEmailAddress("tam","gmail");
console.log(em);


//Function expressions
//While the function declaration above is syntactically a statement, functions can also be created by a function expression.

//Such a function can be anonymous; it does not have to have a name.

const square=function(number){
    return number*number;
}
console.log(square(4));

//factorial

const factorial=function fact(n){
    return n<2?1:n*fact(n-1);
}
console.log(factorial(3));


// Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:

// function map(f,a){
//     const result=new Array(a.length);
//     for(let i=0;i<a.length;i++){
//         result[i]=f(a[i]);
//     }
//     result[i]=f(a[i])
// }

function map(f,a){
    const result=new Array(a.length);
    for(let i=0;i<a.length;i++){
        result[i]=f(a[i]);
    }
    return result
}

const cube=function(x){
    return x*x*x;
};
const number=[0,1,3,5,6];
console.log(map(cube,number))


//In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:

// let myFun;
// if(num==0){
//     myFun=function(theObject){
//         theObject.make="Tata"
//     };
// }


const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordArray) {
  if(wordArray.length===0){
    return null;
  }
  //Initialize the first word in longest
  let longestWord=wordArray[0];

  for(let i=1;i<wordArray.length;i++){
    // If the current word is longer than the longestWord, update longestWord

    if(wordArray[i].length>longestWord.length){
      longestWord=wordArray[i];
    }
  }
  return longestWord;

}
// Example usage: Finding the longest word in the words array
console.log(`The longest word is: ${findLongestWord(words)}`);