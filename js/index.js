// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Zack";
console.log("The driver's name is " + hacker1);

const hacker2 = "Hamza"; 
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (driverNameLength < navigatorNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
let NameSeparated = "";

for (let i = 0; i < hacker1.length; i++) {
  NameSeparated += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(NameSeparated);


let NameReversed= "";

for (let i = hacker1.length -1 ; i >=0;i--){
  NameReversed += hacker1[i] ;
}

console.log(NameReversed);



let result = "";
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
        result = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        result = "Yo, the navigator goes first definitely.";
        break;
    }
}

if (result === "") {
    if (hacker1.length < hacker2.length) {
        result = "The driver's name goes first.";
    } else if (hacker1.length > hacker2.length) {
        result = "Yo, the navigator goes first definitely.";
    } else {
        result = "What?! You both have the same name?";
    }
}

console.log(result);