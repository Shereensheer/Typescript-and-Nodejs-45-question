"use strict";
let age = 15;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("the person is kid.");
}
else if (age >= 13 && age < 20) {
    console.log("the person is teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult.");
}
else {
    console.log("person is an elder.");
}
