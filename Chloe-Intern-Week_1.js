// Iteration 1
let hacker1 = "Chloe";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Max";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3
let hacker1_capital_split = hacker1.toUpperCase().split('').join(' ');
console.log(hacker1_capital_split);

let reName = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
    reName += hacker2[i];
}
console.log(reName);

if(hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if(hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique semper dignissim. Praesent ornare ut mauris a luctus. Duis ullamcorper rhoncus felis, ut blandit urna pretium nec. Sed eu sem magna. Morbi pulvinar nisl sodales nunc ultrices pretium. In hac habitasse platea dictumst. Sed ornare tristique ex, id euismod sapien lacinia a. Curabitur eu malesuada nisi. Quisque fringilla massa non vehicula posuere. Nullam sit amet erat id sem vulputate venenatis nec vitae arcu. Suspendisse pellentesque malesuada diam, nec sollicitudin tortor tempus in. Cras facilisis leo at mauris volutpat, nec tincidunt leo tincidunt. Vestibulum a augue vitae magna elementum tempor lobortis sed augue.";
let string2 = " Vestibulum in sagittis sapien, eget viverra justo. Phasellus quis lacus sollicitudin quam pellentesque efficitur ac in metus. Curabitur viverra vel libero ac rhoncus. Quisque venenatis nisi a sagittis aliquet. Nunc a dui id neque mattis semper. Quisque semper velit eros, quis vehicula nibh gravida sed. Praesent suscipit placerat pellentesque. Ut vehicula mattis diam vel egestas. Curabitur iaculis quam ex, at pulvinar felis laoreet eget. Pellentesque velit augue, ultrices in accumsan quis, vehicula ac libero. Aenean a elementum magna, vitae hendrerit quam. Nam suscipit consequat lobortis. Ut accumsan sodales risus sed venenatis. Sed tincidunt sapien eu turpis efficitur, quis auctor metus vehicula.";
let string3 = " Aliquam aliquam sit amet metus eu vehicula. Vivamus lobortis tellus massa, faucibus imperdiet mauris placerat sit amet. Nunc a urna eu mauris porta convallis pulvinar ut neque. In ac sapien aliquet, tempor erat vel, fringilla diam. Suspendisse fermentum dui ut bibendum lacinia. Pellentesque id iaculis justo. Curabitur vitae eros vel lorem interdum ullamcorper. Praesent suscipit elementum lacus aliquet tristique. Aliquam condimentum ex ligula, quis placerat lacus lobortis quis. Phasellus ullamcorper, neque vitae convallis tempus, lacus mi gravida dui, id tincidunt felis mi nec tellus. Vestibulum non pulvinar velit, ut accumsan augue. Curabitur at lobortis ex, pulvinar tincidunt nibh. Duis a molestie sem.";
let string = string1 + string2 + string3;

function wordsCount() {
    return string.split(' ').length;
}
console.log(wordsCount());

let countLa = 0;
for(let i = 0; i < string.split(' ').length; i++) {
    if('et' in string.split(' ')[i])
    countLa ++;
}
console.log(countLa);