var guest_list = ['Ali', 'Raza', 'Ibrahim', 'Mujtaba', 'Hina'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');
//}
var not_present = 'Raza';
var new_guest = 'zari';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');   
//}
guest_list.unshift('Ahmed', 'Shahla', 'Medhat');
//  for(let i=0; i<guest_list.length; i++){
//  console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');  
//} 
console.log("\nunfortunetly we can not arrange big tabe , Only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam, ".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nyes you are still invited in tomorrow dinner.\nThank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
