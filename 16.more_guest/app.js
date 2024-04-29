//Exercise 45 Q 16
var guest_list = ["Ali", "nabeel", "sara", "bushra"];
//for(let i =0; i<guest_list.length; i++){
// console.log(`Respected sir/Madam ` + guest_list[i] + `\nwe invited you on dinner tomorrow.\n\nthank you`)
//}
var not_present = "nabeel";
var new_guest = "ahsan";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\nthank you");
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
guest_list.unshift("abdullah", "noman", "ghazala");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\nthank you");
}
