// Iteration 1: Names and Input

hacker1="Heisenberg"

console.log("The driver's name is:",hacker1)

hacker2="Tom Hank"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker2.length>hacker1.length){
    console.log(`It seems that  the  navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log("Wow, you both have equally long names, XX characters!")
}


// Iteration 3: Loops

let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase()+" ";
}
console.log(result)

let navigator="";
for(let i=hacker2.length-1;i>=0;i--){
    navigator+=hacker2[i];
}
console.log(navigator)

if(hacker1<hacker2){
    console.log("The drivers name goes first")
}
else if(hacker1>hacker2){
    console.log("The navigator's name goes first")
}
else{
    console.log("What?! You both have the same name?")
}