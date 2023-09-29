//
//console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "John"
console.log(`The driver's name is ${hacker1} `)

let hacker2 = "John Doe"
console.log(`The navigator's name is ${hacker2} `)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
// Iteration 3: Loops
//1 name letter by letter with space between
let spacedName = ""

for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i] + " "
}

console.log(spacedName.trim())

//2 reversed
let reversedName = ""

for (let i = hacker2.length-1; i>=0; i--) {
    reversedName += hacker2[i]
}

console.log(reversedName.trim())

//3  lexicographic order 
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

//bonus 1
//generate 3 paragraphs
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate velit non pretium cursus. In hac habitasse platea dictumst. Maecenas vitae eros cursus, tempor nisl eget, dignissim lacus. Cras vehicula mattis mi ut tincidunt. Morbi varius malesuada ullamcorper. Vivamus nec purus non elit mollis varius. Fusce sit amet ornare elit, at tincidunt urna. Donec interdum, enim eget rhoncus consequat, risus dolor gravida augue, vitae volutpat magna mauris id ex. Cras vitae vulputate elit. Maecenas eu consequat est. Sed bibendum nunc nec purus dapibus, a sagittis metus posuere. Donec sodales, est quis euismod mollis, massa ipsum auctor lacus, in aliquam nunc nibh id augue. Vivamus eget hendrerit dolor. Duis dapibus purus a lectus consectetur, ut auctor leo accumsan. Aliquam non viverra lorem. Quisque eget erat turpis.

In id consequat orci, a fermentum lorem. Vestibulum elementum, mauris ut varius ultricies, felis mauris sodales nisl, at viverra risus enim non ligula. Nulla facilisi. Sed sit amet metus dictum, tincidunt augue quis, laoreet erat. Sed posuere sit amet sem at pharetra. Praesent tellus nunc, dignissim eu libero eu, vulputate gravida erat. Curabitur aliquam lacus lectus, quis pulvinar elit pretium et. Aliquam faucibus ac libero id eleifend. Sed ut risus sapien. Fusce porta nulla sed eros vestibulum eleifend. Morbi accumsan sagittis viverra.

Quisque eget pulvinar justo. Aliquam id magna vel erat consectetur ornare eu ut nisl. Ut accumsan arcu vel odio pulvinar dignissim. Quisque dapibus purus vel porta dapibus. Praesent sed lectus ante. Donec eu accumsan est, laoreet bibendum justo. Quisque eleifend eget urna ut scelerisque. Aenean scelerisque dolor nec erat rutrum, eget scelerisque dui ultrices. Nam a tellus eget erat congue vehicula.
`
//count the number of words
const words = paragraphs.split(/\s+/); 
const nrOfWords = words.length;

//count the occurrences of the word to check 
let count = 0;
let wordTocheck = "et"
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === wordTocheck) {
    count++;
  }
}

//print the results.
console.log(`Lorem Ipsum text contains ${nrOfWords} words.`);
console.log(`The word ${wordTocheck} appears ${count} times.`);


//bonus 2 palindrome check
let phrase = "A man, a plan, a canal, Panama"
// let phraseToCheck = "step on no pets"
const phraseToCheck = phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
let length = phraseToCheck.length
let palindrome = true
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== phraseToCheck[length-1-i]){
        palindrome = false
    }
}

if (palindrome){
    console.log(`The string "${phraseToCheck}" is a palindrome!`)
} else{
    console.log(`The string "${phraseToCheck}" is NOT a palindrome!`)
}

