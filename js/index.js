// Iteration 1: Names and Input
let hacker1 = 'Raman';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Henryy';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
driveraNameLength = hacker1.length;
navigatorNameLength = hacker2.length;
if (driveraNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driveraNameLength} characters.`);
} else if (driveraNameLength < navigatorNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driveraNameLength} characters!.`);
}

// Iteration 3: Loops
let upperCase = '';
for (let i = 0; i < driveraNameLength; ++i) {
    upperCase = upperCase + hacker1[i].toUpperCase() + ' ';
}
console.log(upperCase);

let reverse = '';
for (let i = navigatorNameLength - 1; i >= 0; --i) {
    reverse = reverse + hacker2[i];
}
console.log(reverse);


for (let i = 0; i < driveraNameLength; ++i) {
    if (hacker1[i] < hacker2[i]) {
        console.log('The driver\'s name goes first.');
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log('Yo, the navigator goes first definitely.');
        break;
    }
    console.log('What?! You both have the same name?');
}