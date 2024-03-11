// Iteration 1: Names and Input
// console.log("I m ready!");
// console.log("new change");

    let hacker1 = "davic";
    console.log(`"The driver's name is ${hacker1}."`);
    let hacker2 = "david";
    console.log(`"The navigator's name is ${hacker2}."`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let caps = hacker1.toUpperCase();

console.log(caps.split("").join(" "));

let str = "";
for(let i = hacker2.length - 1; i >= 0; i--){
    str += hacker2[i];
}

console.log(str);

for(let i = 0; i < hacker1.length; i++){
    if(hacker1.charAt(i) < hacker2.charAt(i)){
        console.log("The driver's name goes first.");
        break;
    }
    else if(hacker1.charAt(i) > hacker2.charAt(i)){
        console.log("Yo, the navigator goes first definitely.");
        break;
    }
    else{
        if(i <= hacker1.length - 1){
            continue;
        }
        else{
            console.log("What?! You both have the same name?");
        }
    }
}


