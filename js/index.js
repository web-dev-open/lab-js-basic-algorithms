console.log("I'm Ready!")
// Iteration 1: Names and Input
let hacker1 = "Clever";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Niwagaba";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 
let driverSpaced = hacker1.toUpperCase().split('').join(' ');
console.log(driverSpaced);

// 3.2
let navReverse = hacker2.split('').reverse().join('');
console.log(navReverse);

// 3.3
if (hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//Bonus: Lorem Ipsum
let loremIpsum = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue nunc, condimentum sit amet efficitur eget, auctor consectetur metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi erat arcu, mattis in imperdiet id, tempor et orci. Suspendisse quam augue, faucibus sed nisl a, accumsan mattis dui. Sed eget orci feugiat, congue erat congue, volutpat tellus. Phasellus ac neque velit. Praesent sagittis, enim gravida suscipit aliquet, augue erat placerat eros, at fermentum lacus felis eu dolor. Aenean vitae sapien ac nisl pulvinar pretium quis ut libero. Proin viverra scelerisque ipsum, sed faucibus magna congue sit amet. Sed posuere semper enim, sed aliquam nisi convallis eu. Mauris blandit, lacus a vestibulum ultricies, est urna faucibus turpis, vel semper ipsum orci sit amet justo. Donec lacinia viverra lectus, ut vestibulum elit posuere in. Aenean tincidunt erat vel enim fermentum, a dignissim elit laoreet.

Praesent non est lectus. Proin mattis convallis quam, vel efficitur arcu efficitur a. Vestibulum ut porta odio. Suspendisse interdum sed ante id suscipit. Pellentesque venenatis massa ligula, ac ornare velit dignissim vitae. Donec quis dolor massa. Etiam vitae elit ultricies, luctus mi sit amet, tincidunt felis. Vestibulum lacus nisl, ultricies id turpis eget, feugiat eleifend nibh. Etiam tempus sagittis lorem congue vestibulum.

Sed eu erat at metus pretium tincidunt convallis a arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras efficitur, orci non pellentesque viverra, ante ante lobortis lacus, vel fermentum lectus tortor eu magna. Quisque at pulvinar ex. Donec eu quam non turpis accumsan convallis. Nullam sit amet ante tellus. Donec nec tristique tellus, eu blandit enim. Pellentesque pellentesque felis ligula, non molestie mauris tempor ut. Suspendisse vel tortor sollicitudin, iaculis felis euismod, fermentum ipsum. Praesent vestibulum ex a maximus iaculis. Mauris convallis libero bibendum auctor aliquet. Integer sed nulla purus. Vivamus aliquam pharetra commodo. Aenean eleifend et ligula sed dignissim. `;

// word count bonus
let wordCount = loremIpsum.split(/\s+/).filter(word => word).length;
console.log(`Number od words in string: ${wordCount}`);

// et count
let etCount = (loremIpsum.match(/\bet\b/g) || []).length;
console.log(`Et appears: ${etCount} times`);