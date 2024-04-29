//Exercise 45 Q 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_name2 = ["Harry Poter", "Ali Raza", "Sohail"];
//Calling function make_great to modify magician names
var magicianNameCopy = __spreadArray([], magician_name2, true);
function show_magician(great) {
    var withGreetings = "";
    for (var _i = 0, magicianNameCopy_1 = magicianNameCopy; _i < magicianNameCopy_1.length; _i++) {
        var item = magicianNameCopy_1[_i];
        withGreetings += "".concat(great, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magician("Hello");
var makeArray = myGreetings.split("\n");
console.log(magician_name2);
console.log(makeArray);
