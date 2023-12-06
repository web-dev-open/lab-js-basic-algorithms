// Iteration 1: Names and Input
let hacker1 = "Sarthak";
console.log("The driver's name is",hacker1);
let hacker2 = "Mahesh";
console.log("The navigator's name is",hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length) console.log("The driver has the longest name, it has "+ hacker1.length + " characters.");
else if (hacker2.length>hacker1.length) console.log("It seems that the navigator has the longest name, it has"+ hacker2.length +" characters.");
else console.log("Wow, you both have equally long names, "+ hacker1.length +" characters!");
// Iteration 3: Loops
let driver = hacker1.toUpperCase();
let result="";
for(let char of driver) result += char + ' ';
console.log(result.trim());

reverseNavigator="";
for(let char of hacker2.split('').reverse()) reverseNavigator+=char;
console.log(reverseNavigator.trim());

if (hacker1 === hacker2) console.log("What?! You both have the same name?")
else if (hacker1 < hacker2) console.log("The driver's name goes first")
else console.log("Yo, the navigator goes first definitely.")

