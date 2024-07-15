"use strict";
///////////////////////////////////Assingment : 17 ////////////////////////////////////////////////
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
//Arrat m 3 guest add kiye hn       
Guest_List.unshift(' Muntaha ');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Shirin Rehman');
//yhn pr mene 6 guest k array ko print krwaya h 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `);
}
//Sorry message to guest are not inviting        
console.log('\nSorry we can not arrange Big Table,only two peoples will be invited.');
//Yahn pr mene guset remove kiye hn        
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mrs. ${remove_Guest}, You are not invited for dinner. `);
}
// Bache hwe 2 invited guest
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nYou are still invited\n\n Thank you!\n\n `);
}
//Guest remove 
Guest_List.splice(0, 2);
console.log(Guest_List);
////////////////////////////////////////////END/////////////////////////////////////////////
