// Iteration 1: Names and Input
//
var hacker1 = 'Wonka';
console.log(`The Driver's name is  ${hacker1}.`);
var nav = "Willy";
console.log(`The navigator's name is  ${nav}.`);
// Iteration 2: Conditionals

if(hacker1.length > nav.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(nav.length > hacker1.length){
    console.log(
 `It seems that the navigator has the longest name, it has ${nav.length} characters.`)
}
else
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}
// Iteration 3: Loops

var formatName = hacker1.toUpperCase().split(' ').join(' ')
console.log(formatName)

var rev = " ";
for(var i =nav.length;i>=0;i--){
    rev += nav.charAt(i);
}
console.log(rev);


if(hacker1 > nav){
console.log("The driver's name goes first")
}
else if(nav > hacker1){
    console.log("Yo, the navigator goes first definitely.")
}
else
{
    console.log("What?! You both have the same name?")

}
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula sit amet erat facilisis cursus. Nulla facilisi. Duis eu ligula sit amet magna ullamcorper pretium. Ut dictum risus ut sem finibus, et suscipit leo ultricies. Nulla a facilisis magna. Nulla in risus at neque efficitur iaculis et nec libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse potenti. Sed tincidunt, nulla a dapibus finibus, ex risus efficitur metus, eget luctus enim purus vel felis. Nulla sit amet facilisis erat. Cras eu lectus non ante laoreet condimentum. Quisque sit amet turpis et libero convallis pharetra. Etiam malesuada, magna in posuere tempor, justo lorem auctor dolor, at faucibus libero metus in nunc. Ut euismod sapien ut magna congue tincidunt. Suspendisse vel enim quam.

Pellentesque in elit a tortor convallis accumsan a id elit. Nulla et nibh at libero fringilla convallis. Mauris volutpat, nisl non suscipit tempus, nulla ipsum vehicula turpis, et volutpat magna neque at risus. Aliquam erat volutpat. Nulla facilisi. Donec id velit nec ligula fringilla malesuada. Integer vestibulum quam ac nulla vehicula, sit amet facilisis sapien posuere. Quisque auctor et elit sed feugiat. Nulla et eros vitae urna fringilla pharetra.`;


let wordCount = loremIpsum.split(/\s+/).filter(word => word.length > 0).length;


let etCount = (loremIpsum.match(/\bet\b/g) || []).length;

console.log(`Word count: ${wordCount}`);
console.log(`'et' count: ${etCount}`);
