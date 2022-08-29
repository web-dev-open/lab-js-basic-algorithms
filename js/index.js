// Iteration 1: Names and Input

let hacker1 = "Mohammed";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Manish";
console.log(`The navigator's name is ${hacker2}`);
//

// Iteration 2: Conditionals
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
