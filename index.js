// Iteration 1: Names and Input
//
let hacker1=`ajay`;
console.log(`The driver's name is ${hacker1}`);
let hacker2=`mahesh`;
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length===hacker2.length)
    console.log(`Wow, you both have equally long names, XX characters!`);
else if(hacker1.length>hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

// Iteration 3: Loops

let dup="";
for(let i=0;i<hacker1.length;i++)
{
    dup=dup+hacker1[i].toUpperCase()+" ";
}
console.log(dup);
let dup2="";
for(let i=hacker2.length;i>=0;i--)
{
    dup2=dup2+hacker2.charAt(i);
}
console.log(dup2);

if(hacker1>hacker2)
    console.log("Yo, the navigator goes first definitely");
else if(hacker1<hacker2)
    console.log("The driver's name goes first");
else if(hacker1===hacker2)
    console.log("What?! You both have the same name?");