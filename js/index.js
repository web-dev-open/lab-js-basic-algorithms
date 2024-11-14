// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

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
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
//3.1
let result = "";
for (i = 0; i < hacker1.length; i++) {
  if (i !== 3 || i !== hacker1.length) result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

//3.2 Print all the characters of the navigator's name, in reverse order.
result = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  result += hacker2[i];
}
console.log(result);

//3.3 Depending on the lexicographic order of the strings
const sortedNames = [hacker1, hacker2].sort();
if (sortedNames[0] === hacker1) {
  console.log(`The driver's name goes first.`);
} else if (sortedNames[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS
//1
const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum blanditiis facere tempore perspiciatis! Accusamus ipsa atque sapiente sunt unde nemo, exercitationem fugiat porro, ipsam, architecto aliquid dolorum ab ipsum.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis esse magnam magni porro voluptatem officiis qui maxime aut sed neque dolorum tempora nesciunt, corrupti sit. Officiis deserunt tempore a voluptatibus.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis ea ullam et aut, molestiae a temporibus magnam at quibusdam rem cum est enim doloribus quo, doloremque quas reiciendis corporis.
`;
console.log(paragraph.length);

console.log(`Latin 'et' appear:${paragraph.split("et").length - 1} times`);

//2
const stringcheck = "put it up".replace(/\s+/g, "").toLowerCase();
result = "";
for (i = stringcheck.length - 1; i >= 0; i--) {
  result += stringcheck[i];
}
if (result === stringcheck) {
  console.log("The string is a palindrome");
}
