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
let nameWithSpace = ""
let driverNameCapitalized = hacker1.toUpperCase()
for (let i = 0; i<driverNameLength;i++){
    nameWithSpace += `${driverNameCapitalized[i]} `
}
console.log(nameWithSpace)


let reversedName = ""
for (let i = driverNameLength-1; i>-1; i--){
    reversedName += hacker1[i]
}

console.log(reversedName)

// Lexicographic order

if (hacker1<hacker2){
    console.log("The driver's name goes first.");
} else if (hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}