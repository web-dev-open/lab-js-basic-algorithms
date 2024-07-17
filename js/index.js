console.log("I am ready!!!");
// Iteration 1: Names and Input

let driverName = "John";
console.log(`The driver's name is ${driverName}`);

let navigatorName = "James";
console.log(`The navigator's name is ${navigatorName}`);
// Iteration 2: Conditionals

if (driverName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`);
}
else if (navigatorName.length > driverName.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`);
}

// Iteration 3: Loops

// printing characters with spaces...
let ans = "";
for (let i = 0; i < driverName.length; i++) {
    ans = ans + driverName[i] + " ";  // adding characters of drivername to empty string...
}
console.log(ans);

// printing navigators name in reverse order

let ans2 = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    ans2 += navigatorName[i];  // adding the characters from last to the empty string...
}
console.log(ans2);

// printing based on lexicographical order...

if (driverName < navigatorName) {
    console.log("The driver's name goes first.");
}
else if (navigatorName < driverName) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What? ! You both have the same name?")
}
