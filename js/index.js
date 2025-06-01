// Iteration 1: Names and Input

console.log("Iteration 1: Names and Input");

// 1.1
const hacker1 = "Juan Carlos";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
const hacker2 = "Diana Marcela";
// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log("Iteration 2: Conditionals");

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log("Iteration 3: Loops");

// 3.1
//---------- Version 1 ---------------//
// console.log(hacker1.toLocaleUpperCase().split('').join(' '))
const hacker1SplitArr = hacker1.split("");
// console.log(hacker1SplitArr)
const hacker1Join = hacker1SplitArr.join(" ");
// console.log(hacker1Join)
const haker1Upper = hacker1Join.toLocaleUpperCase();
console.log("3.1 Version 1:", haker1Upper);

//---------- Version 2 ---------------//
const spaceCapitalName = (originalName) => {
  let nameFinal = "";
  for (let i = 0; i < originalName.length; i++) {
    nameFinal = nameFinal.concat(originalName[i].toLocaleUpperCase() + " ");
  }
  return nameFinal.trimEnd();
};

const spaceCapital = spaceCapitalName(hacker1);
console.log("3.1 Version 2:", spaceCapital);

// 3.2
//---------- Version 1 ---------------//

const hacker1InverseArr = hacker1SplitArr.reverse();
// console.log(hacker1Inverse)
const hacker1Inverse = hacker1InverseArr.join("");
console.log("3.2 Version 1:", hacker1Inverse);

//---------- Version 2 ---------------//

const inverser = (originalName) => {
  let nameFinal = "";
  const nameLength = originalName.length;
  for (let i = 0; i < originalName.length; i++) {
    nameFinal = nameFinal.concat(originalName[nameLength - (i + 1)] + "");
  }
  return nameFinal.trimEnd();
};
const hacker1Inv = inverser(hacker1);
console.log("3.2 Version 2:", hacker1Inv);

// 3.3

const lexicographicOrder = (name1, name2, case1, case2, case3) => {
  for (let i = 0; i < name1.length; i++) {
    if (name1[i].toLowerCase() < name2[i].toLowerCase()) {
      return case1;
    } else if (name1[i] > name2[i]) {
      return case2;
    } else {
      continue;
    }
  }
  return case3;
};

let lexicographicNames = lexicographicOrder(
  hacker1,
  hacker2,
  "The driver's name goes first",
  "Yo, the navigator goes first definitely",
  "What?! You both have the same name?"
);

console.log("3.3:", lexicographicNames);

// Bonus 1

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis tempor urna ac iaculis. Donec justo felis, condimentum vel lacus vitae, fringilla maximus dolor. Proin nec dignissim quam. Nulla felis eros, consectetur sed convallis ac, bibendum ut mauris. Morbi eleifend finibus purus, nec feugiat magna lacinia sit amet. Duis dignissim, ligula non interdum cursus, nibh orci dignissim eros, at sollicitudin ipsum mauris vitae felis. In faucibus, lectus et consequat pretium, arcu ligula tincidunt lectus, eu fermentum erat mauris quis nulla. Proin ultrices pretium magna, at egestas sem pellentesque sit amet. Etiam at nibh tortor. Aenean gravida ligula justo, vel pulvinar ex pharetra id. In mollis nisl vitae est bibendum, vitae condimentum metus laoreet. Vivamus et auctor est. Curabitur sed ornare nulla, vel consequat erat. Morbi ligula neque, commodo ac facilisis sit amet, pharetra quis magna. Praesent ac neque dignissim, molestie lacus eu, luctus purus. Vestibulum aliquam dictum neque convallis ultrices. Curabitur malesuada suscipit lacus, eget dignissim augue ornare nec. Vivamus elit ipsum, mattis ut maximus vitae, aliquet eu massa. Aenean laoreet feugiat molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas bibendum ultrices nunc sit amet finibus. Etiam tortor velit, dapibus in mi id, convallis malesuada arcu. Duis euismod arcu eu lectus rhoncus malesuada. Integer id condimentum massa. Morbi non vulputate neque. Aenean diam mauris, commodo non commodo et, dignissim at arcu. In id elementum ipsum. Phasellus eget erat vel felis placerat commodo. Proin congue, ligula eget tristique porttitor, diam ipsum mattis massa, cursus varius tellus eros eget est. Quisque vitae eros vel dui pretium eleifend nec at massa. Integer dignissim et augue et consequat. Proin ut massa imperdiet, pharetra urna vel, euismod orci. Sed elementum ligula lorem, a dignissim quam facilisis et. Maecenas malesuada euismod diam, sed tempus quam fermentum congue. Nunc elementum tortor felis, interdum tristique magna dapibus eleifend.";

const counterWords = (paragraph) => paragraph.split(" ").length;

const countEt = (paragraph) => {
  const paragraphArray = paragraph.split(" ");
  let count = 0;
  for (let i = 0; i < paragraphArray.length; i++) {
    if (
      paragraphArray[i] === "et" ||
      paragraphArray[i] === "et," ||
      paragraphArray[i] === "et."
    ) {
      count++;
    }
  }
  return count;
};

const program = (paragraph) =>
  `The paragraphs have ${counterWords(
    paragraph
  )} words. The word "et" appears ${countEt(paragraph)} times`;

console.log("Bonus 1:", program(lorem));

// Bonus 2

const phraseToCheck = `Was it a car or a cat I saw?`;

const palindromeProgram = (phrase) => {
  const lettersOnly = phrase.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();
  const wordsArr = lettersOnly.split(" ");
  const oneWord = wordsArr.join("");
  const oneWordInverse = inverser(oneWord);
  if (oneWord === oneWordInverse) {
    return `The phrase "${phrase}" is palindrome`;
  } else {
    return `The phrase "${phrase}" is not palindrome`;
  }
};

console.log("Bonus 2:", palindromeProgram(phraseToCheck));
