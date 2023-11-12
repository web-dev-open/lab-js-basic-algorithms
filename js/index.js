// Iteration 1: Names and Input
//
let hacker1="kk"
console.log("The driver's name is ",hacker1)
let hacker2="kailash"
console.log("The navigator's name is ",hacker2)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has ",hacker1.length," characters.")
}
else if(hacker1.length==hacker2.length){
    console.log("Wow, you both have equally long names, ",hacker1.length," characters!")

}
else{
    console.log("It seems that the navigator has the longest name, it has ",hacker2.length," characters.")
}
// Iteration 3: Loops
let driver=hacker1.toUpperCase()
var s=""
for(i=0;i<driver.length;i++){
    s+=driver.charAt(i)+" "
}
console.log(s)
var s2=""
for(i=hacker2.length;i>=0;i--){
   s2+=hacker2.charAt(i);
}
console.log(s2)
