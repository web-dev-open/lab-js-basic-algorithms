// Iteration 1: Names and Input
//
let hacker1 = "John";
console.log("The driver's name is "+hacker1);
let  hacker2 = "Christine";
console.log("The Navigator's name is "+hacker2);

// Iteration 2: Conditionals
//checking which variable has the longest length
h1Len = hacker1.length;
h2Len = hacker2.length;
if(h1Len>h2Len){
    console.log('The driver has the longest name, it has '+h1Len+' characters');
}
else if(h2Len>h1Len){
    console.log('It seems the navigator has the longest name, it has '+h2Len+' characters');
}
else{
    console.log('Wow, you both have equally long names,'+h1Len+' characters');
}

// Iteration 3: Loops
//Converting string to Capital Letters with space in between
let temp = "";
for(let i=0;i<h1Len;i++){
    const char = hacker1.charAt(i).toUpperCase();
    temp +=char +" ";
}
console.log(temp);

//Reversing a string
let result = "";
for(let j= h2Len-1; j>=0;j--){
    result += hacker2[j];
}
console.log(result);
//Lexicographic order of Strings
if(hacker1>hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker2>hacker1){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

//Bonus Time 1
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis rutrum porta. Quisque leo dui, rhoncus quis semper sed, dignissim non justo. Curabitur fermentum ultricies diam a tempus. Ut volutpat nulla dui, sit amet tempus est egestas eu. Nulla non iaculis tortor, vitae viverra elit. Aenean ultricies, tellus quis ultrices euismod, metus mi accumsan nisi, sed dapibus risus ipsum eget massa. Integer suscipit est odio, id blandit odio facilisis eu. Fusce pellentesque leo varius semper mollis. Donec eget suscipit velit. Etiam tempor nibh sit amet dictum feugiat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus porta semper suscipit. Integer in ornare magna. Pellentesque ut ornare mi, eget imperdiet nisl. Curabitur vel leo ipsum. Aenean sollicitudin, risus ac auctor malesuada, purus diam porttitor justo, scelerisque accumsan urna massa at nibh. Donec vitae mi convallis, dictum nisl nec, sodales sapien. Nullam non massa sodales, vehicula justo in, fermentum nisl.Nullam mauris felis, commodo quis nibh in, molestie auctor neque. Morbi nec tellus diam. Aliquam vel laoreet lorem. Suspendisse consequat lectus felis, luctus interdum lectus commodo a. In at purus a nisl ullamcorper hendrerit. Praesent venenatis velit non metus aliquet, porttitor semper metus placerat. Nunc ac nunc risus. Vivamus dui dolor, egestas a sapien eget, mollis commodo risus. Duis bibendum tempus cursus. Phasellus pretium turpis at libero ultrices hendrerit. Curabitur feugiat aliquet ipsum a vehicula. Sed aliquet ex eget erat condimentum condimentum. Donec a metus nunc. Fusce tempus blandit fringilla. Ut ex elit, consectetur sed diam eget, varius fringilla eros."
const words =  paragraph.split(/\s+/);
const count = words.length;
console.log(count);
//et count
let etCount = (paragraph.match(/\bet\b/g) || []).length;
console.log(etCount);

//Bonus Time 2
let phraseToCheck = "race car";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');
let reverse = "";
for(let k= cleanedPhrase.length-1; k>=0;k--){
    reverse += cleanedPhrase[k];
}
if(reverse===cleanedPhrase){
    console.log("Hey!!The given phrase is a Palindrome");
}
else{
    console.log("Oops!! It's not a Palindrome");
}

