//Exercise 45 Q 15
let guest_list: string [] = [`Ali`, `nabeel`,`sara`, `bushra`];
for(let i =0; i<guest_list.length; i++){
    console.log(`Respected sir/Madam ` + guest_list[i] + `\nwe invited you on dinner tomorrow.\n\nthank you`)
}
let not_present: string = `nabeel`;
let new_guest: string =`ahsan`;
guest_list[1] = new_guest;
for(let i =0; i<guest_list.length; i++){
    console.log(`Respected sir/Madam` + guest_list[i] + `\nwe invited you on dinner tomorrow.\n\nthank you`)
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`);
