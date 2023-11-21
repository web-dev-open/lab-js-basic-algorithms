console.log("I'm ready")
// Iteration 1: Names amd Input
let hacker1 = "john"
console.log("The driver name is"+ hacker1)
let hacker2 = "alexa"
console.log("The navigators name is"+ hacker2)
// Iteration 2: conditionals
let driverLen = hacker1.length
let navigatorLen = hacker2.length

if(driverLen>navigatorLen){
    console.log("The driver has the longest name, it has" + driverLen + "characters")
}
else if(navigatorLen>driverLen){
    console.log("It seems that the navigator has the longest name, it has" + navigatorLen + "characters")
}
else{
    console.log("Wow you both have equally long names" + driverLen + "characters")
}
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

// i.e. "J O H N"
let driverUppercase = hacker1.toUpperCase()
let temp = ""
for(let i=0; i<driverUppercase.length; i++){
    temp=temp+ " " + driverUppercase[i]
   
}
console.log(temp)
// 3.2 Print all the characters of the navigator's name, in reverse order.

// i.e. "nhoJ"
let rev = ""
let j = navigatorLen
while(j>=0){
    rev = rev + hacker2[j]
    j--
}
console.log(rev)
// 3.3 Depending on the lexicographic order of the strings, print:
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
// bonus1
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
// Bonus-2
let phraseToCheck="A man, a plan, a canal, Panama!"
let small=phraseToCheck.toLowerCase()
let i = 0, k = small.length - 1;
fl = 0;
while (i < k) {
    if (96 < small.charCodeAt(i) && small.charCodeAt(i) < 123) {
        if (96 < small.charCodeAt(k) && small.charCodeAt(k) < 123) {
            if (small[i] != small[k]) {
                fl = 1;
                break;
            } else {
                i++, k--;
            }
        } else {
            k--;
        }
    } else {
        i++;
    }
}
if (fl == 0) {
    console.log("Palindrome");
} else {
    console.log("not Palindrome");
}
