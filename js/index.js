console.log("I'm ready!");
// Iteration 1: Names and Input
//
let hacker1 = "Mohammed";
console.log("The driver's name is " + hacker1);

let hacker2 = "Saqhib";
console.log("The navigator's name is "+ hacker2);


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}else if(hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}else{
    console.log("WOw, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

//Driver's name
let driverNameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces);

//Navigator's name in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}

console.log(navigatorNameReversed);

//Lexicographic order
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

console.log();
console.log("Bonus 1");
// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula pretium justo. Fusce et magna eros. Ut condimentum, elit vel scelerisque tristique, quam nunc luctus ligula, non aliquam metus eros a ligula. Mauris vitae turpis nec eros lacinia iaculis.
Etiam auctor orci vitae interdum interdum. Proin et nulla et felis ullamcorper vehicula. Sed scelerisque, velit nec facilisis pharetra, eros nisl commodo risus, non sollicitudin arcu lectus a enim. Nulla facilisi. Suspendisse auctor orci id lacus suscipit, et aliquam dui dictum.
Nam vel facilisis neque. Nam sit amet quam et velit vulputate dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum velit quis odio ullamcorper, et rutrum odio pretium. Quisque id orci ut arcu mollis commodo.`;

//Number of words in the string 
let wordsArray = loremIpsum.split(' '); 
let wordCount = wordsArray.length; 
console.log("Number of words - ", wordCount);

//Occurrences of the word "et"
let etCount = 0; 
for (let i = 0; i < wordsArray.length; i++) { 
    if (wordsArray[i].toLowerCase() === "et") { 
        etCount++; 
    }
}
console.log("Number of occurrences of the word 'et':", etCount);

console.log();
console.log("Bonus 2");
//Bonus 2

let phraseToCheck = "step on no pets";

let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    
    let char = phraseToCheck[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        cleanedPhrase += char; 
    }
}


let isPalindrome = true;
let length = cleanedPhrase.length;

for (let i = 0; i < length / 2; i++) {
    
    if (cleanedPhrase[i] !== cleanedPhrase[length - 1 - i]) {
        isPalindrome = false; 
        break;
    }
}

if (isPalindrome) {
    console.log("The phrase is a palindrome!");
} else {
    console.log("The phrase is not a palindrome.");
}
