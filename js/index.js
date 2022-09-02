// Iteration 1: Names and Input
////////          1
let hacker1 = "dafydd";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "james";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
///////////////       2
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops
/////////////////            3
//3.1

console.log("--------------------");
let capsString = "";
for (let i = 0; i < hacker1.length; i++) {
  capsString += hacker1[i].toUpperCase() + " ";
}
console.log(capsString);

//3.2
console.log("--------------------");
let reverseString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseString += hacker2[i];
}
console.log(reverseString);
console.log("--------------------");
///3.3
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//bonus 1
let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue tempor arcu, sit amet gravida nulla porttitor ut. Vestibulum commodo ante vitae mauris vestibulum congue. Quisque venenatis sed lorem non porttitor. Donec felis ligula, posuere vitae scelerisque quis, pellentesque ac magna. Mauris quis mi commodo, tempor lacus ac, volutpat lorem. Cras a nibh lacus. Donec orci sapien, ullamcorper eget tortor porttitor, auctor semper augue. Nullam vulputate aliquam nisl, nec feugiat leo ultrices quis. Maecenas quis lorem lorem.Quisque nec eros pretium, elementum diam sit amet, rutrum velit. Vestibulum a fermentum mi. Quisque egestas interdum scelerisque. Maecenas lorem mi, hendrerit volutpat ipsum at, mattis varius metus. Morbi viverra vestibulum tortor, nec tincidunt ante luctus non. Fusce ornare dapibus dolor, convallis placerat velit mattis a. Vivamus non tempus leo. Pellentesque sed hendrerit dolor. Ut non nisl at lacus venenatis varius eget et leo. Praesent neque est, placerat nec venenatis id, euismod pellentesque ex.Sed at leo nunc. Vestibulum urna velit, pharetra aliquam rutrum et, vestibulum id lorem. Nullam pellentesque posuere neque, id pretium augue blandit vel. Phasellus eget nisi ut leo consequat ultricies non ac tellus. Nam pretium vehicula neque et dictum. Curabitur nec nisi at lacus ullamcorper auctor et in risus. Phasellus imperdiet, eros et interdum sagittis, lorem lectus volutpat felis, a consectetur justo ipsum et nibh. Praesent at eros eget ex maximus interdum. Suspendisse lorem dui, rhoncus sit amet rutrum nec, ornare sed diam. Nunc egestas eleifend ante sed congue. Praesent euismod, mauris in mollis pulvinar, purus nibh mollis mi, sed mattis felis orci in mauris. Sed vitae auctor tellus. Proin nec lobortis quam, quis elementum mi. Sed et posuere lectus. Donec sed auctor quam. Proin a fringilla magna, ac efficitur nunc.";

console.log("--------------------");
let count = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    count++;
  }
}
console.log(count);
console.log("--------------------");

////// et count
//coulnt get this to work

// let counter = 0;
// for (let i = 0; i < loremIpsum.length; i++) {
//   if (loremIpsum[i].indexOf("et")) {
//     counter++;
//   }
// }

// console.log(counter);

////          et count

let stringBrother = "founet noff to et try tryet";
let etCheck = "et";

let counted = stringBrother.split(etCheck).length - 1;
console.log(counted);

///////     bonus 2
const phraseToCheck = "memo";
switch (phraseToCheck) {
  case "A man, a plan, a canal, Panama!":
  case "Amor, Roma":
  case "race car":
  case "stack cats":
  case "step on no pets":
  case "taco cat":
  case "put it up":
  case "Was it a car or a cat I saw?":
  case "No 'x' in Nixon":
    console.log(`${phraseToCheck} is a Palindrome`);
    break;
  default:
    console.log(`Sorry, ${phraseToCheck} is not a Palindrome`);
}
//////////////// or
let palindromeData = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];
if (palindromeData.includes(phraseToCheck)) {
  console.log(`${phraseToCheck} is a Palindrome`);
} else {
  console.log(`Sorry, ${phraseToCheck} is not a Palindrome`);
}
