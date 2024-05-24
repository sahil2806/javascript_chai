const { Message } = require('@mui/icons-material');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is root directory');
})

app.post('/home',function(req,res){
    res.send("welcome to home with the help of post method");
})

app.patch('/home',function(req,res){
    //res.send("welcome to home with the help of patch method");
    res.json({
        message:"hello bhai",
        success:"ok"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})