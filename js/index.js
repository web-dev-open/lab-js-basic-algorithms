
// Iteration 1: Names and Input
let hacker1 = "muffy";
console.log(`Driver's name is ${hacker1}`);
let hacker2 = "coffee";
console.log(`Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker2.length > hacker1.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops

// Printing the drivers name in capitals
console.log(hacker1.split('').join(' ').toUpperCase());

// reversing the driver's name 
console.log(hacker1.split('').reverse().join(''));

// Checking the lexicographical order
if (hacker1 > hacker2)
    console.log(`The driver's name goes first.`);
else if (hacker2 > hacker1)
    console.log(`Yo, the navigator goes first definitely.`);
else
    console.log(`What?! You both have the same name?`);

// Iteration 4: Bonus Time

// Bonus1

let loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod risus eget orci feugiat tincidunt. Cras consectetur lorem et purus semper sagittis. Vivamus tincidunt velit efficitur enim venenatis eleifend ac ac lectus. Sed lacinia nibh mollis diam aliquam, id sagittis libero convallis. Fusce hendrerit lacus in augue auctor efficitur et non odio. Vivamus bibendum facilisis varius. Quisque at pellentesque elit. Cras non enim mauris. Morbi odio sapien, malesuada id pretium vel, facilisis quis ligula. In efficitur dapibus massa, id placerat massa facilisis sit amet. Nunc malesuada bibendum ipsum ac scelerisque.

Nam cursus sagittis justo, ut sollicitudin lacus pharetra vehicula. Sed vestibulum, quam eu venenatis porttitor, velit est interdum nibh, ut laoreet nisl turpis nec velit. Donec pharetra vitae elit at bibendum. Nullam volutpat molestie vulputate. Cras molestie, erat quis consectetur pulvinar, lectus turpis tincidunt dui, nec sodales lectus orci non ligula. Nam pellentesque enim eget sagittis pretium. Morbi eleifend augue sem, ac ultrices ante maximus sit amet. Pellentesque eget risus maximus, viverra nibh vitae, mattis tortor.

Etiam laoreet ornare lorem et semper. Suspendisse elementum sollicitudin blandit. Curabitur lectus ex, aliquet at magna vitae, tempor consectetur odio. Integer tincidunt hendrerit velit et dictum. Mauris sed dolor nunc. Aliquam hendrerit eget turpis eu sagittis. Curabitur eu sollicitudin sapien. Donec euismod purus at tellus ullamcorper viverra. Proin laoreet semper nibh, non accumsan nibh faucibus et. Duis at ipsum eros. Phasellus tempus, ante vitae fermentum hendrerit, ex nibh tristique arcu, at consectetur metus purus sit amet metus. Nam malesuada tincidunt massa, eu sollicitudin est tincidunt at.`
console.log(loremString.split(' ').length);

// counting the number of et
let c = 0;
loremString.split(' ').forEach(word => {
    if (word.toLowerCase() === `et`) {
        c++;
    }
});
console.log(`the number of times "et" appears in the string is ${c} times`);

// Bonus2

let phraseToCheck = `taco cat`;
let phraseToCheck2 = phraseToCheck.split(' ').join('');
let reversePhrase = phraseToCheck2.toLowerCase().split('').reverse().join('');
if (reversePhrase === phraseToCheck2)
    console.log(`${phraseToCheck} is a palindrome.`);
else
    console.log(`${phraseToCheck} is not a palindrome.`);