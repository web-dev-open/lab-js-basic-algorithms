console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Jude";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gio";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length >hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
for (letter of hacker1){
    console.log(letter.toUpperCase() + " ");
}
let reversedString ="";
for(let i = hacker1.length-1 ; i>=0;i--){
    reversedString+= hacker1[i];
}
console.log(reversedString);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
