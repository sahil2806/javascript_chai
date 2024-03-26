let score = 0

// console.log(typeof score)
// let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan
// true =>1 ; 

let check = Boolean(score)
console.log(check)


/****************** operation ***************/
console.log(1 + "2");
console.log("1" + 2);
console.log("1"+"2");
console.log(1+2 + "3");

const id1  = Symbol("123")
const id2  = Symbol("123")

console.log(id1===id2)
console.log(id1)
console.log(id2)

const arr = ["sahil" ,"aman", "sonam"]

let odj ={
    name:"sahil",
    surname:"sahu",
    class:12
}

const fun = function(){
  console.log("sahil sahu");
}

// primitive data type  copy done = pass by value (Number,string,boolean,null,undefined,symbol)
// Non primitive data type copy done = pass by reference (array,object function)

let obj1 =  {
    name:"sahil",
    email:"sahu@gmail.com"
}

let obj2 = obj1;

obj2.email = "sahil@gmail.com"

console.log(obj1.email)
console.log(obj2.email)



