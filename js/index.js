console.log("I'm ready")

// Iteration 1: Names and Input
hacker1 = "James"
console.log(`The driver's name is ${hacker1}`)

hacker2 = "John"
console.log(`The navigtors's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length){
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)

} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let temp = '';
for (let i = 0; i < hacker1.length; i++){
    
    temp += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(temp)

let temp2 = '';
for (let i = hacker2.length - 1; i >= 0; i--){
    temp2 += hacker2.charAt(i)
}
console.log(temp2)

if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else{
    console.log("What?! You both have the same name?")
}

//Bonus 1:
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget convallis orci. Donec at euismod nulla. Ut metus dui, porttitor quis felis sit amet, elementum fermentum erat. Integer eu metus justo. Proin vestibulum gravida scelerisque. Duis venenatis ipsum mi, ut condimentum ipsum tempor rhoncus. Vestibulum laoreet velit ac risus pellentesque semper sed vitae erat. Maecenas id urna eu risus ultrices auctor sed volutpat felis. Morbi vestibulum velit in euismod ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce venenatis facilisis enim, nec gravida nisi lobortis sed. Proin feugiat mi ac lobortis porttitor. Fusce hendrerit, tortor nec posuere lacinia, elit tortor sagittis est, eu aliquet tortor diam ac purus. Vestibulum venenatis quis est nec mollis. Etiam ornare enim quis est ullamcorper faucibus. Etiam ultrices feugiat tortor. Aliquam erat volutpat. Aenean sit amet nibh eros. Praesent pulvinar lectus at ante luctus consequat. Aliquam placerat consequat orci, sed feugiat erat imperdiet eget. Sed pellentesque at erat a pretium. Donec accumsan a massa at tincidunt. Maecenas et dapibus magna. Vivamus ipsum tortor, viverra at mi sit amet, ultrices varius orci. Sed risus leo, vulputate id condimentum non, facilisis id nulla. Morbi pellentesque nibh massa, sit amet accumsan diam aliquet et. Aenean auctor placerat velit a mollis. In sit amet imperdiet mi. Donec dapibus, eros ut posuere interdum, purus augue lobortis enim, non tristique urna lectus ac sem. Maecenas pharetra augue nec massa iaculis, at scelerisque urna ultricies. Nunc vitae magna ut nunc dapibus malesuada vitae non ligula. Nulla id metus et libero mollis ultricies sed vitae neque. Maecenas dictum porttitor lectus vitae lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vitae dolor posuere, laoreet nunc sed, accumsan eros. Donec dignissim libero non arcu aliquet, a venenatis metus auctor. Nunc eget consectetur eros.";
words = str.split("/\s+/")
//Word Count
console.log(words.length);

//count et
console.log((str.match(/\bet\b/g) || []).length);

//Bonus 2:
let phraseToCheck = "malayalam";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');
let reverse = "";
for(let k= cleanedPhrase.length-1; k>=0;k--){
    reverse += cleanedPhrase[k];
}
if(reverse===cleanedPhrase){
    console.log("Hey!!The given phrase is a Palindrome");
}
else{
    console.log("Oops!! It's not a Palindrome");
}
