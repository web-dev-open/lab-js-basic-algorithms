// Iteration 1: Names and Input
let hacker1 = "Ajay";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Prithiv";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let len1 = hacker1.length;
let len2 = hacker2.length;
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters`);
}
else if (len1 === len2) {
    console.log(`Wow, you both have equally long names, ${len1} characters!`);
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${len2} characters`);
}

// Iteration 3: Loops
console.log(hacker1[0].toUpperCase + " " + hacker1[1].toUpperCase + " " + hacker1[2].toUpperCase + " " + hacker1[3].toUpperCase + " ");

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}