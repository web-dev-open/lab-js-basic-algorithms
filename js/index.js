// Iteration 1: Names and Input

let hacker1 = "Zeus";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Zeus";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
let splitName = hacker1.toUpperCase().split("");
console.log(splitName);
let spaceName = splitName.toString();
let result = spaceName.replace(/,/g, " ");
console.log(result);

let myArray = [];
let length = hacker2.length - 1;
for (let i = length; i >= 0; i--) {
  myArray.push(hacker2[i]);
}
console.log(myArray.join(""));

// Lexicographic order

let lexiArray = [hacker1, hacker2];
lexiArray.sort();
if (lexiArray[0] == hacker1 && lexiArray[0] == hacker2) {
  console.log("What?! You both have the same name?");
} else if (lexiArray[0] == hacker1) {
  console.log("The driver's name goes first");
} else if (lexiArray[0] == hacker2) {
  console.log("Yo, the navigator goes first definitely.");
}
