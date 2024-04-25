console.log("I'm Ready");
// Iteration 1: Names and Input
var hacker1 = "Driver";
console.log("The driver's name is ", hacker1);
var hacker2 = "Navigator";
console.log("The navigaror's name is ", hacker2);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
    console.log("The driver has the longest name, it has ",hacker1.length," characters");
else if(hacker2.length > hacker1.length)
    console.log("It seems that the navigator has the longest name, it has ",hacker2.length," characters");
else
    console.log("Wow, you both have equally long names, ",hacker1.length," characters");
let h1 = hacker1.toUpperCase();
var h11="";
for(i=0;i<h1.length;i++)
{   h11+=h1[i];
    h11+=" ";
}
console.log(h11);
var h2="";
for(i=hacker2.length-1;i>=0;i--)
    h2+=hacker2[i];
console.log(h2);
if(hacker1<hacker2)
    console.log("The driver's name goes first");
else if(hacker2<hacker1)
    console.log("Yo, the navigator's name goes first definitely");
else
    console.log("What?! You both have the same name?");
// Iteration 3: Loops
