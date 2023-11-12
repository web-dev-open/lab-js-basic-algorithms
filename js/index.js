
console.log("I'm ready!");

// Iteration 1: Names and Input
//
let hacker1='White Walker';
let hacker2='Jon Snow';

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

//--------------------------------------------------------------------------------------------//
//    BONUS 1
let para=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at scelerisque dolor, nec molestie dolor. Fusce fringilla euismod nisl ac porta. Suspendisse luctus nisi ut odio aliquam rhoncus vel ut nunc. Ut sed tincidunt augue. Vestibulum in risus felis. Donec in enim vitae ipsum pharetra consectetur. Nam semper justo nec felis gravida venenatis. Vivamus mattis dolor ut elit maximus ullamcorper. Donec pulvinar elementum purus non tincidunt. Suspendisse sit amet faucibus odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce lobortis iaculis volutpat. Suspendisse sit amet lorem quis felis porta consectetur. Etiam vestibulum sit amet felis rutrum euismod. Aliquam erat volutpat. Vivamus nec ullamcorper quam, a fringilla eros. Nullam tincidunt ante id convallis efficitur. Nam luctus condimentum neque, efficitur fringilla dui iaculis id. In id justo sem. Sed eget orci ut ante varius lobortis at facilisis augue. Aenean nulla sapien, tempor eget est quis, semper hendrerit risus. Duis lacus risus, auctor dapibus accumsan nec, placerat id lacus. In sit amet eros vel nunc suscipit aliquam vitae non ipsum. Nunc faucibus aliquam metus a auctor. In nunc nisi, molestie vitae tortor eu, sagittis rhoncus ligula. Donec eu ultricies enim. Curabitur aliquam turpis felis, sit amet pharetra leo consequat venenatis. Proin malesuada sapien eros, et bibendum nisi lacinia eget. Sed dui metus, volutpat et ligula et, vehicula pulvinar magna. Nulla condimentum arcu arcu, quis tempus ipsum tempor vitae. Vestibulum venenatis, est sed vehicula bibendum, mauris enim finibus turpis, sit amet vulputate erat diam sed libero."
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


//---------------------------------------------------------------------------------------------------//
//    BONUS 2
   // Assign a string value to the variable
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedStr = '';
// Remove non-alphanumeric characters and convert to lowercase
for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
        cleanedStr += char.toLowerCase();
    }
}

// Check if the cleaned string is a palindrome
let isPalindrome = true;
for (let i = 0, j = cleanedStr.length - 1; i < j; i++, j--) {
    // Compare characters from the beginning and end of the string
    if (cleanedStr[i] !== cleanedStr[j]) {
        isPalindrome = false; // Not a palindrome
        break;
    }
}

// Check if it is a palindrome
if (isPalindrome) {
    console.log(`${phraseToCheck} is a palindrome.`);
} else {
    console.log(`${phraseToCheck} is not a palindrome.`);
}
