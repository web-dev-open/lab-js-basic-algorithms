// Iteration 1: Names and Input
console.log("IAM READY")
let hacker1="john"
let hacker2="sumanth"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

for(let i of hacker1){
    process.stdout.write(i.toUpperCase())

}
process.stdout.write('\n')

let pointer
for(let i  in hacker1){
    pointer=hacker1.length-i-1
    
   process.stdout.write(hacker1[pointer])
}
let compare = hacker1.localeCompare(hacker2)
process.stdout.write('\n')
if(compare < 0){
  console.log("The driver's name goes first.")
}else if(compare > 0){
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}
