// Iteration 1: Names and Input

//first name
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

//second name
let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

//if-else conditon to cjeck initialixed naem length
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops

let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCase.trim());

// name in reverse
let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);








