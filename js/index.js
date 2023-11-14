// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters`);
}
// Iteration 3: Loops
let splitHacker1 = hacker1.split("").join(" ").toUpperCase();
console.log(splitHacker1);

let reverseHacker2 = hacker2.split("").reverse().join("");
console.log(reverseHacker2);

if (hacker1 < hacker2) console.log(`The driver's name goes first.`);
else if (hacker2 < hacker1) console.log(`Yo, the navigator goes first definitely.`);
else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan augue sed porttitor vestibulum. Mauris in viverra neque. Proin iaculis ullamcorper metus, ut sagittis ex maximus ut. Vivamus porta dolor eget tellus dapibus elementum. Integer et aliquet quam. Phasellus ut elit non dui feugiat mattis pellentesque nec leo. Nulla consequat odio eget massa cursus maximus. Donec id lectus eu dui fringilla tempor sit amet non eros. Mauris ultrices tempor varius. Aenean et tincidunt mi. Duis vitae aliquet magna. Aenean a orci quis urna eleifend porta ut vitae arcu. Nunc id ipsum nec nisi lobortis imperdiet.

Quisque condimentum metus ac orci porta facilisis. Duis non neque dignissim, condimentum erat eu, gravida augue. Aliquam erat volutpat. Pellentesque ut vulputate risus, sit amet consequat mi. In rhoncus justo vitae ultrices posuere. Vestibulum suscipit ex quis quam hendrerit, ut aliquam dui blandit. Pellentesque nisl ipsum, rutrum eget nisi sit amet, semper mattis quam. Duis non dolor eget magna eleifend auctor. Curabitur placerat massa sem, eget efficitur odio sollicitudin quis. Donec hendrerit risus mi, quis vehicula orci venenatis non.

Donec luctus augue purus, nec tempor nunc rutrum sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Etiam eleifend risus ante. Duis eleifend convallis lacinia. Integer finibus et enim sed pellentesque. Donec egestas mollis risus, quis fringilla nibh. Nam faucibus finibus nisl non tempor. Ut faucibus turpis ante, ut placerat urna hendrerit ac. Vivamus tempus neque sed pulvinar cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit augue, pulvinar vitae condimentum vitae, maximus nec mauris.`;

let words = paragraph.split(" ");
console.log(`Number of words: ${words.length}`);

let etCount = 0;
for (let i in words) {
  if (words[i] === "et") {
    etCount++;
  }
}
console.log(`Number of occurrences of the word "et": ${etCount}`);
