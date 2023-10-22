// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Steve";

// 1.2 Print "The driver's name is XXXX".
console.log("\nIteration 1: Names and Input \n1.2 Print \"The driver's name is...")
console.log(`The Driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Bill";

// 1.4 Print "The navigator's name is YYYY".
console.log("\n1.4 Print \"The navigator's name is...")
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
console.log("\n\nIteration 2: Conditionals \n2.1. Depending on which name is longer, print:")
if(hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equially long name, ${hacker2.length} characters!!`);
} else {
    console.log("Something went wrong. Please contact the developer. Sorry for the inconveniences.")
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals.
console.log("\na) Whitout a Loop");
console.log(hacker1.toUpperCase().split('').join(" "));

// With For Loop
console.log("\nb) With For Loop:")
let result = "";

for(let i = 0; i < hacker2.length; i++) {
    // Converting the current value to Uppercase and save it in the result variable
    result += hacker2[i].toUpperCase();

    // Add the space between but not the las one that why we put -1
    if(i < hacker2.length -1) {
        result += " ";
    }

}
console.log(result);

// With While Loop
console.log("\nc) With While Loop:")

j = 0;
result2 = "";

while(j < hacker1.length) {
    // Convert the current char into Uppercase
    result2 += hacker1[j].toUpperCase();

    // Adding the space in between except the last one, that why the -1
    if(j < hacker1.length -1) {
        result2 += " ";
    }
    // Increment the index
    j++
}
console.log(result2);

//3.2 Print all the characters of the navigator's name, in reverse order.
console.log("\n\n3.2 Print all the characters of the navigator's name, in reverse order.\nWithout a Loop")
console.log(hacker2.split("").reverse().join("")); 

console.log("\nb) With For Loop:");

let result3 = "";

for(let i = hacker1.length -1; i >= 0; i--) {
    result3 += hacker1[i];
}

console.log(result3);

console.log("\nc) With While Loop:");

let k = hacker2.length -1;
let result4 = ""

while(k >= 0) {
    result4 += hacker2[k];
    k--;
}

console.log(result4);

console.log("\n3.3 Depending on the lexicographic order of the strings, print:")

if(hacker1 < hacker2) {
    console.log(`The Driver's name: "${hacker1}" goes first.`);
} else if( hacker2 < hacker1) {
    console.log(`Yo, the Navigator, "${hacker2}" goes first definitely.`);
} else {
    console.log("what?! They both have the same name?");
}

//Bonus 1
console.log("\n*** Bonus 1 ***\nGo to lorem ipsum generator and:\n   * Generate 3 paragraphs. Store the text in a variable type of string.")

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel ante sodales neque accumsan aliquet sed vitae dolor. Integer pharetra ut metus vel vulputate. Phasellus facilisis in quam nec euismod. Morbi finibus porta massa ut lacinia. Nullam non interdum turpis. Quisque non felis in arcu posuere malesuada eu molestie nunc. Etiam ac enim finibus, interdum enim in, hendrerit quam.

Donec at est mollis, ornare eros in, mattis odio. Curabitur pharetra commodo congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ac rutrum massa. Aliquam lectus nisl, sollicitudin at gravida nec, gravida quis lectus. Proin in porta lacus. Integer elementum justo a lectus sagittis laoreet. Morbi non magna porttitor, fringilla nisi in, venenatis massa. Ut vel pharetra elit, vel accumsan massa. Nullam in nisl ac est semper placerat. Sed et rutrum arcu. Nam venenatis dictum purus id lacinia. Maecenas ultricies lorem risus, sit amet varius enim egestas non.

Sed mollis in orci eu sodales. Fusce non ex eget turpis imperdiet ornare. Integer neque nisi, imperdiet a arcu et, feugiat tempus est. Donec fermentum nisl quis facilisis rutrum. Suspendisse facilisis neque malesuada pellentesque rutrum. Duis non lectus mauris. Morbi pharetra nec nulla sit amet consequat. Sed nulla lacus, fermentum vel libero sit amet, pellentesque suscipit justo. Nam eu eleifend mi. Mauris fringilla placerat massa non varius. Vestibulum nunc tortor, mollis quis porttitor ornare, molestie ut ante. Suspendisse ligula nibh, aliquet ac felis vitae, ornare laoreet lectus. Nulla tincidunt dolor sit amet quam faucibus vestibulum. Suspendisse mollis risus vitae bibendum tempus.`

// Create the variable
let words = "";

// Remove the punctuation and split the text.
words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);

// Print the resut
console.log(`     Word count is: ${words.length} words.`);

// Make your program count the number of times the Latin word et appears.
console.log("\n   * Make your program count the number of times the Latin word et appears.");

// Word we are looking for
let lookingWord = "et";

// Create the variable to save it and convert all at lowercase to easy find everything
let word2 = text.toLowerCase().match(/\b\w+\b/g);

// Create a counter and save them
let wordCounter = word2.filter(word2 => word2 === lookingWord).length;

// Print the result
console.log(`     The word "${lookingWord}" appears: ${wordCounter} time(s).`);

//Bonus 2
console.log("\n*** Bonus 2 ***\nCreate a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome")

// Create the variable
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Create a variable to clean up the string (capitalization, comas, spaces, etc.)
let newString = phraseToCheck.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

// Create the palindrome variable to save the result
let isPalindrme = "";

// Comparision of the original string to its reverse.
isPalindrme = newString === newString.split("").reverse().join("");

// Print the result.
if(isPalindrme) {
    console.log(`The phrase ${phraseToCheck} is a Palindrome.`);
} else {
    console.log(`The phrase ${phraseToCheck} is not a Palindrome.`);
}

console.log("\n");