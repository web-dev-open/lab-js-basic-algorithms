
console.log("I'm ready!");

// Iteration 1: Names and Inputs

var hacker1 = "Ravi Shankar";

console.log("The driver's name is " + hacker1);


var hacker2 = "Mohit";


console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

let h1= hacker1.length;
let h2= hacker2.length;


if(h1>h2){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(h2>h1){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals
console.log(hacker1.split('').join(' ').toUpperCase());

// Print all the characters of the navigator's name, in reverse order.
console.log(hacker2.split('').reverse().join(''));

//Depending on the lexicographic order of the strings, print:
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
