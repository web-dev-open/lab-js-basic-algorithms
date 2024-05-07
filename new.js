//Iteration 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example usage:
//const result = maxOfTwoNumbers(5, 10);
//console.log("The largest number is:", result);  // Output: 10

// Example usage:
result = maxOfTwoNumbers(5, 10)
console.log("The largest number is:", result)   

// Iteration 2
function findLongestWord(words) {
    if (words.length === 0) {
        return null; // Return null if the array is empty
    }

    let longestWord = words[0]; // Assume the first word is the longest

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update longestWord if a longer word is found
        }
    }

    return longestWord;
}

// Test the function
 words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const longestWord = findLongestWord(words);
console.log("The longest word is:", longestWord); // Output: "crocodile"

//Iteration 3


function sumNumbers(nums) {
    let sum = 0; // Initialize sum variable to store the total sum

    // Iterate over each number in the array and add it to the sum
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}

// Test the function
numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let totalSum = sumNumbers(numbers);
console.log("The sum of all numbers is:", totalSum); // Output: 87

//Iteration 3.1
function sum(arr) {
    let total = 0;

    for (let element of arr) {
        if (typeof element === 'number' || typeof element === 'boolean') {
            total += element; // For numbers and booleans, add directly to total
        } else if (typeof element === 'string') {
            total += element.length; // For strings, add their length to total
        }
        // Ignore other types of data
    }

    return total;
}

// Test the function
mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const result = sum(mixedArr);
console.log("The sum is:", result); // Output: 57



// Iteration 4 level 1
function averageNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var avg = sum / numbers.length;
    return avg;
}

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers));

// Iteration 4 level 2
function averageWordLength(words) {
    if (words.length === 0) return 0; 
    var totalLength = 0;
    for (var i = 0; i < words.length; i++) {
        totalLength += words[i].length; 
    }
    return totalLength / words.length; 
}
words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
console.log(averageWordLength(words));

// Iteration 4.1
function avg(arr) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var num;
        if (typeof arr[i] === 'number') {
            num = arr[i];
        } else if (typeof arr[i] === 'boolean') {
            num = arr[i] ? 1 : 0;
        } else if (typeof arr[i] === 'string') {
            num = arr[i].length;
        } else {
            continue;
        }
        sum += num;
        count++;
    }
    return count ? sum / count : 0; 
}
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
console.log(avg(mixedArr));

// Iteration 5
function uniquifyArray(words) {
    var uniqueArray = [];
    for (var i = 0; i < words.length; i++) {
        if (uniqueArray.indexOf(words[i]) === -1) {
            uniqueArray.push(words[i]);
        }
    }
    return uniqueArray;
}

 words = [
    'crab', 'poison', 'contagious', 'simple', 'bring',
    'sharp', 'playground', 'poison', 'communion', 'simple', 'bring'
];

console.log(uniquifyArray(words));

// Iteration 6
function doesWordExist(words, word) {
    for (var i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return true; 
        }
    }
    return false;
}

 words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
console.log(doesWordExist(words, 'subset')); 
console.log(doesWordExist(words, 'apple'));

// Iteration 7
function howManyTimes(words, word) {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++; // Increment count each time the word is found
        }
    }
    return count;
}

const words = [
    'machine', 'matter', 'subset', 'trouble', 'starting',
    'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'
];

console.log(howManyTimes(words, 'matter'));

//Iteration 8
function greatestProduct(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxProduct = 0;

    // Check horizontal products
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    // Check vertical products
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    // Check diagonal (right-down) products
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    // Check diagonal (left-down) products
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 3; j < cols; j++) {
            const product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    return maxProduct;
}

