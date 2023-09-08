// Iteration 1: Names and Input
const hacker1 = 'Paul';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Manish';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

const driverNameIsLonger = driverNameLength > navigatorNameLength;
const navigatorNameIsLonger = navigatorNameLength > driverNameLength;

if (driverNameIsLonger) {
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (navigatorNameIsLonger) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
