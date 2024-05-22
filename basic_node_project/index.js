import axios from 'axios';

 
  axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    return response;
  })
  .then(function(data){
    console.log(data.data[0]);
  })
  .catch(function (error) {
    console.log("error");
  })
  .finally(function () {
    console.log("Finally executed");
 });
