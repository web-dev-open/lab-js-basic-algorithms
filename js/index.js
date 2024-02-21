// Iteration 1: Names and Input
//
let hacker1 = "Mohit";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kratik";
console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals

let hacker1len = hacker1.length;
let hacker2len = hacker2.length;
let longerName;

if (hacker1len > hacker2len) {
    longerName = `The driver has the longest name, it has ${hacker1len} characters.`;
} else if (hacker2len > hacker1len) {
    longerName = `It seems that the navigator has the longest name, it has ${hacker2len} characters.`;
} else {
    longerName = `Wow, you both have equally long names, ${hacker1len} characters!`;
}
console.log(longerName);
// Iteration 3: Loops
let str = hacker1.toUpperCase().split('').join(" ")
console.log(str)
let str2 = hacker2.split('').reverse().join("")
console.log(str2)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1
// Placeholder for the generated Lorem Ipsum text (replace this with the actual text)
let loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, quam id bibendum scelerisque, odio libero pellentesque libero, vitae vehicula arcu sapien sed turpis. Nulla facilisi. Suspendisse potenti. Etiam nec quam et mauris fringilla cursus. In hac habitasse platea dictumst. Duis auctor lacus ac orci dignissim, a elementum justo sodales. Vestibulum rhoncus ultricies lacus, ac laoreet neque cursus vel. Integer ullamcorper tincidunt justo nec volutpat. Nunc in nunc eu justo pharetra hendrerit. Etiam hendrerit massa in ultrices accumsan.

Sed et nisi nec metus fringilla tincidunt. Praesent ac felis eu turpis ultrices gravida. Ut euismod, odio id fermentum vestibulum, turpis justo convallis arcu, ac volutpat odio elit et libero. Quisque non justo at odio condimentum rhoncus non ut turpis. Fusce malesuada turpis ut elit posuere, eget facilisis turpis consequat. Integer sit amet nunc erat. Sed tincidunt tincidunt augue, eu tincidunt odio commodo nec. Phasellus malesuada metus at laoreet feugiat.

Duis vel cursus arcu. Quisque vitae vestibulum ex. Nulla facilisi. Proin vitae ex id erat fermentum hendrerit. Maecenas vel justo non dui feugiat suscipit. Integer id mi vel purus gravida sodales non et ex. Curabitur vel consectetur nunc. Integer quis ligula vel dui tincidunt cursus nec nec justo. Sed facilisis tristique velit. Etiam tempus lacinia arcu vitae mattis. Curabitur sit amet urna ac arcu viverra bibendum. Duis tincidunt, orci eget imperdiet tristique, felis lacus blandit velit, vel semper quam odio quis tellus. Suspendisse ac quam at orci fermentum suscipit.
`;

// Count the number of words in the Lorem Ipsum text
let wordCount = loremIpsumText.split(/\s+/).filter(word => word.length > 0).length;
console.log(`Number of words: ${wordCount}`);

// Count the number of times the Latin word "et" appears (case-insensitive)
let etCount = (loremIpsumText.match(/et/gi) || []).length;
console.log(`Number of occurrences of 'et': ${etCount}`);


// Check if a string is a palindrome
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanString = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');
let isPalindrome = cleanString === cleanString.split('').reverse().join('');
console.log(`"${phraseToCheck}" is a palindrome: ${isPalindrome}`);
