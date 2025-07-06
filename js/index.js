console.log("I'm ready! This is just the first lab assignment.");

// Iteration 1: Names and Input
const hacker1 = "Moon"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Sun"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker2.length > hacker1.length) {
    console.log(`So this time the navigator has the longest name with ${hacker2.length} characters.`)
} else {
    console.log(`Both have the same length! ${hacker1.length} characters.`);
}

// Iteration 3: Loops
let name1 = ""
for (character of hacker1.toUpperCase()) {
    name1 += character + ' '
}
console.log(name1.trim())

let name2 = ""
for (character of hacker2) {
    name2 = hacker2.split("").reverse().join("")
}
console.log(name2)

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("The navigator's name goes first definitely.");
} else {
    console.log("Yeah, they've the same name already.")
}

// Bonus 1
const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo ac nunc tincidunt tincidunt.
Vestibulum et nulla quis lorem tincidunt consequat. Aenean ut sapien sit amet elit volutpat pretium.
Nulla facilisi. Fusce et nisl ac elit dignissim sagittis. Etiam vitae justo sed purus convallis luctus.
`;

const cleanLorem = loremIpsum.replace(/[.,!?\n]/g, "");

const array = cleanLorem.split(" ");
console.log(array);

let howMany = 0;
for (word of array) {
	if (word === "et") {
		howMany += 1;
	}
}
console.log(howMany);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!"

const cleanPhrase = phraseToCheck.toLowerCase().replace(/[\W_]/g, "")

const reversed = cleanPhrase.split("").reverse().join("")

if (cleanPhrase === reversed) {
  console.log("Palindrome!")
} else {
  console.log("No palindrome...")
}