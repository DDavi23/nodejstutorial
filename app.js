var stuff = require("./stuff"); //uses stuff.js module

console.log(stuff.counter(["Danyel", "Tara", "Angie", "James"])); //this is a function

//This returns There are 4 elements in this array

console.log(stuff.adder(3,4));

//This returns The sum of the 2 numbers is 7

console.log(stuff.adder(stuff.pi, 3));

//This returns The sum of the 2 numbers is 6.14