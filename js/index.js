// Iteration 1: Names and Input
let hacker1 = "Sing";
console.log(`"The driver's name is ${hacker1}"`)
let hacker2 = "Himanshu"
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) 
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if(hacker1.length<hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
else 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split(''))
console.log(hacker2.split('').reverse().join(''))
let lexiComapritor = hacker1.localeCompare(hacker2)
if(lexiComapritor === -1)
   console.log(`The driver's name goes first.`)
else if(lexiComapritor === 1)
    console.log(`Yo, the navigator goes first definitely.`)
else
    console.log(`What?! You both have the same name?`)

// Bonus

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat tellus in porttitor maximus. Cras rutrum ex nibh, pretium sodales sem feugiat quis. Praesent pulvinar dui non enim consequat iaculis. Cras rutrum urna id diam ultrices, ultrices sollicitudin nisl dapibus. Curabitur fringilla molestie sem, ut rhoncus quam scelerisque non. Nullam luctus rhoncus augue condimentum ullamcorper. Phasellus ut lacus consequat, lacinia odio ac, sollicitudin diam.

Pellentesque at ante nulla. Maecenas vel felis in augue posuere sagittis ut sed lorem. Cras non neque nulla. Nunc non augue auctor, ullamcorper velit nec, hendrerit odio. Fusce maximus massa et posuere vehicula. Maecenas tortor massa, porttitor fermentum odio sit amet, pretium tincidunt sapien. Sed porttitor, nunc sed consectetur laoreet, lectus dui aliquam ipsum, varius imperdiet risus lacus at urna. Morbi vulputate congue arcu, non aliquam nunc rutrum vel. Sed vel ligula vitae justo mollis lobortis. Donec eget nisl ullamcorper, molestie diam nec, rhoncus erat. Donec in sagittis ex. Cras ut tincidunt neque, vel ultrices mi. Donec ut leo a sapien vulputate egestas ullamcorper sed est. Quisque malesuada facilisis sem, ac imperdiet mi euismod nec.

Vivamus libero lacus, vulputate non elit eget, ullamcorper elementum nisl. Nam a ex id velit ornare dictum. Mauris a vulputate lorem. Donec sodales vestibulum leo sit amet malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sed erat lacus. Aenean ut convallis velit. Sed in lorem et risus rutrum molestie. Aliquam rutrum nunc nec massa placerat feugiat. Donec at fringilla leo, in euismod enim. Donec ac mauris quis nunc lobortis dapibus nec ut tortor. Etiam ac mauris cursus, mollis sem quis, semper urna. Mauris interdum nec elit quis finibus. Integer semper maximus lorem. Aliquam et iaculis lorem.`
let loremCount = lorem.length
function countLatinWordEt(str) {
    // Convert the entire string to lowercase for case-insensitive matching
    const lowerCaseStr = str.toLowerCase();
    
    // Split the string into an array of words
    const words = lowerCaseStr.split(/\s+/); // Split by whitespace
    
    // Initialize a counter for the word "et"
    let etCount = 0;
    
    // Iterate through each word
    for (const word of words) {
        if (word === "et") {
            etCount++;
        }
    }
    
    return etCount;
}

// Example usage:
const etOccurrences = countLatinWordEt(lorem);

console.log(`The word "et" appears ${etOccurrences} times in the given text.`);
console.log(loremCount)
console.log(etOccurrences)
// Bonus-2
// palendrome checker
function isPalindrome(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2 === str;
}
