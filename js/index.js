/*
Author: Adrian Harischand
Lab1
date: 12/1/2023
*/

// Iteration 1: Names and Input
const prompt = require('prompt-sync')();
var hacker1 = prompt("What is your name driver? ");
console.log(`The driver's name is ${hacker1}`)
var hacker2 = prompt("What is your name navigator? ");
console.log(`The navigator's name is ${hacker2}`)
var len_1 = hacker1.length;
var len_2 = hacker2.length;

// Iteration 2: Conditionals
if (len_1 === len_2){
    console.log(`Wow, you both have equally long names, ${len_1} characters!`)
}
else if (len_1 < len_2){
    console.log(`It seems that the navigator has the longest name, it has ${len_2} characters.`)
}
else{
    console.log(`The driver has the longest name, it has ${len_1} characters.`)
}
// Iteration 3: Loops
var s =  "";
var upper = hacker1.toUpperCase();
for ( let i = 0; i < len_1; i++){
    s+=upper[i]
    if ( i != len_1-1){
        s += " "
    }
}
console.log(s)
var b = ""
var lower = hacker2.toLowerCase()
for (let j = len_2-1; j >= 0; j-- ){
    b+= lower[j]
}
console.log(b)

if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
}
else if (hacker1 < hacker2){
    console.log("The driver's name goes first")
}
else{
    console.log("Yo, the navigator goes first definitely.")
}

// Lorem ipsum

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in consectetur risus. Vestibulum id maximus diam. Nunc euismod elit dictum, tempor magna vel, laoreet elit. Cras placerat fringilla finibus. Sed eleifend nulla non tortor dignissim, fringilla mattis odio tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur quis elit non turpis venenatis malesuada. Etiam accumsan tempor sodales. Nunc accumsan mattis ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean at ex lorem. Sed ultrices convallis bibendum. Vivamus efficitur mauris a purus suscipit, vitae commodo orci maximus.
Phasellus ac lobortis risus, et euismod diam. In sed iaculis leo, pellentesque bibendum erat. Proin non vehicula ligula, eget ultricies elit. Sed placerat metus ante, eget imperdiet diam placerat in. Maecenas sollicitudin vitae dui sed sodales. Pellentesque id aliquam est. Vivamus fringilla nisi dui, a vehicula dui finibus sit amet. Sed commodo sed lacus non luctus.
Pellentesque bibendum metus congue nulla tincidunt fringilla. Pellentesque sagittis ex sed laoreet efficitur. Quisque malesuada a ipsum vel vehicula. Cras sodales leo eget risus imperdiet pellentesque. Curabitur tempor, dolor sit amet consectetur fringilla, justo sem rutrum tortor, eu facilisis erat mi nec eros. Vivamus elementum, dolor malesuada sodales varius, tortor ante condimentum risus, vel euismod dolor leo ut turpis. Nam malesuada viverra libero, ac ultrices orci. Vivamus sed ullamcorper lorem, ac vestibulum ante. Nullam metus leo, volutpat iaculis congue ut, aliquam sed neque. Vivamus rhoncus lectus purus, a congue diam eleifend et. Etiam sollicitudin diam id ex condimentum, sagittis pellentesque purus sagittis. In consectetur felis vel justo rhoncus, nec aliquet augue feugiat. Ut in imperdiet urna. Nam ipsum orci, congue vitae purus eu, tincidunt rhoncus orci. Ut vehicula, dolor ac vehicula scelerisque, diam sem suscipit nibh, sit amet placerat sapien augue non massa.`

// 
var count = 0;
var hold = "";
var count2 = 0;
for (let k = 0 ; k < lorem.length; k++){
   
    if (lorem[k] ==="." || lorem[k] === "," || lorem[k] === " " || lorem[k] === "\n")
    {
        if (hold === "et"){
            console.log(hold);
            count2 += 1
        }
        hold = ""
    } 
    else{
    hold += lorem[k]
    }


    if (lorem[k] === " " || lorem[k] === "\n"){
        count+=1
    }
}
// b/c the last word is not accounted for since are accounting that it is a word if there is a space or new line character
count += 1
console.log(`Number of words = ${count}`)
console.log(`Number of et = ${count2}`)

// Palindrome
var isPali = "race car".toLowerCase();
console.log(isPali)
var l = 0; 
var r = isPali.length-1;
while(l < r){
    while (l < r && !isPali[l].match(/^[0-9a-z]+$/)){
        l++;
    }
    while (l < r && !isPali[r].match(/^[0-9a-z]+$/)){
        r--;
    }

    if (isPali[l] !== isPali[r]){
        console.log("Not Palindrome ");
        break;
    }
    l++;
    r--;
}
if (l >= r){
    console.log("It is Palindrome ");
}




