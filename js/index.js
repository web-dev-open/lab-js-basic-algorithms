// Iteration 1: Names and Input
//

var hacker1 = "Jynk";
console.log(`The driver's name is ${hacker1}` );

var hacker2 = "Johny";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

var hacker1_upper = ""
for(var i=0;i<hacker1.length;i++)
{
    hacker1_upper+=hacker1[i].toUpperCase() + " ";
}
console.log(hacker1_upper)

hacker2_revese = ""
for( var i=hacker2.length-1;i>=0;i--)
{
    hacker2_revese+=hacker2[i];
}
console.log(hacker2_revese)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} 

else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} 

else {
    console.log("What?! You both have the same name?");
}

//Bonus1

var lorem = `Nostrud ullamco veniam amet nulla nostrud sint ipsum ex aliqua veniam dolore in eu. Esse aute nostrud ullamco est consectetur laboris ut magna culpa non sit laboris in. Sint id non et ea deserunt laborum. Eu deserunt commodo ut reprehenderit magna aliquip ut sunt ad commodo eiusmod. Ad ad officia officia id qui sint labore Lorem cillum eiusmod.
Amet elit id tempor dolore nisi qui magna pariatur nisi id deserunt reprehenderit. Esse ut fugiat nostrud fugiat do excepteur laborum dolore mollit nulla tempor dolor. Consectetur nulla consequat incididunt in nostrud non ut do est anim officia. Eu veniam et et esse aliquip sit ipsum. Eu ad veniam eu cillum est.
Ut tempor nulla officia do id exercitation pariatur cupidatat labore Lorem id occaecat. Lorem quis ipsum est elit minim velit velit. Et fugiat proident aliquip sit tempor ut est ipsum ad elit non incididunt duis cupidatat. Ex incididunt minim sunt ad aliquip nisi ut id ullamco. Exercitation aliquip nostrud occaecat mollit eiusmod officia aliqua.`

