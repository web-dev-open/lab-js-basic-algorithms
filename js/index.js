// Iteration 1: Names and Input
let hacker1 = "RUSHIKESH";
console.log("The driver's name is" + hacker1);

let hacker2  = "ADESH";
console.log("The navigator's name is YYYY" + hacker2);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length +  "characters.");
}else if(hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has"+ hacker2.length + "characters.");
}
else {
    console.log("Wow, you both have equally long names,"+ hacker1.length + "characters!");
}


// Iteration 3: Loops
let driverName = "John";
let driverNameInCaps = "";
for (let i = 0; i < driverName.length; i++) {
    driverNameInCaps += driverName[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim());


let navigatorName = "Jane";
let reversedNavigatorName = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    reversedNavigatorName += navigatorName[i];
}
console.log(reversedNavigatorName);


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
