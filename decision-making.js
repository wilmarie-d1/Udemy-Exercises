//QUIZ TIME
// Question 1:
// What does the following code evaluate to?
//
//     3 <= 2

//My answer is: False

// What does the following evaluate to?
//
//     9 == '9'

//My answer is: true

//What does the following code evaluate to?
//
// -5 >= -6

//My answer is: true


// Our First Conditional Exercise
// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).
//
// Write your code between the two comments in index.js
//
// You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes
//
// If num is an even number, print out "even".  Don't do anything if num is an odd number.

function isEven(num) {
if (num % 2 === 0){
    console.log("even")
}
}

console.log(isEven(7));
console.log(isEven(6));