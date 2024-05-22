// Commonjs moduling
// Es moduling

// const searching = require("./searching.js"); // Commonjs moduling
import add, {searching} from "./searching.mjs";  // Es moduling
console.log(searching)
console.log(add)

// const arr = [1,2,3,4,5,23,3423,131234,4,24];
// let x = 5;

// const ans = searching.linear(arr,x);
// console.log(ans);
