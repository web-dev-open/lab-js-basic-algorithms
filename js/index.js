console.log("I am ready");
// Iteration 1: Names and Input
const hacker1="rama";
console.log(The driver's name is ${hacker1});
const hacker2="Sudheer";
console.log(The navigator's name is ${hacker2});
//
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(driver's name is long than navigator's name, that is it has ${hacker1.length} characters);
}
else if{hacker1.length<hacker2.length){
  console.log(navigator's name is longer than driver's name, that is it has ${hacker2.length} characters);
}
else{
  console.log(both have same length,that is ${hacker1.length} characters);
}
    // Iteration 3: Loops
var formattedName = '';
for (var i=0; i<hacker1.length; i++){
    formattedName += hacker1[i].toUpperCase();
    if(i !== hacker1.length-1){
        formattedName += ' ';
    }
}
console.log(formattedName);
var reversedName = '';
for (var i=hacker1.length-1; i>=0; i--){
    reversedName += hacker1[i];
}
console.log(reversedName);
if(hacker1.toUpperCase() < hacker2.toUpperCase()){
    console.log("The driver's name comes first.");
}else if(hacker1.toUpperCase() > hacker2.toUpperCase()){
    console.log("The navigator's comes first");
}else{
    console.log("Both have same name");
}
