// singleton
// Object.create we will discuss  this topic later

// object literals

const mysym = Symbol("key1")
// console.log(mysym)

const jsuser = {
   name:"sahil",
   "full name":"sahil sahu",
   [mysym] :"mykey1",
   age:18,
   email:"sahu@gmail.com",
   isLoggedIn :false,
   lastLoginDays :["monday","Saturday"]
}

// console.log(jsuser.name)
// console.log(jsuser['name']) // This is best way
// console.log(jsuser["full name"]) // This is best way
// console.log(jsuser[mysym]) // we can not write in this way jsuser["mysym"]
//  console.log(typeof jsuser["email"])
// console.log(typeof jsuser[mysym])

// Object.freeze(jsuser)   // we can not change further in jsuser object

// jsuser["email"] = "sahil@gmail.com"

// console.log(jsuser)


// console.log(typeof jsuser["name"])
// console.log(typeof jsuser["full name"])

// jsuser.greeting = function(){
//     console.log("Hello js Users")
// }

// jsuser.greetingTwo = function(){
//     console.log(`my name is :${this.name}`)
// }

// console.log(jsuser.greetingTwo())


