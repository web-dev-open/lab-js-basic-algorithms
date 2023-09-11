// Iteration 1: Names and Input
const hacker1 = 'Paul';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Manish';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

const driverNameIsLonger = driverNameLength > navigatorNameLength;
const navigatorNameIsLonger = navigatorNameLength > driverNameLength;

if (driverNameIsLonger) {
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (navigatorNameIsLonger) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
let formattedDriverName = '';
for (let i = 0; i < hacker1.length; i++) {
  formattedDriverName += `${hacker1.charAt(i).toUpperCase()} `;
}
console.log(formattedDriverName.trim());

let reversedNavigatorName = '';
for (let i = hacker2.length; i >= 0; i--) {
  reversedNavigatorName += hacker2.charAt(i);
}
console.log(reversedNavigatorName);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const loremParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum laoreet odio, vitae ultrices neque volutpat ac. Proin vestibulum nisi id ultricies rhoncus. Sed non nunc arcu. Duis ut dui nulla. Nunc commodo ac ipsum ac condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam ante eu ipsum pretium ullamcorper. Aliquam non venenatis ante, vel posuere lorem. Sed id orci quis est sollicitudin cursus. Curabitur lectus augue, accumsan quis mi a, vehicula maximus nisi. Aenean a vehicula nulla. Vestibulum leo orci, lobortis ut pharetra eu, ultrices at nibh. Duis feugiat tincidunt tempor. Suspendisse potenti. Nulla justo elit, consequat id ultricies quis, commodo eu erat. Ut sodales iaculis vulputate.

Mauris mauris sem, rhoncus eu egestas ac, viverra sit amet augue. Mauris velit tortor, suscipit ultricies nisi vitae, dapibus volutpat justo. Proin consequat vehicula commodo. Ut eleifend tincidunt ipsum sed sodales. Maecenas ante tortor, cursus id fermentum vitae, fringilla quis massa. Proin sed sapien sem. Duis mattis at quam vitae interdum. Cras ligula risus, aliquet et dictum pharetra, mollis in tortor. Praesent in urna vel nisi elementum placerat eu et justo. Aliquam ac ante eget eros consequat rhoncus. Nullam id nisl dui. Suspendisse potenti. Suspendisse blandit, nunc eget tristique laoreet, purus neque vestibulum nisl, a dignissim justo orci ac magna. Nulla nisl risus, volutpat ac pretium non, lacinia sed metus. Proin pharetra feugiat metus id suscipit. Sed tellus ligula, dapibus id mollis feugiat, sagittis sollicitudin purus.

Donec sollicitudin orci neque, vitae congue dolor molestie eget. Fusce ultrices est id mauris interdum, sed finibus est varius. Sed malesuada ultrices massa eu mollis. Nulla sit amet turpis eget lacus sollicitudin vehicula. Nulla cursus commodo sapien non posuere. Etiam ac orci tincidunt, faucibus arcu vel, accumsan turpis. Aenean bibendum fermentum sapien non placerat. Cras porta, velit ac varius ornare, mi elit eleifend nunc, accumsan vulputate nulla quam vitae purus. Maecenas feugiat volutpat felis eu sollicitudin. Donec mattis placerat velit. Nunc sed felis porttitor lacus consectetur rutrum nec quis ipsum. Sed quis placerat arcu. Etiam dignissim magna eget semper gravida. Donec vitae tincidunt ex. Ut vulputate orci tortor, sed rhoncus augue cursus vitae. Fusce sit amet venenatis ipsum.`;

let wordCount = 0;
const loremArray = loremParagraphs.split(' ');
for (let i = 0; i < loremArray.length; i++) {
  const loremWord = loremArray[i];
  if (loremWord.includes('\n')) {
    wordCount += 2;
  } else {
    wordCount++;
  }
}

console.log(wordCount);