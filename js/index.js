// Iteration 1: Names and Input
let hacker1 = 'Verstappen';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'John';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let length1 = hacker1.length;
let length2 = hacker2.length;
if (length1 > length2) {
    console.log(`The driver has the longest name, it has ${length1} characters.`)
}
else if (length1 < length2) {
    console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
}
else console.log(`Wow, you both have equally long names, ${length1} characters!`)

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker1.split('').reverse().join(''));
if (hacker1.localeCompare(hacker2) < 0) {
    console.log('The driver\'s name goes first.')
}
else if (hacker2.localeCompare(hacker1) == 0) {
    console.log('What?! You both have the same name?')
}
else console.log('Yo, the navigator goes first definitely.')
