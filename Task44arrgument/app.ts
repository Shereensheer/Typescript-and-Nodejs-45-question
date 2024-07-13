 function carDetails (manufacture:string, modelName: string, ...addditioninfo) {
    const car = { manufacture, modelName, ...Object.fromEntries(addditioninfo)};
    return car;
 };
    
const mycarDetail =carDetails("toyota" , "corolla" , ["color" , "blue"], ['year' , 2022]);
console.log(mycarDetail);


