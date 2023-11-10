// Iteration 1: Names and Input
//
const hacker1 = 'Lewis'
console.log("The driver's name is " + hacker1)

const hacker2 = 'Jack'
console.log("The navigator's name is " + hacker2)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally names, ${hacker1.length} characters.`)
}
// Iteration 3: Loops
let capitalizedLetters = []

for (let i = 0; i < hacker1.length; i++) {
    capitalizedLetters.push(hacker1[i].toUpperCase())
}

console.log(capitalizedLetters.join(' '))

capitalizedLetters.length = 0

for (let i = hacker2.length - 1; i >= 0; i--) {
    capitalizedLetters.push(hacker2[i])
}

console.log(capitalizedLetters.join(''))

const lexicalComparison = hacker1.localeCompare(hacker2)

if (lexicalComparison == -1) {
    console.log("The driver's name goes first.")
}

else if (lexicalComparison == 1) {
    console.log("Yo, the navigator goes first definitely.")
}

else {
    console.log("What?! You both have the same name?")
}