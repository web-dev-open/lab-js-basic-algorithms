console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "John Cena";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Dwayne Johnson";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1
var formattedName = '';
for (var i=0; i<hacker1.length; i++){
    
    formattedName += hacker1[i].toUpperCase();

    if(i !== hacker1.length-1){
        formattedName += ' ';
    }

}
console.log(formattedName);
// // Built-in functions
// console.log(hacker1.toUpperCase().split('').join(' '));

// 3.2
var reversedName = '';
for (var i=hacker1.length-1; i>=0; i--){
    reversedName += hacker1[i];
}
console.log(reversedName);

// 3.3
if(hacker1.toUpperCase() < hacker2.toUpperCase()){
    console.log("The driver's name goes first.");
}else if(hacker1.toUpperCase() > hacker2.toUpperCase()){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

// Bonus 1
const text =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum lectus et semper aliquet. Quisque vulputate velit sem, eget viverra eros pulvinar at. In egestas enim mauris, tincidunt volutpat metus eleifend ut. Phasellus venenatis interdum dignissim. Praesent viverra vulputate sem ac laoreet. Praesent elementum ut ante eget blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut est metus. Etiam lectus purus, commodo ut elit eget, posuere sodales eros. Curabitur faucibus lorem id purus laoreet gravida. Donec nisi tortor, venenatis non luctus at, eleifend vitae arcu. Duis sed libero et sem faucibus auctor. Ut auctor dapibus feugiat. Morbi purus metus, auctor quis purus et, tristique dignissim ligula. Vivamus condimentum, justo id egestas porta, sapien tellus maximus libero, ac pharetra erat purus sit amet turpis.

Sed finibus sodales enim ut mattis. Suspendisse sit amet dui ac felis interdum posuere hendrerit dictum neque. Phasellus gravida feugiat turpis, in facilisis magna dignissim nec. Proin hendrerit varius sem. Suspendisse consequat varius vehicula. Nunc nunc sem, ultrices varius tortor et, finibus aliquet massa. Sed porta nulla sit amet risus commodo, eget ultricies ante finibus. Proin congue quis magna pellentesque pellentesque. Praesent in dictum justo, id convallis lectus. Nunc at molestie risus.

Morbi vel ante tempor, commodo risus quis, porttitor nulla. Praesent facilisis sagittis velit elementum dignissim. Phasellus vel facilisis nunc. In urna massa, rhoncus tristique metus nec, scelerisque vehicula nisi. Aenean sed luctus nunc, sit amet scelerisque purus. Nulla ut tortor odio. Pellentesque posuere diam quis dolor sollicitudin, sit amet porta ipsum lacinia. Integer pretium risus eu velit lacinia condimentum. Proin quis turpis id nulla sodales interdum at tempus sapien. Suspendisse potenti. Fusce condimentum fringilla augue sed placerat. Pellentesque ac convallis nibh. Pellentesque et semper ipsum, sed ornare lectus.

Vestibulum at porta turpis. Cras dolor nibh, feugiat pretium finibus et, ornare volutpat tellus. Praesent nec suscipit urna. Nullam at felis eu nisl vulputate rhoncus. Maecenas ante leo, interdum sit amet congue ut, vulputate in neque. Maecenas sed ipsum ut sapien rutrum faucibus. In sit amet dignissim dui, ac tincidunt purus. Suspendisse lectus felis, rhoncus vitae tristique eu, cursus eget elit.

Pellentesque varius et orci id pharetra. Maecenas non lorem leo. Integer molestie diam non ultrices hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt pharetra elementum. Donec ligula purus, tempus ac nunc vitae, dapibus venenatis velit. Nam nec elit mollis, varius ante eget, consectetur diam. Pellentesque placerat dictum ipsum quis auctor. Quisque eu tristique massa. Ut aliquet orci ac vestibulum iaculis. Mauris et mauris vulputate, sodales augue sit amet, pharetra lectus. Aenean cursus, risus lacinia malesuada tempus, leo erat ultricies risus, vitae fermentum magna arcu ac nulla. Ut feugiat posuere massa, non ultricies quam porta nec.`

console.log("Length of text : ",text.split(/\s+/).length);
console.log("Number of occurrence of 'et': ",  (text.match(/et/gi) || []).length);


// const phraseToCheck = 'A man, a plan, a canal, Panama!';
// const cleanedStr = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s/g, '')
// const reversedStr = cleanedStr.split('').reverse().join('').replace(/\s/g, '');
// console.log(`Is ${phraseToCheck} palindrome ? `, cleanedStr===reversedStr);


const phraseToCheck = 'A man, a plan, a canal, Panama!';
const cleanedStr = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s/g, '');

let reversedStr = '';
for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
}

let isPalindrome = true;
for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i] !== reversedStr[i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("'" + phraseToCheck + "' is a palindrome.");
} else {
    console.log("'" + phraseToCheck + "' is not a palindrome.");
}