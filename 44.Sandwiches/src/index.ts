    //////////////////////// Assingment : 44 //////////////////////////////////


//Sandwiches: Write a function that accepts a array of items a person wants on a sandwiches.
//The functon should have one parameter that collect as mant as the function calls provides, and it should print a summary if the sandwiches that is bein ordered.
//call the function three items, using a different number of argument each item.

function makeSandwich (item: string[]){
    console.log("Enjoy your sandwich with : ");
    item.forEach(element => console.log(".  " + element ));
    console.log("Enjoy your sandwich !\n");
}


makeSandwich(['Ham', 'Cheese', 'Lettuse']);

makeSandwich(['Turkey', 'Becon']);

makeSandwich(['Peanut Butter', 'Jelly']);

////////////////////////////// END /////////////////////////////