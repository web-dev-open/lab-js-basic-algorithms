// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Enoch";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
else if (hacker2.length > hacker1.length)
  console.log(
    `It sees that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else
  console.log(
    `Wow, you both have equally long names, ${hacker1.length || hacker2.length}`
  );

// Iteration 3: Loops
//printing driver's name separated by space andin capitals
let driverNameInCapsWithSpace = "";
for (const letter of hacker1) {
  driverNameInCapsWithSpace += letter.toUpperCase() + " ";
}

console.log("Driver's name in Caps: " + driverNameInCapsWithSpace);

// printing navigator's name in reverse order
let navigatorNameInReverse = hacker2.split("").reverse().join("");
console.log(navigatorNameInReverse);

// ordering names
if (hacker1 > hacker2) console.log("The driver's name goes first.");
else if (hacker1 < hacker2)
  console.log("Yo, the navigator goes first definitely.");
else console.log("What?! You both have the same name?");

// Bonus 2:

// Bonus 3: Check palindromes
const phraseToCheck = "stack cats";

//convert word to array and clean it
let phraseToClean = phraseToCheck.toLowerCase().split("");

for (let i = 0; i < phraseToClean.length; i++) {
  if (phraseToClean[i] < "a" || phraseToClean[i] > "z") phraseToClean[i] = "";
}
let cleanPhrase = phraseToClean.join("");
let reverseCleanWord = phraseToClean.reverse().join("");

// check if the word is a palindrome
if (reverseCleanWord === cleanPhrase)
  console.log(phraseToCheck + " is a palindrome.");
else console.log(phraseToCheck + " is not a palindrome.");
