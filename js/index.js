// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jack";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
if( driverLength === navigatorLength) {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
} else if(driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`);
}

// Iteration 3: Loops
let driverCapital = hacker1.toUpperCase();  // 3.1
console.log(`"${driverCapital.split('').join(' ')}"`);


let reversedStr = [...hacker2].reverse().join(""); // 3.2
console.log(`"${reversedStr}"`);


if(hacker1 < hacker2) {  // 3.3
    console.log("Yo, the navigator goes first definitely.");
}else if(hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}
