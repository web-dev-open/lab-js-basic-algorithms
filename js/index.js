// Iteration 1: Names and Input
//
console.log("I'm ready!");
let hacker1 = "JOSH";
console.log("The driver's name is " + hacker1);
let hacker2 = "MILAN"; 
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;
if (driverNameLength > navigatorNameLength) {
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (navigatorNameLength > driverNameLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
let formattedDriverName = hacker1.split('').join(' ').toUpperCase();
console.log(formattedDriverName);
let reversedNavigatorName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorName);
let comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
const loremText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien nec justo tincidunt lacinia. Etiam euismod, quam ut interdum vestibulum, libero nisl tincidunt justo, vel bibendum nunc nisl id justo. Nullam eget justo nec nunc hendrerit facilisis. Etiam et risus euismod, venenatis libero non, tincidunt justo. Etiam auctor, justo a aliquet dignissim, odio urna volutpat justo, vel tincidunt nunc nunc nec nunc. Etiam euismod, quam ut interdum vestibulum, libero nisl tincidunt justo, vel bibendum nunc nisl id justo. Nullam eget justo nec nunc hendrerit facilisis. Etiam et risus euismod, venenatis libero non, tincidunt justo. Etiam auctor, justo a aliquet dignissim, odio urna volutpat justo, vel tincidunt nunc nunc nec nunc.
`;

// Count the number of words
const wordCount = loremText.split(/\s+/).length;
// Count occurrences of "et"
const etCount = (loremText.match(/\bet\b/g) || []).length;

console.log(`Number of words: ${wordCount}`);
console.log(`Occurrences of "et": ${etCount}`);

// Check if palindrome
const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const isPalindrome = cleanedPhrase === cleanedPhrase.split('').reverse().join('');

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
