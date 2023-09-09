// Iteration 1: Names and Input
//
console.log("I´m ready!");

const hacker1 = "Alina";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Gori";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// Appercase
let newStr = "";
for (let i = 0; i <= hacker1.length; i++) {
    newStr += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(newStr);

//Reverse
let newHac2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newHac2 += hacker2[i];
}
console.log(newHac2);

/* alternative solution without loops:
const splittedString = hacker1.split('').join(' ').toUpperCase();
console.log(splittedString);
------------------------------------
function reverceStr(secondName) {
    return secondName.split("").reverse().join("")
}
reverceStr(hacker2)
*/
for (let i = 0; i < 1; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}
