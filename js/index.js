console.log("I am ready!")
// Iteration 1: Names and Input
hacker1="Tony"
console.log("The driver's name is "+hacker1)
hacker2="Tony"
console.log("The navigator's name is "+hacker2)
// Iteration 2: Conditionals
driver_length=hacker1.length
navigator_length=hacker2.length

if(driver_length>navigator_length){
    console.log(`The driver has the longer name, it has ${driver_length} characters.`)
}
else if(driver_length<navigator_length){
    console.log(`It seems that the navigator has the longer name, it has ${navigator_length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${driver_length} characters!`)
}

// Iteration 3: Loops
//driver's name separated by space and in capitals
let formattedDriverName = hacker1.split('').map(char => char.toUpperCase()).join(' ');
console.log("Formatted Driver's name: "+formattedDriverName)

//reversing navigator's name
let reversedNavigatorName = hacker2.split('').reverse().join('')
console.log("Reversed Navigator's name: "+reversedNavigatorName)

//comparing both names lexicographically
let result = hacker1.localeCompare(hacker2)
if(result<0){
    console.log("The driver's name goes first.")
}
else if(result>0){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}

//Bonus
//Counting words in lorem ipsum text
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit velit sodales lorem sodales, sed mollis ex fermentum. Fusce volutpat sapien ut libero pretium, sed porttitor eros placerat. Sed id imperdiet dolor. Morbi rhoncus hendrerit nunc quis congue. Quisque pretium mi porta mi pharetra tincidunt. Suspendisse eget ligula aliquet, lobortis sapien vel, placerat ante. Morbi lacinia leo eu convallis ultricies. Curabitur et lacus non ipsum lacinia semper.

Suspendisse lobortis vestibulum eros non malesuada. Duis accumsan nibh at laoreet hendrerit. Praesent aliquam massa et ultrices tempor. Pellentesque facilisis nibh sit amet sagittis eleifend. Cras facilisis tincidunt erat, quis pharetra ante efficitur eu. Nunc nec ligula leo. Suspendisse suscipit dignissim suscipit. Sed eget mi ac justo porttitor pharetra.

Nam porttitor neque ut ullamcorper rutrum. Donec rhoncus placerat cursus. Cras maximus consequat ante, sit amet placerat orci consequat ut. Integer pellentesque neque in elementum eleifend. Sed venenatis enim in efficitur congue. Vestibulum finibus, turpis commodo cursus porttitor, diam nisi tincidunt nisl, id bibendum dolor ante at ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vel enim sit amet mauris laoreet luctus. Vivamus faucibus nibh eget diam dapibus porttitor. Donec ultricies lectus dui, ut vulputate risus ornare vel. Sed sodales a purus at rhoncus.`

function countWords(str){
    let wordArray = text.split(/\s+/)
    //wordArray = wordArray.filter(word=> word!=='')
    wordCount = wordArray.length
    return wordCount
}

console.log("Word count: "+countWords(text))