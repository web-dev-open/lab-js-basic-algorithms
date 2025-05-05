// Iteration 1: Names and Input
hacker1 = "Yanwen";
console.log("The driver's name is "+ hacker1);
hacker2 = "Eunwoo";
console.log("The navigator's name is "+ hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has "+ hacker1.length + " characters.");
}else if(hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.");
}else{
    console.log("Wow, you both have equally long names, "+ hacker1.length + " characters!");
}

// Iteration 3: Loops
let nameWithSpaces = "";
for(let i=0;i<hacker1.length;i++){
    nameWithSpaces+=hacker1[i].toUpperCase()+" ";
}
console.log(nameWithSpaces);

let reversedName = "";
for(let i=hacker2.length-1;i>=0;i--){
    reversedName+=hacker2[i];
}
console.log(reversedName);

//lexicographic order 
if (hacker1<hacker2){
    console.log("The driver's name goes first.");
}else if(hacker1>hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}else{
    console.log("What?! You both have the same name?");
}

//bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor aliquam eros sed pellentesque. In vestibulum blandit augue. Duis rhoncus eros odio, et feugiat purus laoreet sit amet. Mauris sollicitudin aliquam urna, nec molestie nibh ullamcorper non. Nulla facilisi. Pellentesque vulputate interdum lectus quis posuere. Aenean dictum nibh nec neque tincidunt aliquam. Maecenas tristique dui nisi. Vestibulum ipsum libero, consequat eget aliquam sit amet, lacinia vel leo. Integer odio neque, ullamcorper ullamcorper leo sed, euismod iaculis sem. Nullam fringilla fringilla nisl, ut molestie diam. Suspendisse aliquet congue ligula, ac porta erat dignissim sed. Morbi posuere dui eget lacus commodo consequat. Sed eu justo id diam vestibulum congue. Integer at elit a libero venenatis tincidunt sed et lacus. Fusce quis consectetur lorem. Duis magna augue, scelerisque non augue sed, lobortis suscipit tortor. Etiam purus odio, interdum a commodo non, aliquet in augue. Pellentesque arcu lorem, accumsan sit amet tortor vitae, laoreet vestibulum lorem. Proin ultricies sed libero porta rutrum. Donec mattis, velit sit amet ullamcorper molestie, leo odio aliquam mi, a commodo velit lorem quis turpis. Donec eu eleifend purus, et vehicula magna. Pellentesque sodales sit amet dui sit amet rutrum. Nam eu nisi sem. Aenean elit sem, semper eget sodales ut, malesuada id ligula. Sed porta ut libero quis venenatis. Aliquam vel massa accumsan risus sodales congue nec non felis. In tempus congue magna vitae viverra. Vestibulum quis eros pellentesque, blandit metus ac, facilisis sem. Fusce gravida in purus a iaculis. Vivamus pharetra facilisis justo quis consequat."
let etCount = 0;
for(let i=0;i<text.length;i++){
    if(text[i].toLowerCase()==="e" && text[i+1].toLowerCase()==="t"){
        etCount++;
    }
}
console.log("The et appears "+ etCount + " times.");

//bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");
reversePhrase = "";
for(let i=phraseToCheck.length-1;i>=0;i--){
    reversePhrase+=phraseToCheck[i];
}
if(reversePhrase===phraseToCheck){
    console.log("It's a palindrome.");
}else{
    console.log("It's not a palindrome.");
}