let partyPeople = [
    { name: "Joe", attending: false },
    { name: "Jasmine", attending: true },
    { name: "Julio", attending: false },
    { name: "Julia", attending: true },
  ];
  
  /*
  loop through each item
  check if the person is attending
  if they are attending, say they are partying
  otherwise, say they are burnt out
  */
  for (let i = 0; i < partyPeople.length; i++) {
    if (partyPeople[i].attending) {
      console.log(partyPeople[i].name + " is partying!");
    } else {
      console.log(partyPeople[i].name + " is burnt out on partying =(");
    }
  }

  //You have a shopping list array with items and their quantities. Loop through the list and print a message indicating if you need to buy more of each item or if you have enough.

  let shoppingList = [
    { item: "Apples", quantity: 0 },
    { item: "Bananas", quantity: 2 },
    { item: "Milk", quantity: 1 },
    { item: "Bread", quantity: 0 },
  ];

  for(let i=0;i<shoppingList.length;i++){
    if(shoppingList[i].quantity===0){
        console.log("Need to buy "+ shoppingList[i].item+" !");
    }else{
        console.log("You bought enough "+shoppingList[i].item+" !");
    }
  }

  //You have an array of students with their names and grades. Loop through the list and print whether each student passed or failed. Assume passing is a grade of 60 or higher.

  let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 59 },
    { name: "Charlie", grade: 72 },
    { name: "David", grade: 47 },
  ];
  
  for(let i=0;i<students.length;i++){
    if(students[i].grade>=60){
        console.log(students[i].name+" passed!");
    }else{
        console.log(students[i].name+" failed!")
    }
  }


  //You have a list of employees and whether they have checked in for work. Loop through the list and print a message indicating whether each employee is present or absent.

  let employees = [
    { name: "Emma", checkedIn: true },
    { name: "Liam", checkedIn: false },
    { name: "Olivia", checkedIn: true },
    { name: "Noah", checkedIn: false },
  ];
  for(let i=0;i<employees.length;i++){
    if(employees[i].checkedIn){
        console.log(employees[i].name+"is present.");
    }else{
        console.log(employees[i].name+"absent.")
    }
  }

console.log("<---------------------------------------------------------------------------------------->");

// Problem 6: Grouping Students by Grades
// You have an array of students with their names and grades. Group the students into categories: "Excellent" for grades 90 and above, "Good" for grades between 70 and 89, and "Needs Improvement" for grades below 70.

let students1 = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 88 },
    { name: "David", grade: 61 },
    { name: "Eve", grade: 47 },
    { name: "Frank", grade: 89 },
  ];

  let excellent=[];
  let good=[];
  let needImprovement=[];


for(let i=0;i<students1.length;i++){
    if(students1[i].grade>=90){
        excellent.push(students1[i].name);
    }else if(students1[i].grade>=70){
        good.push(students1[i].name);
    }else{
        needImprovement.push(students1[i].name);
    }
}

console.log("Excellent "+excellent.join(", "));
console.log("Good "+good.join(", "));
console.log("Need Improvent "+needImprovement.join(", "));


// Problem 7: Inventory Management
// You have an array of products in a store, each with a name, price, and quantity. Write a function to restock items if their quantity is below a certain threshold.


// let products = [
//     { name: "Shampoo", price: 5.99, quantity: 1 },
//     { name: "Soap", price: 1.99, quantity: 3 },
//     { name: "Toothpaste", price: 2.99, quantity: 0 },
//     { name: "Lotion", price: 7.99, quantity: 4 },
// ];

// let threshold = 2;  // The threshold below which products need to be restocked

// // Iterating through each product
// for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity < threshold) {
//         console.log("Restocking " + products[i].name + " Current quantity is " + products[i].quantity);
//         // Example: Restock with 5 more units
//         products[i].quantity += 5;
//     } else {
//         console.log("No need to restock " + products[i].name + ". Current quantity is " + products[i].quantity);
//     }
//     console.log("New list of product quantity "+products[i].quantity);
// }


//Problem 8: Flattening a Nested Array
//You have a nested array of numbers. Write a function to flatten the array (convert it into a single array with all elements).

let nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, 10]]];

let flattened = [];  // This will store the flattened result

//Manually flattred array

for(let i=0;i<nestedArray.length;i++){
  if(!Array.isArray(nestedArray[i])){
    flattened.push(nestedArray[i])
  }else{
    //Handling first level of nesting

    for(let j=0;j<nestedArray[i].length;j++){
      if(!Array.isArray(nestedArray[i][j])){
        flattened.push(nestedArray[i][j])
      }else{
        //Handling second level of nesting
        for(let k=0;k<nestedArray[i][j];k++){
          flattened.push(nestedArray[i][j][k])
        }
      }
    }
  }
}
console.log(flattened); 


//Problem 9: Find the Most Expensive Product
//You have an array of products. Write a function to find and return the name of the most expensive product.

// let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
//   { name: "Headphones", price: 100 },
// ];

// let mostExpensive=products[0];

// for(let i=0;i<products[i].length;i++){
//   if(products[i].price>mostExpensive.price){
//     mostExpensive=products[i];
//   }
// }
// console.log("The most expensive product "+mostExpensive.name);



// Problem 10: Analyzing Survey Data
//You have an array of survey responses, where each response contains a respondent's name and their rating for a product (on a scale of 1 to 10). Write a function to calculate the average rating.


let surveyResponses = [
  { name: "Alice", rating: 8 },
  { name: "Bob", rating: 7 },
  { name: "Charlie", rating: 9 },
  { name: "David", rating: 6 },
  { name: "Eve", rating: 8 },
];

let avgRating,sum=0;

for(let i=0;i<surveyResponses.length;i++){
  sum+=surveyResponses[i].rating;
  
}
avgRating=sum/surveyResponses.length;
console.log("Average rating "+avgRating)


//Problem 11: Creating a Matrix
//You have an array representing a grid of numbers (a matrix). Write a function that prints the sum of each row.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for(let i=0;i<matrix.length;i++){          //Loop through each row
  let rowSum=0;
  for(let j=0;j<matrix[i].length;j++){        // Loop through each element in the current row
    rowSum+=matrix[i][j];                  //Add element of each row wise
  }
  console.log("Sum of row "+(i+1)+" : "+rowSum)
}


// Problem 12: Filter Products by Price
// You have an array of products with different prices. Write a function to filter out the products that are above a certain price.



let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 100 },
];
let affordableItem=[];
for(let i=0;i<products.length;i++){
  if(products[i].price<400){
    affordableItem.push(products[i])
  }

  
}
console.log("product under $ 400 ");

for(let i=0;i<affordableItem.length;i++){
  console.log("-> "+affordableItem[i].name+" $ "+affordableItem[i].price);
}


//First, let's list all the properties of the object to see what we are dealing with. So, create a for in loop that will console.log the key and values of each property

// Delete the previousOwner property.

// Update the doesItWork property to be true.

// Create a conditional that will check if the price of the product is higher than 100. In case it is, add a new property discountPercentage with a value of 10.

// Using the price and discountPercentage properties (and a little bit of math 😉 ) update the price property to be the discounted one! Price minus 10%

// Finally, create a conditional that, using the in operator, will check of the discountPercentage property exists in the object and, if so, create a console.log() that uses the three property values to look something like this: "We got some headphones on sale for just $108, that's 10% off!"


// Initial code
let product = {
  name: 'headphones',
  price: 120,
  doesItWork: false,
  previousOwner: "Bob"
  };

  //list of all properties
  for(let key in product){
    console.log(`${key}: ${product[key]}`)
  }

  // 4. Deleting a property
  delete product.previousOwner

  //updating a property
  product.doesItWork=true;

  //create property through conditional

  if(product.price>100){
    product.discountPercentage=10;
  }
   // 7. Using property values to update other properties
   product.price-=product.price*(product.discountPercentage/100);

   // 8. Checking if a property exists with a conditional

   if('discountPercentage' in product){
    console.log(`We got some ${product.name} on sale for just $${product.price}, that's ${product.discountPercentage}% off`);
   }