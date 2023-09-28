// // Iteration 1: Names and Input
const hacker1 = 'Ernest';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Benjamin';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker2.length > hacker1.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters.`)
}

// Iteration 3: Loops
//convert convert driver's name to caps
let driverNameInCaps = hacker1.toUpperCase();

//print name separated with space
let newDriverName = "";
for(let i = 0; i < driverNameInCaps.length; i++){
    let char = driverNameInCaps[i] + " ";
    newDriverName += char;
}
newDriverName = newDriverName.trimEnd();
console.log(newDriverName);

//Printing all the characters of the navigator's name, in reverse order.
let reversedNavigatorName = hacker2.split('').reverse().join('');

console.log(reversedNavigatorName);

//Checking lexicographic order of strings
if (hacker1 > hacker2)
    console.log('The driver\'s name goes first.');
else if (hacker2 > hacker1)
    console.log('Yo, the navigator goes first definitely.');
else
    console.log('What?! You both have the same name?');


//Bonus 1
const paragraph = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Ut, laudantium quasi. Hic exercitationem quia accusantium 
repudiandae delectus iure sit corrupti fugiat. Aperiam molestiae 
facere iure voluptates quaerat, modi doloribus itaque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Pariatur eligendi et corrupti facere ab quo odit magnam asperiores velit necessitatibus? 
Enim mollitia incidunt saepe eos culpa sed excepturi alias id.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Ut, laudantium quasi. Hic exercitationem quia accusantium 
repudiandae delectus iure sit corrupti fugiat. Aperiam molestiae 
facere iure voluptates quaerat, modi doloribus itaque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Pariatur eligendi et corrupti facere ab quo odit magnam asperiores velit necessitatibus? 
Enim mollitia incidunt saepe eos culpa sed excepturi alias id.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Ut, laudantium quasi. Hic exercitationem quia accusantium 
repudiandae delectus iure sit corrupti fugiat. Aperiam molestiae 
facere iure voluptates quaerat, modi doloribus itaque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Pariatur eligendi et corrupti facere ab quo odit magnam asperiores velit necessitatibus? 
Enim mollitia incidunt saepe eos culpa sed excepturi alias id.
`;

//counting number of words in the paragraph
let wordsInParagraph = paragraph.split(/\s+/);
let wordCount = wordsInParagraph.length;


let searchString = 'et';
let etCount = 0;
let position = paragraph.indexOf(searchString);

while (position !== -1){
    etCount++;
    position = paragraph.indexOf(searchString, position + 1);
}

console.log("Word count:", wordCount);
console.log("The word 'et' occurs " + etCount + " times in the paragraph.");