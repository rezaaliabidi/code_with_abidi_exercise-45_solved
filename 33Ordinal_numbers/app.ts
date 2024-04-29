//Exercise 45 Q 33
//Creating an Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//using For-Loop
for(let oneNumber of numbers){
    let orinalEnding: string;
    if(oneNumber === 1){
        orinalEnding = "st"
    } else if(oneNumber === 2){
        orinalEnding = "nd"
    }
    else if(oneNumber === 3){
        orinalEnding = "rd"
    }
    else {orinalEnding = "th"
    }
    console.log(`${oneNumber} ${orinalEnding}`);
}
