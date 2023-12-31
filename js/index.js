//console.log("I'm ready!");
// Iteration 1: Names and Input

//1.1
//results
let hacker1 = 'Monica';
//1.2
console.log(`The driver name is ${hacker1}`);
//1.3
let hacker2 = 'Chandler';
//1.4
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
//results
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1
//Print all the characters of the driver's name, separated by a space and in capitals

//oneForm:
let hackerTogether = (hacker1 + hacker2);
console.log(hackerTogether.toUpperCase().split('').join(' '));

//results
let formattedName = '';
for (let i = 0; i < hackerTogether.length; i++){
    formattedName += hackerTogether[i].toUpperCase() + ' ';
}
console.log(formattedName);

//3.2
// Print all the characters of the navigator's name, in reverse order.

//oneForm:
console.log(hackerTogether.toUpperCase().split('').reverse().join(' '));

//results
let reversedName = '';
for (let i = hackerTogether.length - 1; i >= 0; i--) {
    reversedName += hackerTogether[i].toUpperCase() + ' ';
}
console.log(reversedName);

//3.3
//Depending on the lexicographic order of the strings, print.
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

//results
let comparisonResult = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase());

if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1:

 const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

 Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.
 
 Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.` 

const wordCount = paragraph.split(/\s+/).length;
console.log(`El número de palabras en el párrafo es: ${wordCount}`);

const etCount = paragraph.match(/\bet\b/gi).length;
console.log(`La palabra "et" aparece ${etCount} veces en el párrafo.`);

//Bonus 2:

const phraseToCheck = "A man, a plan, a canal, Panama!";

function cleanString(str) {
  return str.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function isPalindrome(str) {
  const cleanedStr = cleanString(str);

  const length = cleanedStr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false; 
    }
  }

  return true; 
}

if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
  console.log(`"${phraseToCheck}" no es un palíndromo.`);
}