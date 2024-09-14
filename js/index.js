// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anna";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name in capital letters, separated by a space
let driverUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  driverUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driverUpperCase.trim());

// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);

// 3.3 Lexicographic order comparison
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1: Lorem ipsum generator (assuming lorem text)
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et urna...";
let wordCount = loremIpsum.split(" ").length;
console.log(`Number of words: ${wordCount}`);

let etCount = loremIpsum.split(" et ").length - 1;
console.log(`Number of times 'et' appears: ${etCount}`);

// Bonus 2: Palindrome checker
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');
let reversedPhrase = "";
for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}
if (cleanedPhrase === reversedPhrase) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}