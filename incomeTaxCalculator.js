let read = require("readline-sync");
let amount=parseFloat(read.question("enter your annual salary: "));
let tax=0;
if(isNaN(amount)){
    console.log("invalid number")
}else if(amount<= 250000){
    console.log(`you don't have to pay income tax amount`);
}else if(amount>250000 || amount>=500000){
    tax=(amount*5)/100;
    console.log(`your tax amount is : ${parseFloat(tax)}`); 
}else if(amount>500000 || amount>=1000000){
     tax=(amount*20)/100;
    console.log(`your tax amount is : ${parseFloat(tax)}`); 
}else if(amount>500000 || amount>=1000000){
     tax=(amount*20)/100;
    console.log(`your tax amount is : ${parseFloat(tax)}`); 
}else {
     tax=(amount*30)/100;
    console.log(`your tax amount is : ${parseFloat(tax)}`); 
}




// Up to 2.5 Lakhs 
// No Tax
// Above 2.5 Lakhs to 5 Lakhs
// 5%
// Above 5 Lakhs to 10 Lakhs
// 20%
// Above 10 Lakhs to 50 Lakhs
// 30%

