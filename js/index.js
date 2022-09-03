//Iteration 1: Names and Input
let hacker1 = "odriver";
console.log(`The driver name is ${hacker1}`)

let hacker2 = "onavig";
console.log(`The driver name is ${hacker2}`)



//Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) 
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}




//Iteration 3: Loops
//3.1
let driverName ="";
for(let i=0; i<hacker1.length; i++){
    driverName = driverName+hacker1[i];
    driverName = driverName+" ";
}
console.log(driverName.toUpperCase());


//3.2
let navigatorName = "";
for(let i=0; i<hacker2.length; i++){
    navigatorName = navigatorName+hacker2[(hacker2.length-1)-i];
}
console.log(navigatorName);


//3.3
if(hacker1.charCodeAt(0) < hacker2.charCodeAt(0)){
    console.log("The driver's name goes first.")
}else if(hacker1.charCodeAt(0) > hacker2.charCodeAt(0) ){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}



//Bonus 1:
const theParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat orci vitae velit viverra, sit amet maximus leo molestie. Ut turpis lacus, hendrerit eget dolor ac, suscipit malesuada odio. Ut mattis, nisi sit amet blandit mollis, libero justo tempor risus, at viverra neque felis eget neque. Donec id erat eu felis mattis pharetra. Mauris euismod eleifend efficitur. Vestibulum metus quam, accumsan ac eleifend vel, tincidunt vitae nibh. Cras pulvinar aliquam massa, non feugiat augue laoreet vel. Cras interdum, risus sit amet ultricies consectetur, ante nibh iaculis ante, eget lobortis magna massa a mi. Sed rutrum vulputate molestie. Mauris non leo sem.

Pellentesque nec risus molestie, semper velit eu, fermentum diam. Donec suscipit imperdiet suscipit. Nunc semper semper quam, nec hendrerit ex maximus sit amet. Etiam id nunc quis ex bibendum varius eu eu erat. In sed enim sollicitudin risus efficitur porta sit amet eget risus. Aenean non accumsan ipsum. Morbi urna elit, accumsan a congue at, consectetur vitae magna. Sed eu fringilla risus. Maecenas scelerisque placerat aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Donec volutpat non turpis in aliquam. In pharetra eget arcu sit amet venenatis. Nam scelerisque tincidunt nisl, id finibus neque hendrerit pellentesque. Integer egestas eu tellus id interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a commodo elit, a bibendum ante. Mauris pulvinar velit ac ante euismod ultricies. Curabitur iaculis erat justo, eget placerat enim rhoncus ut. Vivamus vestibulum eros ac massa elementum, ac fringilla ante consequat. Proin ante augue, feugiat in orci nec, vulputate ultricies quam. Suspendisse sit amet volutpat sapien. Vestibulum ligula velit, mattis vitae tortor ut, accumsan fermentum ligula. Mauris imperdiet nibh nulla, vitae scelerisque nunc volutpat tincidunt.`;

const words = theParagraph.split(' ');
console.log( `No of words are ${words.length}.`);
console.log(`Word 'et' is repeated ${theParagraph.split('et').length} times.` );


//Bonus 2
const phraseToCheck = "No 'x' in Nixon" ;
let theString = "";
let theCharactor = "";
let checkCounter = 0;
let checkResult = "";

for(let i=0; i<phraseToCheck.length; i++){
        theCharactor = phraseToCheck[i];
        if(theCharactor===' ' || theCharactor===',' || theCharactor==='!' || theCharactor==='?' || theCharactor==='.' ||
        theCharactor==='"' || theCharactor==="'" ){
            theString = theString + "";
        }else{
            theString = theString+theCharactor;
        }
        theString = theString.toUpperCase();
    }

for(let j=0; j<theString.length; j++){
    if( theString[j] === theString[(theString.length-1-j)] ){
        checkCounter = checkCounter + 1;
        if(checkCounter===theString.length-1){
            checkResult = 'Palindrome';
        }        
    }else{
        checkResult = 'Not a Palindrome';
        break;
    }
    
}
      
console.log(checkResult);