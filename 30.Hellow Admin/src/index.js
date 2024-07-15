"use strict";
///////////////////Hellow Admin/////////////////////////
const userName = ['Admin', 'Bugs Bunny', 'Daffy duck', 'Sylvester', 'Twety'];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'Admin') {
        console.log('Hellow Admin !, would you like to see a status report.');
    }
    else {
        console.log(`Hellow ${userName[i]}, thank you for logging in again.`);
    }
}
// const userNames: string[]= ['Admin', 'Bugs Bunny', 'Daffy duck', 'Sylvester', 'Twety'];
// userNames.forEach(userName => {
//     if(userName==='admin'){
//         console.log('hellow admin would you like to see status report');
//     }
//     else{
//         console.log(`hellow ${userName}, thank you for logging in again`);
//     }
// })
