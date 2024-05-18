console.log("I'm ready")
// Iteration 1: Names and Input
let hacker1="Shaheen Shah"
console.log("The driver's name is "+hacker1+".")
let hacker2="M Ibrahim"
console.log("The navigator's name is "+hacker2+".")
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
else if (hacker1.length < hacker2.length){
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
    }
else {
     console.log(`wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
//printing drivers name in capitals and seperated by space
function format(hacker){             //defining function format to format the string to uppercase and add spaces
    let formattedName = " "
    for (let i=0; i<hacker.length; i++){
        formattedName += hacker[i].toUpperCase();
        if(i<hacker.length-1 && hacker[i]!=" "){    //using logical && to reduce the occurance of space if name already has space
            formattedName += " "
        }
    }
    console.log(formattedName);
}

format(hacker1);

// printing all the characters of navigators name in reverse order
function reverse(hacker){
    let reverseName = ""
    for (let i=hacker.length-1 ;i>=0; i--){
        reverseName += hacker[i];
    }
    console.log(reverseName)
}
reverse(hacker2)

//lexicographical order comparing
function compareNames(name1,name2){
   if (name1 < name2){
        console.log("The drivers name goes first")
    }
    else if(name1 > name2){
        console.log("Yo!, the navigator goes first definitely.")
    }
    else {console.log("What?! You both have the same name??")}

}

compareNames(hacker1,hacker2)
//Bonus Time!
//Bonus1
const lorenIpsumText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lectus massa. Integer dictum malesuada rutrum. Nam suscipit tempor pharetra. Integer nulla felis, lacinia in nisi ut, luctus efficitur magna. Maecenas gravida elit eu tortor dignissim, vestibulum rutrum augue gravida. Duis efficitur euismod lacus a malesuada. Nullam a placerat est. Maecenas efficitur felis risus. Vivamus placerat lorem eget augue auctor, feugiat sodales felis volutpat. Nunc vel risus sem. Aliquam ac nulla ut tellus hendrerit porttitor.

Donec convallis convallis suscipit. In blandit lectus augue, cursus feugiat justo tempus non. Maecenas consequat hendrerit lacus, et pharetra dui bibendum sit amet. Quisque eleifend sapien magna, non lobortis magna ornare vitae. Donec convallis quam eu magna ultrices cursus. Suspendisse ac nisi ac magna congue maximus. Vestibulum est est, tincidunt a mi a, ullamcorper pellentesque dolor. Nulla viverra erat sit amet nunc mattis, suscipit semper nisl elementum. Fusce laoreet vulputate nisi, eu feugiat odio aliquet sed. Sed at felis semper, viverra lacus quis, scelerisque ante. Curabitur pharetra scelerisque nunc, non posuere dolor hendrerit eget. Proin eleifend velit sem. Suspendisse lobortis urna eget congue vehicula. Duis convallis nisi sit amet augue scelerisque semper.

Morbi ac tristique nulla. Donec eget ipsum in massa fringilla ultrices. Nulla facilisi. Vivamus semper ac lacus at tempus. Phasellus ultricies, metus sed vulputate venenatis, mauris nisl cursus lorem, in pretium arcu dui efficitur lectus. Donec eleifend odio vitae magna ullamcorper, ac interdum metus porttitor. Cras hendrerit mauris eget leo pulvinar ornare. Quisque euismod odio quis rhoncus ultrices. Etiam id consectetur nunc. Pellentesque sem erat, aliquam at condimentum vitae, rutrum eleifend ante. Praesent dictum felis felis, quis viverra leo aliquam ut.`

function countWords(text){
    let wordCount = 0;
    let inWord = false;
    for (let i=0;i<text.length;i++){
        if(text[i].match(/\s/)){
            if(inWord)
            inWord=false;
        }
     else {
        if(!inWord){
            inWord=true;
            wordCount++;
            }
        }
    } 
return wordCount;
}

