// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("am ready");

//variables and input

let hacker1 = "John";

console.log("the driver's name is" + " " + hacker1);

let hacker2 = "Tom";

console.log("The navigator's name is" + " "+ hacker2);

//conditionals

if(hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}

else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
 
// Iteration 3: Loops

for(let i = 0; i<hacker1.length; i++){
    console.log(hacker1[i].toUpperCase());
}


for(let i = hacker2.length  - 1; i >= 0; i--){
    console.log(hacker2[i]);
}

let minlength = Math.min(hacker1.length , hacker2.length)
for ( let i = 0; i < minlength ; i++){
    if(hacker1[i] < hacker2[i]){
        console.log("The drivers name goes first");
     break;   
    }else if(hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.")
        break;
    }else{
        console.log("What?! You both have the same name?");
    }
    
}

// Bonus 1:

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nibh in tortor porttitor, at fermentum diam interdum. Morbi blandit lacus enim, eget sollicitudin tortor rhoncus eu. Vivamus nisi sem, auctor vitae metus et, vulputate porta purus. Nunc convallis tellus vel elit imperdiet volutpat. Sed aliquet viverra rutrum. Nullam cursus leo risus, et iaculis sapien congue nec. Vivamus malesuada sapien ligula, ut pharetra mauris accumsan commodo. Maecenas nec est iaculis tortor molestie maximus vitae sed sem. Maecenas gravida accumsan porttitor. Vestibulum non felis magna. Aliquam eu libero viverra, vehicula quam non, dapibus libero. Suspendisse sodales erat scelerisque, dignissim lorem nec, maximus augue. Morbi consequat sit amet nibh nec tincidunt. Sed ac orci in orci gravida sollicitudin. Praesent accumsan in enim vitae ultrices. Sed ultrices scelerisque lobortis.";

let cleanText = paragraph
  .toLowerCase()
  .replace(/[.,!?]/g, "");

let words = cleanText.split(/\s+/);

// Count words
let wordCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    wordCount++;
  }
}

// Count "et"
let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etCount++;
  }
}
console.log("Total number of words:", wordCount);
console.log("Number of times 'et' appears:",etCount++);

//Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanedPhrase = phraseToCheck
  .toLowerCase()
  .replace(/[^a-z]/g, "");

let isPalindrome = true;

for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase.charAt(i) != cleanedPhrase .charAt(cleanedPhrase.length - 1 - i)) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(cleanedPhrase  + " is a palindrome");
} else {
  console.log(cleanedPhrase  + " is not a palindrome");
}