//console.log("I'm ready!");

// Iteration 1: Names and Input
/*
    1.1 Create a variable `hacker1` with the driver's name. <br>

    1.2 Print `"The driver's name is XXXX"`.<br>

    1.3 Create a variable `hacker2` with the navigator's name.<br>

    1.4 Print `"The navigator's name is YYYY"`.
*/
//driver name
hacker1 = "John Wick"
console.log("The driver's name is " + hacker1)

//navigator name
hacker2 = "Bill Nye"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
/*
    2.1. Depending on which name is longer, print:
        - `The driver has the longest name, it has XX characters.` or <br>
        - `It seems that the navigator has the longest name, it has XX characters.` or <br>
        - `Wow, you both have equally long names, XX characters!`.
*/
if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length +  " characters.")
}
else if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
// Iteration 3: Loops
    //console.log(hacker1.toUpperCase().split('').join(' '))
    /* 
        3.1 Print all the characters of the driver's name, separated by a space and in capitals
    */
    driverName = "" 
    for (let i = 0; i < hacker1.length; i++){
        driverName += hacker1[i].toUpperCase() + " "; 
    }
    console.log(driverName.trim());
    /*
        3.2 Print all the characters of the navigator's name, in reverse order.
    */
    navigatorName = "" 
    for (let i = hacker2.length-1; i >=0; i--){
        navigatorName += hacker2[i]; 
    }
    console.log(navigatorName);
    /*
        3.3 Depending on the lexicographic order of the strings, print: <br>
        - `The driver's name goes first.`  <br>
        - `Yo, the navigator goes first definitely.`  <br>
        - `What?! You both have the same name?`
    */
    driver = hacker1.toLowerCase();
    navigator = hacker2.toLowerCase();

    if (driver > navigator){
        console.log("The driver's name goes first.");
    }

    else if (driver < navigator){
        console.log("Yo, the navigator goes first definitely.");
    }
    
    else {
        console.log("What?! You both have the same name?");
    }

