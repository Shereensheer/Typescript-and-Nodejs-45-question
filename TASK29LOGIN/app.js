"use strict";
let usersname = ['sana', 'hina', 'saba', 'taha', 'admin'];
for (let user of usersname) {
    if (user === "admin") {
        console.log("Hello admin would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, 'thank you for logging in again`);
    }
}
