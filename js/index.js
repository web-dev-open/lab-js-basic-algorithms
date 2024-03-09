console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "vinodh"
let hacker2 = "webdevopen"


// Iteration 2: Conditionals
//2.1

if(hacker1.length>hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if(hacker1.length<hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
else
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)

// Iteration 3: Loops
//3.1

let str1 = '';
for(let i=0;i<hacker1.length;i++){
    str1+= hacker1[i].toUpperCase() + ' '
}
console.log(str1.trim())

//3.2

let str2 = '';
for(let i=hacker2.length-1;i>=0;i--){
    str2+=hacker2[i] + ' '
}
console.log(str2.trim())

//3.3
if(hacker1<hacker2)
    console.log("The driver's name goes first.");
else if(hacker1>hacker2)
    console.log("Yo, the navigator goes first definitely.")
else
    console.log("What?! You both have the same name?")