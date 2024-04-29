function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great: ".concat(name); });
}
//Define an array of magician names
var magician_names = ["Harry Poter", "Ali Raza", "Sohail"];
//Calling function
make_great(magician_names);
var great_magicians = make_great(magician_names);
//console.log(great_magicians);
show_magician(great_magicians);
