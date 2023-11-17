// Iteration 1: Names and Input
let hacker1="Michael";
console.log("The driver's name is "+hacker1);
let navigator1="Dwight";
console.log("The navigator's name is "+navigator1);

// Iteration 2: Conditionals
let l1=hacker1.length;
let l2=navigator1.length;
if(l1>l2)
console.log("The driver has the longest name, it has " + l1+ " characters.");
else if(l2>l1)
console.log("It seems that the navigator has the longest name, it has "+ l2 + " characters.");
else
console.log("Wow, you both have equally long names, "+ l1+" characters!.");

// Iteration 3: Loops
let s1="";
for(i=0;i<l1;i++)
s1+=hacker1[i].toUpperCase()+" ";
console.log(s1);
let s2="";
for(i=l2-1;i>=0;i--)
s2+=navigator1[i];
console.log(s2);
if(hacker1<navigator1)
console.log("The driver's name goes first.");
else if(hacker1>navigator1)
console.log("Yo, the navigator goes first definitely.");
else
console.log("What?! You both have the same name?");

//Bonus 1
let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum efficitur erat. Nullam vitae imperdiet lacus. Aenean sodales, velit ac condimentum tincidunt, ex velit ornare purus, sed molestie tellus risus non ipsum. Sed pretium elit ac egestas finibus. Morbi aliquet libero nibh, vitae cursus augue finibus quis. In hac habitasse platea dictumst. Fusce id efficitur turpis. Praesent posuere tincidunt mi id ornare.                                                                Etiam eget felis nisi. Sed facilisis velit quis odio aliquet, ac feugiat arcu egestas. In ac feugiat lacus. Praesent velit nunc, vestibulum vitae maximus eu, sagittis in erat. Vivamus dictum purus vitae lectus pellentesque viverra. In tempus laoreet tellus vitae dictum. Mauris imperdiet arcu et pellentesque pulvinar.          Pellentesque vitae tincidunt urna. Cras eleifend neque quis sem varius pretium. Aliquam eleifend enim vitae ultrices sollicitudin. Cras pulvinar ipsum a condimentum hendrerit. Nam pulvinar dui id dolor rutrum, sed venenatis nulla auctor. Sed eu pharetra nisl, sit amet pharetra lacus. Maecenas molestie est faucibus, condimentum felis vel, dapibus ligula. Sed non scelerisque massa. Etiam consequat arcu eget velit accumsan facilisis. Ut augue ligula, ultrices in leo sed, porttitor commodo risus. Nam eu dui sed libero gravida rutrum eget et augue. Quisque nec luctus dui. Nulla lorem leo, volutpat vitae sodales nec, pellentesque a tellus.";
let words=str.split(' ');
console.log("The no. of words is "+words.length);
let count=0;
for(i=0;i<words.length;i++)
{
    if(words[i]=="et")
    count++;
}
console.log("et appears "+count+" times.");

//Bonus 2
let phraseToCheck="put . it UP!";
phraseToCheck=phraseToCheck.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
let reversedPhrase=phraseToCheck.split('').reverse().join('');
if(phraseToCheck==reversedPhrase)
console.log("It is a palindrome.");
else
console.log("It is not a palindrome");