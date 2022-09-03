// Iteration 1: Names and Input

let hacker1 = 'Alex';
let hacker2 = 'Bimbo';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if  (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if  (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let strUpper = '';

for (let i=0; i<=hacker1.length;i++) {
    strUpper = strUpper + hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(strUpper);

let strReverse = '';

for (let i=hacker1.length-1; i >= 0;i--) {
    strReverse = strReverse + hacker1.charAt(i).toLowerCase();
}
console.log(strReverse);

console.log(hacker1.localeCompare(hacker2));
console.log(hacker2.localeCompare(hacker1));

switch (hacker1.localeCompare(hacker2)) {
    case 0:
        console.log('What?! You both have the same name?');
        break;
    case 1:
        console.log('Yo, the navigator goes first definitely.');
        break;
    case -1:
        console.log('The driver\'s name goes first');
        break;
}

let strLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet tortor nunc, vel auctor urna scelerisque in. Cras vel nibh a ante laoreet vehicula. Nunc vel vulputate erat. Integer sapien nulla, ultricies vitae accumsan vel, aliquam ac lorem. Donec at commodo ex. Morbi ac velit pellentesque, condimentum ligula in, malesuada urna. Nullam porta a tortor ac mollis. Curabitur et risus vitae massa bibendum euismod. Etiam tempus est eros, ut rutrum massa vulputate eu. Nunc fringilla tellus sit amet quam efficitur porttitor. Mauris luctus ipsum quis tortor porttitor, eget dictum nulla imperdiet. Vivamus ac porta metus, ut congue nulla. Nam ut sapien ante. Nulla posuere faucibus ipsum, at hendrerit ante rhoncus sed. Phasellus vitae nulla semper, lobortis arcu eget, suscipit tellus. Fusce ut ex vel dui scelerisque vestibulum quis id nunc.
Cras pharetra ac quam ut egestas. Etiam fringilla metus id ornare pellentesque. Donec elementum ac nisl dictum fringilla. In accumsan accumsan lacus, ac suscipit tellus faucibus ut. Phasellus lacinia velit sed tortor varius eleifend. Etiam gravida consequat sem. Fusce congue, neque quis aliquet lacinia, justo odio mattis magna, ac eleifend enim purus eget justo. Nam vestibulum turpis ut sapien blandit porta. Vestibulum vel ullamcorper augue. Cras sit amet suscipit erat, et iaculis turpis. Aliquam tempus quam velit, eu convallis sapien fringilla et. Duis vehicula, velit vitae imperdiet viverra, urna lectus scelerisque lectus, quis sodales massa nulla non velit. Etiam volutpat condimentum sem et accumsan. Duis elementum mauris odio, convallis tristique tortor ullamcorper vel. Proin bibendum magna quis eros venenatis, non sollicitudin orci consequat. Donec cursus condimentum augue, nec interdum justo interdum eget.
Vivamus varius, diam a rutrum tristique, sem libero consequat massa, in aliquet justo leo at ipsum. Fusce tempus viverra neque, fermentum tristique massa dictum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus feugiat nisl vitae arcu commodo rhoncus. Mauris ullamcorper urna dolor, nec laoreet enim blandit et. Fusce eget dignissim tellus. Etiam cursus sapien in odio feugiat, id dictum tellus placerat. Proin eget tempor enim. Vivamus rutrum accumsan augue quis maximus. Sed sit amet tortor gravida, fringilla dolor at, fringilla augue. In hac habitasse platea dictumst. Quisque convallis tortor suscipit ipsum cursus, sed volutpat magna dapibus. Mauris a faucibus arcu.`;

let count = strLorem.length;
strLorem = strLorem.toLowerCase();

console.log(`The total length of the paragraph is ${count}`);

let regex = /et/gi;
let countET = (strLorem.match(regex) || []).length;
console.log (`The phrase et occured ${countET} times!`);


let obj = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car", 
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

let strPhraseToCheck = 'amor, roma';

for (let item in obj) {
    if (strPhraseToCheck.toLowerCase() == obj[item].toLowerCase()) {
        console.log(`This string is a Palindrome`);
    }
    
    
}
