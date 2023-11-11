const prompt = require("prompt-sync")();


console.log("I'm ready!");

// Iteration 1: Names and Input
//1.1
let hacker1 = prompt('Enter 1st name: ');
//1.2
console.log('The driver\'s name is ' + hacker1);
//1.3
let hacker2 = prompt('Enter 2nd name: ');
//1.4
console.log('The navigator\'s name is ' + hacker2);


// Iteration 2: Conditionals
//2.1
if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
}
 else if(hacker1.length < hacker2.length){
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.');
}else{
    console.log('Wow, you both have equally long names,' +hacker1.length+ ' characters!.');
}

// Iteration 3: Loops
//3.1
let seperateName = '';
for(let i=0; i<hacker1.length; i++ ){
     seperateName += hacker1[i].toUpperCase()+' ';
}
console.log(seperateName.trim());

//3.2
let reverseName = '';
for(i=hacker2.length-1; i>=0; i--){
    reverseName += hacker2[i];
}
console.log(reverseName);

//3.3

if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("The driver's name goes first.")
}
else if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

//bonus 1
const loremEpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisi, luctus nec auctor nec, dignissim sit amet dolor. Maecenas sit amet dolor ut eros faucibus efficitur non ac lacus. Aenean placerat ipsum a mattis euismod. Nunc pellentesque, massa nec placerat semper, massa sapien egestas turpis, sit amet dictum tortor risus eu mauris. Donec ut est urna. Quisque sem diam, pulvinar non tempus sit amet, dapibus at tortor. Morbi a orci nec libero fermentum fermentum. Praesent nibh arcu, finibus nec mauris eget, scelerisque ornare neque.

Integer id mattis justo. Donec volutpat eu sapien eu mollis. Nam lobortis ligula nulla, sed mattis ante ultricies eu. Proin ut enim ligula. Fusce in est felis. Nullam porta tempus turpis in sodales. Sed id orci quis nisl dignissim consectetur. Etiam malesuada nibh ut blandit luctus. Nunc sit amet mi turpis. Cras felis purus, lobortis vitae lacinia tincidunt, aliquam quis arcu. Sed sed blandit dolor. Integer in fermentum dui, sed mattis sem. Mauris condimentum, nisl eu auctor vulputate, mauris lacus interdum ipsum, a interdum lacus metus sit amet tortor. Donec sit amet sapien id velit porta cursus.

Nullam ullamcorper velit at ullamcorper egestas. Proin sollicitudin diam enim, in vulputate sapien pulvinar a. Mauris ac nunc vitae odio sollicitudin ultrices vitae non leo. Vestibulum et pharetra nisi. Duis sed neque sit amet velit finibus mollis in nec eros. Vestibulum porta pharetra enim, eget placerat est feugiat eu. Maecenas tristique porta magna at semper. Integer accumsan gravida odio auctor fermentum. Vivamus volutpat tincidunt mi non vehicula. Vivamus eget nunc mollis, maximus elit ac, venenatis lorem. Sed tincidunt, dui dictum hendrerit finibus, tellus urna euismod tortor, in sodales mi dolor sit amet orci. Morbi sed eros quam.`


let words = 0;
let etCount = 0;

let splitPara = loremEpsum.split(' ');
for(i= 0; i<splitPara.length; i++){
    if(splitPara[i].includes('/n')){
        words++;
    }else if(splitPara[i] === 'et' || splitPara[i] === 'et.'){
        etCount++;
    }
    words++;
}

console.log('words: ', words);
console.log('et count: ', etCount);

//bonus2
let phraseToCheck = 'Was it a car or a cat I saw?';
phraseToCheck = phraseToCheck.replace(/[ ,!.?]/g, "");
console.log(phraseToCheck)

let newreverse = '';
for(i=phraseToCheck.length-1; i>=0; i--){
    newreverse += phraseToCheck[i];
}
console.log(newreverse)

if(phraseToCheck.toLowerCase() === newreverse.toLowerCase()){
    console.log('The given string is palindrome')
}else{
    console.log('The given string is not palindrome')
}