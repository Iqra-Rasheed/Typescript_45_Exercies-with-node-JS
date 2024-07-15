"use strict";
/////////////////////////////////////ASsingment : 16 ///////////////////////////////////////////////////
//People lists
let Guest_List = ['Iqra', 'Niha', 'Ayesha', 'sidra'];
// for(let i=0; i<Guest_List.length; i++){
//         console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `)
// }
let absent_Guest = 'Ayesha';
let new_Guest = 'Laiba';
Guest_List[2] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `);
}
console.log(` Mrs.${absent_Guest}is not coming to the party.`);
console.log('Good News! we find big Tableso we are inviting 3 more guests. ');
Guest_List.unshift(' Muntaha ');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Shirin Rehman');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `);
}
/////////////////////////////////////END/////////////////////////////////////////////
