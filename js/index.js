console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1="Aazim"
console.log(`\nThe driver's name is ${hacker1}.`);
let hacker2="Waseem"
console.log(`\nThe navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
    console.log(`\nThe driver has the longest name, it has ${hacker1.length} characters.`);
else if(hacker1.length < hacker2.length)
    console.log(`\nIt seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else
    console.log(`\nWow, you both have equally long names, ${hacker2.length} characters!`);

// Iteration 3: Loops

let hacker1_caps=""
for (let i=0; i< hacker1.length; i++){
    hacker1_caps+= hacker1[i].toUpperCase()+" ";
}
console.log(`\n${hacker1_caps.trim()}`)


let hacker2_rev=""
for (let i=hacker2.length-1; i>=0; i--){
    hacker2_rev+=hacker2[i];
}
console.log(hacker2_rev);

if (hacker1[0]<hacker2[0])
    console.log("\nThe driver's name goes first.");
else if (hacker1[0]>hacker2[0])
    console.log("\nYo, the navigator goes first definitely.");
else
console.log("\nWhat?! You both have the same name?");

//Bonus 1

let generatedParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lectus vitae lorem dignissim dapibus. Phasellus eleifend hendrerit urna ac aliquet. Proin varius dolor arcu, ut viverra turpis facilisis nec. Nulla ac neque ante. Integer non finibus risus, vitae faucibus orci. Mauris id ex ante. Donec euismod et nulla ornare commodo. Donec bibendum sagittis lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Phasellus mollis malesuada risus sit amet vulputate. Donec pretium dolor in libero mollis varius ut vitae arcu. Cras sit amet massa euismod, pellentesque elit sit amet, semper odio. Cras mi est, tempus sit amet ultrices ullamcorper, posuere nec sapien. Ut blandit felis efficitur, porttitor orci non, pellentesque velit. Vestibulum dapibus felis sed ex euismod viverra. Etiam tristique est elit, eu porta arcu sollicitudin eget. Fusce varius molestie orci vel finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor viverra nulla ut rutrum. In eget sagittis dui. Ut sodales, enim eget tempus luctus, felis nisi consectetur orci, vel hendrerit dolor velit at ante. Aenean ac metus in dui sollicitudin interdum eu ac ex. Nunc neque elit, suscipit a urna non, pulvinar sagittis ligula. Morbi malesuada lorem neque, nec eleifend magna pulvinar et. Etiam accumsan mauris quam, vitae pellentesque tortor dignissim nec. Suspendisse et dui metus. Phasellus eleifend urna ac aliquam convallis. Fusce ut accumsan velit. Integer orci ipsum, venenatis eu turpis sed, dapibus mollis augue. Mauris vitae varius odio. Sed ultrices feugiat purus, quis porta eros sollicitudin eget. Maecenas in nibh et augue efficitur iaculis eu non ligula."
word_count= generatedParagraph.split(' ').length;
console.log(`\nNumber of words in the generated paragraph = ${word_count}.`);

et_count=0
let position = generatedParagraph.indexOf("et");
while(position!== -1){
    et_count++;
    position= generatedParagraph.indexOf("et",position +1 )
}

console.log(`\nNumber of \"et\" in the generated paragraph: ${et_count}.`)

//Bonus 2

let phraseToCheck="Malayalam";
phraseToCheckCleaned=phraseToCheck.toLowerCase().replaceAll(" ","");
phraseReverse=""
for (let i=phraseToCheck.length-1; i>=0; i--){
    phraseReverse+=phraseToCheckCleaned[i];
}
if (phraseToCheckCleaned === phraseReverse)
    console.log("\nThe phrase is a palindrome.")
else
    console.log('\nThe phrase is not a palindrome.')