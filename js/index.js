console.log("I'm ready!");

// Iteration 1: Names and Input

//1.1
let hacker1 = "Vuyo";

//1.2
console.log("The Driver's name is " + hacker1);

//1.3
let hacker2 = "Themba";

//1.4
console.log("The Driver's name is " + hacker2);

// Iteration 2: Conditionals

//2.1
if (hacker1.length > hacker2.length) {
  console.log(
    hacker1 +
      " has the longer name. So that means that " +
      hacker1 +
      " is longer than " +
      hacker2
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    hacker2 +
      " has the longer name. So that means that " +
      hacker2 +
      " is longer than " +
      hacker1
  );
} else {
  console.log("both " + hacker1 + " and " + hacker2 + " are equal in length.");
}

// Iteration 3: Loops

//3.1

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}

console.log(spacedName.trim());

//3.2

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

//3.3

let SortedNames = [hacker1, hacker2].sort();
//console.log(SortedNames);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  if (SortedNames[0] === hacker1) {
    console.log("The Driver's name, " + SortedNames[0] + ", goes first ");
  } else {
    console.log(
      "Yo, the navigator, " + SortedNames[0] + ", goes first definitely."
    );
  }
}

//Bonus 1

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a velit blandit ligula viverra cursus. Pellentesque in neque urna. Suspendisse cursus vestibulum diam ut tincidunt. Morbi enim lacus, vehicula nec lacus posuere, placerat facilisis massa. Quisque sit amet massa et sapien pellentesque dignissim. Aliquam blandit nunc ligula. Curabitur mollis dolor non erat sodales efficitur. Pellentesque suscipit turpis vitae elit pharetra mollis.Donec nisi odio, tincidunt sit amet dapibus sit amet, tristique vel erat. Nulla rutrum arcu eget est commodo consequat. Ut ante est, bibendum vel convallis sit amet, scelerisque id augue. Etiam sollicitudin velit id nulla interdum, sed posuere diam facilisis. Praesent massa turpis, efficitur non laoreet quis, dapibus sit amet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus commodo lacinia gravida. Aenean ornare justo turpis, vel rutrum eros sodales a. Quisque a congue purus.Sed lacinia nec nisl nec aliquam. Phasellus condimentum bibendum nulla, vel sollicitudin quam fringilla in. Duis vitae bibendum ipsum. Maecenas justo justo, finibus nec tortor vel, molestie dapibus nisi. Nam nisl metus, luctus nec tortor posuere, dictum lobortis ex. Nunc tincidunt auctor leo in viverra. Vestibulum dictum neque ex, at aliquam mi vehicula nec. Suspendisse potenti. Aliquam erat volutpat. Vivamus vitae consequat nunc, id bibendum nibh. Integer non sem vitae diam porttitor vestibulum eu at justo. Mauris pharetra felis arcu. Curabitur viverra, ante a egestas mattis, lacus felis ornare ante, eu volutpat diam ante ac sapien.";

console.log(lorem.length);
console.log(lorem.split(" ").length);

let SplitLorem = lorem.split(" ");

let etCount = SplitLorem.filter((word) => word === "et").length;
console.log(etCount);

//Bonus 2

let phraseToCheck = "Amor, Roma";
phraseToCheck = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let result = isPalindrome(phraseToCheck);

if (result) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}
//
