const readlineSync = require('readline-sync');
function myFilter(arr,callBack){
    if(callBack()){
        console.log(arr.reduce(function (acc,curr){
            acc+=curr;
            return acc;
        },0))
    }
}
function callBack(){
    let sum = arr.reduce(function (acc,curr){
        acc+=curr;
        return acc;
    },0)
    return sum%2 ?true :false;
}
arr=[1,2,3,4,5];
myFilter(arr,callBack);