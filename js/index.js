
// 1.1
let hacker1 = "John";
// 1.2
console.log("The driver's name is " + hacker1);
// 1.3
let hacker2 = "Jane";
// 1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
// 3.1
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

// 3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let wordCount = loremIpsumText.split(/\s+/).length;
console.log("Word count: " + wordCount);

let etCount = (loremIpsumText.match(/\bet\b/g) || []).length;
console.log("The word 'et' appears " + etCount + " times.");

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');

let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length / 2; i++) {
    if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("'" + phraseToCheck + "' is a palindrome.");
} else {
    console.log("'" + phraseToCheck + "' is not a palindrome.");
}
console.log('testing')
