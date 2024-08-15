// Iteration 1: Names and Input
let hacker1 = "jane"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "john"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let caphacker1 = hacker1.toUpperCase()
for(let i = 0 ;i<caphacker1.length;i++){
process.stdout.write(`${caphacker1[i]} `)
//console.log()was adding a new line at the end of the end character !

}
console.log("\n")
for (let i = hacker2.length-1; i >=0 ; i--) {
//    console.log(hacker2[i]);
process.stdout.write(hacker2[i])
    
}
console.log("\n");
//3.3 lexicongraphic order
if(hacker1<hacker2) console.log(`The driver's name goes first`);
else if(hacker1>hacker2) console.log(`Yo, the navigator goes first definitely.`);
else{
    console.log("What?! You both have the same name?");
}
//BONUS
let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae elit sem. Pellentesque suscipit suscipit mi quis aliquet. Nunc arcu augue, congue non arcu id, sagittis vehicula odio. Fusce fringilla risus eget nisi pulvinar, at cursus risus rutrum. Curabitur sed ipsum sed odio porttitor fermentum vitae id odio. Integer non imperdiet risus. Nullam mollis et urna et condimentum. Sed ac dignissim massa. Phasellus enim lacus, ultricies sed porta eget, mollis quis ex. Nam at neque leo.

Fusce mattis dolor ut purus faucibus tristique. Aliquam convallis quam sit amet massa tincidunt, non placerat leo auctor. Nam lacinia metus posuere bibendum placerat. Praesent non lacus sed felis consectetur eleifend eget vitae mi. Etiam elit justo, vulputate sit amet nulla vitae, placerat suscipit libero. Duis pellentesque aliquam lacus. Vivamus ac elit a dui fringilla venenatis accumsan vitae erat. Maecenas id massa vitae quam dictum imperdiet eget sit amet urna.

Pellentesque et consectetur velit. Ut id molestie nulla. Donec fermentum tempus finibus. Vestibulum porta orci quis lectus tristique, ac condimentum enim finibus. In in ipsum eget lorem rhoncus eleifend non ac ligula. Maecenas quis molestie dolor. Aenean vel ultricies diam, et tincidunt orci. Duis suscipit ultricies euismod.`



function WordCount(str){
    return str.split(" ").length
}
console.log(WordCount(str));


function etCount(str){
   let et = str.split(" ").filter(e => {
    return e === "et"
   });

   console.log(et.length);
}

etCount(str)

//BONUS 2
let phraseToCheck = "Was it a car or a cat I saw?" 

function Palindrome(phraseToCheck){
    let cleanedPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // console.log(cleanedPhrase);
    let reversedPhrase = '';
    for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
        reversedPhrase += cleanedPhrase[i];
    }
    //console.log(reversedPhrase);
    return cleanedPhrase === reversedPhrase;

}
console.log(Palindrome(phraseToCheck))