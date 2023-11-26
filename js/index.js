console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Vijaya";
console.log("My name is " + hacker1);

let hacker2 = "Aniket";
console.log("My name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " XX characters");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters");
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split('').reverse().join(''));

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 