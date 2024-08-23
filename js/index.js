console.log('I\'m ready!');

// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name
// 1.2 Print "The driver's name is XXXX"
// 1.3 Create a variable hacker2 with the navigator's name
// 1.4 Print "The navigator's name is "YYYY"
let hacker1 = "Kirti";
console.log("The driver's name is " + hacker1);
let hacker2 = "Lisa";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1 Compare the lengths of the names and print the appropriate message

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
  }

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverNameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces.trim());

// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Lexicographic order comparison
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1
// Lorem Ipsum text stored in a variable
let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.

Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis. Nulla facilisi. Phasellus consectetuer vestibulum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.`;

// Function to count the number of words
function countWords(text) {
  return text.split(/\s+/).length;
}

// Function to count the occurrences of the word "et"
function countOccurrences(text, word) {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  return (text.match(regex) || []).length;
}

// Count the number of words
let wordCount = countWords(loremIpsumText);
console.log("Number of words:", wordCount);

// Count the occurrences of the word "et"
let etCount = countOccurrences(loremIpsumText, "et");
console.log("Number of occurrences of 'et':", etCount);

// BONUS 2
// Create a variable phraseToCheck and assign a string value
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Function to check if a string is a palindrome
function isPalindrome(phrase) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reversing the cleaned phrase
  let reversedPhrase = cleanedPhrase.split('').reverse().join('');
  
  // Checking if the cleaned phrase is equal to the reversed phrase
  return cleanedPhrase === reversedPhrase;
}

// Checking if the phrase is a palindrome
if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
