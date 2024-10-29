console.log("I'm ready!");

//Names and input:
let hacker1 = `Alice`;
console.log(`The driver"s name is ${hacker1}.`);
let hacker2 =  `Bob`;
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if(hacker1.length > hacker2.length)
    {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    }
    else if(hacker1.length < hacker2.length)
    {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else
    {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

//Loops
console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(""));

if(hacker1 > hacker2)
    {
    console.log(`The driver's name goes first.`);
    }
    else if(hacker1 < hacker2)
    {
    console.log(`Yo, the navigator goes first definitely.`);
    }
    else
    {
    console.log(`What?! You both have the same name?`);
    }

//Bonus 1:
const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non viverra velit. Nam posuere magna id tempus dapibus. Proin rhoncus rhoncus suscipit. Nunc non suscipit nibh. Mauris placerat fermentum tellus, quis congue nulla molestie sed. Nullam facilisis orci erat, eget fermentum dui scelerisque id. Pellentesque maximus magna mauris, id accumsan velit viverra eget. Donec nunc erat, suscipit eget auctor nec, feugiat nec eros. Fusce fermentum neque eget erat pretium, at aliquet urna mollis. Pellentesque quis odio efficitur, ultricies lorem ac, luctus mauris. Ut ullamcorper purus eget elementum porttitor. Vestibulum pretium, dui quis rhoncus sagittis, quam nisi hendrerit tellus, non efficitur mauris augue vitae nisi.

Donec blandit metus ipsum, eget volutpat erat ultricies et. Suspendisse arcu nulla, feugiat at ipsum suscipit, blandit interdum odio. Vivamus vel diam suscipit, scelerisque mi vitae, pharetra justo. Maecenas enim tortor, faucibus ut felis a, sodales rhoncus quam. Phasellus eget pretium metus. Nulla aliquet, est vitae sagittis vulputate, justo felis condimentum purus, eu scelerisque metus dui eget justo. Sed mollis viverra neque, rutrum viverra risus. Integer a pulvinar sem, quis ultrices sem. Sed quam felis, rutrum eget ipsum quis, interdum porttitor enim. Vivamus id consectetur velit.

Morbi fringilla magna quis purus placerat, at lacinia urna elementum. Etiam ac dui sapien. Aenean sed ultrices est. Fusce scelerisque fringilla dictum. Morbi vitae ipsum urna. Sed ullamcorper odio ac lacinia molestie. Morbi sit amet suscipit magna. Cras maximus odio vitae euismod tincidunt. Fusce sed justo nunc. Aliquam id orci eros. Praesent at porta mi. Cras at sagittis enim, a mattis urna. Vivamus blandit quis orci et malesuada. Proin at volutpat lectus. Praesent nec nisi tortor.`;

const wordCount = str.split(/\s+/).length;
console.log(`The number of words`, wordCount);

const etCount = (str.match(/\bet\b/g) || []).length;
console.log("Occurrences 'et':", etCount);

//Bonus 2:
const phraseToCheck = "Racecar";
const lowerCasePhase = phraseToCheck.toLowerCase();
let isPallindrome = true;
for(let i = 0;i < lowerCasePhase.length / 2; i++)
{
    if (lowerCasePhase[i] !== lowerCasePhase[lowerCasePhase.length-1-i])
{
isPallindrome = false;
break;
}
}
if(isPallindrome)
{
    console.log(`${phraseToCheck} is a pallindrome.`);
}
else
{
    console.log(`${phraseToCheck} is not a pallindrome.`);
}