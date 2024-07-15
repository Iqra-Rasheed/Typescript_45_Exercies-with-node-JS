"use strict";
//Magicians: Make s arry of magicians name. Pass the arry to a function called show_magicians().
// which prints the name of each magicians in the array.
let magician = ['Herry Porter', 'Hermione Granger', 'Ron weasley', 'Albus Dumbledore'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
