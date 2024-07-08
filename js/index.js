console.log("i'm ready!");

// Iteration 1: Names and Input
let hacker1;
let hacker2;
hacker1=prompt("What is the driver's name?");
hacker2=prompt("What is the navigator's name?");
console.log("The driver's name is "+hacker1);
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals
let n1 = hacker1.length;
let n2 = hacker2.length;

if(n1>n2){
  console.log("The driver has the longest name, it has "+n1+" characters.");
}
else if(n1<n2){
  console.log("It seems that the navigator has the longest name, it has "+n2+" characters.");
}
else{
  console.log("Wow, you both have equally long names, "+n1+" characters!");
}

// Iteration 3: Loops
//console.log(hacker1.split("").join(" ").toUpperCase());
let i;
let result1="";
let result2="";
for(i of hacker1) 
  result1 += i.toUpperCase()+" ";
console.log(result1.trim());
//console.log(hacker2.split("").reverse().join(""));
for(i=hacker2.length-1;i>=0;i--) 
  result2+=hacker2[i];
console.log(result2.trim());

if(hacker1.localeCompare(hacker2)<0){
  console.log("The driver's name goes first.");
}
else if(hacker1.localeCompare(hacker2)>0){
  console.log("Yo, the navigator goes first definitely.");
}
else{
  console.log("What?! You both have the same name?");
}

//BONUS 1:
const str=new String("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio nunc, aliquet ut consequat a, finibus sed ante. Duis eu ante sit amet augue suscipit fermentum. Aenean ultricies commodo nisi, sed porta justo interdum quis. Fusce enim quam, placerat sed ipsum at, mattis elementum turpis. Nulla tempor velit sit amet magna tempus placerat. Morbi id vehicula nisl, vitae feugiat risus. Curabitur non lacus massa. Cras at aliquet lectus. Integer maximus, turpis quis ultricies rhoncus, tellus ex fringilla odio, eget suscipit erat diam ut metus. In et vulputate ligula, non ullamcorper neque. Proin porta mauris eget eros tempus suscipit. Aliquam laoreet libero id diam suscipit lobortis. Donec ac blandit ex. Sed iaculis vestibulum faucibus. Vestibulum in lacus cursus, blandit augue vitae, bibendum urna. \nVestibulum sit amet dui in nibh porta pretium. Integer et blandit nisi. Nulla tristique ligula mi, id rutrum sapien pulvinar id. Vestibulum a tellus pellentesque velit ullamcorper ultricies quis nec mi. In eu euismod nisl, non porta massa. Maecenas sed augue sem. Phasellus posuere massa in enim mollis, non auctor mauris commodo. Maecenas pulvinar vestibulum velit, id consectetur arcu ultricies eu. Vestibulum pretium, neque sed porttitor pellentesque, velit enim fringilla mauris, quis pellentesque enim odio vel purus. Sed suscipit nibh eu metus maximus porta. Pellentesque consectetur enim ut nunc fringilla maximus. Ut sit amet sapien eget risus commodo pellentesque. Nulla commodo aliquet eros, in feugiat magna ultrices quis. Morbi ornare dolor vel vulputate venenatis. Nullam odio turpis, venenatis nec pellentesque vel, tincidunt nec augue. \nPraesent elementum vel ex sed ornare. Quisque id congue sapien. Nulla accumsan feugiat magna eu tincidunt. Proin non aliquet est. Praesent non ligula ultricies, fermentum tortor a, venenatis sapien. Fusce id felis sollicitudin, fringilla odio sit amet, congue dolor. Pellentesque scelerisque libero nec erat fermentum, euismod efficitur metus ultricies. Nullam eu fermentum elit, nec aliquet diam.");
console.log(str);
let words=str.toLowerCase().split(" ");
console.log(`The string contains ${words.length} number of words.`);
let find="et";
let count=0;
for(i=0;i<words.length;i++){
  if(words[i]===find)
    count++
}
console.log(`The word ${find} appears ${count} times`);

//BONUS 2:
function isPalindrome(phraseToCheck) {
  phraseToCheck = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let start = 0;
  let end = phraseToCheck.length - 1;

  while (start < end) {
    if (phraseToCheck[start]!== phraseToCheck[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

const userPhrase = prompt("Enter a string: ");

if (isPalindrome(userPhrase)) {
  console.log(`The string "${userPhrase}" is a palindrome.`);
} else {
  console.log(`The string "${userPhrase}" is not a palindrome.`);
}


