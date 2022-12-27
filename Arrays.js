// Lotto Numbers Exercise
// Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!
//
let lottoNumbers = [10, 20, 30, 40, 50 ,60];

// Array Access Exercise
// I've provided you with a leaderboard array, which consists of 4 strings.  Without touching line 1, please make the following changes:
//
// Unfortunately, I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)
//
// Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

//Push/Pop/Shift/Unshift Practice
// I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes.  Please help me fix the planets array!  Using the array methods we just learned...
//
// Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
//
// Add in "Saturn" at the very end of the planets array
//
// Add "Mercury" as the first element in the planets array.
//
// At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
//
// (This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push('Saturn');
planets.unshift("Mercury");

//Nested Arrays Exercise
// I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.  Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available (it's set to null currently).  Please update the array element that is currently null, to instead be "Hugo". (Please don't directly change the code on line 6 where I'm initially setting it to null.  This is an exercise in accessing data in nested arrays!)
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo'
