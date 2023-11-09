// Iteration 1: Names and Input
let hacker1 = "Mujeeb";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Uthman";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += hacker1[i].toLocaleUpperCase() + " ";
}
console.log(driver);

let navigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

let compared = hacker1.localeCompare(hacker2);
if (compared < 0) {
  console.log("The driver's name goes first");
} else if (compared > 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}

// bonus 1
let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nisl in ante congue accumsan. Vivamus tristique et lacus ut elementum. Ut nec porta sem. Etiam non semper sapien, sit amet porta diam. Vestibulum at tempus purus, ut tincidunt diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sagittis fermentum libero, non facilisis dui tincidunt ac. Nulla ligula lacus, placerat placerat diam eu, ornare elementum leo. Maecenas ornare orci mi, in accumsan neque ultrices quis. Fusce mi arcu, porta ornare lorem vel, pharetra efficitur dui.

Suspendisse mi ante, efficitur a vestibulum et, faucibus ac ligula. Aliquam nec mauris libero. Quisque varius, metus venenatis maximus sollicitudin, tellus arcu ullamcorper lacus, vel viverra arcu quam et nisi. Maecenas porttitor odio non ante tristique feugiat. In hac habitasse platea dictumst. Proin iaculis risus vel ornare cursus. Fusce arcu lacus, semper et venenatis vitae, dapibus in magna. Integer sodales rhoncus gravida. Nulla velit nisl, tincidunt mattis sem ut, sagittis euismod augue. Suspendisse sit amet mauris non enim porta scelerisque. Ut vel scelerisque lacus, at molestie ipsum. Ut a lacus eu urna porttitor dapibus ut sed lorem. Vivamus tincidunt magna eu mi euismod, ut condimentum lectus venenatis.

In quis diam ac eros gravida consequat. Proin ultrices augue quis risus tempor iaculis. Cras et ex ut nulla auctor dignissim at sit amet dui. Donec pulvinar mattis porttitor. Phasellus odio elit, sollicitudin ac augue sit amet, accumsan tempor nulla. Suspendisse vitae leo at felis consectetur facilisis. Phasellus ac mi ligula. Phasellus eget felis nisi. In nec nisl felis. Ut non ex velit. Nam at lacus sem. Sed pulvinar turpis non lacus dignissim, a eleifend lorem elementum. Integer et lorem a dui maximus gravida.`;

let wordArr = loremText.split(" ");
let wordCount = 0;

for (let i = 0; i < wordArr.length; i++) {
  wordCount += 1;
}

console.log("total words", wordCount);

let etCount = 0;

for (let i = 0; i < wordArr.length; i++) {
  if (wordArr[i] !== "et") {
    continue;
  } else {
    etCount += 1;
  }
}

console.log("the word 'et' appeared", etCount, "times");

// bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let fromFront = "";
let fromBack = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    !(phraseToCheck[i] >= "a" && phraseToCheck[i] <= "z") &&
    !(phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z")
  ) {
    continue;
  } else {
    fromFront += phraseToCheck[i].toLowerCase();
  }
}

for (let j = phraseToCheck.length - 1; j >= 0; j--) {
  if (
    !(phraseToCheck[j] >= "a" && phraseToCheck[j] <= "z") &&
    !(phraseToCheck[j] >= "A" && phraseToCheck[j] <= "Z")
  ) {
    continue;
  } else {
    fromBack += phraseToCheck[j].toLowerCase();
  }
}

if (fromFront === fromBack) {
  console.log(phraseToCheck, "is a palindrome");
} else {
  console.log(phraseToCheck, "is NOT a palindrome");
}
