console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Ramown";
let hacker2 = "Manol";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters."
  );
}

// Iteration 3: Loops
let hacker1Capital = hacker1.toUpperCase();
let separatedName = "";

for (let i = 0; i < hacker1Capital.length; i++) {
  separatedName += hacker1Capital[i];

  if (i < hacker1Capital.length - 1) {
    separatedName += " ";
  }
}

console.log(separatedName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

// localeCompare: compares lexicographic order to other words.

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1:

let countedLoremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean at massa ullamcorper, blandit libero vitae, efficitur justo.Integer fermentum elit non facilisis pharetra.Proin suscipit orci et dui faucibus, ut imperdiet ipsum molestie.Mauris nec ligula pharetra, tristique purus quis, posuere urna.Vestibulum lacus neque, blandit ac imperdiet at, luctus quis eros.Nulla diam dolor, feugiat ac eleifend eget, venenatis vitae ante.Aenean est augue, fringilla ut justo non, mollis dictum augue.Nam fermentum, lacus ac lobortis condimentum, enim lorem suscipit est, non fermentum ex mi vehicula tortor.Sed egestas sem non tortor suscipit porttitor.Aenean at fringilla quam.Aliquam non nisi id mauris luctus ornare imperdiet non metus.Maecenas at arcu tellus.

Phasellus egestas dui sed erat porttitor porta. et et et Praesent eget rhoncus ex. Maecenas rhoncus urna non varius condimentum. Duis a mi at nisl bibendum semper imperdiet ut nisl. Ut ac dictum erat. Pellentesque a dapibus sem. Mauris nisl urna, varius vel sapien in, egestas tempor odio. Duis sem magna, tempor eget odio nec, consectetur suscipit lectus. Ut malesuada interdum nisl, in fringilla nisi elementum eget.

Sed egestas tempus eros in dignissim.Maecenas eu auctor magna.Donec varius arcu eu lobortis laoreet.Cras luctus nulla sem, vitae efficitur ante porttitor a.Nunc suscipit, est vel feugiat suscipit, felis elit luctus nisl, quis sodales felis leo sit amet nibh.Donec lobortis ullamcorper ante non porttitor.Morbi quis bibendum nunc.Praesent commodo eu purus nec varius.Proin nec libero venenatis, tincidunt nulla ac, tempor arcu.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Quisque tristique augue quis metus facilisis malesuada.Pellentesque laoreet in libero vitae lobortis.Sed pharetra enim enim, quis pellentesque odio sollicitudin sed.Cras libero lectus, tempor eget massa eu, aliquet convallis nibh.Nunc sodales leo mi.
`;
function countWords(str) {
  let words = str.trim().split(/\s+/);
  return words.length;
}

console.log(countWords(countedLoremIpsum));

let word = "et";

function countSpecificWord(paragraph, word) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  let matches = paragraph.match(regex);
  return matches ? matches.length : 0;
}

console.log(countSpecificWord(countedLoremIpsum, word));

//Bonus 2

let phraseToCheck = "cat tac";
let reversePhraseToCheck = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversePhraseToCheck += phraseToCheck[i];
}

if (phraseToCheck.toLowerCase() === reversePhraseToCheck.toLowerCase()) {
  console.log("This word is a palindrome.");
} else {
  console.log("This word is not a palindrome.");
}
