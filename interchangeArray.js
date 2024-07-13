const read=require("readline-sync")
 let num=parseInt(read.question("Enter array size: "))
 let arr1=[];                   
 console.log("Enter array elements")
 for(var i=0;i<num;i++){
     arr1.push(parseInt(read.question("")))
 }
let arr2=[];
 console.log("Enter second array elements")
 for(var i=0;i<num;i++){
     arr2.push(parseInt(read.question("")))
 }
 console.log("") 
 console.log("Array1: "+arr1)
 console.log("Array2: "+arr2) 
 console.log("") 

let temp=arr1
arr1=arr2
arr2=temp
console.log("after iterchanging :") 
console.log("Array1: "+arr1)
console.log("Array2: "+arr2)