//lower case
let personName: string = "Shereen"
console.log("Lowercase:" , personName.toLowerCase());

//upper case
console.log("uppercase: ", personName.toLocaleUpperCase());

//Tittle case
console.log("tittlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));