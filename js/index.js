
console.log("I'm ready");


// Iteration 1: Names and Input
//

let hacker1 = "Jackson";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Samsung";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let k = "";
for (let index = 0; index < hacker1.length; index++) {
    k += hacker1[index].toUpperCase() + " ";
}
console.log(k);
let ans = "";
for (let index = hacker2.length-1; index >= 0; index--) {
    ans+=hacker2[index];
}

console.log(ans);


if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
}
else if(hacker1 > hacker2){
    console.log(`Yo, the navigator goes first definitely.`);
}
else{
    console.log(`What?! You both have the same name?`);
}


let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus nulla dictum, venenatis quam sed, porta lorem. Phasellus pretium leo orci, ac sollicitudin ligula consequat eu. Duis nunc ipsum, imperdiet ut tempor dictum, tincidunt eu augue. Phasellus sed eros felis. Phasellus cursus viverra sodales. Duis non vestibulum libero, eu imperdiet quam. Ut pulvinar condimentum urna, quis ornare dolor tincidunt et. Maecenas finibus massa eget mauris convallis, feugiat condimentum turpis pretium.` + 
`Donec sed neque et augue rhoncus euismod. Fusce at ligula imperdiet, maximus diam quis, suscipit nulla. Suspendisse et dui ac urna imperdiet maximus ornare nec lectus. Nullam volutpat arcu in sapien aliquet, ut rhoncus dui gravida. Nunc vitae odio lacus. Donec mattis tortor quam, et pellentesque libero maximus at. Proin leo leo, tempus vel justo suscipit, venenatis feugiat arcu. Etiam facilisis dictum sollicitudin. Nullam accumsan, lorem eget imperdiet accumsan, tortor nulla luctus orci, a sagittis est mi aliquam lectus. Fusce venenatis laoreet velit at molestie.`+
`Integer et nulla imperdiet, rhoncus ipsum vitae, gravida nisi. Mauris sit amet sem augue. Nulla fermentum odio enim, at condimentum est semper et. Duis convallis diam et justo semper, non pretium purus interdum. Suspendisse erat nisl, hendrerit sed dolor ac, condimentum porttitor augue. Sed et ex nec quam congue malesuada. Quisque a ex mollis, tincidunt ante vel, imperdiet nunc. Ut pulvinar vestibulum ipsum, in tempor lacus aliquam vel. Quisque condimentum mauris ac massa elementum, id scelerisque ex mollis. Cras gravida, purus eget consectetur congue, purus nisl varius purus, non molestie erat arcu eget urna. Suspendisse maximus, lacus sit amet suscipit interdum, magna sem molestie mi, et lacinia augue lorem vel tellus. Mauris nec magna convallis, dapibus justo id, imperdiet lorem. Nulla viverra, dui in interdum cursus, urna eros varius libero, ornare semper nisl tellus non eros. Aenean volutpat porta laoreet.`


let count_et = 0;
let count_words = 0;

text = text.split(" ");
for (let index = 0; index < text.length; index++) {
    if(text[index] == " " || text[index] == "\n" || text[index] == "." || text[index] == ","){
        continue;
    }
    else if(text[index] == "et" || text[index] == "et."){
        count_et++;
    }
    else{
        count_words++;
    }
    
}

console.log("No of Words: " + count_words + " No of et or et.: " + count_et);




let str = "A man, a plan, a canal, Panama!"
let phraseToCheck = str.split(' ').join('');

let s = "";
for (let index = 0; index < s.length; index++) {
    if(phraseToCheck[index]=="?" || phraseToCheck[index]=="," || phraseToCheck[index]=="!"){
        continue
    }
    else{
        s+=phraseToCheck[index]
    }
}

let r =s.length-1,p = 0;
for (let index = 0; index < s.length/2; index++) {
    if(s[index]!=s[r]){
        p = 1;
        break;
    }
    r--;
}
if(p==1){
    console.log("Not a Palindrome");
}
else{
    console.log("palindrome");
}



