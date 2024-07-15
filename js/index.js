// Iteration 1: Names and Input
let hacker1 = "Hamza"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Javed"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driverNameInCaps = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameInCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim());

let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bouns 1 : 
// generate 3 paragraphs and store the text in a variable:
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

console.log(loremIpsum);
// Count the number of words in the string:
let wordCount = loremIpsum.split(/\s+/).length;
console.log(`Number of words: ${wordCount}`);
// Count the number of times the word "et" appears
let etCount = (loremIpsum.match(/\bet\b/g) || []).length;
console.log(`Number of times 'et' appears: ${etCount}`);

// Bouns 2: 
let phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the string
    let reversedStr = cleanStr.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanStr === reversedStr;
}

console.log(`Is the phrase a palindrome? ${isPalindrome(phraseToCheck)}`);



