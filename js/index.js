// Iteration 1: Names and Input
let hacker1 = 'Joe'
console.log("The driver's name is "+hacker1);

let hacker2 = 'John'
console.log("The navigator's name is "+hacker2);
//
// Iteration 2: Conditionals
let len_hacker1 = hacker1.length;
let len_hacker2 = hacker2.length;

if (len_hacker1 > len_hacker2){
    console.log("The driver has the longest name, it has "+len_hacker1+" characters");
}
else if (len_hacker1 < len_hacker2){
    console.log("It seems that the navigator has the longest name, it has "+len_hacker2+" characters");
}
else{
    console.log("Wow, you both have equally long names, "+len_hacker1+" characters!");
}


// Iteration 3: Loops
let driverName = "John"; 

let spacedName = ""; 
for (let i = 0; i < driverName.length; i++) {
  spacedName += driverName[i].toUpperCase(); 
  if (i < driverName.length - 1) {
    spacedName += " "; 
  }
}
console.log(spacedName);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
