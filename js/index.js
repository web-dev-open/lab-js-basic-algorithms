console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "ayush";
console.log("The driver's name is "+hacker1);
let hacker2 = "yash";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length< hacker2.length){
console.log(`It seems the navigator has longest name, it has ${hacker2.length} characters `);
}
else if(hacker1.length == hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters `);
}
else{
console.log("something went the other way round!");
}

// Iteration 3: Loops

let result = "";
let result1 = "";
 
for(i=0; i<hacker1.length ; i++){
result += hacker1[i].toUpperCase() + "";
}
console.log(result);

for(i=hacker2.length-1; i>=0; i--){
result1 += hacker2[i];
}

console.log(result1);

// Bonus1

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget nisl non dolor eleifend consequat non vitae massa. Cras quis eleifend magna. Aenean nec massa orci. Morbi at nunc quis mi ultrices bibendum. Donec eros ante, scelerisque vel arcu sed, mattis interdum urna. Cras suscipit neque vitae urna facilisis semper. Curabitur at pellentesque dui, eu iaculis mi.";

// Convert text to lowercase to make the search case-insensitive
let lowerCaseText = text.toLowerCase();

// Use a regular expression to find all occurrences of "et" in the text
let matches = lowerCaseText.match(/et/g);

// Count the number of matches found
let etCount = matches ? matches.length : 0;

console.log(`The Latin word "et" appears ${etCount} times.`);

//Bonu2
function isPalindrome(phrase) {
  // Normalize the input
  const normalized = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Get the length of the normalized string
  const len = normalized.length;

  // Use a for loop to compare characters from beginning and end
  for (let i = 0; i < len / 2; i++) {
    if (normalized[i] !== normalized[len - 1 - i]) {
      return false; // Not a palindrome
    }
  }

  return true; // Is a palindrome
}

// Example usage:
const phrase = "A man, a plan, a canal, Panama";
console.log(isPalindrome(phrase)); // Output: true

