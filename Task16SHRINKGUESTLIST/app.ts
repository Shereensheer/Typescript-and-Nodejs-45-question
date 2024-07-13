let guest_list : string[] = ['Ali' , 'Raza' , 'Ibrahim' , 'Mujtaba' , 'Hina'];
//for(let i=0; i<guest_list.length; i++){
 //   console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');
//}
let not_present : string = 'Raza';
let new_guest : string = 'zari';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');   
//}

guest_list.unshift('Ahmed' , 'Shahla' , 'Medhat');
  //  for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nWe invited you to dinner tomorrow.\nThank you\n');  
 //} 
 console.log("\nunfortunetly we can not arrange big tabe , Only two people allow.")
 while(guest_list.length>2){
  let remove_guest = guest_list.pop();
  console.log(`sorry Sir/Madam, ${remove_guest} you are not invited for dinner`);
 }
 for(let i=0; i<guest_list.length; i++){
  console.log('Respected/Sir/Madam ' + guest_list[i] + ',\nyes you are still invited in tomorrow dinner.\nThank you\n')  
 }
 guest_list.splice(0,2)
 console.log(guest_list)
 
