console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Tom"; // Driver
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jack" // navigator
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverNameInCaps = ""
for(let i = 0; i< hacker1.length; i++){
    driverNameInCaps += hacker1[i].toUpperCase() + " "
}
console.log(driverNameInCaps.trim())

//3.2 Print all the characters of the navigator's name, in reverse order.
let navigatorNameReversed = ""
for(let i =hacker2.length-1; i>=0; i--){
    navigatorNameReversed += hacker2[i]
}
console.log(navigatorNameReversed)

//3.3 Depending on the lexicographic order of the strings, print:
if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}


//Bonus 1
//Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mollis nunc, vel elementum ipsum. Etiam ac diam scelerisque, dapibus leo ac, tempor erat. Aliquam eget dolor magna. Duis eu hendrerit est. In dignissim volutpat quam, sit amet pellentesque tellus ullamcorper a. Donec quis ex risus. Duis cursus ut libero efficitur fringilla. Proin dapibus quis massa vel tempor. Quisque ut tempus quam. Vestibulum dictum commodo est, auctor luctus justo consectetur nec. Ut nec posuere ipsum. Fusce risus elit, ultrices nec lacus id, efficitur molestie tellus. Maecenas eget metus sem. 

Maecenas ultrices luctus tempor. Maecenas sollicitudin risus vitae elit viverra ultrices. Fusce ut elementum magna. Cras fringilla lectus nec libero tristique eleifend. Vivamus sed molestie dolor, eget vestibulum neque. Integer at metus convallis, vulputate ligula et, tristique eros. Morbi tempus maximus ante, eu lobortis nisl.

Phasellus ultrices bibendum arcu non tristique. Vivamus consectetur sem nec nibh laoreet elementum. Quisque venenatis diam sed urna pretium vehicula. In hac habitasse platea dictumst. Suspendisse viverra tempus nisi eu gravida. `

//Make your program count the number of words in the string.
let wordCount = loremIpsum.split(' ').length
console.log(`Number of words: ${wordCount}`)

//Make your program count the number of times the Latin word et appears.
let etCount = (loremIpsum.match(/\bet\b/g) || []).length
console.log(`Number of times 'et' appears: ${etCount}`)


//Bonus 2:
let phraseToCheck = "A man, a plan, a canal, Panama!";

let normalizedStr = ''
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase()
  if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
    normalizedStr += char
  }
}

let isPalindrome = true
for (let i = 0; i < normalizedStr.length / 2; i++) {
  if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
    isPalindrome = false
    break
  }
}

if (isPalindrome) {
  console.log('String is a palindrome')
} else {
  console.log('String is not a palindrome')
}
