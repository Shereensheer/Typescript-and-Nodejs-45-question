"use strict";
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album("Ali", "Rang-e-Mohabat");
let album2 = make_album("Madad", "Roshan Andhera");
let album3 = make_album("Ayaz", "Masum-e-dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum(artistName, albumTitle, numberofTrack) {
    return { artistName, albumTitle, numberofTrack };
}
let album4 = myAlbum("shazad roy", "tajdar-e-haram", 20);
let album5 = myAlbum("Madad", "Roshan Andhera", 20);
let album6 = myAlbum("Ayaz", "Masum-e-dil");
console.log(album4);
console.log(album5);
console.log(album6);
