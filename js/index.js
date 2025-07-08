// Iteration 1: Names and Input

console.log("I'm ready!");

/* Create a variable hacker1 with the driver's name. */
let hacker1 = "lightning"
console.log(`The driver's name is ${hacker1}`)

/* Create a variable hacker2 with the navigator's name. */
let hacker2 = "hollywood"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

/* Depending on which name is longer, print accordingly */
h1Lenght = hacker1.length
h2Length = hacker2.length

if (h1Lenght > h2Length)
    console.log(`The driver has the longest name, it has ${h1Lenght} characters.`)
else if (h1Lenght < h2Length)
    console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`)
else
    console.log(`Wow, you both have equally long names, ${h1Lenght} characters!`)

// Iteration 3: Loops

/* Print all the characters of the driver's name, separated by a space and in capitals */
for (let i = 0; i < hacker1.length - 1; i++)
    process.stdout.write(hacker1[i].toUpperCase() + ", ")
console.log(hacker1[hacker1.length - 1].toUpperCase())

/* Print all the characters of the navigator's name, in reverse order */
for (let i = hacker2.length - 1; i >= 0; i--)
    process.stdout.write(hacker2[i])
console.log()

/* Depending on the lexicographic order of the strings */
if (hacker1 < hacker2)
    console.log("The driver's name goes first.")
else if (hacker1 > hacker2)
    console.log("Yo, the navigator goes first definitely.")
else
    console.log("What?! You both have the same name?")