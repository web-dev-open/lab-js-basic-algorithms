// Iteration 1: Names and Input
let hacker1 = "dafydd";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "james";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

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
function capsSpaceString(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i].toUpperCase() + " ";
  }
  return newString;
}
console.log(capsSpaceString(hacker1));

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString(hacker2));

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue tempor arcu, sit amet gravida nulla porttitor ut. Vestibulum commodo ante vitae mauris vestibulum congue. Quisque venenatis sed lorem non porttitor. Donec felis ligula, posuere vitae scelerisque quis, pellentesque ac magna. Mauris quis mi commodo, tempor lacus ac, volutpat lorem. Cras a nibh lacus. Donec orci sapien, ullamcorper eget tortor porttitor, auctor semper augue. Nullam vulputate aliquam nisl, nec feugiat leo ultrices quis. Maecenas quis lorem lorem.Quisque nec eros pretium, elementum diam sit amet, rutrum velit. Vestibulum a fermentum mi. Quisque egestas interdum scelerisque. Maecenas lorem mi, hendrerit volutpat ipsum at, mattis varius metus. Morbi viverra vestibulum tortor, nec tincidunt ante luctus non. Fusce ornare dapibus dolor, convallis placerat velit mattis a. Vivamus non tempus leo. Pellentesque sed hendrerit dolor. Ut non nisl at lacus venenatis varius eget et leo. Praesent neque est, placerat nec venenatis id, euismod pellentesque ex.Sed at leo nunc. Vestibulum urna velit, pharetra aliquam rutrum et, vestibulum id lorem. Nullam pellentesque posuere neque, id pretium augue blandit vel. Phasellus eget nisi ut leo consequat ultricies non ac tellus. Nam pretium vehicula neque et dictum. Curabitur nec nisi at lacus ullamcorper auctor et in risus. Phasellus imperdiet, eros et interdum sagittis, lorem lectus volutpat felis, a consectetur justo ipsum et nibh. Praesent at eros eget ex maximus interdum. Suspendisse lorem dui, rhoncus sit amet rutrum nec, ornare sed diam. Nunc egestas eleifend ante sed congue. Praesent euismod, mauris in mollis pulvinar, purus nibh mollis mi, sed mattis felis orci in mauris. Sed vitae auctor tellus. Proin nec lobortis quam, quis elementum mi. Sed et posuere lectus. Donec sed auctor quam. Proin a fringilla magna, ac efficitur nunc.";
let count = 0;
function countWords(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}

console.log(countWords(loremIpsum));

// function countET(str) {
//   let counter = 0;
//   let char = "et";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == "et") {
//       counter += 1;
//     }
//   }
//   return counter;
// }

//console.log(countET(loremIpsum));

let ch = "et";

let counted = loremIpsum.split(ch).length - 1;
console.log(counted);

const phraseToCheck = "race car";
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
