console.log("I'm ready!");



// Iteration 1: Names and Input

let hacker1 = "Shyam";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Surya";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters!`);
} 
else if (hacker1.length < hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker2.length} characters!`);
} 
else hacker1.length == hacker2.length;
{
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`);
}





// iteration 3 : Loops

for (let start = 0; start < hacker1.length; start++) {
  console.log(`${hacker1.charAt(start).toUpperCase()}`);
}

console.log("");
console.log("OR");
console.log("");

let result1 = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(`${result1}`);

for (let start = hacker2.length; start >= 0; start--) {
  console.log(`${hacker2.charAt(start)}`);
}

console.log("");
console.log("OR");
console.log("");

let result2 = hacker2.split("").reverse().join(" ").replace(/\s+/g, " ");
console.log(`${result2}`);

console.log("");

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}






// Bonus 1

console.log("");

var string1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquet ipsum, in euismod orci pharetra at. Proin tincidunt, mauris vitae pellentesque pretium, nisl mi scelerisque nisl, eleifend sagittis magna neque at nunc. Nunc lobortis tellus semper scelerisque vulputate. Nunc imperdiet quam arcu, ut euismod nibh placerat vitae. Integer facilisis diam in sem viverra mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam scelerisque lectus eget vulputate vestibulum. Fusce condimentum porttitor lacus, eget blandit urna aliquet in. Nam vel condimentum est.";

console.log(`${string1}`);
console.group("");
console.log(`There are ${string1.length} words in this paragraph.`);

countWords("et");

function countWords(str) {
  const wordCounts = new Map();
  str.split(" ").forEach((word) => {
    const currentWordCount = wordCounts.get(word) || 0;
    wordCounts.set(word, currentWordCount + 1);
  });

  /* Reproduce your output */
  const resultWords = [...wordCounts.keys()];
  const resultCount = [...wordCounts.values()];
  console.log("resultWords: " + resultWords);
  console.log("resultCount: " + resultCount);

  return wordCounts;
}

// Bonus 2

var phaseToCheck = "racecar";

function isPalindrome(str) {
  var rev = str.split("").reverse().join("");

  if (rev == str) {
    return true;
  } else return false;
}

console.log("");
console.log(`"${phaseToCheck}" is a palindrome ? `);
console.log(isPalindrome(phaseToCheck));
