// Iteration 1: Names and Input
const hacker1 = "Milena"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Marilia"
console.log(`The navigator's name is ${hacker2}`);
//

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    const nameLength = hacker1.length;
    console.log(`The driver has the longest name, it has ${nameLength} characters.`)
}
else if (hacker2.length > hacker1.length) {
    const nameLength = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${nameLength} characters.`)
}
else {
    const nameLength = hacker1.length;
    console.log(`Wow, you both have equally long names ${nameLength} characters.`)
};


// Iteration 3: Loops

    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals

            // var spacedName = hacker1.split('').join(' ').toUpperCase();

        let spacedName = "";

        for (let i = 0; i < hacker1.length; i++) {
            spacedName += hacker1[i].toUpperCase() + " ";
        }

        console.log(spacedName);

    ////

    // 3.2 Print all the characters of the navigator's name, in reverse order.

            // const reversedName = hacker1.split('').reverse().join('');

        let revertedName = "";

        for (let i = hacker1.length - 1; i >= 0; i--) {
            revertedName += hacker1[i];
        }

        console.log(revertedName);

    ////

    // 3.3 Depending on the lexicographic order of the strings, print:

        if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
            console.log("The driver's name goes first.")
        }
        else if (hacker2.toLowerCase() > hacker1.toLowerCase()) {
            console.log("Yo, the navigator goes first definitely.")
        }
        else {
            console.log("What?! You both have the same name?")
        };

    ////


// Bonus Time!

    // Bonus 1: Go to lorem ipsum generator and:
        // Generate 3 paragraphs. Store the text in a variable type of string.
        // Make your program count the number of words in the string.
        // Make your program count the number of times the Latin word et appears.

        const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida metus a pulvinar mattis. 
        Aenean ultrices lorem nec velit fringilla tincidunt. Donec cursus tempor luctus. Quisque vel placerat mauris. 
        Aenean laoreet velit commodo, laoreet leo eget, placerat massa. 
        Ut ut ipsum ac ante efficitur blandit. Vivamus vulputate neque ut viverra faucibus. 
        Nam tincidunt massa nec augue pharetra vestibulum. Proin sed est leo. Ut interdum mauris eget dui posuere, vitae bibendum 
        nisi pretium. Nam commodo vitae mi a tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Mauris ut est accumsan, mattis nisi sed, fermentum magna. Duis placerat lectus magna, id varius diam tristique ac. 
        Vestibulum sit amet nisi blandit, aliquet odio eget, sollicitudin lectus. Aliquam at gravida odio. 
        Sed molestie aliquam purus non sodales. Donec eu lorem scelerisque, laoreet quam at, rhoncus eros. Proin rutrum, libero
        vitae congue tempus, massa sapien blandit nibh, rutrum congue mauris lacus sed urna. Cras consectetur risus id sem maximus,
        et lacinia massa aliquet. Etiam venenatis volutpat placerat. Praesent rhoncus tristique purus, et aliquet sem scelerisque at. 
        Suspendisse non leo vitae dolor mollis consectetur. Vestibulum vel nibh id augue laoreet ullamcorper. 
        Vestibulum eu massa quis tortor porttitor bibendum. Mauris pharetra, purus eu interdum sollicitudin, orci diam aliquam nisl, 
        sed luctus nibh lorem nec mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Morbi vel mollis nulla, vitae faucibus metus. In venenatis molestie risus, nec ornare libero vulputate vel. Aenean viverra 
        id sem vitae convallis. Aliquam erat volutpat. Suspendisse molestie posuere dui, suscipit tempus arcu commodo eget.`

        const words = dummyText.split(/\s+/);

        let wordCount = 0;
        let etWordCount = 0;

        for (let i = 0; i < words.length; i++) {
              
            wordCount++;

              if (words[i] === "et") {
                etWordCount++
              }
        }

        console.log(`there are ${wordCount} words`);
        console.log(`there are ${etWordCount} et words`);
    
    ////


    // Bonus 2: Create a new variable phraseToCheck and have it contain some string value. 
    // Write a code that will check if the value we assigned to this variable is a Palindrome.

            const phraseToCheck = "step on no pets";

            const phraseSplitted = phraseToCheck.split(/\s+/).join("").split('');

            let isPalindrome = true;

            for (i = 0; i < phraseSplitted.length; i++ ) {
                if (phraseSplitted[i] !== phraseSplitted[phraseSplitted.length - 1 - i]) {
                    isPalindrome = false;
                };
            };

            if (isPalindrome) {
                console.log(phraseToCheck + " is a palindrome");
            } else {
                console.log(phraseToCheck + " is not a palindrome");
            }
    
    ////