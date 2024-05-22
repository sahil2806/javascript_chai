import {readFile, writeFile} from 'fs/promises';
// console.log(import.meta.url) // file:///C:/Users/sahil/OneDrive/Desktop/javascript_chai/packages/fsdemo.mjs
const filePath = new URL('./index.html',import .meta.url);
// console.log(filePath)
let data =  await readFile(filePath , {encoding: 'utf-8'});
// console.log(data);



const obj ={
  title : 'my custom title',
  body :'custom body',
}


for(const [key,value] of Object.entries(obj)){
    data = data.replace(`{${key}}`,value);
}

await writeFile(new URL('./index.html',import.meta.url),data);

// console.log(data);

 


// This is another way i copied this from documentation of nodejs v 22.2.0
// It help in better way to understanding  how  to use packages from documentation

// const { open } = require('node:fs/promises');

// (async () => {
//   const file = await open('./index.html');

//   for await (const line of file.readLines()) {
//     console.log(line);
//   }
// })();