// Iteration 1: Names and Input
 
//
let hacker1 = "Jayson";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alfie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// task 3.1 print driver's name, separated bu a space and in capitals
let driverName = "Jayson";
let spacedUpperCase = "";

for (let i = 0; i < driverName.length; i++) {
  spacedUpperCase += driverName[i].toUpperCase() + " ";
}

console.log(spacedUpperCase.trim());
// task 3.2 printing navigator's name in reversed order
let navigatorName = "Alfie";
let reversedName = "";

for (let i = navigatorName.length - 1; i >= 0; i--) {
  reversedName += navigatorName[i];
}

console.log(reversedName);

// 3.3 lexicographic order

if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// bonus
let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor, ligula at tempor congue, turpis dui imperdiet massa, at posuere neque eros vitae neque. Duis scelerisque ante id ipsum pharetra pretium. Nulla facilisi. Quisque sagittis lorem in rutrum volutpat. Donec porta aliquam efficitur. Nullam tempus arcu volutpat diam sagittis, quis pulvinar velit sagittis. Vestibulum pellentesque urna nec elit pulvinar, at rutrum quam viverra. Maecenas ac odio congue, semper ligula eget, pellentesque mi. Nam ultrices dapibus diam in tincidunt. Morbi ultrices nibh lorem, eu tempus nisl auctor vitae. Proin tincidunt mi at gravida sollicitudin. Aliquam erat volutpat. Nulla non tempus nibh, ut cursus turpis.`;

// Splitting  the text by spaces to count words
let wordCount = loremText.split(/\s+/).length;
console.log(`Number of words: ${wordCount}`);

// Counting occurrences of the Latin word "et"
let etMatches = loremText.match(/\bet\b/g);

if (etMatches === null) {
    console.log("The Latin word 'et' doesn't appear in the text.");
} else {
    let etCount = etMatches.length;
    console.log(`Number of times 'et' appears: ${etCount}`);
}

// cheking if it is a palindrome

let phraseToCheck = "A man, a plan, a canal, Panama";

// Remove non-alphanumeric characters and convert to lowercase for a more accurate check
let cleanString = phraseToCheck.toLowerCase().replace(/[\W_]/g, '');

// Reverse the string
let reversedString = cleanString.split('').reverse().join('');

// Check if it's a palindrome
if (cleanString === reversedString) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}






