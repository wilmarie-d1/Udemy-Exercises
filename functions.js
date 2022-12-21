// It's time to write our first function!
//
// Define a function called printHeart that prints out the string "<3"
//
// Execute your function once

function printHeart() {
    console.log("<3")
}
printHeart();

// Rant Exercise
// Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:
//
//     I HATE BEETS
// I HATE BEETS
// I HATE BEETS

// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant();


// Multiple Args Exercise
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
//
// isSnakeEyes(1,1) //Snake Eyes!
// isSnakeEyes(1,5) //Not Snake Eyes!
// isSnakeEyes(4,5) //Not Snake Eyes!
// Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.


function isSnakeEyes(num1, num2) {
    if(num1 == 1 && num2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
console.log(isSnakeEyes(1,2));
console.log(isSnakeEyes(1,1));


// Return Value Practice
// It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!
//
// multiply(2,3) // 6
// multiply(9,9) // 81
// multiply(5,4) // 20

function multiply(x,y) {
    return x*y;
}
console.log(multiply(7,8));


// isShortsWeather Function
// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather.
//
// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course).
//
// If temperature is greater than or equal to 75, return true.
//
//     Otherwise, return false.
//
//     This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!
//
//     isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true
//   

function isShortsWeather(temperature){
    if (temperature  >= 75){
        return true;
    } else {
        return false;
    }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(72));