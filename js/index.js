//Iteration 1: Names and Input
//
let hacker1='Aditya';
let hacker2='Dumble';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
let hacker1Count = hacker1.length;
let hacker2Count = hacker2.length;
if( hacker1Count > hacker2Count )
   console.log(`The driver has the longest name, it has ${hacker1Count} characters`);
else if( hacker2Count > hacker1Count )
   console.log(`It seems that the navigator has the longest name, it has ${hacker2Count} characters`);
else 
  console.log(`Wow, you both have eually long names, ${hacker1Count} characters`);



// Iteration 3: Loops
let name='';
for(let i=0; i < hacker1Count ; i++)   //loop to iterate through each character one by one
   name+=hacker1.charAt(i).toUpperCase()+' ';
name.trim();    // to remove the whitespace at the end of string
console.log(name);


let rev_name='';
for(let j=hacker2Count-1 ; j>=0 ;j--)
    rev_name+=hacker2.charAt(j);
console.log(rev_name);

let compare=hacker1.localeCompare(hacker2)
if(compare > 0)
   console.log("The driver's name goes first.")
else if(compare < 0 )
   console.log("Yo, the navigator goes first definitely.")
else 
   console.log("What?! You both have the same name?")



//    BONUS 1
let para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let words=0;
for(let i=0;i<para.length;i++)
{
   if(para.charAt(i)==' ')
      words+=1;
}
words+=1;   //number of words is one greater than number of spaces in a string
console.log("Number of words in paragraph "+words)

let regexp=new RegExp('et','g');      //make a regular expression
let count= para.match(regexp)
if(count == null)
   console.log('et does not occur in paragraph')
else
   console.log(`et occurs ${count.length} times in paragraph`)



//    BONUS 2
let phraseToCheck='Amor roma'
let string1=''
let string2=''
for(let i=0;i<phraseToCheck.length;i++)
{
   let ch=phraseToCheck.charAt(i).toLowerCase();
   if(ch>='a' && ch<='z') 
   {
      string1+=ch;
      string2=ch+string2;
   }
}
if(string1 === string2)
   console.log(`${phraseToCheck} is a Palindrome`);