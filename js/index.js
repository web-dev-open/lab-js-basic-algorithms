// Iteration 1: Names and Input

let hacker1='Harry';
let hacker2='Dumbledore';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Count = hacker1.length;
let hacker2Count = hacker2.length;
if( hacker1Count > hacker2Count )
   console.log(`The driver has the longest name, it has ${hacker1Count} characters`);
else if( hacker2Count > hacker1Count )
   console.log(`It seems that the navigator has the longest name, it has ${hacker2Count} characters`);
else 
  console.log(`Wow, you both have eually long names, ${hacker1Count} characters`);

// Iteration 3: Loops
let name='';
for(let i=0; i < hacker1Count ; i++)   //loop to iterate through each character one by one
   name+=hacker1.charAt(i).toUpperCase()+' ';
name.trim();    // to remove the whitespace at the end of string
console.log(name);


let rev_name='';
for(let j=hacker2Count-1 ; j>=0 ;j--)
    rev_name+=hacker2.charAt(j);
console.log(rev_name);
