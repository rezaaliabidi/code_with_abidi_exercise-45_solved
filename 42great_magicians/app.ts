function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

//Function to make_great

function make_great(magicians: string[]){
    return magicians.map(name => `The Great: ${name}`);

}

//Define an array of magician names
let magician_names = ["Harry Poter", "Ali Raza", "Sohail"];

//Calling function make_great to modify magician names

make_great(magician_names);
let great_magicians = make_great(magician_names);
//console.log(great_magicians);
//Call show_magician function that show modified list of magicians
show_magician(great_magicians);


