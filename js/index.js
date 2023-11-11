// Iteration 1: Names and Input
const hacker1 = "daniel";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Sam";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let driverNameSeprated = "";
for( let i=0; i < hacker1.length; i++){
    driverNameSeprated += hacker1[i].toUpperCase() +" ";
}
console.log(driverNameSeprated.trim());

let reversedNavigatorName = "";
for(let i= hacker2.length-1;i>=0; i--){
 reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName);
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  
  // Bonus Task1:
  const loremIpsumText = `
Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Cras bibendum et orci eu tempus. 
Aliquam varius odio et ex egestas, et pellentesque ipsum consequat. Etiam posuere, sapien et fermentum 
varius, felis sapien vehicula lorem, et auctor ante nunc in augue. Etiam et turpis ut metus bibendum 
vulputate. Phasellus dictum orci et congue. Suspendisse a libero et est facilisis bibendum. Sed et auctor 
nisl, et luctus felis.

Etiam at leo et nisi gravida tincidunt. Proin eget et malesuada elit. Fusce iaculis et augue eu 
suscipit. Sed et nisl et massa dapibus tristique. Nunc et odio et elit accumsan pharetra. Nam sit amet et 
turpis ac mi bibendum congue vel nec justo. Ut eu eros et velit euismod aliquet. Maecenas in et arcu. 
Etiam vel ligula a libero malesuada aliquam.

In et etiam et urna eget malesuada. Nulla varius libero et facilisis, et vestibulum felis fringilla. Sed 
et et est. Maecenas gravida, et et ultrices eu, purus massa a urna, et aliquet ex sapien in dolor. 
Curabitur eu et libero ac porta. Etiam id pharetra justo, et vel nulla. Sed et eu lectus a libero dapibus 
vulputate.
`;

// Count the number of words in the string
const wordsCount = loremIpsumText.split(/\s+/).length;

// Count the number of times the Latin word "et" appears
const latinWordCount = (loremIpsumText.match(/\bet\b/g) || []).length;

console.log(`Number of words: ${wordsCount}`);
console.log(`Number of times "et" appears: ${latinWordCount}`);

// Bonus Task 2:

const phraseToCheck = "A man, a plan, a canal, Panama!";

const cleanString = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let isPalindrome = true;
for (let i = 0; i < cleanString.length / 2; i++) {
  if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
