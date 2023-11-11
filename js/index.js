// Iteration 1: Names and Input
let hacker1 = 'mujahiddin'
let hacker2 = 'mohammad'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}else if(hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}else{
  console.log("Wow, you both have equally long names, "+hacker2.length+  " characters!")
}
// Iteration 3: Loops
let driver_name = ""
while(hacker1.length !== 0){
  driver_name += hacker1[0].toUpperCase() + " "
  hacker1 = hacker1.slice(1)
}console.log(driver_name)

let revname = ""
while(hacker2.length !== 0){
  revname += hacker2[hacker2.length-1]
  hacker2 = hacker2.slice(0,-1)
}console.log(revname)

let compare = hacker1.localeCompare(hacker2)
console.log(compare)
if(compare < 0){
  console.log("The driver's name goes first.")
}else if(compare > 0){
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}

if (hacker1 < hacker2) {
 console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
 console.log("Yo, the navigator goes first definitely.");
} else {
 console.log("What?! You both have the same name?");
}

//bonus task

// Generate 3 paragraphs of text
let paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
let paragraph2 = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let paragraph3 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Combine paragraphs into a single string
let fullText = paragraph1 + " " + paragraph2 + " " + paragraph3;

// Count the number of words in the string
let wordCount = fullText.split(/\s+/).length;

// Count the number of times the Latin word "et" appears
let etCount = (fullText.match(/\bet\b/g) || []).length;

// Display the results
console.log("Number of words:", wordCount);
console.log("Number of occurrences of 'et':", etCount);



//bonus task 2

// Create a new variable
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned string is a palindrome
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Check if the phrase is a palindrome
if (isPalindrome(phraseToCheck)) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}
