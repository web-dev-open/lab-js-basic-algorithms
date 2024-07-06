// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


let hacker1 = "Achinthya"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Krishna"
console.log(`The navigator's name is ${hacker2}`)

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longer name. It has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`It seems you both have equally long names, ${hacker1.length} characters.`)
}
let result = "";
for(let i=0;i<hacker1.length;i++)
{
    result += hacker1[i].toUpperCase() + " ";
}

console.log(result);
res = "";
for(let i = hacker2.length-1;i>=0;i--)
{
    res += hacker2[i].toLowerCase();
}

console.log(res);

if(hacker1[0]<hacker2[0]){
    console.log("The driver's name goes first.");
}
else if(hacker1[0]>hacker2[0]){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?");
}