// Iteration 1: Names and Input
const hacker1 = "Alex";
console.log("The driver's name is " + hacker1);
const hacker2 = "Den";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
const driverNameCapitalized = driverName.toUpperCase().split("").join(" ");
console.log(driverNameCapitalized);

const navigatorNameReversed = navigatorName.split("").reverse().join("");
console.log(navigatorNameReversed);

if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 2:
function isPalindrome(inputString) {
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
const phraseToCheck = "A man, a plan, a canal, Panama!";
const isPhrasePalindrome = isPalindrome(phraseToCheck);
console.log(`Is "${phraseToCheck}" a palindrome?`, isPhrasePalindrome);
