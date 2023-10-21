// Iteration 1: Names and Input

let hacker1 = `Mahesh`;
console.log(`The driver's name is ${hacker1}.`);

let hacker2 =`Manoj`;
console.log(`The navigator's name is ${hacker2}.`);



// Iteration 2: Conditionals

if(hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if(hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals


let driverNameInCapitalWithSpaces = "";
for(let i=0;i<hacker1.length;i+=1)
    driverNameInCapitalWithSpaces = driverNameInCapitalWithSpaces+( hacker1[i].toUpperCase()+" ");
console.log(driverNameInCapitalWithSpaces);

//3.2 Print all the characters of the navigator's name, in reverse order.
let navigatorNameInReverseOrder = "";
for(let i=hacker1.length-1;i>=0;i--)
    navigatorNameInReverseOrder+=hacker2.charAt(i);
console.log(navigatorNameInReverseOrder);


//3.3 Depending on the lexicographic order of the strings, print:

if(hacker1<hacker2)
    console.log("The driver's name goes first.");
else if(hacker2<hacker1)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?");



//Bonus1:
let lorem_string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum reprehenderit placeat nobis temporibus fugiat cupiditate eos dolor similique! Blanditiis accusantium adipisci at qui earum reprehenderit mollitia itaque quaerat reiciendis."+
 
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ab esse amet nulla molestias inventore nemo. Alias eum soluta porro facilis aliquam reprehenderit odit doloremque ipsam repellendus, nam nobis magnam!"+

"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi aliquid, eveniet exercitationem deleniti, modi fuga delectus, ducimus dolor quod repellat consequatur corporis veniam ab doloremque ipsam aspernatur. Dicta, quae soluta.";


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