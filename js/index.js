// Iteration 1: Names and Input
let hacker1="Michael";
console.log("The driver's name is "+hacker1);
let navigator1="Dwight";
console.log("The navigator's name is "+navigator1);

// Iteration 2: Conditionals
let l1=hacker1.length;
let l2=navigator1.length;
if(l1>l2)
console.log("The driver has the longest name, it has " + l1+ " characters.");
else if(l2>l1)
console.log("It seems that the navigator has the longest name, it has "+ l2 + " characters.");
else
console.log("Wow, you both have equally long names, "+ l1+" characters!.");

// Iteration 3: Loops
let s1="";
for(i=0;i<l1;i++)
s1+=hacker1[i].toUpperCase()+" ";
console.log(s1);
let s2="";
for(i=l2-1;i>=0;i--)
s2+=navigator1[i];
console.log(s2);
if(hacker1<navigator1)
console.log("The driver's name goes first.");
else if(hacker1>navigator1)
console.log("Yo, the navigator goes first definitely.");
else
console.log("What?! You both have the same name?");