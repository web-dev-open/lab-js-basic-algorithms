console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1="Hina";
console.log(`The driver's name is ${hacker1}`);
let hacker2="Nayab";
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  

// Iteration 3: Loops
//* Print all the characters of the driver's name, separated by a space and in capitals.

let driverNameInCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameInCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim());
//*  Print all the characters of the navigator's name, in reverse order.

let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);
//*  Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
//* Bonus 1:
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`;

const wordCount = loremIpsum.split(" ").length;

const etCount = (loremIpsum.match(/et/g) || []).length;

console.log(`Number of words: ${wordCount}`);
console.log(`Number of times 'et' appears: ${etCount}`);
//* Bonus 2: 
//* Check if a given string is a palindrome.

const phraseToCheck = "A man, a plan, a canal, Panama!";

const cleanedPhrase = phraseToCheck.replace(/[^A-Za-z]/g, "").toLowerCase();

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`Is the phrase a palindrome? ${isPalindrome}`);