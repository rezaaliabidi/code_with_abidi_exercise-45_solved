//Exercise 45 Q 37
//Creating a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript."; }
    console.log("Creating s ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//calling a function with by default values
make_shirt();
//Calling a function now with Medium  size shirt and default Message
make_shirt('Medium');
//Calling a function now with Small  size shirt and default Message
make_shirt("Small", "I Love Javascript");
