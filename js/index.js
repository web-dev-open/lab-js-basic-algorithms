console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Levi"
let hacker2 = "Tomy"

console.log(`The drivers name is ${hacker1}`)
console.log(`The naviagtor's name is ${hacker2}`)


//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else if (hacker1.length == hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    } else {
        console.log ("Error")
    }
    


   
// Iteration 3: Loops


for (let i = 0; i < hacker1.length; i++){
   let name = ""
   name = hacker1[i] + " "
   
   console.log(name.toUpperCase())
}

for (let i = hacker2.length - 1 ; i >= 0; i--){
    let name = ""
    name = hacker2[i] + " "
    
    console.log(name)
}

let hackers = [hacker1, hacker2]
hackers.sort
console.log(hackers)

if (hackers[0] === hackers[1]){
    console.log("What?! You both have the same name?")
}else if (hackers[0] == "Tomi"){
    console.log("Yo, the navigator goes first definitely.")
}else if (hackers[0] == "Levi") {
    console.log("The driver's name goes first.")
}


//    ATTEMPT AT BONUS



// function reverse(name){
//     return name.split("").reverse().join("");
// }
// console.log(reverse(hacker2))

// let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a volutpat lorem. Ut sagittis arcu vitae justo sagittis, eu sodales ipsum fringilla. Maecenas interdum sagittis velit a scelerisque. Donec sed est ultrices, sollicitudin lectus in, malesuada lectus. Nunc vitae iaculis tellus. Sed egestas nulla libero, eget porta turpis varius ut. Aenean maximus placerat massa, at congue odio vulputate quis. Aliquam euismod ac ante et sodales. Aenean eget nunc tristique, consectetur lacus quis, consectetur purus. Quisque augue ante, semper at vulputate at, imperdiet ultricies massa. Donec fringilla arcu nec euismod aliquam. In tincidunt suscipit risus, eu aliquam sapien convallis sit amet."

// let paraNumber = paragraphs.split(" ")

// console.log(paraNumber.length)

// function counting(str, letter){
// let count = 0
// for (let i = 0; i < str.length; i++) {

    // check if the character is at that position

//    ATTEMPT AT BONUS


//     if (str.charAt(i) == letter) {
//         count += 1;
//     } 
// }return count
// }

// console.log(counting(paragraphs, "amet"))

// paraCount = 0

// for (let i = 0; i < paragraphs.length; i++){
//     if(paragraphs[i] == "et"){
//         paraCount++;
//     }
// }console.log (paraCount);






