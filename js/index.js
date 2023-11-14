console.log("I'm ready!");
// Iteration 1: Names and Input
var hacker1 = "Sophia";
console.log(`The driver's name is ${hacker1}`);
var hacker2  = "Mathew";
console.log(`The Navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
// Iteration 3: Loops
console.log("Driver's name is : ");
Array.from(hacker1).forEach(elem => { 
    console.log(elem); 
    console.log(" ");
});
console.log("Navigator's name is : ");
Array.from(hacker2).forEach(elem => { 
    console.log(elem); 
    console.log(" ");
});
if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
}
else if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
}
else{
    console.log("What?! You both have the same name?");
}
