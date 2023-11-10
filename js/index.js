// Iteration 1: Names and Input
const hacker1 = "Aalok"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "WebDevOpen";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
let newName = "";
for (let i = 0; i < hacker1.length; i++){
    newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName)

let reverseName = "";
for (let i = hacker2.length-1; i>=0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?");
}
else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else {
    console.log("Yo, the navigator goes first definitely.");
}


// Bonus 1 
const loremString = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum eu turpis molestie tempus. Fusce elementum metus vitae porta finibus. Fusce et nulla leo. Etiam non erat ipsum. Sed est ipsum, sodales consequat sodales id, ultrices et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tincidunt quam nec neque elementum ultrices. Quisque ac odio laoreet, dictum velit a, lobortis nibh. Sed eleifend arcu eget massa elementum, hendrerit suscipit lorem lacinia. Vestibulum eget tincidunt orci. Phasellus blandit, est vitae interdum consectetur, erat leo semper urna, at viverra enim tortor et ipsum. Ut tincidunt est at dolor aliquam rutrum vitae eu diam.
    Phasellus a sodales risus, eu fermentum libero. Duis nunc justo, pulvinar quis dui sed, blandit pretium mauris. Fusce malesuada molestie dolor ac euismod. Sed luctus enim orci, quis finibus erat congue ac. Integer venenatis eros erat, in efficitur augue ultrices ac. Suspendisse in neque est. Aenean a suscipit turpis. Integer quis leo efficitur, semper tortor et, rutrum augue. Quisque ante libero, euismod vitae volutpat vitae, iaculis accumsan velit. Proin nisl neque, tincidunt sed efficitur sed, commodo vel lacus. Phasellus tincidunt placerat magna.
    Suspendisse rutrum magna ultricies augue pharetra, a commodo mi fermentum. Fusce eget interdum est, nec volutpat nibh. Donec mollis congue urna vel aliquam. Maecenas at nisl arcu. Praesent sagittis id eros at semper. Nunc eget felis lacus. In vestibulum bibendum ipsum, vel egestas leo sodales et. Aenean dignissim aliquet turpis feugiat pulvinar. Etiam eget blandit sem, id dictum lectus. Aenean convallis, ante at tincidunt varius, purus odio fringilla tellus, quis dignissim nibh tortor vel sapien. Fusce luctus vestibulum orci eget euismod. Mauris nisi urna, interdum nec tellus nec, aliquet vehicula lectus. Mauris placerat porta metus pellentesque pellentesque. Aliquam fermentum rhoncus condimentum. Pellentesque id diam odio. Pellentesque mollis purus et cursus mattis.
`;

console.log("String length is: ", loremString.length);

let count = 0;
let position = loremString.indexOf("et");

while (position !== -1) {
    count++;
    position = loremString.indexOf("et", position + 1);
}

console.log("The number of times 'et' occurs is : ", count);


// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";

let flag = true;

let i = 0, j = phraseToCheck.length - 1;

while (i < j) {

    // checking if alphabet
    if (!(phraseToCheck[i] >= 65 && phraseToCheck[i] <= 90) || (phraseToCheck[i] >= 97 && phraseToCheck[i] <= 122)) {
        i++;
        continue;
    }
    if (!(phraseToCheck[j] >= 65 && phraseToCheck[j] <= 90) || (phraseToCheck[j] >= 97 && phraseToCheck[j] <= 122)) {
        j--;
        continue;
    }

    // checking if character is same or not
    if (phraseToCheck[i].toLowerCase() !== phraseToCheck[j].toLowerCase()) {
        flag = false;
        break;
    }
    i++;
    j--;
}

if (flag) {
    console.log(`The string '${phraseToCheck}' is palindrome`);
}
else console.log(`The string '${phraseToCheck}' is not palindrome`);

