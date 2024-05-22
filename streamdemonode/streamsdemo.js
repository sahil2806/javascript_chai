const fs = require('fs');
const transformStream = require('stream');
let filestream = fs.createReadStream(__dirname + "/input.txt");
let outputstream = process.stdout;

// readstream.pipe(writestream)

let middleStream = new transformStream.Transform({
    transform(chunk,enc,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        // Calling the next chunk After 1sec
        setTimeout(nextCB,1000);
    }
}) 
// Syntax
//filestream.pipe(outputstream);
 
filestream.pipe(middleStream);
 middleStream.pipe(outputstream);

 



// Another Way
// newreadablestream =  filestream.pipe(middleStream);
// newreadablestream.pipe(outputstream);

