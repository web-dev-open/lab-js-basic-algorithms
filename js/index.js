// Iteration 1: Names and Input

let hacker1 = 'Vinayak'
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Akshat'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length, navigatorLength = hacker2.length;
if(driverLength > navigatorLength){
    console.log(`The driver has the longest name, it has ${driverLength} characters.`);
}else if(driverLength < navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}
// Iteration 3: Loops

let driverName = "";
for(let i = 0; i < driverLength-1; i++){
    driverName += hacker1.charAt(i).toUpperCase() + ' ';
}
driverName += hacker1.charAt(driverLength-1).toUpperCase();
console.log(driverName); 

let navigatorName = "";
for(let i = driverLength-1; i >= 0; i--){
    navigatorName += hacker2.charAt(i);
}
console.log(navigatorName); 

if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
}else if(hacker1 > hacker2){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}


// Bonus 1

const paras = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sit amet ligula in aliquet. Sed tincidunt nec elit sed rutrum. Sed pretium arcu nisi, ac sollicitudin felis venenatis ac. Nam lacinia orci a commodo condimentum. Proin iaculis, tortor eu tincidunt accumsan, nisi magna congue quam, sed tincidunt augue odio non sem. Nam ut quam id dui dignissim tempor. Nunc ac diam a augue maximus eleifend. Mauris dapibus dapibus luctus. Cras lobortis mi orci, non accumsan purus vestibulum vitae. Vivamus congue pretium ipsum, ac vehicula sapien maximus volutpat. Cras scelerisque dui mollis euismod mattis. Aliquam ac dolor dui. Vestibulum tristique sit amet ante sit amet elementum. Nam sit amet nisl quis ex bibendum tempor. Sed dictum, ante at posuere consectetur, massa eros iaculis tortor, accumsan porta nisi neque vitae dolor. Fusce eu efficitur est.

Etiam imperdiet ligula ante, quis eleifend leo imperdiet non. Suspendisse tempor est sit amet auctor auctor. In feugiat consequat magna dictum mollis. Sed id porta nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer bibendum lorem lacus, vel sagittis risus vehicula vitae. Phasellus mattis molestie elit molestie dapibus. Sed a ligula nulla. Sed nec iaculis velit. Vestibulum eget libero tempor, accumsan ligula vel, egestas ipsum. Nullam sed consectetur eros. Cras nunc tortor, interdum et lacus in, rutrum convallis dui. Vivamus mollis eu risus eget hendrerit.

Suspendisse id enim diam. Sed pretium at felis eget congue. Morbi varius, nibh vitae vestibulum interdum, odio ligula ultricies sem, sed tincidunt enim augue non elit. Nullam sed massa eu nunc euismod volutpat. Aliquam convallis felis et nunc posuere ultricies ut at arcu. Vestibulum risus metus, varius id mattis ut, aliquet ut lacus. Vivamus at sagittis velit. Ut fermentum elit eget sem luctus, ut interdum neque luctus.`

let words = 0;
for(let i = 0; i < paras.length; i++){
    if(paras.charAt(i) == ' ' && paras.charAt(i-1) != ' '){
        words++;
    }
}
words += 3;
console.log(words);
let splitParas = paras.split(' ');
let etCount = 0;
for(let i = 0; i < splitParas.length; i++){
    if(splitParas[i] === 'et'){
        etCount++;
    }
}
console.log(etCount);

// Bonus 2

const phraseToCheck = 'A man, a plan, a canal, Panama!';
let start = 0, end = phraseToCheck.length-1;
while(start < end){
    if((phraseToCheck[start] <= 'z'  && phraseToCheck[start] >= 'a') || (phraseToCheck[start] <= 'Z'  && phraseToCheck[start] >= 'A')){

    }else {
        start++;
        continue;
    }
    if((phraseToCheck[end] <= 'z'  && phraseToCheck[end] >= 'a') || (phraseToCheck[end] <= 'Z'  && phraseToCheck[end] >= 'A')){

    }else{
        end--;
        continue;
    }
    if(phraseToCheck[start].toLowerCase() != phraseToCheck[end].toLowerCase()){
        console.log('It is not a palindrome.');
        break;
    }
    start++;
    end--;
}

if(start >= end){
    console.log('It is a palingdrome.');
}