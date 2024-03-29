const form = document.getElementById('form')
const number  = Math.floor(Math.random()*100 + 1);
const result = document.getElementById('result')
const  storearray = document.getElementById('storearray');
const  remainingcount = document.getElementById('remainingcount');

const array = [];

let count = 10;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(count--){
        const input = parseInt(document.getElementById('input').value)
        array.push(input)
        if(input > number){
            result.innerHTML = `Number is Smaller`
        }
        else if(number > input){
            result.innerHTML = `Number is greater`
        }
        else{
            result.innerHTML = `Match You can Leave the Game`
        }
        const div = document.createElement('div');
        const string_array =  div.textContent = array.toString();
        
        storearray.innerHTML = string_array

        remainingcount.innerHTML= `${count}`
        const input_dup = document.getElementById('input');
        input_dup.value = '';
    }
    if(count==0){
        const reply = `Unmatch You can Leave the Game`
        for(let i=0;i<array.length;i++){
            console.log(array[i]);
            if(parseInt(array[i])==number){
                reply=`Match You can Leave the Game`
                break;
            }
        }
        result.innerHTML = reply;
    }
})