/////////////////////////////// Assingment : 27 ////////////////////////////////////


//Allien color #3: Turn your if.else chain from exercise 25.26 into an if else chain .
//Write three version of tjis program , making sure each message is printed for the appropiate allien.
let allien_color : string = "green";

//if the allien color is green , print a message that the player earned 5 points.
//if the allien color is green , print a message that the player earned 10 points.
//if the allien color is green , print a message that the player earned 15 points.

//Version 1 of the program . 
if(allien_color=== "green"){
    console.log("Version 1 : Player earned 5 points.");
}
else if (allien_color=== "yellow"){
    console.log("Player earned 10 points.");
}
else if(allien_color=== "Red"){
    console.log("Player earned 15 points");
}
else{
    console.log("Please select right color");
}

//Version 2 of the program
allien_color = "yellow";

if(allien_color=== "green"){
    console.log("Player earned 5 points.");
}
else if (allien_color=== "yellow"){
    console.log("Version 2 : Player earned 10 points.");
}
else if(allien_color=== "Red"){
    console.log("Player earned 15 points");
}
else{
    console.log("Please select right color");
}

//Version 3 of the program .
allien_color = "Red";

if(allien_color=== "green"){
    console.log("Player earned 5 points.");
}
else if (allien_color=== "yellow"){
    console.log("Player earned 10 points.");
}
else if(allien_color=== "Red"){
    console.log("Version 3 : Player earned 15 points.");
}
else{
    console.log("Please select right color");
}

//////////////////////// END ///////////////////////////