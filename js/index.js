// Iteration 1: Names and Input
let hacker1 = 'Namjoon'
let hacker2 = 'seokjin'

console.log(`The driver name is ${hacker1}`);
console.log(`The navigator name is ${hacker2}`);
//
// Iteration 2: Conditional

if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length > hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1Upper)

let hacker2Reverse = hacker2.split("").reverse().join("");
console.log(hacker2Reverse)

