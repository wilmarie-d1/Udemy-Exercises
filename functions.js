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

function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant();