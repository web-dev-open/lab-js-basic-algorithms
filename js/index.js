console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Ben"; // driver's name
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sophie"; // navigator's name
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length >> hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length << hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length == hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
  console.log("Something went wrong!");
}

// Iteration 3: Loops

let SpellName = "";
for (let i = 0; i < hacker1.length; i++){
  if (i == hacker1.length - 1){
    SpellName += `${hacker1[i].toUpperCase()}`; // after last letter add no space
  } else {
  SpellName += `${hacker1[i].toUpperCase()} `; // add space between letters
  }
}
console.log(SpellName);

let ReverseName = "";
for (let i = 0; i < hacker2.length; i++){
  ReverseName += hacker2[hacker2.length - 1 - i];
}
console.log(ReverseName);

if (hacker1 < hacker2){
  console.log("The driver's name goes first.")
}else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}
