const read=require("readline-sync")
 let num=parseInt(read.question("Enter array size: "))
 let arr1=[];                   
 console.log("Enter array elements")
 for(var i=0;i<num;i++){
     arr1.push(parseInt(read.question("")))
 }
 let count=0;

 while(num--){
    if(arr1[num]%2==0){
        count++;
    }
    else{
        continue;
    }
 }
 console.log("")
 console.log(`${count} : times even numbers are there`);