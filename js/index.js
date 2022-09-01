let hacker1 = "odriver";
console.log(`The driver name is ${hacker1}`)

let hacker2 = "onavig";
console.log(`The driver name is ${hacker2}`)

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


let driverName ="";

for(let i=0; i<hacker1.length; i++){
    driverName = driverName+hacker1[i];
    driverName = driverName+" ";
}

console.log(driverName)