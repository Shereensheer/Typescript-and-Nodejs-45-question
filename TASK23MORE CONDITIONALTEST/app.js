var car = 'subaru';
var age = 25;
var numbers = [1, 3, 7, 9];
//STRING TEST
//1 EQUALITY (TRUE)
console.log("is car == 'Toyota'? I predict True.");
console.log(car == 'Toyota');
// 2 Strict equality (False)
console.log("Is car === 'Toyota'? I predict False.");
console.log(car !== 'Toyota');
// 3 Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota');
// 4 Inequality (False)
console.log("Is car !== 'Toyota'? I predict False.");
console.log(car !== 'Toyota');
// 5 Lower case conversion (True)
console.log("Is car. toLowerCase( =='subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// 6 lowerCase conversion (False)
console.log("Is car === car .toLowerCase()? I predict False.");
console.log(car === car.toLowerCase());
//  **NUMARICAL **
// 7 EQUALITY
console.log("Is age == 25? I predict True.");
console.log(age == 25);
// 8 INEQUALITY (FALSE)
console.log("Is age != 30? I predict True.");
console.log(age != 30);
// 9 GREATER THAN (FALSE)
console.log("Is age > 30? I predict false.");
console.log(age > 30);
// 10 LESS THAN OR EQUAL (TRUE)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);
//** LOGICAL OPERATORS **
// 11 AND (TRUE)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age <= 20 && age < 30);
// 12 OR (FALSE)
console.log("Is age > 30 || age < 18/ I predict False.");
console.log(age > 30 || age < 18);
// **ARRAYS
// 13 IN ARRAY (TRUE)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers);
// 14 NOT IN ARRAY (FALSE)
console.log("Is 5 not in numbers? I predict True.");
console.log(5 in numbers);
