// Objective:
// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);
let hacker2 = "Jane";
console.log("The navigator's name is " + hacker2);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1:
let hacker1Space = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Space += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Space);
// 3.2:
let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);
// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1Space < hacker2Reversed) {
  console.log("The driver's name goes first.");
} else if (hacker1Space > hacker2Reversed) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("Wow?!, you both have the same name?");
}

// Bonus Time!

// Bonus 1:
const threeParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet molestie risus. Nunc porta, justo et imperdiet mollis, massa lacus luctus nulla, id imperdiet urna mauris non nunc. Nulla maximus neque libero, ac pellentesque ex maximus sed. Integer dapibus nisi sed augue commodo volutpat id in ante. Fusce luctus lorem et ipsum ultrices placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vitae ornare tellus. Aenean id odio gravida, vehicula dui sit amet, sollicitudin erat. Donec non sapien eleifend ipsum lobortis cursus ac nec elit. Sed id orci sit amet mi iaculis tempus. Aliquam bibendum turpis at lorem tincidunt, et dictum ante sollicitudin. Suspendisse ac mollis ante. Praesent eu molestie lacus, eget ornare justo. Donec placerat, ipsum tempus tincidunt dictum, tellus magna mattis odio, et imperdiet ligula nulla non purus. Vivamus at lacinia enim, id sollicitudin lorem. Donec euismod magna ut tortor maximus porta. Aliquam auctor nulla quis maximus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis augue elit, vel rhoncus sem commodo quis. Morbi vulputate dictum dolor, pellentesque aliquet magna egestas vitae. Sed venenatis vel sapien at tincidunt. Integer eu hendrerit mauris, et auctor mauris. Nulla facilisi. Aliquam eu fermentum ligula. Donec finibus, turpis ac sagittis sagittis, est arcu sodales purus, vitae commodo erat mauris non lorem. Donec non egestas augue. Etiam et arcu nec tellus efficitur condimentum. Nam vestibulum eleifend tincidunt. In at diam ac elit posuere feugiat. Phasellus facilisis eleifend ligula, vel eleifend augue porttitor dapibus. Nullam lacinia ipsum libero, non lacinia ligula tincidunt sit amet. Donec lobortis blandit mattis. Ut quis nulla ornare, aliquet eros id, mollis metus. Ut id dictum libero. Aenean varius accumsan orci sed mattis. Nulla vitae pellentesque purus, id porta dui. Fusce vitae risus ac arcu fringilla vulputate. Nulla dignissim luctus ex eget laoreet. Curabitur id aliquet lacus. In convallis magna non placerat mattis. Donec ac justo porttitor, scelerisque libero et, malesuada mi. Ut cursus ipsum sed erat tempor, in volutpat lectus egestas. Vivamus aliquet mattis nisi, id semper erat feugiat vitae.`;

let allWords = threeParagraph.split(" ");
console.log(allWords.length);
let numberOfEtTimes = 0;
for (let i = 0; i < allWords.length; i++) {
  if (allWords[i] === "et") {
    numberOfEtTimes++;
  }
}
console.log(numberOfEtTimes);

// bonus 2:
const phraseToCheck = "taco";

// reverse the phrase
let reversedPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversedPhrase += phraseToCheck[i];
}

// check if the reversed phrase is the same as the original
if (reversedPhrase === phraseToCheck) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}
