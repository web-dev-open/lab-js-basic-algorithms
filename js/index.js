console.log("I'm ready!")

// Iteration 1: Names and Input
var hacker1 = "Vamil";

console.log(`The driver's name is ${hacker1}.`)

var hacker2 = "Jake";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

let hack1 = hacker1.length;
let hack2 = hacker2.length;

if(hack1 > hack2)
{
    console.log(`The driver has the longest name, it has ${hack1} characters.`)
}
else if(hack2 > hack1)
{
    console.log(`It seems that the navigator has the longest name, it has ${hack2} characters.`)
}
else if(hack1 === hack2)
{
    console.log(`Wow, you both have equally long names, ${hack1} characters!`)
}

// Iteration 3: Loops
cap = ""
for(i=0;i<hack1;i++)
{
    cap += hacker1[i].toUpperCase() + ' ';
}
console.log(cap)

let rev = '';
for(let i = hack2-1; i >= 0; i--) {
    rev += hacker2[i];
}
console.log(rev);

// 3.3 Depending on the lexicographic order of the strings, print appropriate message
if(hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if(hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//Bonus 1:

//Total word count

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod facilisis ex sit amet sagittis. Sed sagittis pulvinar nulla, ac luctus orci luctus nec. Donec vitae pretium nisi, ac fermentum ipsum. Quisque nisi tortor, vestibulum mollis scelerisque et, mattis et nisl. Donec condimentum fermentum vulputate. Duis pulvinar vehicula nulla. Mauris scelerisque, purus et viverra euismod, metus arcu pellentesque libero, vitae aliquam mi elit sollicitudin felis. Vivamus maximus finibus convallis. Mauris accumsan tincidunt arcu in luctus. Quisque sit amet varius eros. Vestibulum ut metus sit amet nunc imperdiet efficitur sit amet eu justo. Curabitur suscipit nisl eu urna consectetur accumsan eu ut dolor.\nNulla blandit, odio ac dignissim sollicitudin, velit quam pharetra felis, ac tincidunt mi eros vitae metus. In arcu odio, feugiat id aliquam vitae, lacinia a felis. Curabitur semper augue in odio tincidunt, eu pretium odio aliquet. Integer nisl neque, volutpat vel rutrum et, venenatis vitae metus. Mauris quis tincidunt arcu. Etiam scelerisque sagittis lacus, sed scelerisque nisi bibendum in. Integer lobortis venenatis urna, eu lacinia sapien.Mauris tincidunt dui non orci gravida venenatis. Morbi et erat nunc. Praesent luctus sit amet odio ac ullamcorper. Morbi at odio vel purus commodo mollis at eu ipsum. Vivamus nec nibh vitae erat mattis cursus vitae fermentum elit.\nPraesent varius, tortor eu consectetur fringilla, felis ante congue felis, in consectetur risus orci sit amet ligula. Integer tristique placerat elementum.'

wordCount = 0;
for(i=0;i<text.length;i++)
{
    if(text[i] === ' ')
    {
        wordCount += 1;
    }
}
wordCount += 1;
console.log(wordCount)

//Latin word 'et' count

console.log(text.split("et").length - 1);

//Bonus 2:

function isPalindrome(str) {
    // Remove non-alphanumeric characters and spaces and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");
    
    return cleanedStr === reversedStr;
}

const phraseToCheck = "A man, a plan, a canal, Panama!";
const isPhrasePalindrome = isPalindrome(phraseToCheck);

if(isPhrasePalindrome) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
}
else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}