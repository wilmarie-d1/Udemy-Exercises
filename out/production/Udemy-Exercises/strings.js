// Our First String Variables Practice
// Please define the following string variables (you can use either let or const):
//
// bestColor should be set to the string purple (the best color on planet earth, as we all know);
//
// quote should be set to the string You had me at "hello" - be careful about quotation marks, we want double quotes inside the string.

let bestColor = 'purple';
let quote = 'You had me at "hello" ';

//QUIZ TIME
// Question 1:
// Given the following string:
//
//     const animal = "hippopotamus"
// Which character am I accessing?
//
//     animal[7]

// My answer: "t"

// Question 2:
// What is stored in the combo variable?
//
// const city = 'Kyoto';
// const country = 'Japan';
// const combo = city + country;

// My answer : "KyotoJapan"

// Question 3:
// What does the following return?
//
//     let year = "1998";
// year + 1;

//My answer: "19981"


// String Methods Practice
// Let's get some practice working with string methods. I've provided you with a variable in index.js called message.  Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

let whisper = message.toLowerCase().trim();
console.log(whisper);


// More String Methods Practice
// I've provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard".
//
// Use a string method to extract the "board" part of "skateboard"  (using the slice method)
//
// Replace the "o" in board with an "e" (using the replace method)
//
// Save the result in a variable called facialHair
//
// This is another exercise that is very easy to cheat! I can't verify that you actually call the correct string methods.  You could just copy and paste the answer into the variable. BUT IF YOU DO THAT YOU WON'T BE ABLE TO LIVE WITH THE GUILT.  IT WILL TEAR YOU APART FOR AS LONG AS YOU LIVE! So, please follow the spirit of the exercise :)

const word = "skateboard"; //Don't change this line!
let less = word.slice(5);
let facialHair = less.replace('o', 'e');
console.log(facialHair);

// String Template Literal Exercise
// I've provided you with two variables, die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6.  Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:
//
// die1: 3
//
// die2: 5
//
// roll: "You rolled a 3 and a 5. They sum to 8"
//
// Here is another example with different numbers:
//
//     die1: 6
//
// die2: 4,
//
//     roll: You rolled a 6 and a 4. They sum to 10"
//
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `You rolled a ${die1} and a ${die2} Their sum is ${die1 + die2}`;
console.log(roll);