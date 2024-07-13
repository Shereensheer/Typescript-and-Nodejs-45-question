
let magicians_names : string[] = ['Ali', 'Zain','Hina'];

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}

let copy_magician_names = magicians_names.slice();

let  copy_great_magicians = make_great(copy_magician_names);

console.log("original Array\n")

show_magician(magicians_names);

console.log("copy Array\n")
show_magician(copy_great_magicians);

