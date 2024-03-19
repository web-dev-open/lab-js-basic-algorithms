console.log(`I'm ready to go.`);

// Iteration 1: Names and Input
let hacker1 = "Harsh";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Chinmay";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let spacedName = '';
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + ' ';
}
console.log(spacedName.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order
let reversedName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Count the number of words in the string
let wordCount = 0;
let inWord = false;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === ' ') {
    if (inWord) {
      wordCount++;
      inWord = false;
    }
  } else {
    inWord = true;
  }
}
if (inWord) { // Count the last word if the string doesn't end with a space
  wordCount++;
}
console.log("Word count: " + wordCount);

// Count the number of times the Latin word "et" appears
let etCount = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum.substr(i, 2) === 'et') {
    etCount++;
  }
}
console.log("Number of times 'et' appears: " + etCount);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = '';
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].match(/[a-z]/i)) {
    cleanPhrase += phraseToCheck[i].toLowerCase();
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("'" + phraseToCheck + "' is a palindrome!");
} else {
  console.log("'" + phraseToCheck + "' is not a palindrome.");
}
