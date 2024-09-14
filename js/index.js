// Iteration 1: Names and Input
let hacker1 = "dave"; 
console.log(`The Driver Name is ${hacker1}`);

let hacker2 = "amiky"; 
console.log(`The Navigator Name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has "+ (hacker1.length)+ "characters.");
}else if(hacker2.length>hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has "+(hacker2.length)+"characters.");
}else{
    console.log("Wow, you both have equally long names ,"+(hacker1.length)+" characters!")
}

// Iteration 3: Loops
result = hacker1.toUpperCase().split("").join(" ");
console.log(result);
result2 = hacker2.split("").reverse().join("");
console.log(result2);
/*for (let index = 0; index < hacker1.length; index++) {
    
    result = hacker1[index].toUpperCase().split("").join(" ");
    console.log(result);  
}
console.log("");
hacker2 = hacker2.split("").reverse().join("");

for (let i = 0; i < hacker2.length; i++) {
    console.log(hacker2[i]);
}*/
//lecxo
hacker2 = hacker2.split("").reverse().join("");
for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] > hacker2[2]) {
        console.log("The driver's name goes first.");
        break;
    } else if(hacker2[i] > hacker1[i]){
        console.log("Yo, the navigator goes first definitely.");
        break;
    }else{
        console.log("What?! You both have the same name?");
        break;
    }
    
}

