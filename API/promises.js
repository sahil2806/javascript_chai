
// promise ko handeled two tarike se kar sakte he first one is .then.catch and second  is async await and async await me apan  catch handeled nahi karte he


const  PromiseOne = new Promise((resolve,reject)=>{
    //  Do an asyns task
    //  DB  call , cryptography ,newtwork
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
});

PromiseOne.then(()=>{
    console.log("Promises consumed");
})



new Promise((resolve,reject)=>{
    
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(()=>{
    console.log("Async task 2 is resolved");
})



const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"chail",email:"chai@ecample.com"});
    },1000)
}).then((user)=>{
     console.log(user)
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"chail",email:"chai@ecample.com"});
        }else{
            reject('Error : Something went wrong');
        }
    },1000)
}) 

  const username = promiseFour.then((user)=>{
   console.log(user);
   return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Finally the promises is either  resolved and reject")
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript",email:"javascript@ecample.com"});
        }else{
            reject('Error : js went wrong'); 
        }
    },1000)
}) 


async function consumePromiseFive(){
    try{
        const response = await  promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
// call consumePromiseFive
consumePromiseFive();

async function getAllUsers(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
    }catch(error){
        console.log("E:",error)
    }
     
    
}

getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

