"use strict";
//////////////////////////////////// Assingment : 45 //////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(Manufacturer, modelName, ...extraoption) {
    const carInfo = Object.assign({ Manufacturer,
        modelName }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['Navigation', 'Power Window'] });
console.log(answer);
