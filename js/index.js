// Iteration 1: Names and Input

const hacker1 = "john";

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "snow"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
console.log(`The driver has the longest name it has ${hacker1.length} characters.`)
}
else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length===hacker2.length){
 console.log(`Wow, you both equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
//3.1
let makeHacker1CapitalStr = ""

for(let i=0; i<hacker1.length; i++){
let space = " "

  makeHacker1CapitalStr +=  hacker1[i].toUpperCase()+space

}

console.log(makeHacker1CapitalStr)


// 3.2

let reverseNavigatorName = ""
for(let i=hacker2.length-1; i>=0; i--){
  reverseNavigatorName +=  hacker2[i]
}

console.log(reverseNavigatorName)


const compare = hacker1.localeCompare(hacker2);


if(compare<0){
    console.log(`The driver's name goes first.`)
}
else if(compare>0){
    console.log(`Yo, the navigator goes first definitely.`)
}
else{
    console.log(`What?! You both have the same name?`)
}


// Bonus Time
// Bonus 1.1

let paraOne = "some text inside para one et";
let paraTwo = "some text inside para two ";
let paraThree = "some text inside para Three";

let loremIspsumFull = paraOne+" "+paraTwo+" "+paraThree;



console.log("lorem ispsum word count:",loremIspsumFull.length)


let count = 0;

let etCheckArr = loremIspsumFull.split(' ')

for(let i=0; i<=etCheckArr.length; i++){

    
    if(loremIspsumFull.includes("et")){
        count++
        
    }
}

console.log(`et present in text ${count} times `)

// Bonus 2.2

function isPalindorme(str){
    let strLower = str.toLowerCase();
    let removeExtraSpace = strLower.replace(/\s/g,'');

    // initialize the variable for indices
    let start = 0;
    let end = removeExtraSpace.length-1;

    for(let i=0; i<Math.floor(removeExtraSpace.length/2); i++){

        console.log(removeExtraSpace[start])
        console.log(removeExtraSpace[end])

        if(removeExtraSpace[start]!==removeExtraSpace[end]){
            return false
        }


         start++;
         end--;
    }

    return true
}



let phraseToCheck = "stack cats"
let result = isPalindorme(phraseToCheck)

if(result){
    console.log(`The string is ${phraseToCheck} is palindrome`)
}
else{
    console.log(`The string is ${phraseToCheck} is not palindrome`)
}