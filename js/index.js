// Iteration 1: Names and Input

let hacker1 = "Nostradamus";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Platon";
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
// Iteration 3: Loops

/*

3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.`  <br>

- `Yo, the navigator goes first definitely.`  <br>

- `What?! You both have the same name?`
*/

//3.1
let newName = "";

for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase();
  if (i !== hacker1.length) {
    newName += " ";
  }
}
console.log(newName);

//3.2

let reversedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}

console.log(reversedName);

//3.2
