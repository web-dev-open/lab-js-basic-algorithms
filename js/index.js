// Iteration 1: Names and Input
let hacker1='XXXX'
console.log("The driver's name is XXXX");
let hacker2='YYYY'
console.log("The navigator's name is YYYY");

//-----------------------------------------------------------------------------------------

// Iteration 2: Conditionals
var a=hacker1.length
var b=hacker2.length
if  (a>b){
    console.log("The driver has the longest name, it has XX characters.");
}
else if (b>a){
    console.log("It seems that the navigator has the longest name, it has XX characters.");
}
else{
    console.log("Wow, you both have equally long names, XX characters!.");
}

//-------------------------------------------------------------------------------------

// Iteration 3: Loops

var res=hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(res);

let reverse = hacker2.split("").reverse().join("");
console.log(reverse);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker2 < hacker1){
    console.log("Yo, the navigator goes first definitely");
}
else{
    console.log("What?! You both have the same name?");
}

//--------------------------------------------------------------------------------------------

//Bonus time

//Bonus1
let s="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames. Malesuada fames ac turpis egestas maecenas. Dolor morbi non arcu risus quis varius quam. Tellus orci ac auctor augue mauris. Tellus id interdum velit laoreet id donec. Nulla porttitor massa id neque aliquam. Laoreet sit amet cursus sit amet. Dolor magna eget est lorem ipsum. Sed vulputate odio ut enim blandit volutpat. Amet mauris commodo quis imperdiet. Augue mauris augue neque gravida. Ultricies mi quis hendrerit dolor magna.Ut sem nulla pharetra diam sit amet. Malesuada proin libero nunc consequat. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sodales neque sodales ut etiam sit amet nisl. Tortor pretium viverra suspendisse potenti. Maecenas volutpat blandit aliquam etiam. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Semper risus in hendrerit gravida rutrum quisque non tellus. Quis lectus nulla at volutpat diam ut venenatis. Augue ut lectus arcu bibendum at varius vel pharetra vel. Sed pulvinar proin gravida hendrerit lectus. Natoque penatibus et magnis dis parturient montes. In hendrerit gravida rutrum quisque non tellus. Tincidunt lobortis feugiat vivamus at. Porttitor eget dolor morbi non arcu risus quis varius quam.Cursus metus aliquam eleifend mi in. Semper risus in hendrerit gravida rutrum quisque non. Mauris sit amet massa vitae. Tristique sollicitudin nibh sit amet. Mauris cursus mattis molestie a iaculis at. Duis at consectetur lorem donec massa sapien. Dignissim sodales ut eu sem integer vitae. Amet venenatis urna cursus eget nunc. Vitae suscipit tellus mauris a diam maecenas sed enim. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet nisl purus in mollis nunc sed. Varius quam quisque id diam vel quam elementum pulvinar etiam. Dapibus ultrices in iaculis nunc. Ut placerat orci nulla pellentesque dignissim enim sit."
const val= s.split(' ');
console.log(val.filter(word => word !== '').length);
console.log(val.filter(word => word === 'et').length);

//--------------------------------------------------------------------------------------------------
//Bonus 2

const phraseToCheck="racecar"
const array= phraseToCheck.split('');
const reversearray = array.reverse();
const reversestr = reversearray.join('');
if (phraseToCheck == reversestr){
    console.log("It is a palindrome!");
}
else{
    console.log("It is not a palindrome!");
}

