const { log } = require("console");
const { reverse } = require("dns");

console.log("I'am reday");
// Iteration 1: Names and Input
//
let hacker1 = "driver";
console.log(`the driver's name is ${hacker1}`);

let hacker2 = "navigator";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker1.length} characters`
  );
}

// Iteration 3: Loops
let UpHaker = "";
for (let i = 0; i < hacker1.length; i++) {
  UpHaker += `${hacker1.charAt(i).toUpperCase()} `;
}
console.log(UpHaker);

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(hacker1));

//Bounse 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sodales magna, at convallis dolor. Pellentesque commodo tempus orci et congue. Vivamus in vulputate tellus. Nunc eu elit ac lacus bibendum volutpat. Etiam et nisl non lorem ultrices auctor. Cras eu diam a nisi mattis aliquet. Sed volutpat magna purus, quis pulvinar lectus euismod a. Donec sagittis augue diam, aliquam pretium velit sollicitudin quis. Cras euismod erat erat, vitae facilisis ex lacinia id.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus sollicitudin diam, sed vestibulum nulla euismod quis. Aliquam et elementum tortor. Aliquam nec neque volutpat, lacinia erat sit amet, suscipit tortor. Nulla facilisi. Duis dignissim justo ante, finibus lobortis lectus lobortis non. Integer eleifend erat sit amet sodales hendrerit. Cras aliquet, urna non suscipit pretium, nisi lorem vulputate nibh, et egestas leo dui ut odio. In hendrerit in eros in sollicitudin. Integer id erat dapibus, rhoncus elit in, dictum erat. Proin semper, mi at lobortis convallis, dui nisl condimentum purus, non mollis lacus sapien sagittis diam.
Fusce in leo venenatis, porta erat in, tincidunt ante. Cras nec ultricies urna. Quisque quis congue felis. Aliquam a consequat sapien. Morbi et nulla nec quam consequat laoreet. Proin mollis dui eu ligula fermentum convallis. Sed orci lorem, porttitor ac varius quis, iaculis sit amet neque. Aliquam erat volutpat. Mauris sodales ipsum vitae ipsum lobortis, ut cursus elit ornare. Donec viverra ligula justo, nec consequat tellus convallis sit amet. Quisque mi quam, bibendum quis gravida et, malesuada sit amet eros. Donec vel mollis erat, dignissim lobortis lacus. Sed orci ex, euismod id sem ut, vestibulum tempus mi. Nunc non velit in augue congue volutpat. Proin ut felis augue.`;

function countWord(str) {
  return str.split(" ").length;
}
console.log(countWord(loremIpsum));

function countEtOccurrences(text) {
  const regex = /\bet\b/g;
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}
console.log(countEtOccurrences(loremIpsum));

//bonus 2

function isPalindrome(phrase) {
  const cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedPhrase = cleanedPhrase.split("").reverse().join("");
  return cleanedPhrase === reversedPhrase;
}

const phraseToCheck = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(phraseToCheck));
