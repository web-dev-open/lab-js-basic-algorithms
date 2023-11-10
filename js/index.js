console.log("I am ready")
// Iteration 1: Names and Input
let hacker1 = "Jack"  //driver
console.log(`the driver's name is ${hacker1}`)

let hacker2 = "Jonas" //Navigator
console.log(`the driver's name is ${hacker2}`)
//
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
   
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let newdriver = "";

for(let i=0; i < hacker1.length; i++){
    newdriver = newdriver + hacker1[i].toUpperCase() + " ";

}
console.log(newdriver.trim())

// Print all the characters of the navigator's name, in reverse order.

let newNavigator = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigator += hacker2[i];
}
console.log(newNavigator);

// Depending on the lexicographic order of the strings, print:

// The driver's name goes first.

// Yo, the navigator goes first definitely.

// What?! You both have the same name?

let hack1 = hacker1.toLowerCase();
let hack2 = hacker2.toLowerCase();
 
if (hack1 > hack2) {
    console.log("The driver's name goes first.")
  }
  else if (hack1 < hack2) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 


  //Bonus 1:

  const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

  Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.
  
  Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.` 

  let wCount = 0;
  let etCount = 0;

  let splitpara = para.split(' ');
  console.log(splitpara)

  
for (let i=0; i < splitpara.length; i++) {
    if(splitpara[i].includes('\n')) {
      wCount++
    } else if(splitpara[i] === "et" || splitpara[i] === "et.") {
      etCount++;
    }
    wCount++;
   }

   console.log('Total words', wCount);
   console.log('Total et count', etCount);


   //Bonus 2

   let string = "Was it a car or a cat I saw?" ;
   string = string.replace(/[ ,!.?]/g, "").toLowerCase();
   
   let reversedString = string.split('').reverse().join('');
   
   if (string === reversedString) {
     console.log('String is a palindrome');
   }
   else {
     console.log('Not a palindrome');
   }   
