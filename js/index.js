// Created by Nathan Chan for webDevOpen
// LAB | JS Basic Algorithms

// Created by Nathan Chan for webDevOpen

console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name
let hacker1 = "John";

// 1.2 Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name
let hacker2 = "Alice";

// 1.4 Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1 Compare the lengths of the names
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
  }

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    driverUpperCase += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        driverUpperCase += " ";
    }
}
console.log(driverUpperCase);

// 3.2 Print all the characters of the navigator's name, in reverse order
let navigatorReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

// 3.3 Compare the lexicographic order of the strings
let lexicographicOrder = 0;
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
        lexicographicOrder = -1;
        break;
    } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()) {
        lexicographicOrder = 1;
        break;
    }
}

if (lexicographicOrder === 0) {
    if (hacker1.length < hacker2.length) {
        lexicographicOrder = -1;
    } else if (hacker1.length > hacker2.length) {
        lexicographicOrder = 1;
    }
}

if (lexicographicOrder < 0) {
    console.log("The driver's name goes first.");
} else if (lexicographicOrder > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1

// Store the text in a variable type of string
let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id libero nec urna mattis scelerisque quis sit amet lorem. Duis sed venenatis sapien. Praesent interdum nisi a semper auctor. In eu justo id dolor semper egestas. Vestibulum vel ex mi. Ut a arcu sodales, vestibulum magna eget, auctor urna. Pellentesque congue maximus ligula ut placerat. Proin euismod, turpis ut molestie placerat, ligula justo dictum turpis, a eleifend dui justo sit amet mi. Maecenas sit amet tempus risus. Aenean ut volutpat lacus, in convallis ligula. Vivamus sed nibh turpis. Vestibulum vitae tellus nec quam consequat suscipit non sed purus.

Aenean pharetra ultricies eros blandit mollis. Etiam tempus auctor mollis. Sed pretium mi libero, id sodales magna interdum aliquet. Vivamus mollis dolor auctor nibh vestibulum gravida. Maecenas tempus eros vulputate, tincidunt elit at, gravida libero. Mauris sed ipsum interdum, ultrices nibh ut, faucibus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vehicula erat ac tellus commodo, vitae sollicitudin est pulvinar. Praesent varius tortor magna, bibendum aliquet mauris porttitor non. Pellentesque sed varius magna. Maecenas ultrices arcu sit amet enim interdum volutpat. Ut porta eu nibh eget posuere. Fusce eu metus ac nibh fermentum viverra nec at velit. Morbi aliquet tortor vitae tincidunt semper. Nunc aliquet lorem a sem hendrerit, vitae volutpat lectus dignissim. Cras sagittis tortor a purus luctus fermentum.

Mauris blandit lacinia hendrerit. Praesent finibus non ipsum eu interdum. Cras maximus commodo ante, in ullamcorper diam maximus et. Quisque vestibulum felis in enim iaculis, in porttitor orci imperdiet. Etiam imperdiet purus imperdiet nulla malesuada, eget finibus erat venenatis. Pellentesque a tortor ut purus ultrices mattis. Aliquam quis odio nunc. Maecenas blandit aliquam mauris, sed sodales urna. Mauris dignissim elit et ante tempor, quis ornare leo pellentesque. Suspendisse quam quam, porta sit amet massa quis, semper vestibulum magna. Pellentesque pretium lorem vel nisi fermentum, ac mollis felis eleifend. In ut tincidunt arcu. Vivamus pulvinar sagittis ipsum, id bibendum enim tempus id. Praesent odio urna, placerat id maximus et, congue eget turpis.`;

// Count the number of words in the string
let words = loremIpsumText.trim().split(/\s+/).length; 
console.log("Number of words: " + words);

// Count the number of times the Latin word "et" appears

function countEtOccurrences(text) {
    // Convert the text to lowercase to make the search case-insensitive
    const lowerCaseText = text.toLowerCase();
    
    // Use a regular expression to match 'et' as a whole word
    const etRegex = /\bet\b/g;
    
    // Use the match() method to find all occurrences
    const matches = lowerCaseText.match(etRegex);
    
    // Return the count of matches, or 0 if no matches found
    return matches ? matches.length : 0;
}

const etCount = countEtOccurrences(loremIpsumText);
console.log(`The word 'et' appears ${etCount} times.`);

// Bonus 2

function isPalindrome(phrase) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned phrase with its reverse
    return cleanPhrase === cleanPhrase.split('').reverse().join('');
}

// Test cases
const phrasesToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "This is not a palindrome"
];

phrasesToCheck.forEach(phrase => {
    console.log(`"${phrase}" is ${isPalindrome(phrase) ? 'a palindrome' : 'not a palindrome'}`);
});
