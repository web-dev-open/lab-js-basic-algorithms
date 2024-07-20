// Iteration 1: Names and Input
let hacker1 = "Detard";
let hacker2 = "Le Louch";

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters')
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters");
}

// Iteration 3: Loops
let spacedCapsName = "";
let reversedName = "";

for (let i = 0; i < hacker1.length; i++){
    spacedCapsName += (hacker1[i]).toUpperCase() + " ";
}

for (let i = hacker2.length - 1; i >= 0; i--){
    reversedName += hacker2[i];
}

if (hacker1 < hacker2){
    console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator's goes first definitely");
} else {
    console.log("What? You both have the same name?")
}
console.log(spacedCapsName);
console.log(reversedName);

// Bonus 1
let loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla ac molestie congue. Vivamus mollis sem id convallis vulputate. Fusce ultrices in enim quis varius. Nulla ultricies sollicitudin enim at et egestas. Quisque nulla nisl, pellentesque in felis in, placerat congue nulla. Ut molestie varius risus. Quisque pretium rhoncus tempus. Donec iaculis sodales tempus.Nulla facilisi. Morbi placerat, neque non aliquet placerat, ligula velit malesuada lorem, rutrum hendrerit nisl odio sit amet dui. Proin et eros aliquet, imperdiet lacus eget, imperdiet ex. Sed vestibulum risus sit amet enim aliquam feugiat. Vestibulum eu purus a mi luctus hendrerit. Ut vel sodales quam. Nunc enim massa, pellentesque sed tellus luctus, dictum luctus tellus. Etiam ut arcu eu risus tempor pretium. Nulla vitae condimentum augue, a dapibus augue. Nullam egestas libero sit amet ante sagittis laoreet. Maecenas vel tempor ligula, nec laoreet neque. Pellentesque vehicula consectetur commodo. Nam sed blandit purus, eu efficitur ante. Fusce ullamcorper dui sed facilisis rhoncus.Donec tortor ante, condimentum eget orci tristique, accumsan interdum libero. Nunc at dolor vitae urna congue imperdiet. Praesent id facilisis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh elit, blandit vel efficitur in, efficitur id felis. Mauris lacinia dui quis odio luctus porttitor. Aenean consectetur rutrum tortor, non pretium diam vestibulum quis. Nunc blandit nisl sed lectus viverra imperdiet. Proin varius aliquet mattis. Maecenas lacinia vel nibh eget sollicitudin. Maecenas sodales rutrum purus quis malesuada."

let words = loremString.split(" ");
let wordsLength = words.length;
let count = 0;

for (let i = 0; i < wordsLength; i++){
    if (words[i] === 'et'){
        count += 1;
    }
}
console.log(wordsLength);
console.log(count);

// Bonus 2:
let phraseToCheck = 'stack cats';
let reversedPhrase = phraseToCheck
    .split('')
    .filter(char => /[a-zA-Z0-9]/.test(char)).
    reverse().
    join('').
    toLowerCase()
;

phraseToCheck = phraseToCheck
    .split('')
    .filter(char => /[a-zA-Z0-9]/.test(char))
    .join("")
    .toLowerCase()
;

if (phraseToCheck === reversedPhrase){
    console.log("It's a palindrome");
} else {
    console.log("oops, this is not a palindrome");
}



