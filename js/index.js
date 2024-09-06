// Iteration 1: Names and Input

let hacke1="Tamim";
console.log("The driver's name is "+hacke1);

let hacke2="Ghazali";
console.log("The driver's name is "+hacke2);


//
// Iteration 2: Conditionals
let firstPlayerLenght=hacke1.length;
let secondPlayerLength=hacke2.length;

if(firstPlayerLenght>secondPlayerLength){
    console.log("The driver has the longest name, it has"+firstPlayerLenght +"XX characters.");
}else if(firstPlayerLenght<secondPlayerLength){
    console.log("It seems that the navigator has the longest name, it has "+secondPlayerLength+" characters.")
}else{
    console.log("Wow, you both have equally long names, "+firstPlayerLenght +" characters!");
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in uppercase

let driverNameUpperCase=hacke1.toUpperCase();
let spcaeDriverName=driverNameUpperCase.split("").join(" ");
console.log(spcaeDriverName);

// 3.2 Print all the characters of the navigator's name in reverse order
let reversedName=hacke2.split("").reverse().join("");
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings

if(hacke1<hacke2){
    console.log("The driver's name goes first.");
}
else if(hacke1>hacke2){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}


//Bonus Time!
//Bonus 1:
// Generate 3 paragraphs of text
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lorem et risus cursus, ut lacinia ligula euismod. Integer sit amet sollicitudin tortor. Nulla facilisi. Cras viverra sem sit amet felis tincidunt, ut varius libero sodales. Vivamus efficitur, nisi a suscipit efficitur, quam nisl elementum magna, et commodo tortor purus nec urna. Ut facilisis nisl et orci sagittis gravida. Fusce aliquam erat sed eros pharetra, ac cursus sapien varius. Nam et arcu et nulla interdum suscipit.`;

let wordCount=text.split(/\s+/).length; //Count the number of words
let etCount=(text.match(/et/g) || []).length; // Count occurrences of "et"

console.log("Number of words: " + wordCount);
console.log('Number of times "et" appears: ' + etCount);


//Bonus 2:

// Create a variable phraseToCheck
let phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(str){
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr=str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    // Reverse the cleaned string
    let reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr===reversedStr;
}

if(isPalindrome(phraseToCheck)){
    console.log("This pharase is palindrom");
}else{
    console.log("This pharase is not palindrom");
}


//using if-else and for

let phraseToCheck1 = "A man, a plan, a canal, Panama!";
    function isPalindrome1(str){
         // Remove non-alphanumeric characters and convert to lowercase
         let cleanedStr1="";

         for(let i=0;i<str.length;i++){
            let char=str[i];
            if(char.match(/[a-zA-Z0-9]/)){
                cleanedStr1+=char.toLowerCase();
            }
         }

             // Reverse the cleaned string
             let reversedStr1="";
             for(let i=cleanedStr1.length-1;i>=0;i--){
                reversedStr1=cleanedStr1[i];
             }

        // Check if cleaned string is the same as reversed string
        return cleanedStr1 === reversedStr1;
        
    }

    if (isPalindrome(phraseToCheck)) {
        console.log("This phrase is a palindrome.");
    } else {
        console.log("This phrase is not a palindrome.");
    }