console.log("I'm ready");


// Iteration 1: Names and Input
let hacker1 = "julian";
console.log(`"The driver's name is ${hacker1}."`);
let hacker2 ="stevenson";
console.log(`"The navigator's name is ${hacker2}."`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
   console.log(`The drivers has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the logest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, {hacker1.length} characters!`);
}

// Iteration 3: Loops
let spaceInCapitals =hacker1.toUpperCase();
console.log(spaceInCapitals.split("").join(" "));//printing string characters with Upper Case in space

let stringName = "";
for(let i = hacker2.length - 1; i >= 0; i--){
    stringName += hacker2[i];
}
console.log(stringName);
let reverseUpCase = stringName.toUpperCase();
console.log(reverseUpCase.split("").join(" ")); //printing string characters reverse and also with space

for(let i = 0; i < hacker1.length; i++){
    if(hacker1.charAt(i) < hacker2.charAt(i)){
        console.log(`The driver's name goes first.`);
        break;
    }
    else if(hacker1.charAt(i) > hacker2.charAt(i)){
        console.log(`Yo, the navigator goes first definitly`);
        break;
    }
    else if(hacker1.charAt(i)===hacker2.charAt(i)){
        console.log(`What?! You both have same name?`);
    }
}
/*

//Bonus1
const randomText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
console.log(randomText.indexOf("et"));
*/