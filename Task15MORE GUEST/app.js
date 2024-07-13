"use strict";
let guest_list = ['Ali', 'Raza', 'Ibrahim', 'Mujtaba', 'Hina'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');
//}
let not_present = 'Raza';
let new_guest = 'zari';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');
}
guest_list.unshift('Ahmed', 'Shahla', 'Medhat');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');
}
