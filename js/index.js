console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Ram';
console.log("The driver's name is "  +  hacker1)
let hacker2 = 'Shyam'
console.log("The navigator's name is "  +  hacker2)
// Iteration 2: Conditionals
let name1Length = hacker1.length;
let name2Length = hacker2.length;
if(name1Length > name2Length){
    console.log("The driver has the longest name, it has " + nameLength1 + " characters.")
}
else if(name1Length < name2Length){
    console.log("It seems that the navigator has the longest name, it has " + name2Length + " characters.")
}
else{
    console.log("Wow, you both have equally long names, XX characters!")
}
let driverNameInCaps = hacker1.toUpperCase().split('');
console.log(driverNameInCaps)
let navigatorNameInReverse = hacker2.split('').reverse().join('');
console.log(navigatorNameInReverse)

if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
}
else if(hacker1 > hacker2){
    console.log('Yo, the navigator goes first definitely.')
}
else{
    console.log('What?! You both have the same name?')
}

let loremEpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nulla dictum, viverra risus vel, rutrum arcu. Quisque convallis ac velit a aliquet. Proin gravida turpis id dolor aliquam aliquet. Nunc ullamcorper sodales leo rutrum aliquam. Fusce at bibendum quam. Nullam diam arcu, iaculis ut tempor ac, pharetra id orci. Integer non nisl elit. Fusce feugiat egestas justo, a posuere ex pellentesque at. Nulla ut neque non sem pulvinar rutrum eu et risus. Mauris vulputate, enim at cursus maximus, eros felis elementum neque, quis convallis tellus sapien ac sem. In non dictum elit. Aliquam odio nisl, posuere id metus nec, dictum suscipit est. Curabitur at leo sed magna semper congue euismod quis purus. Nam interdum tellus quam, eget eleifend libero malesuada cursus. Sed finibus luctus molestie.Praesent ullamcorper faucibus metus nec laoreet. Pellentesque consequat hendrerit tempus. Cras sollicitudin bibendum fringilla. Quisque finibus risus eu leo aliquet, quis semper purus imperdiet. Donec ornare ante arcu, a semper tortor condimentum nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi neque enim, ullamcorper imperdiet nibh nec, aliquet tempus nunc. Vivamus euismod, massa et suscipit tincidunt, velit odio dignissim diam, nec fringilla nisi nisi in quam. Nam lobortis nibh id nibh ultricies, at efficitur mi vestibulum. Mauris in faucibus leo. Mauris nec aliquam ipsum, sit amet pretium leo.Proin ac risus aliquet, sagittis erat quis, interdum ligula. Nulla nec efficitur felis. Mauris luctus orci a neque euismod tempus. Proin elit felis, ultrices et justo ut, maximus tincidunt enim. Aenean eu varius leo. Integer eu massa risus. Fusce hendrerit malesuada placerat.";
let loremLength = loremEpsum.length;
console.log(loremLength)

let etFind = loremEpsum.match('et').length;
console.log(etFind)

function isPalindrome(str) {
    const firstStr = str.toLowerCase();
    const secondStr = firstStr.split('').reverse().join('');
    return firstStr === secondStr;
}

let phraseToCheck = 'MALAYALAM';
let result = isPalindrome(phraseToCheck);
console.log(result);    

