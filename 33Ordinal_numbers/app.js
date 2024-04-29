//Exercise 45 Q 33
//Creating an Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using For-Loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var orinalEnding = void 0;
    if (oneNumber === 1) {
        orinalEnding = "st";
    }
    else if (oneNumber === 2) {
        orinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        orinalEnding = "rd";
    }
    else {
        orinalEnding = "th";
    }
    console.log("".concat(oneNumber, " ").concat(orinalEnding));
}
