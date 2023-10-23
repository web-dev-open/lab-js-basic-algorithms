// Iteration 1: Names and Input
let hacker1 = `Lokesh`;
let hacker2 = `Mahesh`;

// Displaying the driver and navigators names
console.log(`The driver's name is ${ hacker1 }`);
console.log(`The navigator's name is ${ hacker2 }`);


// Iteration 2: Conditionals

// To find the who's name is longest
if(hacker1.length>hacker2.length)
    console.log(`The driver has longest name, it has ${hacker1.length} characters`);
else if(hacker1.length<hacker2)
    console.log(`The navigator has longest name, it has ${hacker2.length} characters`);
else
    console.log(`Wow! you both have equally long name, ${hacker1.length} characters`);


// Iteration 3: Loops

// To change the Whole name into Upper case;
hacker1 = hacker1.toUpperCase();

//Creating duplicate variable as rev  for printing spaces between characters and appending the first character of the string to the new string
let rev = ""+hacker1.charAt(0);

// adding remaining characters with leading space 
for(let i=1;i<hacker1.length;i++)
{
    rev+= " "+hacker1.charAt(i);
}
console.log(rev);

// Empty the duplicate string rev 
rev="";

// adding the characters of navigators name from the end to start as it gives the reversed name into the rev
for(let i=hacker2.length-1;i>=0;i--)
    rev+=hacker2.charAt(i);

console.log(rev);

// checking the Lexigraphical Order of the driver and navigators names
if(hacker1<hacker2)
    console.log("The driver's name goes first.");
else if(hacker1>hacker2)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?");

// LOREM IPSUM GENERATOR 

// assigning  three lored ipsum paragraphs inti the lorem_string
let lorem_string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum reprehenderit placeat nobis temporibus fugiat cupiditate eos dolor similique! Blanditiis accusantium adipisci at qui earum reprehenderit mollitia itaque quaerat reiciendis."+

" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ab esse amet nulla molestias inventore nemo. Alias eum soluta porro facilis aliquam reprehenderit odit doloremque ipsam repellendus, nam nobis magnam!"+

" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi aliquid, eveniet exercitationem deleniti, modi fuga delectus, ducimus dolor quod repellat consequatur corporis veniam ab doloremque ipsam aspernatur. Dicta, quae soluta.";

// Counting the words in the above string
console.log('No of words in the generated string is ',lorem_string.split(" ").length);

//count the no of words in lorem_string three paragraphs
console.log("count of words in lorem_string = ",lorem_string.split(" ").length);

//program count the number of times the Latin word et appears.
//if we mention in the place of 'g' 'gi' then it matches with out case of letters
console.log("count of 'et' words lorem_string = ",lorem_string.match(/et/g).length);

//Bonus 2
// check variable is palindrome or not

let phraseToCheck = "A man, a plan, a canal, Panama!";
let temp = phraseToCheck;
//Removing spaces and special characters in string and convert into lower case
phraseToCheck = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

// split the stirng into parts and join in reverse order to check palindrome or not
let reversePhraseToCheck = phraseToCheck.split("").reverse().join("");

//if original string and reversed string is equal then it is a palindrome otherwise this is not a palindrome
if(phraseToCheck === reversePhraseToCheck)
    console.log(temp,"is a Palindrome");
else 
    console.log(temp,"is not a Palindrome");