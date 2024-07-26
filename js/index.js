//Iteration 1: Names and Input

let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mark";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals

if(hacker1.length > hacker2.length)
  {console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);}
else if(hacker2.length > hacker1.length)
  {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);}
else
  {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}

//Iteration 3: Loops

let space = "";
for(let i = 0;i < hacker1.length; i++)
  {
    space += hacker1[i].toUpperCase() + " ";
  }
console.log(space.trim());

let reverse=""
for(let i = hacker2.length-1; i>=0; i--)
  {
    reverse += hacker2[i];
  }
console.log(reverse);

if (hacker1.localeCompare(hacker2) < 0) 
 {
   console.log("The driver's name goes first.");
 } 
else if (hacker1.localeCompare(hacker2) > 0) 
 {
   console.log("Yo, the navigator goes first definitely.");
 } 
else 
 {
   console.log("What?! You both have the same name?");
 }

//Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
Cras venenatis euismod malesuada. Ut consequat semper viverra. Nam libero justo, laoreet sit amet volutpat a, ultrices eu eros. 
Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Vivamus arcu felis bibendum ut tristique et egestas quis. 
In mollis nunc sed id semper risus. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. 
Aenean vel elit scelerisque mauris pellentesque pulvinar.`;

let wordCount = loremIpsum.split(' ').length;

let etCount = (loremIpsum.match(/\bet\b/g) || []).length;

console.log(`Number of words in the string: ${wordCount}`);
console.log(`Number of times the Latin word "et" appears: ${etCount}`);

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(phrase) {
  let cleanedPhrase = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].match(/[a-zA-Z]/)) {
      cleanedPhrase += phrase[i].toLowerCase();
    }
  }

  let reversedPhrase = "";
  for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += cleanedPhrase[i];
  }

  return cleanedPhrase === reversedPhrase;
}

console.log(`Is the phrase "${phraseToCheck}" a palindrome? ${isPalindrome(phraseToCheck)}`);
