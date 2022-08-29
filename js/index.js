// Iteration 1: Names and Input
//1.1, 1.2, 1.3, 1.4:
let hacker1 = "Mohammed";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Manish";
console.log(`The navigator's name is ${hacker2}`);
//

// Iteration 2: Conditionals
//2.1
let lenOfhacker1 = hacker1.length;
let lenOfhacker2 = hacker2.length;

if (lenOfhacker1 > lenOfhacker2) {
  console.log(
    `The ${hacker1} has the longest name, it has ${lenOfhacker1} characters.`
  );
} else if (lenOfhacker2 > lenOfhacker1) {
  console.log(
    `It seems that the ${hacker2} has the longest name, it has ${lenOfhacker2} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lenOfhacker1} characters!`
  );
}
// Iteration 3: Loops
//3.1
const newString = hacker1.toLocaleUpperCase();
let result = "";
for (let idx = 0; idx < newString.length; idx++) {
  if (idx != newString.length - 1) {
    result = result + newString[idx] + " ";
  } else {
    result = result + newString[idx];
  }
}
console.log(`"${result}"`);

//3.2
let revStr = "";
for (let idx = hacker2.length - 1; idx >= 0; idx--) {
  revStr = revStr + hacker2[idx];
}
console.log(`"${revStr}"`);
