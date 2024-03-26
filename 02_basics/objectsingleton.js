// const tinderuser = new Object();
// const tinderUser = {}

// tinderUser.id = 1234
// console.log(tinderUser)

const obj ={
    name:"sahil sahu",
    class:12,
    profile:{
        leetcode:"here1",
        codeforces:"here2"
    }
}

// console.log(obj.profile.leetcode)

const obj1 = {
    1:"sahil",
    2: 12,
}

const obj2 ={
    3:"sahu",
    4:8,
}

const obj3 ={
    5:"sahu",
    6:8,
}

 
const obj4 = {obj1,obj2,obj3}
const obj5 = Object.assign({},obj1,obj2,obj3)
const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)
// console.log(obj6)

const arr = Object.keys(obj);
const arr1 = Object.values(obj);
const arr2 = Object.entries(obj);
const arr3 = Object.hasOwnProperty("name");
console.log(arr3)


















