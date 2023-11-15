console.log('I am ready to Start');

// Iteration 1: Names and Input

let hacker1 = "Muhammad Zeeshan Hassan";
console.log(`Driver Name is ${hacker1}`);

let hacker2 = "Hamza Mehmood";
console.log(`Navigator Name is ${hacker2}`);

// Iteration 2: Conditionals

let driversNameLength = hacker1.length();
let navigatorNamesLength = hacker2.length();

if (driversNameLength > navigatorNamesLength) {
    console.log(`Driver has Longest Name with Length of ${driversNameLength}.`);
}
else if (driversNameLength === navigatorNamesLength) {
    console.log(`Wow! That's great Both have same length name ${driversNameLength}.`);
}
else {
    console.log(`Navigator has Longest Name with Length of ${navigatorNamesLength}.`);
}

// Iteration 3: Loops

if (driversNameLength > navigatorNamesLength) {
    hacker1 = toUpperCase(hacker1);
    for (let i = driversNameLength; i > 0; i -= 1) {
        console.log(`${hacker1[i]} `);
    }
    hacker2 = toLowerCase(hacker2);
    for (let i = 0; i < navigatorNamesLength; i += 1) {
        console.log(hacker2[i]);
    }
}
else if (driversNameLength === navigatorNamesLength) {
    hacker1 = toUpperCase(hacker1);
    for (let i = driversNameLength; i > 0; i -= 1) {
        console.log(`${hacker1[i]} `);
    }
    hacker2 = toLowerCase(hacker2);
    for (let i = 0; i < navigatorNamesLength; i += 1) {
        console.log(hacker2[i]);
    }
}

else {
    hacker2 = toLowerCase(hacker2);
    for (let i = 0; i < navigatorNamesLength; i += 1) {
        console.log(hacker2[i]);
    }
    hacker1 = toUpperCase(hacker1);
    for (let i = driversNameLength; i > 0; i -= 1) {
        console.log(`${hacker1[i]} `);
    }
}

// Bonus Activity 1

let loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, turpis vel lacinia tristique, orci ex vestibulum ex, at cursus massa est a nulla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

// Using Built In Function
// let totalWords = getWordCount(loremIpsumText);
// console.log(`Total Number of Words in Lorem Ipsum Text String are ${totalWords}.`);

let totalWords = 0;
for (let i = 0; i < loremIpsumText.length(); i += 1) {
    if (loremIpsumText[i] == ' ') {
        totalWords += 1;
    }
}
console.log(`Total Number of Words in Lorem Ipsum Text String are ${totalWords}.`);

let wordshavinget = 0;
for (let i = 0, j = 1; j < loremIpsumText; i += 1, j += 1) {
    if (loremIpsumText[i] == 'e' && loremIpsumText[j] == 't') {
        wordshavinget += 1;
    }
}
console.log(`Total Number of Words in Lorem Ipsum Text having et are ${wordshavinget}.`);


// Bonus Activity 2

let pharaseToCheck = "A man, a plan, a canal, Panama!";
pharaseToCheck = toLowerCase(pharaseToCheck);

let i = 0;
let j = pharaseToCheck.length();

while (i < j) {
    if (pharaseToCheck[i] == pharaseToCheck[j]) {
        i += 1;
        j += 1;
    }

    else if (pharaseToCheck[i] == ',' || pharaseToCheck[i] == '!'
        || pharaseToCheck[i] == '.' || pharaseToCheck[i] == ' ') {
        i += 1;
    }
    else if (pharaseToCheck[j] == ',' || pharaseToCheck[j] == '!'
        || pharaseToCheck[j] == '.' || pharaseToCheck[j] == ' ') {
        j += 1;
    }
}

if (i == j) {
    console.log(`String is Palindromic.`)
}
else {
    console.log(`String is Palindromic.`)
}