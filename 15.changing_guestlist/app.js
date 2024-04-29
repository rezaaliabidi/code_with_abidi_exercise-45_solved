//Exercise 45 Q 15
var guest_list = ["Ali", "nabeel", "sara", "bushra"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam " + guest_list[i] + "\nwe invited you on dinner tomorrow.\n\nthank you");
}
var not_present = "nabeel";
var new_guest = "ahsan";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + "\nwe invited you on dinner tomorrow.\n\nthank you");
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
