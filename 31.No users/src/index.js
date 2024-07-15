"use strict";
//No users: Add and  if test to exercise 28 to make sure that list of users is not empty.
//If the list is empty, print the message WE need to find some users!
//Remove all of usernames from your arry, and make sure the correct message is printed.
let userNames = ['Admin', 'Kamran', 'Daniyal', 'Zeeshan'];
if (userNames.length === 0) {
    console.log("We need to finf some users!");
}
else {
    userNames = [];
    console.log("All userNamse has been removed." + userNames.length);
}
/////////////////////////////////////////////////END///////////////////////////////////////////////
