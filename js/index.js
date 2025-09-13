console.log("I'm ready!");
// Iteration 1: Names and Input
var hacker1 = "harry";
console.log("The driver's name is " + hacker1 + ".");

var hacker2 = "hermione";
console.log("The navigator's name is " + hacker2 + ".");


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
for (var i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}
var reversedName = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

// Bonus 1
var lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

var wordCount = 0;
for (var i = 0; i < lorem.length; i++) {
    if (lorem[i] === " ") {
        wordCount++;
    }
}
wordCount++; // Count the last word
console.log("Word count: " + wordCount);

var etCount = 0;
for (var i = 0; i < lorem.length - 1; i++) {
    if (lorem[i] === "e" && lorem[i + 1] === "t") {
        etCount++;
    }
}
console.log("The 'et' substring appears " + etCount + " times.");   