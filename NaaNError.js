const read = require("readline-sync");
let myHeight=Number(read.question("enter your height: "));
try {
    
    if (myHeight<7) {
        throw new Error("TinyHeight Error ")
    }else if(myHeight>10){
        throw new Error("HugeHeightError")
    }else if(isNaN(myHeight)){
        throw new Error("notANumberError")
    }else if(Number(myHeight)){
        console.log(myHeight)
    }
} catch (error) {
    console.log(error.message)
}