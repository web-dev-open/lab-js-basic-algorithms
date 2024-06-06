console.log("I'm ready!");
// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
let hacker1="Steve"
//1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1)
//1.3 Create a variable hacker2 with the navigator's name.
let hacker2="Robin"
//1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverNameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order
let reversedNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName);

// 3.3 Depending on the lexicographic order of the strings, print
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

/*Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.

Make your program count the number of words in the string.

Make your program count the number of times the Latin word et appears.*/
// Generate 3 paragraphs of Lorem Ipsum text
let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

// Count the number of words in the text
let wordsCount = loremIpsumText.split(/\s+/).length;

// Count the number of times the Latin word "et" appears
let etCount = (loremIpsumText.match(/et/g) || []).length;

console.log("Number of words in the text:", wordsCount);
console.log("Number of times the Latin word 'et' appears:", etCount);


/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
*/

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}


// Create a new variable phraseToCheck and assign it a string value
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.toLowerCase();
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanStr += char;
        }
    }

    // Initialize two pointers, one at the beginning and one at the end of the string
    let left = 0;
    let right = cleanStr.length - 1;

    // Loop until the pointers meet in the middle
    while (left < right) {
        // Compare characters from the beginning with characters from the end
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        // Move the pointers towards the middle
        left++;
        right--;
    }
    return true; // If all characters match, it's a palindrome
}

// Check if the phrase is a palindrome
if (isPalindrome(phraseToCheck)) {
    console.log("The phrase is a palindrome.");
} else {
    console.log("The phrase is not a palindrome.");
}
