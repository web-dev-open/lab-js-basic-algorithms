// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Zack";
console.log("The driver's name is " + hacker1);

const hacker2 = "Hamza"; 
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (driverNameLength < navigatorNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
