// function login(name="rahul"){
//     return `${name} just loged in`
// }
// const ans = login();
// const ans1 = login("sahil");
// console.log(ans)
// console.log(ans1)

function price(...num1){ // if we have to pass multiple value
    // return num1
    let sum=0;
    for(let i=0;i<num1.length;i++){
           sum+=num1[i];
    }
    return sum;
}

console.log(price(100,200,300,400));

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name}`);
}

handleobject({
    name:"sahil",
})