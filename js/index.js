// Iteration 1: Names and Input
// Step 1: Create variables
let hacker1 = "javascrit";

let hacker2 = "HTML5";

// Step 2: Print the names
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
// Step 3: Compare name lengths
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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}


// Iteration 3: Loops

// Step 4: Print characters of driver's name separated by a space and in capitals
const spacedDriverName = hacker1.toUpperCase().split("").join(" ");
console.log(spacedDriverName);

// Step 5: Print characters of navigator's name in reverse order
const reversedNavigatorName = hacker2.split("").reverse().join("");
console.log(reversedNavigatorName);

// Step 6: Compare lexicographic order
const comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula sit amet erat facilisis cursus. Nulla facilisi. Duis eu ligula sit amet magna ullamcorper pretium. Ut dictum risus ut sem finibus, et suscipit leo ultricies. Nulla a facilisis magna. Nulla in risus at neque efficitur iaculis et nec libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Suspendisse potenti. Sed tincidunt, nulla a dapibus finibus, ex risus efficitur metus, eget luctus enim purus vel felis. Nulla sit amet facilisis erat. Cras eu lectus non ante laoreet condimentum. Quisque sit amet turpis et libero convallis pharetra. Etiam malesuada, magna in posuere tempor, justo lorem auctor dolor, at faucibus libero metus in nunc. Ut euismod sapien ut magna congue tincidunt. Suspendisse vel enim quam.
Pellentesque in elit a tortor convallis accumsan a id elit. Nulla et nibh at libero fringilla convallis. Mauris volutpat, nisl non suscipit tempus, nulla ipsum vehicula turpis, et volutpat magna neque at risus. Aliquam erat volutpat. Nulla facilisi. Donec id velit nec ligula fringilla malesuada. Integer vestibulum quam ac nulla vehicula, sit amet facilisis sapien posuere. Quisque auctor et elit sed feugiat. Nulla et eros vitae urna fringilla pharetra.`;

let wordCount = loremIpsum
  .split(/\s+/)
  .filter((word) => word.length > 0).length;

let etCount = (loremIpsum.match(/\bet\b/g) || []).length;

console.log(`Word count: ${wordCount}`);

console.log(`'et' count: ${etCount}`);
