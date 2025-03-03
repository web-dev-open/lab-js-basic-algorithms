console.log("I'm ready!");


// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alice";
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
// Print driver's name in uppercase with spaces
console.log(hacker1.toUpperCase().split("").join(" "));

// Print navigator's name in reverse
console.log(hacker2.split("").reverse().join(""));

// Lexicographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1: Word Count & "et" Count

let lorem = "Lorem ipsum et dolor et sit amet...";
let wordCount = lorem.split(/\s+/).length;
let etCount = (lorem.match(/\bet\b/g) || []).length;
console.log(`Word count: ${wordCount}, "et" count: ${etCount}`);

//Bonus 2: Palindrome Check

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");
let reversedPhrase = cleanedPhrase.split("").reverse().join("");

console.log(cleanedPhrase === reversedPhrase ? "It's a palindrome!" : "Not a palindrome.");
