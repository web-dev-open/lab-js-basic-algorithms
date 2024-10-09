
//


// Iteration 1: Names and Input
let hacker1 = "Harish";
let hacker2 = "Ravikant";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `);
}else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters `);
}
// Iteration 3: Loops
let space = " ";
for(let letter of hacker1){
  space = space + letter + " ";
}
console.log(space.toUpperCase());

var spaced = " ";
for(let letter of hacker1){
  var spaced = letter +  spaced;
}
console.log(spaced);

if (hacker1 > hacker2 ){
    console.log(`The driver's name goes first`);
} else {
    console.log("Yo, the navigator goes first definitely.");

}   
