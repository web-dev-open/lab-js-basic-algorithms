// Iteration 1: Names and Input
const hacker1 = "Maverick"
console.log("The driver's name is " + hacker1);

const hacker2 = "Goose"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const hacker1_len = hacker1.length
const hacker2_len = hacker2.length

if (hacker1_len > hacker2_len)
    console.log(`The driver has the longest name, it has ${hacker1_len} characters.`);
else if (hacker1_len < hacker2_len)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2_len} characters.`);
else
    console.log(`Wow, you both have equally long names, XX characters!`);

// Iteration 3: Loops
let h1 = ""
for (let i = 0; i < hacker1.length; i++)
    h1 += hacker1[i].toUpperCase() + " "
console.log(h1);

let h2 = ""
for (let i = hacker2.length - 1; i >= 0; i--)
    h2 += hacker2[i]
console.log(h2);

if (hacker1.localeCompare(hacker2) < 0)
    console.log("The driver's name goes first.");
else if (hacker1.localeCompare(hacker2) > 0)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?");