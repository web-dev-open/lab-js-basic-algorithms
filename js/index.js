// Iteration 1: Names and Input
let hacker1 = "Adan"
console.log("The driver name is " + hacker1)

let hacker2 = "Aamir"
console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
//3.1
driName = ""
for(let i=0; i<hacker1.length; i++){
    driName += hacker1[i].toUpperCase() + " "
}

console.log(driName)

//3.2
navName = ""
for (let i=hacker2.length-1; i>=0; i--){
    navName += hacker2[i]
}
console.log(navName)

//3.3
if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}


//bonus1
var1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam dolor, euismod ac euismod vitae, maximus ut ipsum. Maecenas eget felis metus. 
Etiam tempor commodo dapibus. Cras id fermentum diam. Phasellus suscipit odio malesuada porta eleifend. Fusce vitae dolor vitae eros fringilla maximus vitae in velit. Curabitur pretium eros hendrerit rhoncus ornare. Cras eget pretium augue. Morbi ultrices nunc leo, id ornare justo ullamcorper
eu. In semper rutrum ante, porta imperdiet ipsum ultricies sit amet. Nam feugiat mauris at vulputate mollis. Etiam 
aliquam consequat mi, at blandit felis ultricies eget. Sed maximus consequat cursus. Donec ac nisi purus. Aliquam 
lorem sapien, blandit vel quam ac, egestas pharetra sapien.Suspendisse feugiat leo risus, mollis placerat lectus maximus et. Ut eget ex elit. Curabitur sit amet sem facilisis, malesuada lorem at, commodo risus. Ut lobortis ex a consectetur posuere. Donec vel purus consectetur, euismod ipsum et, varius magna. Integer porta nec velit ut ornare.Fusce dictum fermentum lacus, et iaculis ligula molestie non. Nunc volutpat, nunc pharetra varius blandit, magna urna tempor purus, quis egestas mi augue eget metus. Ut porttitor posuere feugiat. Cras maximus, quam in maximus fermentum, justo enim maximus velit, sed aliquet mauris nunc at odio. Vestibulum at euismod orci. Phasellus vehicula vehicula congue. Quisque maximus, nisi sit amet porttitor volutpat, metus leo vulputate urna, quis iaculistellus neque at nibh. Mauris eu massa ullamcorper tortor auctor interdum sed et nibh. Mauris ut mi sem. Quisque lacinia lectus lacus, a ultricies libero suscipit vel. Cras vitae nunc accumsan, semper odio eu, aliquet tellus.`


let count = var1.split(/\s+/).length   //splitting on multiple spaces
console.log(count)

ct = 0
for (let i=0; i<var1.length-1; i++){
    if(var1[i] + var1[i+1] == 'et'){
        ct++;
    }
}
console.log(ct)


//bonus 2
let phraseToCheck = "step on no pets"
reversedString = ""

for (i=phraseToCheck.length-1; i>=0; i--){
    reversedString += phraseToCheck[i]
}

if (reversedString.split(" ").join("") == phraseToCheck.split(" ").join("")){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}