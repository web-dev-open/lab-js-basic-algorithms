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
