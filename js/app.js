// Functions

var p = 4;
var b = 5;

//

function add(arg1, arg2) {
    return arg1 + arg2 ;
}

console.log(add(p,b));

//

function sub(arg3, arg4) {
    return arg3 - arg4 ;
}

console.log(sub(p,b));

//

function multi(arg5, arg6) {
    return arg5 * arg6 ;
} 

console.log(multi(p,b));

//

function divi(arg7, arg8) {
    return arg7 / arg8 ;
}

console.log(divi(p,b));


// Arrays

var x = [["Dye", 1], ["Hair", 2]];

var e = [["Juice", 5], ["Fan", 9]];

var z = [["Boy", 3], ["Girl", 4]];

//

function shiftAnArray(argumentA){
    argumentA.shift();
    return argumentA
}
console.log(shiftAnArray(e))

//

function pushAnArray (argumentOne, argumentTwo){
    console.log('the array before pushing is: ', argumentOne)
    argumentOne.push(argumentTwo);
    console.log('The array AFTER pushing is : ', argumentOne)
        return argumentOne
}

pushAnArray(x, [88])

console.log(pushAnArray(x,'1'))

//

function popAnArray(argumentAlpha){
    argumentAlpha.pop();
    return argumentAlpha
}

console.log(popAnArray(z))