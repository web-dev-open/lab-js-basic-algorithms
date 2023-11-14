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
