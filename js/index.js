console.log("I'm ready!");
// Iteration 1: Names and Input
//
let hacker1 = "Sam"; // The Driver
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alex"; // The Navigator
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

// 3.1 Capitalized and spaced
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Reversed name
console.log(hacker2.split("").reverse().join(""));

// 3.3 Lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem Ipsum Counter
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elementum erat. Mauris et ante non magna porta elementum. Proin et massa id nisl elementum porta. Duis ut et nisl. Aliquam et varius leo, sit amet lacinia massa. Cras et efficitur nisl, id porta tellus.";

let words = loremText.split(" ");
console.log(`Number of words: ${words.length}`);

let etCount = words.filter(word => word.replace(/[,.]/g, "") === "et").length;
console.log(`The word 'et' appears ${etCount} times.`);

// Bonus 2: Palindrome Checker
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");
let isPalindrome = cleanPhrase === cleanPhrase.split("").reverse().join("");

console.log(`"${phraseToCheck}" is ${isPalindrome ? "" : "NOT "}a palindrome!`);
