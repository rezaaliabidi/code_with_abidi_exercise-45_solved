//Exercise 45 Q 43

let magician_name2 = ["Harry Poter", "Ali Raza", "Sohail"];

//Calling function make_great to modify magician names

let magicianNameCopy = [...magician_name2];
function show_magician(great: string){
    let withGreetings = "";
    for(let item of magicianNameCopy){
        withGreetings += `${great} ${item}\n`;
    }

    return withGreetings;
};

let myGreetings = show_magician("Hello");
let makeArray = myGreetings.split(`\n`);

console.log(magician_name2);
console.log(makeArray);
