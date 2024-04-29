//Exercise 45 Q 17
//Exercise 45 Q 16
let guest_list: string [] = [`Ali`, `nabeel`,`sara`,`bushra`];
//for(let i =0; i<guest_list.length; i++){
   // console.log(`Respected sir/Madam ` + guest_list[i] + `\nwe invited you on dinner tomorrow.\n\nthank you`)
//}
let not_present: string = `nabeel`;
let new_guest: string =`ahsan`;
guest_list[1] = new_guest;
//for(let i =0; i<guest_list.length; i++){
    //console.log(`Respected sir/Madam` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nthank you`)
//}
guest_list.unshift(`abdullah`, `noman`, `ghazala`);
//for(let i =0; i<guest_list.length; i++){
  //  console.log(`Respected sir/Madam` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nthank you`) 
//}
console.log(`\nUnfortunately we can not arrange big table, only two peoples allow.`)
while(guest_list. length > 2){
    let remove_guest = guest_list.pop();
console.log(`Sorry sir/Madam. ${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
console.log(`Respected Sir/Madam` + guest_list[i] + `,\nYes you are still invited on tomorrow dinner\nThank you\n`)
}
guest_list.splice(0,2)
console.log(guest_list)


