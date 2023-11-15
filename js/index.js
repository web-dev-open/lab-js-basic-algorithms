// Iteration 1: Names and Input
let hacker1="Rohit Sharma"
console.log("The driver's name is",hacker1)

let hacker2="Virat Kohli"
console.log("The navigator's name is",hacker2)


//
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name.It has",hacker1.length,"characters");
if (hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters");
}
if (hacker1.length==hacker2.length){
    console.log("Wow, you both have equally long names,",hacker1.length,"characters!");
}
}


// Iteration 3: Loops
hack1=hacker1.toUpperCase()
for(var i=0;i<hack1.length;i++)
console.log(hack1[i]+"\n");

hack2=hacker2.split("").reverse().join("");
console.log(hack2);

let arr=[hacker1,hacker2];
arr.sort();
if (arr[0]==hacker1)
{
    console.log("The driver's name goes first.");
}
else if(arr[0]==hacker2)
{
    console.log("Yo,the navigator goes first definitely.");
}
else
{
    console.log("What?! You both have the same name?");
}
