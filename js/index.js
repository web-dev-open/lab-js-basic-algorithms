// Iteration 1: Names and Input
let hacker1 = 'Robin Hobb';
console.log(The driver's name is ${hacker1});

let hacker2 = 'Taylor Jenkins Reid';
console.log(The navigator's name is ${hacker2});
//
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(The driver has the longest name, it has ${hacker1.length} characters.);
}
else if(hacker1.length < hacker2.length){
    console.log(It seems that the navigator has the longest name, it has ${hacker2.length} characters.);
}
else{
    console.log(Wow, you both have equally long names, ${hacker1.length} characters!);
}


// Iteration 3: Loops
let name = '';
for(let i=0;i<hacker1.length;i++){
    name = name + hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(${name});

//3.2
let reversedName = '';
for(let i=hacker2.length;i>=0;i--){
    reversedName = reversedName + hacker2.charAt(i);
}
console.log(${reversedName});

//3.3
if(hacker1 < hacker2){
    console.log(The driver's name goes first.);
}
else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}
