console.log("I am ready!");

// Iteration 1: Names and Input
//
const hacker1 = "Suman";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Tania";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
 
if (hacker1.length>hacker2.length){
    console.log( `${hacker1}'s name has more letters than ${hacker2}`)
}
else if (hacker2.length>hacker1.length){
    console.log( `${hacker2}'s name has more letters than ${hacker1}`)
}
else (hacker1.length===hacker2.length); {
    console.log('Both names have the same number of letters')
}

// Iteration 3: Loops
// 3.1
let driverName = "john";
let driverNameInCaps = "";

for (i=0; i<driverName.length; i++) {
    driverNameInCaps += driverName[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim())

// 3.2
let original = "John";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);

// 3.3
if (hacker1<hacker2){
    console.log("The driver's name go first")
}
else if(hacker1>hacker2){
    console.log("The navigator's name goes first")
}
else{
    console.log("They are equal in length")
}
