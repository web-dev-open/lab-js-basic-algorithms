// Iteration 1: Names and Input
let hacker1 = "John"; // Replace with the actual driver's name
console.log("The driver's name is " + hacker1);

let hacker2 = "Jane"; // Replace with the actual navigator's name
console.log("The navigator's name is " + hacker2);
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
let spacedDriverName = "";
for (let char of hacker1) {
  spacedDriverName += char.toUpperCase() + ' ';
}
console.log(spacedDriverName.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order
let reversedNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
let orderComparison = 0;

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] !== hacker2[i]) {
    orderComparison = hacker1[i].localeCompare(hacker2[i]);
    break;
  }
}

if (orderComparison < 0) {
  console.log("The driver's name goes first.");
} else if (orderComparison > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const loremIpsumText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Etiam auctor, urna ac auctor fermentum, velit nisl malesuada libero, 
  vel sagittis elit nibh vel libero. Ut facilisis metus vel iaculis consequat.

  Vestibulum convallis, urna non sodales fermentum, ante justo efficitur nisi, 
  et volutpat nisi turpis sit amet ipsum. In hac habitasse platea dictumst. 
  Morbi vel enim a est consectetur elementum et et turpis. 
  Phasellus eu turpis quis risus eleifend auctor.

  Quisque bibendum massa a fermentum hendrerit. 
  Etiam id augue eu sem auctor fermentum. 
  Nullam aliquet, ex eu interdum accumsan, lacus elit posuere odio, 
  vel consectetur elit erat sit amet augue.
`;

// Count the number of words in the string
const wordCount = loremIpsumText.split(/\s+/).length;

// Count the number of times the Latin word "et" appears
const etCount = (loremIpsumText.match(/\bet\b/gi) || []).length;

// Print the results
console.log(`Number of words: ${wordCount}`);
console.log(`Number of occurrences of the Latin word "et": ${etCount}`);

// Bonus 2
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = cleanStr.length;
  
    // Loop to check characters from start and end
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (cleanStr[i] !== cleanStr[length - 1 - i]) {
        return false; // Characters don't match, not a palindrome
      }
    }
  
    return true; // All characters match, it's a palindrome
  };
  
  // Example usage:
  const phraseToCheck = "A man, a plan, a canal, Panama!";
  console.log(`Is "${phraseToCheck}" a palindrome? ${isPalindrome(phraseToCheck)}`);
  