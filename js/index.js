// Iteration 1: Names and Input
let hacker1 = "Mehar";
let hacker2 = "Manish";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let s = hacker1.toUpperCase();
let n = s.length;
let newstr = s.split('').join(' ');
console.log(`\"${newstr}\"`);
let nee = '';
for (var i=hacker2.length-1;i>=0;i--)
{
    nee += hacker2[i];
}
console.log(nee);
if (hacker1 > hacker2)
{
    console.log(`The driver's name goes first.`);
}
else if (hacker2 > hacker1)
{
    console.log(`Yo, the navigator goes first definitely.`);
}
else {
    console.log(`What?! You both have the same name?`);
}
//Bonus 1
var lorem = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis mauris, vitae posuere est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In condimentum suscipit tempor. Aliquam non mi quis risus tincidunt porttitor. Fusce non justo vel sem sollicitudin lacinia quis sit amet nunc. Quisque eu euismod leo. Donec nec tortor tincidunt, dapibus tellus at, scelerisque libero. Nullam turpis mi, pharetra et ullamcorper id, interdum a ligula. Vestibulum sed pulvinar nulla, non vulputate mauris.

Nunc luctus lacus posuere sollicitudin pharetra. Etiam quis tortor dictum metus suscipit efficitur. Nullam at hendrerit nibh. Nullam vitae hendrerit justo. Nulla eu finibus nisi. Etiam gravida aliquam enim, ac dignissim massa porttitor sit amet. Pellentesque tempus erat nisl, et tempor quam convallis a. Fusce sit amet enim ullamcorper, finibus tellus in, finibus tellus. Nullam fringilla, nisi at dapibus elementum, magna ipsum bibendum augue, sit amet ultrices enim turpis ac est. Pellentesque id velit eu neque varius blandit. Vivamus nunc metus, pharetra quis vestibulum at, facilisis fringilla mi. Maecenas tellus massa, sollicitudin et neque vel, ultrices lacinia dolor. Quisque pulvinar diam mauris, et feugiat nisi consequat eget. Maecenas cursus diam lorem, ut aliquet leo faucibus sed. Maecenas nec fermentum velit, ut consectetur augue.

Integer et felis cursus, scelerisque enim ac, mollis turpis. Sed lacus tortor, ullamcorper sit amet viverra non, elementum a ligula. Morbi ac risus quis diam pellentesque porta. Cras vitae maximus augue, ac pretium orci. Aenean ut arcu mauris. Nam nisi nisl, tempor eu fermentum congue, porta sit amet metus. Duis ante orci, dignissim sit amet sem non, pulvinar laoreet leo. Donec ut porta nisl. Nullam vel augue at dui finibus posuere. Suspendisse scelerisque elit at tristique tempor. Praesent congue leo orci, id eleifend dolor vestibulum ac. Donec tristique aliquet mi. Donec commodo, neque nec fringilla sagittis, metus diam vehicula purus, sit amet aliquet nisi justo at erat. Pellentesque aliquet ipsum quis mollis eleifend. Sed a sagittis ante. Pellentesque purus metus, placerat et nisl ac, malesuada consectetur sem. `
console.log(lorem.split(' ').length);
//Both are working fine for Bonus 1.3
console.log(lorem.split('et').length-1);
var c=0;
for (let i=0;i<lorem.length;i++)
{
    if (lorem[i]==='e' && lorem[i+1]==='t')
    {
        c++;
    }
}
//console.log(c);
//BONUS 2
var phraseToCheck = `taco cat`;
var p = phraseToCheck.split(" ").join("");
//console.log(p);
var newphrase=``;
for (let i=(p.length)-1;i>=0;i--)
{
    newphrase += p[i];
}
if (newphrase===p)
{
    console.log(`true`);
}
else {
    console.log(`false`);
}