// Iteration 1: Names and Input
const hacker1 = "hackthebox"
console.log("The driver name is " + hacker1)

const hacker2 = "tryhackme"
console.log(`The navigator's name is ${hacker2}`)

//
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let result = ""
for(var i=0;i<hacker1.length;i++){
    result += (hacker1[i].toUpperCase()+" ")
}
console.log(result.trim())
let result1 = ""
for(var i=hacker2.length-1;i>=0;i--){
    result1 += (hacker2[i])
}
console.log(result1)


var para = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sapien neque, et convallis enim tempor eget. Aliquam scelerisque dolor pretium dui laoreet, eu commodo ligula viverra. In et erat ut libero tempor malesuada. Ut mi augue, efficitur rhoncus metus ac, egestas fringilla ante. Curabitur quis volutpat lacus. Nulla eros nulla, porttitor eget pellentesque a, vehicula at magna. Nunc at congue justo. Fusce pharetra nunc a lacinia ultrices. Ut ipsum justo, pulvinar vel velit ut, gravida malesuada enim. Proin eleifend auctor sem porta auctor. Quisque sodales augue lacinia augue gravida, sit amet imperdiet justo finibus. Maecenas est tellus, vulputate vel egestas vel, laoreet sit amet nisi.

Nunc eget nisl condimentum, commodo diam vitae, aliquam dolor. Suspendisse interdum justo efficitur, blandit orci ac, congue leo. Curabitur dignissim orci luctus lacus placerat accumsan. Morbi aliquet sem augue, nec blandit eros accumsan quis. Nulla dictum augue magna. Mauris nec metus enim. Fusce posuere mauris eget porttitor finibus. Pellentesque aliquam enim ac scelerisque faucibus. Nam convallis mollis aliquam. Sed sed odio a magna tempus posuere in ac augue. Sed imperdiet, tellus id iaculis mattis, lorem nulla eleifend tortor, ut dictum eros mi ut risus. Quisque ultricies, purus quis facilisis feugiat, neque orci dictum risus, ut egestas diam massa eu leo.

Etiam ornare lectus vel ultrices eleifend. Cras quis risus sollicitudin, consectetur odio vel, ultrices arcu. Fusce non quam elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempus enim at maximus suscipit. Mauris justo dui, tincidunt blandit luctus et, ornare et diam. Aliquam porta massa at purus rhoncus tempus.
`

const arr = para.split(" ")
console.log(arr.length)

let count = 0
let position = para.indexOf("et");
while (position !== -1) {
        count++;
        position = para.indexOf("et", position + 1);
}
console.log(count);

var phraseToCheck = "A man, a plan, a canal, Panama!"
const cleanStr = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const result3 = cleanStr === cleanStr.split('').reverse().join('');
if(result3) console.log(true)
else console.log(false)
