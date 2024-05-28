const express = require('express');
const app = express();
const bodyParser = require('body-parser') // Start Reading the Request-Body
// Find the logic  why do we need to use body-parser

const PORT = 3000

// Global Middleware to parse URL-encoded form bodies
app.use(bodyParser.urlencoded({ extended: true }));  // By doing extended true  it can handeled nested objects and arrays.
// Supports rich objects and arrays, allowing for more complex data structures.

// Global Middleware to parse JSON bodies
app.use(bodyParser.json());

// mimic the db using an array
let blogList = [];

function logger (req,res,next){
    console.log(req.url);
    console.log(req.body);
    let condition = true;
    if(condition){
        return res.status(500).json({
            message:"something went wrong",
        })
    }
    next();
}

function isAuthenticated (req,res,next){
    console.log("Yes user is authenticated");
    next();
}

app.get('/blogs',   , isAuthenticated , (req,res) =>{
    return res.status(404).json({
        data:blogList,
        success:true,
    });
});

// POST route to add a new blog
app.post('/blogs', (req, res) => {
    // blogList.push({title:req.body.title,content:req.body.content})
    // blogList.push(req.body); // Add the blog data to the list
    blogList.push({
        title:req.body.title,
        content:req.body.content,
        id:Math.floor(Math.random()*1000),
    })
    return res.status(201).json({
        message: 'Blog added successfully',
        success: true,
    });
});

app.get('/blogs/:id',(req,res)=>{
    const result = blogList.filter((blog)=> blog.id==req.params.id);
    return res.status(200).json({
        data:result,
        status:true,
    })
})

app.delete('/blogs/:id', (req, res) => {
    let count = 0;
    let found = false;

    for (let i = 0; i < blogList.length; i++) {
        console.log(blogList[i].id ,req.params.id)
        if (blogList[i].id == req.params.id) {
            found = true;
            break;
        } else {
            count++;
        }
    }

    if (found) {
        blogList.splice(count, 1);
        return res.status(200).json({
            message: 'Blog deleted successfully',
            success: true,
        });
    } else {
        return res.status(404).json({
            message: 'Blog not found',
            success: false,
        });
    }
});


app.listen(PORT,() =>{
    console.log("Server has started on PORT", PORT);
})

