var readline = require('readline-sync');
let input=readline.question("enter the number: ");
let num = parseInt(input);
if(isNaN(num)){
    console.log("invalid Number!!!!")
}else if(num<0){
    console.log("number is negetive")
}else {
    let sum=0;
    for(let i=1; i<= num; i++){
        if(i%2==0){
            continue;
        }
        else{
            Number(sum+=i);
        }
    }
    console.log(sum);
}
