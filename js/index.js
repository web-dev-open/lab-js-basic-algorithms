console.log("I am ready!")
// Iteration 1: Names and Input
hacker1="Tony"
console.log("The driver's name is "+hacker1)
hacker2="Tony"
console.log("The navigator's name is "+hacker2)

// Iteration 2: Conditionals
driver_length=hacker1.length
navigator_length=hacker2.length

if(driver_length>navigator_length){
    console.log(`The driver has the longer name, it has ${driver_length} characters.`)
}
else if(driver_length<navigator_length){
    console.log(`It seems that the navigator has the longer name, it has ${navigator_length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${driver_length} characters!`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals.
let var1=""
for (let index = 0; index < hacker1.length; index++) {
   var1+=' '+hacker1.toUpperCase().charAt(index);
}
var1=var1.trimStart()
console.log('"'+var1+'"');

// 3.2 Print all the characters of the navigator's name, in reverse order.
var1=""
for (let index = hacker2.length-1; index >=0 ; index--) {
    var1+=hacker2.charAt(index);
}
console.log('"'+var1+'"');

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

let min=-1;
min=Math.min(hacker1.length,hacker2.length)
let fl=-1
let index=0
for (index = 0; index < min; index++) {
    if(hacker1.charAt(index)<hacker2.charAt(index)){
        fl=0;break;
    }else if(hacker1.charAt(index)>hacker2.charAt(index)){
        fl=1;break;
    }
}
if(fl==-1){
    console.log("The driver's name goes first.");
}else if(fl==0){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

// Bonus Time 
// Bonus 1
let str1=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue quam justo, id maximus ante cursus in. Aliquam sem elit, feugiat vitae nunc eu, tincidunt iaculis arcu. Donec non dolor pellentesque, molestie purus non, mollis nibh. Praesent augue orci, finibus ac pretium sit amet, sagittis ac felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer venenatis metus ac massa pretium cursus. Nam tempor lacus dui, eget sagittis libero eleifend ut. Fusce sed erat gravida, mollis purus in, maximus erat. Vivamus suscipit ultrices commodo. In turpis quam, cursus vitae elit eget, cursus sollicitudin justo. Nulla vitae vehicula purus, et rhoncus lorem. Mauris accumsan augue in vulputate interdum. Mauris non erat congue, dapibus leo a, malesuada tellus. Etiam vitae nunc id justo posuere varius. Vivamus iaculis neque sit amet tellus malesuada, id cursus ante tempus.
Aliquam laoreet augue ac posuere aliquam. Quisque sed porta erat, quis scelerisque arcu. Donec convallis tempor auctor. Maecenas in massa erat. Aliquam vehicula sit amet lorem id scelerisque. Pellentesque interdum odio eu ornare dignissim. In ornare lectus risus, id tempus magna malesuada vel.
Maecenas elementum sem nec porta consectetur. Nam dapibus a dui volutpat rhoncus. Quisque eget ante vehicula, tempus magna hendrerit, vehicula leo. Nulla facilisi. Proin vulputate maximus lacus, eu iaculis velit porttitor eu. Sed augue nunc, iaculis sed vestibulum eget, aliquam eget turpis. Mauris at ullamcorper quam, ut iaculis dui. Quisque tempus est ut hendrerit molestie. Donec iaculis iaculis ipsum, accumsan elementum purus commodo sagittis. Cras egestas diam et sapien egestas tempor. `
var1=0
for (let index = 0; index < str1.length; index++) {
    const element = str1[index];
    if(element==' '||element=='\n')var1++
}
console.log("The paragraph contains :"+var1+" words");

let count=0
const words = str1.toLowerCase().split(/\s+/);
for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        count++;
    }
}
console.log("the number of times the Latin word et appears : "+(count?count:0));

// Bonus 2
let phraseToCheck="A man, a plan, a canal, Panama!"
let small=phraseToCheck.toLowerCase()
let i = 0, j = small.length - 1;
fl = 0;
while (i < j) {
    if (96 < small.charCodeAt(i) && small.charCodeAt(i) < 123) {
        if (96 < small.charCodeAt(j) && small.charCodeAt(j) < 123) {
            if (small[i] != small[j]) {
                fl = 1;
                break;
            } else {
                i++, j--;
            }
        } else {
            j--;
        }
    } else {
        i++;
    }
}
if (fl == 0) {
    console.log("Given string is a Palindrome");
} else {
    console.log("Given string is not a Palindrome");
}




