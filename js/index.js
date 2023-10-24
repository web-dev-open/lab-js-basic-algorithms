console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'npm';//cambiar al verdadero 
console.log(`"The driver's name is ${hacker1}"`);
//==> "The driver's name is npm"

let hacker2 ='google';
console.log(`"The navigator's name is ${hacker2}"`);
//==> "The navigator's name is google"

//
// Iteration 2: Conditionals


if(hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}

result = result.trim(); // remove space

console.log(`"${result}" `);

//==> "n p m"

//3.2
function invert(chain) {
    // convert, invert and join the chain.
    return chain.split('').reverse().join('');
  }
  
  let resultado = invert(hacker1);
  resultado = resultado.slice(0, -1) + resultado.slice(-1).toUpperCase(); //convert the last letter to uppercase
  console.log( `"${resultado}" `); // 
// ==>"eglooG"

//3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }


//BONUSSS
//1

const loremIpsum = require("lorem-ipsum");

const loremText = loremIpsum({
  count: 3,        // Number of paragraphs
  units: "paragraphs",
  format: "plain", // You can also use "html" for HTML-formatted text
});

console.log(loremText);