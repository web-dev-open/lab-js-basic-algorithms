// Iteration 1: Names and Input
//
let driver = "hacker1"

let navigator = "hacker2"

console.log("The driver's name is " + driver)
console.log("The navigator's name is " + navigator)

// Iteration 2: Conditionals
let len1 = driver.length
let len2 = navigator.length

if (len1 > len2)
{
    console.log("The driver has the longest name, it has " + len1 + " characters.")
} else if (len1 == len2) {
    console.log("Wow, you both have equally long names, " + len1 + " characters!.")
} else {
    console.log("It seems that the navigator has the longest name, it has " + len2 + " characters.")
}


// Iteration 3: Loops
console.log(driver.toUpperCase())
console.log(driver.split(""))

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString(navigator);


  //Bonas Tasks

  // program to check if the string is palindrome or not

function phraseToCheck(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = phraseToCheck(string);
console.log(value);
