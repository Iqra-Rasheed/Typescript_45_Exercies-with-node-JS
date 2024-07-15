"use strict";
// stages of life: write an if else chain that determines a person stage of life .
//set a value for the variable age, and than:
let age = 25;
//If the person is less than 2 years old , print a message that the person is a baby.
//if the person is at least 2 years old but less than 4, print a mesage that the person is a toodler.
if (age < 2) {
    console.log("Person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("Person is a toodler");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is  an elder");
}
