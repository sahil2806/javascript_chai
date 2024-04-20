// const arr = [0,1,2,3,4,5,]

// console.log(arr[3])

// const arr1 = arr;
// arr1[3] = "sahil"
 
// console.log(arr1[3])

// Array method

// console.log(arr)
// arr.push(10)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(19)
// console.log(arr)


// console.log(arr.includes(4))
// console.log(arr.includes(100))

// console.log(arr.indexOf(4))
// console.log(arr.indexOf(50))



// console.log(arr)
// console.log(arr.join()) // convert arr to string

// let temp = arr.join();
// console.log(temp[0])
// console.log(temp[1])
// console.log(temp[2])
// console.log(temp[3])
// console.log(temp[4])

// const ans = arr.filter((e)=>{
//     console.log(e)
//     return e;

// })

// console.log(ans)


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// console.log(arr)
// console.log(arr.slice(1,3))

// console.log(arr)
// console.log(arr.splice(1,3)) // original array is changed in splice 
// console.log(arr)


// const arr1 = [6,7,8,9]

// console.log(arr)
// console.log(arr1)
// arr.push(arr1)

// console.log(arr + "," + arr1)

// let temp1 =  arr.concat(arr1)   // 1 This is best to combine to array it return array after comine both of them
// console.log(temp1)

// let temp2 = [...arr,...arr1]    // 2 This is best to combine to array it return array after comine both of them
// console.log(temp2)


// const another_array =[1,2,3,[4,5,6],7,[8,9,[10]]]
// console.log(another_array)
// const new_another_array = another_array.flat(Infinity)

// console.log(new_another_array)
// console.log(Array.isArray(another_array))  //  It will check whether another is array or not
// let land =Array.from("sahil") // it convert string inyo array
// console.log( land)


// console.log(Array.from({name:"sahil"}))  
// it return empty array because it will not identify which part we have to convert into array like key and value

 
// console.log(Array.of(100,200,300,400)) 
 // it will return array  after taking set of element

 const numbers = [4, 9, 16, 25];
 const newArr1 = numbers.map((val)=>val>=25)

 console.log(newArr1)

 const newArr2 = numbers.filter((val)=>val>=25)

 console.log(newArr2)