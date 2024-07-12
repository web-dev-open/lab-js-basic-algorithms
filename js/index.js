
console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "John"
console.log("The Driver's name is " + hacker1);
let hacker2 = "Robert"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength){
    console.log(`The driver has the longest name, it has ${driverLength} characters`);
}
else if (driverLength < navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
    }
else{
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}



// Iteration 3: Loops
/* 3.1 Print all the characters of the driver's name, separated by a space and in capitals
i.e. "J O H N" */
let result = ""
for (let i=0; i<driverLength; i++){
    result += hacker1[i].toUpperCase();

    if(i<driverLength-1)
        result+=" ";
}

console.log(result);

// 3.2 Print all the characters of the navigator's name, in reverse order.
result = ""
for(let i=hacker2.length-1;i>-1;i--){
    result += hacker2[i];
}
console.log(result);


/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.

Yo, the navigator goes first definitely.

What?! You both have the same name?*/



if(hacker1<hacker2){
    console.log("The driver's name goes first.");
}
else if (hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

// Bonus 1
loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur lacus at ex convallis gravida. In maximus risus non augue elementum, ac commodo velit placerat. Vivamus gravida leo ac ligula sollicitudin pretium. Maecenas orci libero, congue sed nulla quis, placerat pellentesque risus. Proin vitae orci libero. Integer tempor ultricies convallis. Sed vitae sollicitudin ante. Vestibulum dapibus efficitur arcu eget iaculis. Aliquam vitae varius tortor. Vivamus et elementum nibh. Nunc porta venenatis sollicitudin. Phasellus auctor pharetra sagittis. Duis accumsan lacus a ex molestie viverra.

Vivamus sodales maximus faucibus. Fusce tristique porttitor dignissim. Morbi urna enim, imperdiet a enim a, porttitor laoreet felis. In suscipit, elit vitae varius tincidunt, magna tortor auctor mi, quis ullamcorper urna libero quis ante. Curabitur accumsan porttitor iaculis. In pharetra rhoncus lorem, ut commodo dolor hendrerit sit amet. Sed in nunc non arcu rhoncus semper. Fusce tincidunt rutrum purus, vitae feugiat elit tempus quis. Etiam laoreet, nulla egestas auctor pulvinar, est diam lobortis turpis, et commodo tortor urna et quam. Donec et justo eros. Pellentesque lacus purus, condimentum sed purus eu, lobortis molestie ligula. In eget euismod justo. Donec eleifend aliquam ex, at hendrerit sapien egestas et. Cras pellentesque laoreet turpis, ac mollis arcu maximus nec.

Quisque sodales velit quis nunc efficitur, a facilisis ante semper. Sed et turpis et augue faucibus molestie id vitae ante. Duis a lectus metus. Cras facilisis augue in nisi venenatis, at fermentum sem fermentum. Nulla et sagittis ipsum, suscipit consectetur magna. Quisque malesuada cursus sapien et lacinia. Aliquam ac volutpat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec convallis nibh, a vehicula velit. In eget dignissim dolor, a laoreet nunc. Nunc nec ultricies nisi. Suspendisse ullamcorper ultricies nulla ut blandit. Aliquam at hendrerit purus, ut sodales ipsum. Nam faucibus tellus tincidunt mauris pulvinar hendrerit. Nunc molestie vel tellus ac feugiat.`

const wordCount = loremIpsum.trim().split(/\s+/).length;
console.log("Word Count " + wordCount);

const regex = new RegExp('\\bet\\b',`gi`);
matches = loremIpsum.match(regex);
countEt = matches ? matches.length : 0;
console.log("Count Et " + countEt);

// Bonus 2
phraseToCheck = 'race car';
phraseToCheck = phraseToCheck.replace(/\s+/g, '');

let reversePhraseToCheck = ""

for(let i=phraseToCheck.length-1;i>-1;i--){
    reversePhraseToCheck += phraseToCheck[i]
}

if(reversePhraseToCheck === phraseToCheck){
    console.log("Phrase is Palindrome");
}
else{
    console.log("Phrase is not Palindrome");    
}