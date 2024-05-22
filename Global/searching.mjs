

const searching = (arr,x) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
    }
    return NaN;
}
function add(){
    return 5;
}
// const ans = add();
// module.exports = {
//     linear : search
// }

export {searching};
export default { add }