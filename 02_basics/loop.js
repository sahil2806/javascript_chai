//const arr = [5,3,8,2,10]
// for(const val of arr){
//     console.log(val)
// }


// MAP
// const map = new Map();

// map.set("name","sahil")
// map.set("class","12")
// map.set("school","IIps")
// map.set("name","rahul")

// console.log(map)

// for(const val of map){ // for this loop we can iterateon map,array  but we can not iterate on object
//     console.log(`key is ${val[0]} :-> ${val[1]}`)
// }

// Object

// const myobj = {
//     name:"sahil",
//     class:12,
//     school:"IIPS",
// }

// for(const key in arr){ // for in loop we can not iterate on map  and when we iterate on object and array it return key  and we get value with the help of key
//     console.log(arr[key])
// }


// for each loop

//  const  arr1  = arr.forEach((val,index,arr)=>{ // it does not array 
//     console.log(val*2)
//      return  val*2;

// })

// console.log(arr1)// ouytput undefined

// const arr = [5,3,8,2,10]
// const arr1 = arr.map((item) => {return item * 2})

// console.log(arr1)

 

// const myCoding  = [
//     {
//         name:"sahil",
//         class:12,
//     },
//     {
//         name:"rahul",
//         class:14,
//     },
//     {
//         name:"sonam",
//         class:10,
//     }
// ]

// myCoding.forEach((obj,key , myCoding)=>{
//     console.log(`Name is:${obj.name} , class is ${obj.class} ,${key},${myCoding}`)
// })

// map

const array = [1,2,3,4,5,6,7,8,9]
// const doubled = array.map(item => item * 2); // it retrun the new array 
// console.log(doubled); // Output: [2, 4, 6]

// const ar = array.filter((item) =>( item%2==0))
// console.log(ar)


// const arr = array
//                 .filter((item)=>(item>2))
//                 // .map((item)=>(item>5))

// console.log(arr)


// reduce
// const result = array.reduce((acc ,curr)=>(acc+curr),0)

// console.log(result)