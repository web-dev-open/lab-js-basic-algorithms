// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Enoch";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
else if (hacker2.length > hacker1.length)
  console.log(
    `It sees that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else
  console.log(
    `Wow, you both have equally long names, ${hacker1.length || hacker2.length}`
  );

// Iteration 3: Loops
//printing driver's name separated by space andin capitals
let driverNameInCapsWithSpace = "";
for (const letter of hacker1) {
  driverNameInCapsWithSpace += letter.toUpperCase() + " ";
}

console.log("Driver's name in Caps: " + driverNameInCapsWithSpace);

// printing navigator's name in reverse order
let navigatorNameInReverse = hacker2.split("").reverse().join("");
console.log(navigatorNameInReverse);

// ordering names
if (hacker1 > hacker2) console.log("The driver's name goes first.");
else if (hacker1 < hacker2)
  console.log("Yo, the navigator goes first definitely.");
else console.log("What?! You both have the same name?");

// Bonus 2:
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Imperdiet nulla malesuada pellentesque elit. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Nunc sed velit dignissim sodales ut eu sem integer. Nec nam aliquam sem et tortor consequat id. Morbi tristique senectus et netus et malesuada fames. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Semper auctor neque vitae tempus quam. Nulla posuere sollicitudin aliquam ultrices sagittis. Egestas integer eget aliquet nibh praesent. Eget felis eget nunc lobortis. Amet aliquam id diam maecenas ultricies mi eget mauris. Turpis nunc eget lorem dolor sed viverra.

Convallis aenean et tortor at risus viverra adipiscing at. Viverra tellus in hac habitasse platea. Leo integer malesuada nunc vel. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Consectetur libero id faucibus nisl tincidunt eget nullam non. Donec enim diam vulputate ut pharetra sit amet aliquam id. Sit amet risus nullam eget felis eget. Nunc sed blandit libero volutpat sed cras. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Ut tristique et egestas quis. Velit dignissim sodales ut eu sem integer vitae justo eget. Arcu risus quis varius quam quisque id diam. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.

Sed odio morbi quis commodo odio. Vivamus arcu felis bibendum ut tristique. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Id semper risus in hendrerit gravida. In nisl nisi scelerisque eu ultrices. Lectus proin nibh nisl condimentum id venenatis a condimentum. Donec enim diam vulputate ut pharetra sit amet. Massa id neque aliquam vestibulum morbi blandit cursus risus. Adipiscing elit pellentesque habitant morbi tristique senectus. Vestibulum rhoncus est pellentesque elit. Netus et malesuada fames ac turpis egestas sed. Ipsum consequat nisl vel pretium lectus quam. Quam quisque id diam vel quam elementum pulvinar etiam. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.`;

const wordToFind = "et";
let count = 0;
let cleanedParagraph = paragraph.split(" ");

for (const word of cleanedParagraph) {
  if (word === wordToFind) {
    count++;
  }
}

console.log(`The paragraph has ${count} of "${wordToFind}".`);

// Bonus 3: Check palindromes
const phraseToCheck = "Was it a car or a cat I saw?";

//convert word to array and clean it
let phraseToClean = phraseToCheck.toLowerCase().split("");

for (let i = 0; i < phraseToClean.length; i++) {
  if (phraseToClean[i] < "a" || phraseToClean[i] > "z") phraseToClean[i] = "";
}
let cleanPhrase = phraseToClean.join("");
let reverseCleanWord = phraseToClean.reverse().join("");

// check if the word is a palindrome
if (reverseCleanWord === cleanPhrase)
  console.log(phraseToCheck + " is a palindrome.");
else console.log(phraseToCheck + " is not a palindrome.");
