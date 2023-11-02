// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "XXXX";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "YYYY";

// 1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2);

//
// Iteration 2: Conditionals

// Depending on which name is longer.

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally names, " + hacker1.length + " characters !");
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverName = hacker1.toUpperCase();
let driverNameWithSpaces = "";
for (let i = 0; i < driverName.length; i++) {
    driverNameWithSpaces += driverName[i] + " ";
}
console.log(driverNameWithSpaces.trim());


// 3.2 Print all the characters of the navigator's name, in reverse order.
let navigatorName = hacker2;
let reversedNavigatorName = "";
for (let i = navigatorName.length - 1; i >= 0; i--){
    reversedNavigatorName += navigatorName[i];
}
console.log(reversedNavigatorName);


// 3.3 Depending on the lexicographic order of the strings, print:

let comparisonResult = driverName.localeCompare(navigatorName);
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}