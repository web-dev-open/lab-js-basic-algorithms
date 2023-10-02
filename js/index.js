// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops

// variable with driver's name
let hacker1 = "JohnsonN";
console.log(`The driver's name is ${hacker1}`);

//variable with navigator's name

let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name and its has ${hacker1.length} characters`)
} else if(hacker2.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);

}
//iteration 3
// Printing all the driver's name seaprated by space and in capital letters
let spaceName = " ";
for (let i = 0; i < hacker1.length; i++){
    spaceName += hacker1[i].toUpperCase() + " ";
}
console.log(spaceName.trim());

//3.2 Printing the navigator's name in a reverse order
let reversedName = "";
for(let i = hacker2.length - 1; i >=0; i--){
    reversedName += hacker2[i];
}
console.log(reversedName);

//3.3 Depending on the lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1 
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien."
//count number of words
let wordCount = loremIpsum.split(" ").length;
console.log(`The number of words in the string is ${wordCount}`);
//count the number of times "et" appears
let etCount = loremIpsum.split("et").length-1;
console.log(`The number of times "et" appears in the string is ${etCount}`);

//Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");
let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}