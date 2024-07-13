"use strict";
function carDetails(manufacture, modelName, ...addditioninfo) {
    const car = Object.assign({ manufacture, modelName }, Object.fromEntries(addditioninfo));
    return car;
}
;
const mycarDetail = carDetails("toyota", "corolla", ["color", "blue"], ['year', 2022]);
console.log(mycarDetail);
