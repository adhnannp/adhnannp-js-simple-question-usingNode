const read=require("readline-sync")
 let num=parseInt(read.question("Enter array size: "))
 let arr1=[];                   
 console.log("Enter array elements")
 for(var i=0;i<num;i++){
     arr1.push(parseInt(read.question("")))
 }
arr1.sort((a, b) => b - a);
console.log(arr1)
