// Iteration 1: Names and Input
let hacker1 = 'KD';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'navigator';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker2.length > hacker1.length)   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker1.length; i++)    spacedName += hacker1[i].toUpperCase() + " ";
console.log(spacedName.trim());

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--)   reversedName += hacker2[i];
console.log(reversedName);

if (hacker1.localeCompare(hacker2) < 0) console.log("The driver's name goes first."); 
else if (hacker2.localeCompare(hacker1) < 0)    console.log("Yo, the navigator goes first definitely.");
else    console.log("What?! You both have the same name?");

// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let wordCount = loremIpsum.split(/\s+/).length;
console.log("Word count: " + wordCount);

let etCount = (loremIpsum.match(/\bet\b/g) || []).length;
console.log("Occurrences of 'et': " + etCount);

// Bonus 2
let phraseToCheck = "step on no pets";

// Function to check if a string is a palindrome
function isPalindrome(phrase) {
    let cleanedPhrase = phrase.replace(/[^a-zA-Z]/g, "").toLowerCase();
    for (let i = 0; i < cleanedPhrase.length / 2; i++) {
        if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i])   return false;
    }
    return true;
}

// Checking if the phrase is a palindrome
if (isPalindrome(phraseToCheck))    console.log("The phrase is a palindrome.");
else  console.log("The phrase is not a palindrome.");