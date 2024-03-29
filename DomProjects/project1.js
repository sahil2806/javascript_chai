
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

 

buttons.forEach(  (button) => {
 console.log("sahil sahu")
  button.addEventListener('mouseover', function (e) {
     console.log(e)        //  it will give event object
     console.log(e.target) //   <span class="grey" id="yellow"></span>
     console.log(e.target.className)
    if (e.target.className === 'grey button') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });


}); 