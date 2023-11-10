console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name
const hacker1 = "Anusha";

// 1.2 Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name
const hacker2 = "ManishP";

// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1 Depending on which name is longer, print the appropriate message
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverNameInCapWithSpaces = '';
for(let i = 0; i < hacker1.length; i++) {
    driverNameInCapWithSpaces += hacker1[i].toUpperCase() + ' ';
}
console.log(driverNameInCapWithSpaces);

// 3.2 Print all the characters of the navigator's name, in reverse order
let reverseNavigatorName = '';
for(let i = hacker2.length-1; i >= 0; i--) {
    reverseNavigatorName += hacker2[i];
}
console.log(reverseNavigatorName);

// 3.3 Depending on the lexicographic order of the strings, print appropriate message
if(hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if(hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// Bonus 1:
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tristique nibh. Integer tincidunt, ipsum elementum finibus faucibus, ligula arcu lobortis quam, ut mollis ex orci nec augue. Proin venenatis mauris quis scelerisque feugiat. Maecenas rhoncus libero quis tortor tempor dignissim. Etiam tristique nisi eget nisi imperdiet, vitae aliquet nibh hendrerit. Fusce scelerisque lacus eu odio iaculis, a rhoncus mauris interdum. Morbi imperdiet ex vitae ante finibus bibendum. Integer tincidunt aliquet fringilla.

Fusce non laoreet dolor. Proin pulvinar nibh non auctor ullamcorper. Donec id arcu ultrices, consequat mi sollicitudin, molestie metus. Vivamus tincidunt pretium orci, eget ultricies justo vehicula eu. Donec in mattis enim. Nam aliquam tincidunt libero, vitae scelerisque ex placerat eu. Donec lacinia sed ex ac vehicula. Phasellus in quam aliquet felis posuere bibendum. Proin eget orci tristique, egestas tortor et, hendrerit velit. Quisque euismod ornare eros eu varius. Suspendisse orci velit, hendrerit vel mollis vitae, maximus et massa. Etiam ultrices bibendum massa quis fringilla. Nullam quis ultricies tortor. Aenean pretium ut sem ut laoreet. Sed interdum lectus ut posuere laoreet. Proin finibus sed purus quis bibendum.

Nam sit amet ullamcorper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae vulputate lectus. Praesent maximus nisl nisl, et varius nisi aliquet in. Sed vestibulum euismod eros id fringilla. Quisque nec sapien non sapien auctor pretium. Vestibulum tempor facilisis tellus nec scelerisque. Suspendisse viverra vulputate congue. Proin facilisis, leo vel ultricies sollicitudin, lectus nisi congue erat, sit amet consectetur nibh dolor at nunc. In luctus leo vitae arcu placerat, sit amet commodo leo aliquet. Ut dictum lacus nec elit finibus viverra.
`;

// Count the number of words in the string
const wordsCount = text.split(/\s+/).length;

// Count the number of times the latin word "et" appears
const latinWordCount = (text.match(/et/gi) || []).length;

console.log(`Number of words in the Lorem Ipsum text: ${wordsCount}`);
console.log(`Number of times the Latin word "et" appears: ${latinWordCount}`);

// Bonus 2:
// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and spaces and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");
    
    return cleanedStr === reversedStr;
}

const phraseToCheck = "A man, a plan, a canal, Panama!";
const isPhrasePalindrome = isPalindrome(phraseToCheck);

if(isPhrasePalindrome) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
}
else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}
