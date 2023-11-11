console.log("I'm ready!");


// Iteration 1: Names and Input
//
let hacker1 = "Chathura";
console.log("The driver's name is " + hacker1);

let hacker2 = "Abeywickrama";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length> hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");

}else if(hacker2.length>hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");

}else{
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");
}

// Iteration 3: Loops
//task 3.1
let result =" ";
for(let i=0; i<hacker1.length; i++){
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

//task 3.2
let reverse = " ";
for(let i=hacker2.length-1; i>= 0; i--){
    reverse += hacker2[i];
}
console.log(reverse);

//task 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus time!
//Bonus 1
const para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const para2 ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const para3 ="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

const wordCount1 = para1.split(' ').length;
console.log(wordCount1);

const wordCount2 = para2.split(' ').length;
console.log(wordCount2);

const wordCount3 = para3.split(' ').length;
console.log(wordCount3);

const etCount1 = (para1.match(/\bet\b/g) || []).length;
console.log("Number of occurrences of 'et':", etCount1);

const etCount2 = (para2.match(/\bet\b/g) || []).length;
console.log("Number of occurrences of 'et':", etCount2);

const etCount3 = (para3.match(/\bet\b/g) || []).length;
console.log("Number of occurrences of 'et':", etCount3);

//Bonus 2
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  const phraseToCheck1 = "A man, a plan, a canal, Panama!";
  const phraseToCheck2 = "Amor, Roma";
  const phraseToCheck3 = "race car";
  const phraseToCheck4 = "stack cats";
  const phraseToCheck5 = "step on no pets";
  const phraseToCheck6 = "taco cat";
  const phraseToCheck7 = "put it up";
  const phraseToCheck8 = "Was it a car or a cat I saw?";
  const phraseToCheck9 = "No 'x' in Nixon";
  
  console.log(isPalindrome(phraseToCheck1)); 
  console.log(isPalindrome(phraseToCheck2)); 
  console.log(isPalindrome(phraseToCheck3)); 
  console.log(isPalindrome(phraseToCheck4)); 
  console.log(isPalindrome(phraseToCheck5)); 
  console.log(isPalindrome(phraseToCheck6)); 
  console.log(isPalindrome(phraseToCheck7)); 
  console.log(isPalindrome(phraseToCheck8)); 
  console.log(isPalindrome(phraseToCheck9)); 