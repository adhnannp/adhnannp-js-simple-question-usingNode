var readline = require('readline-sync');
let input=readline.question("enter the number: ");
let num = parseInt(input);
function multiple(number){
    for(let i=1;i<=10;i++){
        console.log(`${i}x${number}=${num*i}`)
    }
}
if(isNaN(num)){
    console.log("invalid number!!!!!!!");
}else{
    multiple(num);
}
