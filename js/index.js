//Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Abel"
//1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1)
//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Abebeee"
//1.4 Print "The navigator's name is YYYY".
console.log("The driver's name is " + hacker2)

//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//The driver has the longest name, it has XX characters. or
let a = (hacker1.length)
let b = (hacker2.length)

if (a < b) {
  console.log("It seems that the navigator has the longest name, It has "+ hacker2.length + " Characters.");
} else if (a > b) {
  console.log("The driver has the longest name ,It has "+ hacker1.length + " Characters.");
} else {
  console.log("Wow, you both have equally long names," + hacker1.length +" characters. " );
}
//It seems that the navigator has the longest name, it has XX characters. or
//Wow, you both have equally long names, XX characters!.

//iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals  i.e. "J O H N"
//3.1 Print driver's name with spaces and in capitals
let driverNameWithSpaces = driver.toUpperCase().split('').join(' ');
console.log(driverNameWithSpaces);  // Output: "J O H N"

// 3.2 Print navigator's name reversed
let navigatorNameReversed = navigator.split('').reverse().join('');
console.log(navigatorNameReversed); // Output: "enaJ"

// 3.3 Compare lexicographic order
if (driver.localeCompare(navigator) < 0) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}