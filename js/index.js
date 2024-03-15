// Iteration 1: Names and Input

let hacker1 = "John Doe";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane Doe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

// Iteration 3: Loops

//3.1
console.log(hacker1.toUpperCase().split("").join(" "));

//3.2
console.log(hacker2.split("").reverse().join(""));

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
//Generate 3 paragraphs. Store the text in a variable type of string.
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam auctor, nulla nec bibendum lacinia, libero libero aliquam turpis, ut laoreet justo libero nec libero. Sed vitae nunc nec libero volutpat aliquam. Sed nec libero libero. Nulla facilisi. Nulla`;

//Make your program count the number of words in the string.
console.log(lorem.split(" ").length);

//Make your program count the number of times the Latin word et appears.
console.log(lorem.split("et").length);

//Bonus 2
//Check if a word is a Palindrome

let phraseToCheck = "racecar";
let isPalindrome = true; // used this to be able to check if the string is a palindrome or not

//This doesn't care about the remainder of the division, but just the whole number part.
for (let i = 0; i < phraseToCheck.length / 2; i++) {
  if (
    //start of the string !== end of the string
    phraseToCheck[i].toLowerCase() !==
    phraseToCheck[phraseToCheck.length - 1 - i].toLowerCase()
  ) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}
