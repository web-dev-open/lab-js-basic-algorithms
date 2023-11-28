console.log('i am ready');

// Iteration 1: Names and Input

let hacker1 = "the driver's name is xxxx";

console.log(hacker1);

let hacker2 = "the navigator's name is yyyy"

console.log(hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has XX characters");
} else if (hacker1.length < hacker2.length) {
    console.log("The navigator has the longest name, it has XX characters");
} else{
    console.log("Wow, you both have equally long names, XX characters!");
}


// Iteration 3: Loops
// Driver's name
let driverName = "John";

// Navigator's name
let navigatorName = "Jane";

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals using a loop
let driverNameWithSpaces = "";
for (let i = 0; i < driverName.length; i++) {
    driverNameWithSpaces += driverName[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order using a loop
let reversedNavigatorName = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    reversedNavigatorName += navigatorName[i];
}
console.log(reversedNavigatorName);

// 3.3 Compare the lexicographic order of the names
if (driverName < navigatorName) {
    console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
