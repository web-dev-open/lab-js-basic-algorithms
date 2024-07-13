//console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "James";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Jacob";
console.log(`The navigator's name is ${hacker2}.`);

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let newDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1[i] + " ";
}
console.log(newDriverName.toUpperCase().trim());

//3.2
let newNavName = "";
let j = hacker2.length - 1;
while (j >= 0) {
  newNavName += hacker2[j];
  j--;
}
console.log(newNavName);

//3.3
let name1 = hacker1.toLowerCase();
let name2 = hacker2.toLowerCase();

if (name1 < name2) {
  console.log("The driver's name goes first.");
} else if (name1 > name2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let loremPara = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra lectus at dolor feugiat, sed sodales metus congue. Suspendisse a erat maximus tellus dignissim pretium. Proin at felis a magna egestas efficitur eu eu mauris. Fusce ut accumsan quam, vitae ullamcorper dolor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec et imperdiet dolor. Proin sit amet aliquam lorem. Vestibulum venenatis maximus ligula at varius. Donec eget dignissim massa. Aenean ornare placerat vestibulum. Duis ultricies aliquam eros.

Suspendisse eget purus semper, dignissim urna quis, vehicula ligula. Fusce varius et nisl at vulputate. Proin cursus mi id ipsum gravida lacinia. Suspendisse vitae ante sed odio mollis pulvinar. Sed faucibus sapien nec condimentum dignissim. Sed molestie, nibh ac sollicitudin tincidunt, lacus nisl posuere quam, ut rutrum risus purus quis augue. Pellentesque porttitor ante nec mi varius, venenatis facilisis neque condimentum. Donec placerat pretium ullamcorper. Nullam in convallis mi, et vestibulum massa. Maecenas bibendum risus leo, nec mollis ipsum cursus ac. Donec metus est, blandit a sollicitudin vitae, posuere vel enim. Ut fermentum et magna vel porttitor. Suspendisse sit amet dolor at neque dignissim consequat. Aliquam erat volutpat. Nullam vehicula ut arcu eget feugiat.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut cursus augue eget ligula vulputate, at vulputate turpis tincidunt. Quisque sollicitudin, turpis et commodo pretium, magna orci molestie nisl, cursus ullamcorper lacus nisl in nisi. Aliquam at gravida felis. Sed ullamcorper ipsum mauris, sed sagittis tellus facilisis sit amet. Nam ac ex porttitor, semper lectus eget, efficitur neque. Donec malesuada purus eu mollis venenatis. Duis congue posuere malesuada.`;

let strippedPara = loremPara
  .split("\n\n")
  .join(" ")
  .replace(/[,!.?]/g, "");
let splitPara = strippedPara.split(" ");

let wordCount = 0;
let etCount = 0;

for (let k = 0; k < splitPara.length; k++) {
  if (splitPara[k] === "et") {
    etCount++;
  }
  wordCount++;
}

console.log(`The number of words in the string : ${wordCount}`);
console.log(`the number of times the Latin word 'et' appears : ${etCount}`);

//Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?";
phraseToCheck = phraseToCheck.replace(/[ ,!.?]/g, "").toLowerCase();

let reversedString = phraseToCheck.split("").reverse().join("");

if (phraseToCheck === reversedString) {
  console.log("String is a palindrome.");
} else {
  console.log("Not a palindrome");
}
