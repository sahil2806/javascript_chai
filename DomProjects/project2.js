
const  form  = document.querySelector('.data')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.getElementById('result');

    if(height<0 || height==='' || isNaN(height)){
        result.innerHTML = "Please Enter a valid height"
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        result.innerHTML = "Please Enter a valid weight"
    }else{
        height=(height/100);
        const cal =( weight/(height*height)).toFixed(2)
        result.innerHTML = `${cal} :`

        if(cal<=18.6){
            result.innerHTML += ` Under Weight`
        }
        else if(cal>18.6 && cal<=24.9){
            result.innerHTML += ` Normal Range`
        }
        else{
            result.innerHTML += ` Over Weight`
        }
    }

    
})


 