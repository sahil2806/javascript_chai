const clock = document.getElementById('clock')
console.log(clock);


setInterval(()=>{
 const time = new Date();
 const ans = time.toLocaleTimeString();
 clock.innerHTML = `${ans}`

},1000)