        
        ///////////////////////////////////Assingment : 17 ////////////////////////////////////////////////
        //People lists

        let Guest_List :string[] = ['Iqra', 'Niha', 'Ayesha', 'sidra'];
        // for(let i=0; i<Guest_List.length; i++){
        //         console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `)
       // }

        let absent_Guest : string ='Ayesha';
        let new_Guest : string = 'Laiba';
        Guest_List[2] = new_Guest ;

        // for(let i=0; i<Guest_List.length; i++){
        //  console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `)

        // }

        // console.log(` Mrs.${absent_Guest}is not coming to the party.`);
        // console.log('Good News! we find big Tableso we are inviting 3 more guests. ')
        Guest_List.unshift(' Muntaha ');
        Guest_List.splice(2 , 0 ,'Maryam Nawaz');
        Guest_List.push('Shirin Rehman');
        // for(let i=0; i<Guest_List.length; i++){
        // console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n `)

        // } 
        
        // console.log('\nSorry we can not arrange Big Table,only two peoples will be invited.');
        while(Guest_List.length>2){
                let remove_Guest = Guest_List.pop();
                // console.log(`Sorry Mrs. ${remove_Guest}, You are not invited for dinner. `);
                
        // }
        // for(let i=0; i<Guest_List.length; i++){
        //         console.log('Dear Mrs. ' + Guest_List[i] + `,\n\nYou are still invited\n\n Thank you!\n\n `)
 
          } 
// Guest remove
        Guest_List.splice(0, 2);
        console.log(Guest_List);

        ///////////////////////////////////// Assignment : 19 ////////////////////////////////////
        //Print a mesage indicating the number of people you are inviting to dinner.

        console.log(`Total number of guest are: ${Guest_List.length}`);

        ////////////////////////////////////////////END/////////////////////////////////////////////



        

