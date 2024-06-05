

console.log("I'm ready!");


// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

var hacker1 = "Ajay";
console.log(`The driver's name is ${hacker1}`);

var hacker2 ="Vijay";
console.log(`The navigator's name is ${hacker2}`);






// Iteration 2: Conditionals

// The driver has the longest name, it has XX characters. or
// It seems that the navigator has the longest name, it has XX characters. or
// Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops


// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
// i.e. "J O H N"

// 3.2 Print all the characters of the navigator's name, in reverse order.
// i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.

// Yo, the navigator goes first definitely.
// What?! You both have the same name?


console.log(hacker1.toUpperCase().split('').join(" "))
console.log(hacker2.split('').reverse().join(""))

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}



// BONUS TIME

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.


// Step 1: Store the text in a string variable
var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in dui tempus varius. Etiam et tortor nunc. Integer tincidunt felis eu nulla auctor, et condimentum metus convallis. Suspendisse et nulla auctor, fermentum felis vel, fermentum sem. In in felis cursus, vehicula ligula eu, elementum lorem.\n\nMaecenas et libero nec nunc bibendum mollis. Aenean et tortor nec elit cursus facilisis et non turpis. Sed sit amet magna vel turpis cursus dictum. Nullam et dolor ac mi tristique fermentum. Nullam eu orci sit amet turpis facilisis egestas. Proin et nisl sit amet leo aliquam venenatis. Suspendisse potenti.\n\nProin et mauris vel sem consequat congue. Etiam euismod ligula in felis cursus, sit amet auctor metus ullamcorper. Fusce ac magna vitae leo cursus consectetur. Nulla facilisi. Integer et metus eu turpis placerat bibendum. Etiam et dui ut massa faucibus fermentum. Nam et nunc eget magna tempus placerat in et velit.";

// Step 2: Count the number of words in the string
var words = loremIpsumText.split(' ');
var wordCount = words.length;
console.log("Number of words: " + wordCount);

// Step 3: Count the number of times the word "et" appears
var etCount = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        etCount++;
    }
}
console.log("Number of times 'et' appears: " + etCount);







// Step 1: Store the phrase in a variable
var phraseToCheck = "A man, a plan, a canal, Panama!";

// Step 2: Remove non-alphanumeric characters and convert to lowercase
var cleanedPhrase = "";
for (var i = 0; i < phraseToCheck.length; i++) {
    var char = phraseToCheck[i].toLowerCase();
    if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
        cleanedPhrase += char;
    }
}

// Step 3: Reverse the cleaned string
var reversedPhrase = "";
for (var i = cleanedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += cleanedPhrase[i];
}

// Step 4: Compare the cleaned string with the reversed string
var isPalindrome = cleanedPhrase === reversedPhrase;
console.log("Is the phrase a palindrome? " + isPalindrome);


