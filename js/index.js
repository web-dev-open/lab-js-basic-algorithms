// Iteration 1: Names and Input
console.log("I'm ready!");

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Sunil";

console.log("The driver's name is " + hacker1);

let hacker2 = "Raj";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// Compare the lengths of the names
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Interesting that you both have equally long names!, " + hacker1.length + " characters each!");
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverNameSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i !== 0) {
        driverNameSeparated += " ";
    }
    driverNameSeparated += hacker1[i].toUpperCase();
}
console.log("Driver's name characters separated by space and in capitals:");
console.log(driverNameSeparated);

// 3.2 Print all the characters of the navigator's name, in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i>=0; i--) {
    navigatorNameReversed += hacker2[i]
}

console.log("Navigator's name characters in reverse order:");
console.log(navigatorNameReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
let comparisonResult = "";
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
        comparisonResult = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        comparisonResult = "Yo, the navigator goes first definitely.";
        break;
    }
}

if (comparisonResult === "") {
    if(hacker1.length < hacker2.length) {
        comparisonResult = "The driver's name goes first";
    } else if (hacker1.length > hacker2.length){
        comparisonResult = "Yo, the navigator goes first.";
    } else {
        comparisonResult = "What?! You both have the same name?";
    }
}
console.log(comparisonResult);