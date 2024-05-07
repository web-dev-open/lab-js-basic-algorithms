// Iteration 1: Names and Input
let hacker1="John";
console.log("The driver's name is" +hacker1);
let hacker2="Jane";
console.log("The driver's name is" +hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has" +hacker1.length+ "characters.");
}
else if(hacker1.length<hacker2.length){
    console.log("The driver has the longest name, it has" +hacker2.length+ "characters.");
}
else{
    console.log("Wow, you both have equally long names,"+hacker1.length+ "characters!");
}

// Iteration 3: Loops
let answer="";
for(let i=0;i<hacker1.length;i++){
    answer+=hacker1[i].toUpperCase()+ " ";
}
console.log(answer);

let reverse="";
for(let i=hacker2.length-1;i>=0;i--){
    reverse+=hacker2[i];
}
console.log(reverse);

let count=0;
for(let i=0; i<hacker1.length && i<hacker2.length;i++){
    if (hacker1[i]<hacker2[i]){
        count=-1;
        break;
    }
    else if(hacker1[i]>hacker2[i]){
        count=1;
        break;
    }
}
if(count<0){
    console.log("The driver's name goes first");
}
else if(count>0){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    if(hacker1.length<hacker2.length){
        console.log("The driver's name goes first");
    }
    else if(hacker1.length>hacker2.length){
        console.log("Yo, the navigator goes first definitely.");
    }
    else{
        console.log("What?! You both have the same name?");
    }
}

// Bonus
// Bonus1
let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let c=0;
let word=false;
for(let i=0; i<text.length;i++){
    if(text[i]!=" " && !word){
        word=true;
        c++;
    }
    else if(text[i]== " "){
        word=false;
    }
}
console.log("number of words in the string:", c);

//Bonus2
 let phraseToCheck= "Amor, Roma";
 let ans= '';
 for(let i=0;i,phraseToCheck.length;i++){
    let ch=phraseToCheck[i].toLowerCase();
    if((ch>='a' && ch<='z') || (ch>='0' && ch<='9')){
        ans+=ch;
    }
 }
 let p=true;
 for(let i=0; i<ans.length/2;i++){
    let left=ans[i];
    let right= ans[ans.length-1-i];
    if(left!=right){
        p=false;
        break;
    }
 }
 if(p){
    console.log("'" +phraseToCheck+ "' is a palindrome.");
 }
 else{
    console.log("'" +phraseToCheck+ "' is not palindrome.");
 }