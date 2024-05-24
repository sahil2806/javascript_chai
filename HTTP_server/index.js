const http = require('http');
const PORT = 3000;
/**
 * HTTP module contains a function called as createServer
 * this createServer function takes as a callback as the input
 * Now inside the callback, we get two arguments
 * --> request ->This argument  conatains all the details about the incoming request.
 * --> response -> This argument  contains functions using which we can prepare the function.
 *
 * the createServer function returns us the server object
 */


const server = http.createServer(function exec(request,response){
    console.log(request.method);
    console.log(request.url);
    if(request.url=='/home'){
        response.end("Welcome to home");
    }else if(request.url=='/faq'){
        response.end("List of FAQS");
    }else{
        response.end("Hello world");
    }
});

server.listen(PORT,function process(){
    // Once the server has started then thiscllback will be executed
    console.log("Server started on port",PORT);
});



