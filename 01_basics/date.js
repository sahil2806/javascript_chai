let myDate = new Date();

// console.log(myDate.toISOString())
// console.log(myDate.toJSON())


// I Think These Three are Better
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())


let cretedDate = new Date(2023,0,23,6,3,4)
// console.log(cretedDate.toDateString())
// console.log(cretedDate.toLocaleDateString())
// console.log(cretedDate.toLocaleString())

// console.log(cretedDate.getTime())


// let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getSeconds())
// console.log(newDate.getMilliseconds())
// console.log(newDate.getTimezoneOffset())


newDate.toLocaleString('default',{
    weekday:"long"
})
 


