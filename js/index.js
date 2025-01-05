console.log("I'm ready!")
// Iteration 1: Names and Input
// 1.1
let hacker1 = "Yerko";
// 1.2
console.log("The driver's name is " + hacker1);
// 1.3
let hacker2 = "George";
// 1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
if ( hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}
// Iteration 3: Loops

// 3.1
let driverNameModified = "";

for (let i = 0; i < hacker1Length; i++){
  let currentLetter = hacker1[i].toUpperCase().concat(" ")
  driverNameModified += currentLetter
}

console.log(driverNameModified)

// 3.2
let navigatorNameModified = "";
let counter = hacker2Length - 1;

while (counter >= 0) {
  navigatorNameModified += hacker2[counter]
  counter--
}

console.log(navigatorNameModified)

// 3.3 

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}