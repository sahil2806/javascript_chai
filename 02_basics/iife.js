// // This is a global variable
// var globalVar = 'I am global';

// // This is a global function
// function globalFunction() {
//     console.log('I am a global function');
// }

// globalFunction();

// // This is the IIFE
// (function() {
//     // Inside the IIFE, variables and functions are scoped locally
//     var localVar = 'I am local';

//     function localFunction() {
//         console.log('I am a local function');
//     }

//     // Accessing local variables and functions inside the IIFE
//     console.log(localVar); // Output: 'I am local'
//     localFunction(); // Output: 'I am a local function'

//     // Accessing global variables and functions inside the IIFE
//     console.log(globalVar); // Output: 'I am global'
//     globalFunction(); // Output: 'I am a global function'
// })();
 
// // Attempting to access local variables and functions outside the IIFE will result in ReferenceError
// // console.log(localVar); // ReferenceError: localVar is not defined
// // localFunction(); // ReferenceError: localFunction is not defined



// // IIFEs are commonly used to create private scope in JavaScript,  
// // allowing variables and functions to be  encapsulated and inaccessible from outside the function.

function one(){
    console.log("one");
}
fucntion two(){
   console.log("Two");
}
function three(){
    console.log("three");
}

one()
two()
three()
