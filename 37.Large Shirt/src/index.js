"use strict";
//Large shirt modify the make_shirt() function so that shirt are large by defult with a message that reads I love typescript.
// Make a large shirt with the defult message and a shirt of my size with a different message.
function make_shirt(size = 'Large', text = 'I love typescript') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love Python');
