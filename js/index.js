// Iteration 1: Names and Input
//1.1, 1.2, 1.3, 1.4:
let hacker1 = "Mohammed";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Irfan";
console.log(`The navigator's name is ${hacker2}`);
//

// Iteration 2: Conditionals
//2.1
let lenOfhacker1 = hacker1.length;
let lenOfhacker2 = hacker2.length;

if (lenOfhacker1 > lenOfhacker2) {
  console.log(
    `The ${hacker1} has the longest name, it has ${lenOfhacker1} characters.`
  );
} else if (lenOfhacker2 > lenOfhacker1) {
  console.log(
    `It seems that the ${hacker2} has the longest name, it has ${lenOfhacker2} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lenOfhacker1} characters!`
  );
}
// Iteration 3: Loops
//3.1
const newString = hacker1.toLocaleUpperCase();
let result = "";
for (let idx = 0; idx < newString.length; idx++) {
  if (idx != newString.length - 1) {
    result = result + newString[idx] + " ";
  } else {
    result = result + newString[idx];
  }
}
console.log(`"${result}"`);

//3.2
let revStr = "";
for (let idx = hacker2.length - 1; idx >= 0; idx--) {
  revStr = revStr + hacker2[idx];
}
console.log(`"${revStr}"`);

//3.3:
//Reference: https://masteringjs.io/tutorials/fundamentals/compare-strings

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonues-1

let loremStrPara = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis sem posuere, pellentesque massa a, gravida massa. Fusce sagittis ex sed vehicula dignissim. Duis laoreet neque quis mi feugiat rutrum nec sed nibh. Suspendisse rhoncus suscipit cursus. Proin convallis urna at quam posuere dapibus. Ut pharetra elit eget urna semper, id mollis justo euismod. Maecenas auctor maximus ante vel sodales. Nam consectetur tincidunt lectus, vitae mollis erat dapibus quis. Vestibulum consectetur, arcu non blandit ultrices, mauris libero consectetur velit, ac sodales tellus ipsum sed leo. Sed in accumsan nisi. Curabitur maximus in odio gravida lacinia. Vestibulum dapibus egestas dui vel finibus. Phasellus est elit, vestibulum a turpis eget, eleifend pharetra dolor. Nulla fringilla, tortor nec vestibulum blandit, diam nibh hendrerit tellus, sed tempor elit ex non eros. Cras varius sem et aliquam faucibus.

Curabitur ultrices facilisis turpis, eu viverra nunc rhoncus quis. Aenean gravida, nunc at dictum placerat, augue felis imperdiet urna, a sollicitudin augue massa eu mauris. Nulla nec gravida eros. Nulla vestibulum nisi eget lacinia dapibus. Donec molestie semper libero at sodales. Vestibulum bibendum, dui sed congue vestibulum, massa magna lacinia quam, eleifend feugiat odio nulla id urna. Suspendisse ullamcorper nec tellus vitae cursus. Pellentesque cursus sem lectus, et commodo sem aliquam at. Fusce vel sem urna. Mauris venenatis sed tortor ut tristique. Phasellus quis bibendum magna.

Donec tempor, diam vel dapibus fringilla, justo mi consectetur eros, vitae commodo ligula diam a ante. Sed porttitor arcu neque, ut aliquam ligula bibendum quis. Duis quis odio vel neque cursus malesuada id eu sapien. Vestibulum hendrerit dapibus nulla, mollis blandit odio malesuada ac. Nullam pellentesque, mi accumsan aliquet consequat, eros elit pharetra enim, a mollis dolor nisi quis augue. Etiam at tellus sed mauris iaculis porta. Aliquam metus augue, ultrices a dolor eu, auctor rutrum elit. Vestibulum aliquet est quis mollis tristique. Proin pulvinar varius dignissim. Aenean in augue et purus auctor pharetra quis rhoncus velit.`;

let results1;
let countWords = givenString => {
  results1 = givenString.split(" ");
  return results1;
};

let resultArrayOfWords = countWords(loremStrPara);
let numberOfWords = resultArrayOfWords.length;
console.log(`Number of words in a given string: ${numberOfWords}`);

let etWordCountInAllWords = 0;
for (let idx = 0; idx <= numberOfWords; idx++) {
  if (
    resultArrayOfWords[idx] === "et" ||
    resultArrayOfWords[idx] === "et," ||
    resultArrayOfWords[idx] === "et."
  ) {
    etWordCountInAllWords++;
  }
}
console.log(etWordCountInAllWords);

//Bonus-2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseToCheck1 = phraseToCheck.split(" ");
console.log(phraseToCheck1);
for(let idx = 0; idx < phraseToCheck1.length; cd)
