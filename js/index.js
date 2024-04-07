const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Iteration 1: Names and Input
// Driver's name
rl.question("Enter the driver's name: ", (hacker1) => {
  console.log(`The driver's name is ${hacker1}`);

  // Navigator's name
  rl.question("Enter the navigator's name: ", (hacker2) => {
    console.log(`The navigator's name is ${hacker2}`);

    // Iteration 2: Conditionals
    // Length comparison
    if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

    // Iteration 3: Loops
    // Driver's name separated by a space and in capitals
    console.log(hacker1.toUpperCase().split('').join(' '));

    // Navigator's name in reverse order
    console.log(hacker2.split('').reverse().join(''));

    // Depending on lexicographic order
    if (hacker1 < hacker2) {
      console.log("The driver's name goes first.");
    } else if (hacker1 > hacker2) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }

    // Bonus Time!
    // Bonus 1: Lorem Ipsum Generator
    const lorem_ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    // Count number of words
    const word_count = lorem_ipsum.split(/\s+/).length;
    console.log(`Number of words in the lorem ipsum text: ${word_count}`);

    // Count number of times 'et' appears
    const et_count = (lorem_ipsum.match(/et/gi) || []).length;
    console.log(`Number of times 'et' appears in the lorem ipsum text: ${et_count}`);

    // Bonus 2: Palindrome Check
    const phraseToCheck = "A man, a plan, a canal, Panama!";
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned_phrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned phrase is a palindrome
    const reversed_phrase = cleaned_phrase.split('').reverse().join('');
    if (cleaned_phrase === reversed_phrase) {
      console.log("The phrase is a palindrome.");
    } else {
      console.log("The phrase is not a palindrome.");
    }

    rl.close();
  });
});
