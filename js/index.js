console.log ("im ready");
// Iteration 1: Names and Input
let hacker1 = "suresh";
console.log("the driver name is suresh");
let hacker2 = "dala";
console.log("the navigator name is dala  ");
//
// Iteration 2: Conditionals
let h1length = hacker1.length;
let h2length = hacker2.length;
if(h1length>h2length.length){

    console.log(" the driver name is longer with the following characters "+ h1length);
}
else{
    console.log("the navigator name is longer with the following characters"+h2length);
}

// Iteration 3: Loops
let result = "";
for (let i=0;i<hacker1.length;i++){
result+=hacker1[i].toUpperCase()+"";
}
console.log(result.trim());
let h2reverse=hacker2.reverse()
console.log("reversed string "+ h2reverse);