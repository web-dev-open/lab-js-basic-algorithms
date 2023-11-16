console.log("I am ready");
// Iteration 1: Names and Input
let hacker1 = "ramesh"
console.log("The driver's name is " +hacker1);

let hacker2 = "suresh";
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +(hacker1.length) +" characters");
}
else if(hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " +(hacker2.length) +" characters");
}
else
    console.log("Wow, you both have equally long names", +hacker1.length +" characters!");


// Iteration 3: Loops
for(let i = 0; i<(hacker1.length); i++){
    let result = hacker1.charAt(i);
    let upper = result.toUpperCase();
    process.stdout.write(`${upper} `);

}
console.log();
for(let i=(hacker2.length - 1); i>=0; i--){
    let result = hacker2.charAt(i);
    process.stdout.write(`${result}`);
}

