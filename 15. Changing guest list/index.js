"use strict";
/////////////////////////////////////////////Assingment : 15 /////////////////////////////////////////////
//People lists
let Guest_List = ['Iqra', 'Niha', 'Ayesha', 'sidra'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `);
}
let absent_Guest = 'Ayesha';
let new_Guest = 'Laiba';
Guest_List[2] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `);
}
console.log(` Mrs.${absent_Guest}is not coming to the party.`);

////////////////////////////////////////END///////////////////////////////////////////