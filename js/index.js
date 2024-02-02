console.log("I'm ready!!");

// Iteration 1: Names and Input

let hacker1 = "Prashanth";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Shiva Kumar";
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

let driverNameLength = hacker1.length
let navigatorNameLength = hacker2.length

if (driverNameLength > navigatorNameLength){
    console.log(`The driver has the longest name, it has ${driverNameLength} characters`);
}
else if(navigatorNameLength > driverNameLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
let nameWithSpace = ""
let driverNameCapitalized = hacker1.toUpperCase()
for (let i = 0; i<driverNameLength;i++){
    nameWithSpace += `${driverNameCapitalized[i]} `
}
console.log(nameWithSpace)


let reversedName = ""
for (let i = driverNameLength-1; i>-1; i--){
    reversedName += hacker1[i]
}

console.log(reversedName)

// Lexicographic order

if (hacker1<hacker2){
    console.log("The driver's name goes first.");
} else if (hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ex id quam rhoncus pulvinar. Maecenas congue velit a ex ultrices tempus. Donec finibus tellus sit amet dolor mollis laoreet. Etiam in diam et neque sollicitudin eleifend ut sit amet lorem. Nunc ac ipsum vel odio cursus dictum ut nec nisi. Proin feugiat dapibus pulvinar. Praesent non diam ultrices, ullamcorper dui sed, egestas odio. Aliquam erat volutpat. Nulla molestie elit varius mi finibus tincidunt. Donec ut leo sit amet dui molestie ullamcorper sit amet eu enim. Proin consequat, ex ac euismod posuere, massa enim tincidunt urna, et hendrerit tellus lectus maximus tortor. Ut ut metus imperdiet ipsum feugiat imperdiet.

Nulla varius ipsum ac ligula dictum rhoncus. Nam mattis metus libero, nec pellentesque diam vestibulum at. Vestibulum porttitor tincidunt eros in tempor. Phasellus risus neque, tristique rhoncus mattis euismod, euismod at felis. Vivamus porta nisi sit amet nulla pharetra hendrerit. Nam quis magna eu turpis aliquet condimentum sed dapibus libero. Nam ante dui, imperdiet quis massa a, ornare congue nunc. Mauris dictum malesuada tellus, ac bibendum mi gravida in. Vivamus suscipit neque sed eros faucibus, ut sollicitudin arcu auctor. Maecenas imperdiet dapibus elit, sit amet ullamcorper enim porta eu. Fusce nisl mi, maximus vel arcu condimentum, consequat mattis nisi. Duis et tincidunt tortor. Nullam aliquam ac nisi eu laoreet. Sed vitae sollicitudin nunc. Nullam nec elit volutpat, sodales ligula non, dictum nisi.

Integer maximus aliquet eleifend. Mauris feugiat mauris sed tincidunt malesuada. Ut non odio diam. Morbi non tortor varius, posuere massa vel, consectetur magna. Nulla risus tellus, tincidunt sit amet commodo id, sollicitudin in tellus. Suspendisse accumsan consequat hendrerit. Nam eget condimentum enim, sit amet accumsan quam. Suspendisse molestie dapibus pharetra. Suspendisse consectetur laoreet diam vel condimentum. Sed dignissim dapibus fringilla.

Aliquam eleifend posuere lectus, facilisis bibendum lorem sodales ac. Donec eget fringilla elit. Nulla in augue imperdiet, suscipit turpis non, lobortis quam. Praesent in ipsum faucibus, hendrerit nisi eget, rhoncus ligula. Integer suscipit semper risus at lobortis. Praesent rhoncus leo sit amet lorem viverra, eu dictum diam varius. Suspendisse dapibus feugiat suscipit. Duis pharetra semper eros. Aliquam quis lobortis lectus, nec congue mauris. Etiam egestas tortor eu rhoncus dignissim. Aliquam erat volutpat. Donec facilisis lorem non mollis posuere. Maecenas gravida odio eget turpis pretium, in condimentum justo interdum. Nullam cursus feugiat ultrices.

Phasellus iaculis libero quis metus volutpat fermentum. Vivamus eget lectus id est posuere molestie vel non orci. Sed bibendum elit non efficitur aliquam. Sed justo nulla, mattis nec interdum ac, iaculis eu leo. Nam nec nisi erat. Nam gravida blandit arcu, elementum porttitor ligula elementum id. Nulla condimentum nisl non sagittis lacinia.`

//count number of words
let words = loremIpsum.split(" ");
console.log(`The number of words in the string is ${words.length}`);

//count the number of times "et" appears
let etCount = loremIpsum.split("et").length-1;
console.log(`The number of times "et" appears in the string is ${etCount}`);

//Bonus 2 Checking if given phrase is a palindrome or not
let phrase = "A man, a plan, a canal, Panama!";
let phraseWithoutSymbols = phrase.toLowerCase().replace(/[^a-z]/g, "");
let isPalindrome = true;

for (let i = 0; i < phraseWithoutSymbols.length / 2; i++) {
  if (phraseWithoutSymbols[i] !== phraseWithoutSymbols[phraseWithoutSymbols.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phrase}" is a palindrome!`);
} else {
  console.log(`"${phrase}" is not a palindrome.`);
}
