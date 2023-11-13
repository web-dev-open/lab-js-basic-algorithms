console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1='Gemini';
console.log(`The driver's name is ${hacker1}`)
let hacker2='Sharma';
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length==hacker1.length){
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}else{
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
// Iteration 3: Loops
function capitalizeWithSpace(word) {
  let chars = word.split("");
  for (let i = 0; i < chars.length; i++) {
    chars[i] = chars[i].toUpperCase();
  }
  let result = chars.join(" ");
  return result;
}
console.log(capitalizeWithSpace(hacker1));
function reverseInPlace(str) {
    var words = [];
    words = str.split("\s+");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }
}
console.log(reverseInPlace(hacker2))
function compareNames(driverName, navigatorName) {
    let minLength = Math.min(driverName.length, navigatorName.length);
    for (let i = 0; i < minLength; i++) {
        if (driverName[i] < navigatorName[i]) {
            console.log("The driver's name goes first.");
            return;
        } else if (driverName[i] > navigatorName[i]) {
            console.log("Yo, the navigator goes first definitely.");
            return;
        }
    }
    if (driverName.length < navigatorName.length) {
        console.log("The driver's name goes first.");
    } else if (driverName.length > navigatorName.length) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}
compareNames(hacker1,hacker2);
let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula turpis enim, ut venenatis nisl eleifend ac. Nunc eu mattis nisi. Pellentesque arcu nisi, posuere mollis odio suscipit, rutrum molestie ipsum. Maecenas efficitur varius metus, at vestibulum justo faucibus at. Nam maximus sit amet ante ut placerat. Aenean interdum dolor sollicitudin, congue dolor eget, semper quam. Sed quis dui maximus, tincidunt urna quis, fermentum sem. Nunc pellentesque mi velit. Ut rhoncus libero elit, quis tempor est aliquam sodales. Pellentesque sit amet volutpat nisi. Proin auctor eu lorem eget pretium. Nunc placerat nec ex at suscipit. Praesent eu orci volutpat, commodo ex at, faucibus turpis.
Morbi et finibus enim, suscipit auctor nulla. Vivamus vulputate, turpis nec luctus accumsan, dolor diam sollicitudin neque, ut molestie ipsum tellus semper ex. Integer ut dui nisi. Vestibulum purus lacus, finibus at commodo et, imperdiet vel sapien. Pellentesque efficitur augue vel magna pellentesque porttitor. Aliquam porta lectus et pellentesque mollis. Sed lectus massa, fringilla sed velit et, auctor fermentum neque.
Sed tempus ipsum eu nisi rhoncus commodo. Ut nisi tortor, suscipit sed elit quis, accumsan posuere ex. Donec feugiat lectus vel turpis faucibus venenatis. Vestibulum sed massa vel augue pulvinar maximus et scelerisque orci. Praesent commodo, dolor non auctor finibus, nunc massa eleifend tortor, a volutpat quam nisl ut turpis. Morbi consequat ligula sit amet erat posuere sollicitudin. Fusce pharetra, turpis eu fringilla aliquam, ex odio placerat dolor, et pretium nisi nisl sit amet nunc. Mauris nec lorem sapien. Sed maximus viverra metus. Donec non egestas purus, in eleifend ex. Nullam vel ullamcorper est. Ut ex eros, luctus vitae tortor ac, facilisis tempus nibh. Aenean mollis nunc pharetra, sodales tellus at, malesuada velit. Donec tempus ligula a rutrum convallis. Phasellus cursus nulla tellus, id maximus quam condimentum et.`
function countWords(text) {
    let wordCount = 0;
    let inWord = false;

    for (let char of text) {
        if (char === ' ' || char === '\n' || char === '\t') {
		if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }
    if (inWord) {
        wordCount++;
    }

    return wordCount;
}
function countEtOccurrences(text) {
    let etCount = 0;
    let currentIndex = 0;

    while (currentIndex !== -1) {
        currentIndex = text.indexOf('et', currentIndex);

        if (currentIndex !== -1) {
            etCount++;
            currentIndex += 2;
	}
    }

    return etCount;
}

let wordCount = countWords(loremIpsumText);
let etCount = countEtOccurrences(loremIpsumText);
console.log("Number of words:", wordCount);
console.log("Number of times 'et' appears:", etCount);


//bonus2
let phraseToCheck = "A man, a plan, a canal, Panama";
function isPalindrome(str) {
	let cleanStr = '';
    for (let char of str) {
        if (/^[a-zA-Z0-9]$/.test(char)) {
            cleanStr += char.toLowerCase();
        }
    }
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
if (isPalindrome(phraseToCheck)) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}
