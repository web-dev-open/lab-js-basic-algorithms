console.log ("I'm ready");
var hacker1 = "John Doe";

console.log ("The driver's name is " + hacker1);

var hacker2 = "Jeff Flowers";

console.log ("The navigator's name is " + hacker2);

var lengthDriver = hacker1.length;
var lengthNavigator = hacker2.length;

if (lengthDriver > lengthNavigator) {
    console.log ("The driver has the longest name, it has " + lengthDriver + " characters.");
}
else if (lengthNavigator > lengthDriver) {
    console.log ("It seems that the navigator has the longest name, it has " + lengthNavigator +  " characters.");
}
else {
    console.log ("Wow, you both have equally long names " + lengthDriver + " characters!");
}

var capDriver = hacker1.toUpperCase();
for (var i = 0; i < capDriver.length; i ++) {
    process.stdout.write(capDriver [i] + ' ');
}
console.log("");

for (var i = (hacker2.length - 1); i >= 0; i --) {
    process.stdout.write(hacker2 [i] + ' ');
}


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}