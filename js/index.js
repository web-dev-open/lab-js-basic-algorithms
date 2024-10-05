console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Aman";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Rio";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
//calculate lengths
let hacker1len=hacker1.length;
let hacker2len=hacker2.length;
//compare
if(hacker1len>hacker2len){
    console.log(`The driver has the longest name,it has ${hacker1len} characters.`);
}else if(hacker2len>hacker1len){
console.log(`The navigator has the longest name,it has ${hacker2len} characters.`);
}
else{
    console.log(`wow,both have equally long names,${hacker1len} characters`);
}
 
// Iteration 3: Loops
//first the driver name is captialzed then every word is splited and then its joined back with space between them.
console.log(hacker1.toUpperCase().split('').join(' '));
//then the navigator name is splited then reversed and joined back together.
console.log(hacker2.split('').reverse().join(''));

if(hacker1<hacker2){
    console.log(`The driver's name goes first.`);
}
else if(hacker1>hacker2){
    console.log(`Yo,the navigator goes first definately.`);
}
else{
    console.log(`What?! you both have the same name?`);
}
