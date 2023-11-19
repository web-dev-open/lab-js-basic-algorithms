// Iteration 1: Names and Input
const hacker1 = "Shivam Sharma";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Satyam Sharma";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
    );
    } else {    
        console.log(
            `Wow, you both have equally long names, ${hacker1.length} characters!`
        );
    }


// Iteration 3: Loops
let hack1 = hacker1.toUpperCase()
for(var i=0;i<hack1.length;i++)
console.log(hack1[i]+"\n");

let hack2 = hacker2.split("").reverse().join("");
console.log(hack2);

let arr=[hacker1, hacker2];
arr.sort();
if (arr[0]==hacker1)
{
    console.log("The driver's name goes first.");
}
else if(arr[0]==hacker2)
{
    console.log("Yo,the navigator goes first definitely.");
}
else
{
    console.log("What?! You both have the same name?");
}

//BONUS 1
let text=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
 
let newText=text.split(' ')
let textCount=newText.length
console.log(textCount)

//BONUS 2
let phraseToCheck = "Able was I ere I saw Elba"; // example palindrome

// Remove spaces, convert to lower case, and split into array
let phraseArray = phraseToCheck.replace(/\s+/g, '').toLowerCase().split('');

// Reverse the array and join back into a string
let reversedPhrase = phraseArray.slice().reverse().join('');

// Check if original phrase (spaces removed) is equal to reversed phrase
let isPalindrome = (phraseArray.join('') === reversedPhrase);

console.log(isPalindrome); // true if palindrome, false if not