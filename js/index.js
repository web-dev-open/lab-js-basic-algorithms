 // Iteration 1: Names and Input
 const hacker1=`Lovely`;
console.log(`The Driver's name is ${hacker1}. `);
  const hacker2=`Mohit`;
console.log(` The Navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
        console.log(`Wow, you both have equally long names, ${hacker2.length}   characters!`);
}
// Iteration 3: Loops
//convert the name to uppercase
 const upperCase=hacker1.toUpperCase();
 const character=upperCase.split("");
 const formattedName=character.join(" ");
 console.log(formattedName);

 //printing in reverse order
 for(var i=hacker1.length-1;i>=0;i--){
        console.log(hacker1[i]);
 }
 //lexicographic order
 if(hacker1<hacker2){
        console.log("The driver's name goes first.");
 }
 else if(hacker1>hacker2){
        console.log("Yo, the navigator goes first definitely.");
 }
 else{
        console.log("What?! You both have the same name?");
 }

 //bonus 1
     var string="lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate dolore qui ut. Fuga ipsa quasi nostrum sapiente molestias quos similique voluptatibus, quaerat provident eveniet error totam illo, aliquid quidem? ";
//      console.log(string.trim);
  const tstring=string.trim();
    const sstring=tstring.split(/\s+/);
    console.log(sstring.length);
