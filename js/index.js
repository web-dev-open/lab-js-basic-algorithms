
console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "John";
console.log("The driver's name is " + hacker1);





const hacker2 = "Simon";
console.log("The navigator's name is " + hacker2);
//
// Iteration 2: Conditionals
const lengthDriver = hacker1.length;
const lengthNavigator = hacker2.length;
if (lengthDriver > lengthNavigator) {
    console.log("The driver has the longest name, it has " + lengthDriver + " characters.");
} else if (lengthNavigator > lengthDriver) {
    console.log("It seems that the navigator has the longest name, it has " + lengthNavigator + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + lengthDriver + " characters!");
}

// Iteration 3: Loops
const driverupper = hacker1.split('').join(' ').toUpperCase();
console.log(driverupper);
const navigatorReverse = hacker2.split('').reverse().join('');
console.log(navigatorReverse);
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}