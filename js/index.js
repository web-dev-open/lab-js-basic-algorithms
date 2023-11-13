console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "bootpen";
console.log("The driver's name is " + hacker1);
let hacker2 = "pencamp";
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}



// Iteration 3: Loops
let HACKER1 = hacker1.toUpperCase();
let str = "";
for (let i = 0; i < HACKER1.length; i++) {
  str += HACKER1[i] + " ";
}
console.log(str);



//
let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);

//
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



//bonus

let para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in et reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. ";

let count = 0;

for (let i = 0; i < para.length; i++) {
  if (para[i] === " ") {
    count++;
  }
}

console.log("Total No. of Words: ", count);

//
count = 0;
for (let i = 1; i < para.length; i++) {
  if (
    para[i - 1] == " " &&
    para[i] == "e" &&
    para[i + 1] == "t" &&
    para[i + 2] == " "
  ) {
    count++;
  }
}

console.log("'et' is present " + count + " times");





//
let phraseToCheck = "Amor, Roma";
let reversedStr = "";

toCheck= phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, ' ');

 for (let i = phraseToCheck.length - 1; i >= 0; i--) {
      reversedStr += toCheck[i];
    }


if (reversedStr ===toCheck) {
  console.log("It's Palandrome");
}else{
console.log("It's not palindrome")
}
