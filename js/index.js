// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");

let hacker1 = "Gururaj";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Khale";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

let nameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  nameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(nameWithSpaces.trim());

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

  
//Palindrome  
  function isPalindrome(str) {
    let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); 
  console.log(isPalindrome("not a palindrome"));

  //Bonus
  let loremText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo et sapien varius dignissim.
Vestibulum et augue in nulla feugiat dignissim. Sed euismod, massa et facilisis posuere, ligula libero congue erat.
Donec blandit, lorem et dignissim lacinia, justo odio facilisis odio, eget fermentum est enim in velit.
`;

let wordCount = loremText.split(/\s+/).length;
console.log("Total number of words:", wordCount);

let etCount = (loremText.match(/\bet\b/g) || []).length;
console.log("Number of times 'et' appears:", etCount);