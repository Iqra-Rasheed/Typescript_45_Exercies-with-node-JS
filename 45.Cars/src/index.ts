//////////////////////////////////// Assingment : 45 //////////////////////////////////

//Cars : Write a function that stores information about a car in a object.
// The funtion should always receive a manufacturer and a model name.
// it should then accept an artbitary number of keyword arguments. 
//Call the function with the required information and two other name_value paris, such as a color or an optional features.
//Print the object that's retured to make sure all the information was correctly.

import { features } from "process";

function storeCarInfo(Manufacturer:string, modelName:string, ...extraoption: {[key : string]: any} []):
object {
    const carInfo = {
        Manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    }
    return carInfo;
};

let answer = storeCarInfo('Honda', 'Civic' , {color:'Black'}, {features:['Navigation', 'Power Window']})
console.log(answer);

///////////////////////////// END ///////////////////////////////////////////

