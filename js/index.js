// Iteration 1: Names and Input
let hacker1 = "John"; // Driver's name
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alice"; // Navigator's name
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
console.log(hacker1.toUpperCase().split('').join(' '));

// 3.2 Print all the characters of the navigator's name, in reverse order
console.log(hacker2.split('').reverse().join(''));

// 3.3 Lexicographic order comparison
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem Ipsum text analysis
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula erat at augue ..."; // Use an actual lorem ipsum text
let words = loremText.split(/\s+/);
let etCount = words.filter(word => word.includes("et")).length;
console.log(`Number of words: ${words.length}`);
console.log(`Number of times 'et' appears: ${etCount}`);

// Bonus 2: Palindrome checker
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');
if (cleanedPhrase === cleanedPhrase.split('').reverse().join('')) {
    console.log("It's a palindrome!");
} else {
    console.log("It's not a palindrome.");
}
