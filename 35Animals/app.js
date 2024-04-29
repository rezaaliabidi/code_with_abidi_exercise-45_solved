//Exercise 45 Q 35
//Creating an Array
var petanimals = ["Cat", "Dog", "Cock tail"];
//Using For-Loop
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
for (var _i = 0, petanimals_1 = petanimals; _i < petanimals_1.length; _i++) {
    var onepet = petanimals_1[_i];
    //Modify your program to print a statement about each animal, such as A dog would make a great pet.
    console.log("A ".concat(onepet, " would make a great pet"));
}
//Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//Print a message outside of For-Loop
console.log("Any of these animals would make a great pet!");
