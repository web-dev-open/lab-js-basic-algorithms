console.log("I'm ready!!");

// Iteration 1: Names and Input

let hacker1 = "Prashanth";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Shiva Kumar";
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

let driverNameLength = hacker1.length
let navigatorNameLength = hacker2.length

if (driverNameLength > navigatorNameLength){
    console.log(`The driver has the longest name, it has ${driverNameLength} characters`);
}
else if(navigatorNameLength > driverNameLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
