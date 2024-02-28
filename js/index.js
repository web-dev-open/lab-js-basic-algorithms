// Iteration 1: Names and Input
let hacker1 = "Michael";
console.log( "The driver's name is " + hacker1 );

let hacker2 = "Dwight";
console.log( "The navigator's name is " + hacker2 );


// Iteration 2: Conditionals
if( hacker1.length > hacker2.length )
console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
else if( hacker2.length > hacker1.length )
console.log( "It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
else
console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");


// Iteration 3: Loops
let temp = hacker1.toUpperCase().split('');
console.log(temp.join(' '));

let temp1 = hacker2.split('').reverse();
console.log(temp1.join(''));

if( hacker1 < hacker2)
console.log("The driver's name goes first.");
else if( hacker2 < hacker1)
console.log("Yo, the navigator goes first definitely.");
else
console.log("What?! You both have the same name?");

// Bonus 1:
let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus augue sit amet dapibus tempus. Pellentesque ante neque, sodales et turpis sit amet, scelerisque ultrices orci. Maecenas et efficitur augue. In iaculis velit nec neque congue lobortis. Praesent placerat posuere quam, at tincidunt ipsum posuere quis. Quisque vehicula enim in dui dictum accumsan. Nam scelerisque convallis est. Aenean et augue auctor, iaculis nibh in, porta turpis. Vestibulum vel lorem convallis, faucibus sapien eget, molestie purus. Morbi et tortor pulvinar, hendrerit metus et, consectetur eros. Sed dictum ex vel bibendum pulvinar. Nulla mollis hendrerit semper. Mauris eu tortor ac ex fringilla suscipit. Proin et consectetur libero. Nam ullamcorper vehicula cursus.\n\nUt feugiat ac velit id consectetur. Curabitur vel orci justo. Praesent vel viverra urna. Sed nunc ante, dapibus a leo quis, eleifend ornare ipsum. Curabitur quis sollicitudin risus. Aliquam at lacus placerat, molestie erat quis, interdum enim. Donec sit amet nulla ullamcorper, gravida urna in, vestibulum erat. Etiam vel quam metus. Nullam tellus quam, interdum in posuere eget, pulvinar sed enim. Nunc efficitur molestie tortor, quis convallis justo ultrices sed. Quisque luctus diam id magna consequat pretium. Vivamus at consequat tortor. Aliquam erat volutpat.\n\nVivamus vestibulum, ipsum sed aliquam elementum, nulla urna accumsan orci, condimentum condimentum ante arcu nec augue. Pellentesque in commodo purus. Maecenas sodales porta urna vitae malesuada. Vivamus aliquet justo et porttitor tempor. Donec mauris purus, convallis vel justo ut, faucibus laoreet libero. Vestibulum vestibulum finibus porta. Integer at mauris sit amet sapien pretium malesuada sit amet ac massa. Praesent purus nibh, vulputate non facilisis id, rutrum vel lorem. Phasellus placerat consectetur nibh vitae laoreet. Morbi sem eros, ornare non elementum lacinia, pretium aliquam sapien. Pellentesque consequat nulla nec pretium euismod. Integer eu est varius, pharetra lectus sit amet, egestas tortor."
let s = str.split(' ');
console.log(s.length);
let etCount = (str.match(/\bet\b/gi) || []).length;
console.log(etCount);

// Bonus 2:
let st="";
let phraseToCheck="A man, a plan, a canal, Panama!";
let i;
for(i=0; i<phraseToCheck.length; i++) {
    if(phraseToCheck[i]>=65 && phraseToCheck[i]<=90)
    st+=phraseToCheck[i].toLowerCase();
    else if(phraseToCheck[i]>=97 && phraseToCheck[i]<=122)
    st+=phraseToCheck[i].toLowerCase();
}
let st1=st.split('').reverse().join('');
if(st==st1)
console.log("It's a palindrome!");
else
console.log("Not a palindrome.");