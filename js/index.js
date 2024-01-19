// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

const spacedDriverName = hacker1.toUpperCase().split('').join(' ');
console.log(spacedDriverName);


const reversedNavigatorName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorName);


if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}


const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex vitae mi ultrices consequat nec vel metus. Sed vel odio tincidunt, accumsan elit sit amet, laoreet libero. Proin id orci vel elit finibus accumsan eu eu dui. Etiam vel ex eget libero efficitur congue nec eu dolor. Nulla facilisi. Sed non orci vel sapien varius elementum. Nullam aliquam odio at sapien volutpat, vitae gravida nunc vehicula. Fusce scelerisque, sapien vel bibendum tincidunt, lacus metus imperdiet orci, a consectetur libero quam id odio. Aliquam erat volutpat. Quisque sit amet est vitae orci varius dignissim. Sed euismod malesuada justo, in volutpat felis tincidunt a.";

// Counting words
const wordCount = loremIpsumText.split(/\s+/).length;
console.log(`Word count: ${wordCount}`);

// Counting occurrences of "et"
const etCount = (loremIpsumText.match(/\bet\b/gi) || []).length;
console.log(`Occurrences of 'et': ${etCount}`);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, '').toLowerCase();

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`Is "${phraseToCheck}" a palindrome? ${isPalindrome ? 'Yes' : 'No'}`);
