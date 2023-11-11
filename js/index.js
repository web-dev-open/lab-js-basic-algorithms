MyName = "Tirth Ladani";

// Iteration 1: Names and Input
let hacker1 = "Nick"  //driver name
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Emily" //Navigator name
console.log(`The Navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals
let newDriver = "";

for(let i=0; i < hacker1.length; i++){
    newDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver.trim());

// Print all the characters of the navigator's name, in reverse order.
let newNavigator = "";

for(let i = hacker2.length - 1; i >= 0; i--) {
    newNavigator += hacker2[i];
}
console.log(newNavigator);

// Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

let newHack1 = hacker1.toLowerCase();
let newHack2 = hacker2.toLowerCase();

if (newHack1 > newHack2) {
    console.log("The driver's name goes first.")
}
    else if (newHack1 < newHack2) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
} 

//Bonus 1:
const para = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tristique nibh. Integer tincidunt, ipsum elementum finibus faucibus, ligula arcu lobortis quam, ut mollis ex orci nec augue. Proin venenatis mauris quis scelerisque feugiat. Maecenas rhoncus libero quis tortor tempor dignissim. Etiam tristique nisi eget nisi imperdiet, vitae aliquet nibh hendrerit. Fusce scelerisque lacus eu odio iaculis, a rhoncus mauris interdum. Morbi imperdiet ex vitae ante finibus bibendum. Integer tincidunt aliquet fringilla.

    Fusce non laoreet dolor. Proin pulvinar nibh non auctor ullamcorper. Donec id arcu ultrices, consequat mi sollicitudin, molestie metus. Vivamus tincidunt pretium orci, eget ultricies justo vehicula eu. Donec in mattis enim. Nam aliquam tincidunt libero, vitae scelerisque ex placerat eu. Donec lacinia sed ex ac vehicula. Phasellus in quam aliquet felis posuere bibendum. Proin eget orci tristique, egestas tortor et, hendrerit velit. Quisque euismod ornare eros eu varius. Suspendisse orci velit, hendrerit vel mollis vitae, maximus et massa. Etiam ultrices bibendum massa quis fringilla. Nullam quis ultricies tortor. Aenean pretium ut sem ut laoreet. Sed interdum lectus ut posuere laoreet. Proin finibus sed purus quis bibendum.

    Nam sit amet ullamcorper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae vulputate lectus. Praesent maximus nisl nisl, et varius nisi aliquet in. Sed vestibulum euismod eros id fringilla. Quisque nec sapien non sapien auctor pretium. Vestibulum tempor facilisis tellus nec scelerisque. Suspendisse viverra vulputate congue. Proin facilisis, leo vel ultricies sollicitudin, lectus nisi congue erat, sit amet consectetur nibh dolor at nunc. In luctus leo vitae arcu placerat, sit amet commodo leo aliquet. Ut dictum lacus nec elit finibus viverra.
`;

let wordCount = 0;
let etCount = 0;

let splitPara = para.split(' ');
    console.log(splitPara)

for (let i=0; i < splitPara.length; i++) {
    if(splitPara[i].includes('\n')) {
        wordCount++
    } else if(splitPara[i] === "et" || splitPara[i] === "et.") {
        etCount++;
    }
    wordCount++;
}

console.log('Total words', wordCount);
console.log('Total et count', etCount);

//Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?" ;
string = phraseToCheck.replace(/[ ,!.?]/g, "").toLowerCase();

let reversedString = string.split('').reverse().join('');

if (string === reversedString) {
console.log('String is a palindrome');
}
else {
console.log('Not a palindrome');
}   