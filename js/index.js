const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Iteration 1: Names and Input
rl.question("Enter the driver's name: ", (driverName) => {
  let hacker1 = driverName;

  rl.question("Enter the navigator's name: ", (navigatorName) => {
    let hacker2 = navigatorName;

    console.log(`The driver's name is ${hacker1}`);
    console.log(`The navigator's name is ${hacker2}`);

    // Iteration 2: Conditionals
    if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

    // Iteration 3: Loops
    // 3.1
    let spacedName = '';
    for (let i = 0; i < hacker1.length; i++) {
      spacedName += hacker1[i] + ' ';
    }
    console.log(spacedName.toUpperCase().trim());

    // 3.2
    let reversedName = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
      reversedName += hacker2[i];
    }
    console.log(reversedName);

    // 3.3
    let lexOrder = hacker1.localeCompare(hacker2);
    if (lexOrder < 0) {
      console.log("The driver's name goes first.");
    } else if (lexOrder > 0) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }

    rl.close();
  });
});
