// Iteration 1: Names and Input
//
let hacker1 = `Lokesh`;
let hacker2 = `Mahesh`;
console.log(`The driver's name is ${ hacker1 }`);
console.log(`The navigator's name is ${ hacker2 }`);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
    console.log(`The driver has longest name, it has ${hacker1.length} characters`);
else if(hacker1.length<hacker2)
    console.log(`The navigator has longest name, it has ${hacker2.length} characters`);
else
    console.log(`Wow! you both have equally long name, ${hacker1.length} characters`);
// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let rev = ""+hacker1.charAt(0);

for(let i=1;i<hacker1.length;i++)
{
    rev+= " "+hacker1.charAt(i);
}
console.log(rev);

rev="";
for(let i=hacker2.length-1;i>=0;i--)
    rev+=hacker2.charAt(i);

console.log(rev);

if(hacker1<hacker2)
    console.log("The driver's name goes first.");
else if(hacker1>hacker2)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?");

let lorem_string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum reprehenderit placeat nobis temporibus fugiat cupiditate eos dolor similique! Blanditiis accusantium adipisci at qui earum reprehenderit mollitia itaque quaerat reiciendis."+

"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ab esse amet nulla molestias inventore nemo. Alias eum soluta porro facilis aliquam reprehenderit odit doloremque ipsam repellendus, nam nobis magnam!"+

"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi aliquid, eveniet exercitationem deleniti, modi fuga delectus, ducimus dolor quod repellat consequatur corporis veniam ab doloremque ipsam aspernatur. Dicta, quae soluta.";