// let a = 300
// console.log(a)
//  {
//     console.log(a)
     
//     console.log(a)
// }


// console.log(add(5)); // this is correct

// function add(value){
//     return value+1;
// }

// console.log(add(5))  // this is correct




//console.log(ans(10))   // This is incorrect
// if you use varible to hold the function . so you can not use function before it declaration
// const ans = function(value){
//     return value+1;
// }


// console.log(ans(10))  // this is correct


const obj = {
    name:"sahil sahu",
    solve: function hello(){
        // console.log(this)  it will print the reference of this object
        console.log(this.name);
    }   
}

// console.log(obj.solve());
// console.log(this) // it will print the empty object


// function hello(){
//     let name="sahil";
//     console.log("Hello World");
//     console.log(this.name)  // it will print undefined
//     console.log(this) // it will print reference object
// }

// hello();

// const hello = () => {
//     let name="sahil";
//     console.log("Hello World");
//     console.log(this.name) // it will print undefined
//     console.log(this) // it will print empty object
// }

// hello();



// arrow function

const hello = (num1 ,num2) => { // if you use paranthesis  to apko return karana padega explictily nahi hoga
    return num1+num2
}

const hello1 = (num1 ,num2) => (num1+num2)  // it will not required return  it explicitly return

cosnt hello2 = () =>({Name:"sahil sahu"})  // it return the object