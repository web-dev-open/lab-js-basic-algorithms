// Iteration 1: Names and Input
let hacker1 = "Ian";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Duncan";
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names ${hacker1.length + hacker2.length} characters!`);
}

// Iteration 3: Loops
// Step 3.1 Print all characters of the driver's name separated by space in capital letters
let initialName = "";
for (let i = 0; i < hacker1.length; i++) {
    initialName += hacker1[i].toLocaleUpperCase() + " ";
}
console.log(initialName.trim());

// Step 3.2 Print all characters of the navigato's name in reverse order
let reversedName = "";

for (let i =  hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

// Step 3.3 Determine the lexicographic order and print the appropriate message
if (hacker1 < hacker2) {
    console.log("The driver's name oes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definetly.");
} else {
    console.log("What?! You both have the same name?");
}


