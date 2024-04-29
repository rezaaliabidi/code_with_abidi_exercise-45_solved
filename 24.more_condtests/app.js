//Exercise 45 Q 24 more conditional tests
//Define variable
var apple = "apple";
var uppercaseApple = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "bnana", "orange"];
//Test1 for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
//Test2 Using Lower case function
console.log("Is APPLE is equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");
///Test 3
console.log("\nIs APPLE is not equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Test 4 Numerical test
//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not Equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than 
console.log("\nIs ten is greater than 0?");
console.log(ten > 0);
//Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Tests using "and" & "or" operators
//using && Operator
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
// using OR Operator
console.log("\nIs twenty is greater than 50 OR 20 is less than 50?");
console.log(twenty > 50 || twenty < 50);
//Test: whether an item is in a Array
console.log("Is orange include in my fruits array?");
console.log(fruits.includes("orange"));
//Not include
console.log("\nIs orange not include in my array Fruits array?");
console.log(!fruits.includes("orange"));
