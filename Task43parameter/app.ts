

function sandwiches(...items: string []){
    return `i want sandwches of ${items}`;

};


let collection1 = sandwiches("hen" , "cheeze" , "lettuce");
let collection2 = sandwiches("turkey" , "swiss" , );
let collection3 = sandwiches();//no arrgument

console.log(collection1);
console.log(collection2);
console.log(collection3);
