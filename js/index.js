//Iteration 1: Names and Input
let hacker1 = "odriver";
console.log(`The driver name is ${hacker1}`)

let hacker2 = "onavig";
console.log(`The driver name is ${hacker2}`)



//Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) 
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}




//Iteration 3: Loops
//3.1
let driverName ="";
for(let i=0; i<hacker1.length; i++){
    driverName = driverName+hacker1[i];
    driverName = driverName+" ";
}
console.log(driverName.toUpperCase());


//3.2
let navigatorName = "";
for(let i=0; i<hacker2.length; i++){
    navigatorName = navigatorName+hacker2[(hacker2.length-1)-i];
}
console.log(navigatorName);


//3.3
if(hacker1.charCodeAt(0) < hacker2.charCodeAt(0)){
    console.log("The driver's name goes first.")
}else if(hacker1.charCodeAt(0) > hacker2.charCodeAt(0) ){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}
