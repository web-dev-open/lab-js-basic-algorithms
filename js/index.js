// Iteration 1: Names and Input

let hacker1 = "The driver's name is Taehyung";
let hacker2 = "The navigator's name is Jungkook";
console.log(hacker1);
console.log(hacker2);

// Iteration 2: Conditionals

let hacker1name = "Taehyung";
let hacker2name = "Jungkook";
let lengthHacker1 = hacker1name.length;
let lengthHacker2 = hacker2name.length;

if (lengthHacker1 > lengthHacker2) {
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`);
} else if (lengthHacker2 > lengthHacker1) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`);
}


// Iteration 3: Loops

let upperCaseName = hacker1name.toUpperCase();
let spacedName = "";
for (let i = 0; i < upperCaseName.length; i++) {
    spacedName += upperCaseName[i] + " ";
}
console.log(spacedName.trim());
let reversedName = hacker2name.split('').reverse().join('');
console.log(reversedName);

if (hacker1name < hacker2name) {
    console.log("The driver's name goes first.");
} else if (hacker1name > hacker2name) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
