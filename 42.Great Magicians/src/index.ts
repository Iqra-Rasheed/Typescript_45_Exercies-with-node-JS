    //////////////////////// Assingment : 42 //////////////////////////////////


//Great magicians: Start with a copy of your program from exercise 41. Write a function called make_grat() that modifies.
// the array of magicians by adding the phrase the Great to each magicians name. Call show_magician() to see that the list has actually been modified.

let magician : string[] = ['Herry Porter.', 'Hermione Granger.', 'Ron weasley.', 'Albus Dumbledore.'] ;

function make_great ( magicianArray:string[] ){
    for(let i=0; i<magicianArray.length; i++){
        magician[i] = '~The Great ' +  magicianArray[i]
    }

}


function show_magicians(magicians:string[]){

    magicians.forEach(element =>{

        console.log(element);

    })
}
make_great(magician);
show_magicians(magician);

//////////////////////////////////// END ////////////////////////////////////