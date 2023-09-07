// Iteration 1: Names and Input
var hacker1 = "DriverName";
console.log("the driver's name is" + hacker1);

var hacker2 = "NavigatorName";
console.log("the navigator's name is" + hacker2);

// Iteration 2: Conditionals
var hacker1 = "DriverName";
var hacker2 = "NavigatorName";

var driverNameLenght = hacker1.length;
var navigatorNamelenght = hacker2.length;

if(driverNameLenght > navigatorNamelenght) {
    console.log("The driver has the longest name, it has" + driverNameLenght + "characters");
} 
else if(driverNameLenght < navigatorNamelenght)
{
    console.log("It seems that the navigator has the longest name," + navigatorNamelenght + "characters")
} 
else {
    console.log ("Wow, you both have equally long names, XX characters!");
}


// Iteration 3: 
let driverNameCapital = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameCapital += hacker1[i].toUpperCase() + " ";
}
driverNameCapital = driverNameCapital.trim();
console.log(driverNameCapital);


let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReverse += hacker2[i];
}

console.log(navigatorNameReverse);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

console.log("I'm ready");
