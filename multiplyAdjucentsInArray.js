const read=require("readline-sync")
 let num=parseInt(read.question("Enter array size: "))
 let arr1=[];   
 let result=[] ;               
 console.log("Enter array elements")
 for(let i=0;i<num;i++){
     arr1.push(parseInt(read.question("")))
 }
 for (let j = 0; j < arr1.length - 1; j++) {
    result.push(arr1[j] * arr1[j + 1]);
}
console.log("your adjucent multiplied array is : " ,result);
