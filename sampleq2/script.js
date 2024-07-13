
function sum(){
    let a=parseInt(document.getElementById("integer").value);
    let b=parseFloat(document.getElementById("float").value);
    let result=a+b;
    document.getElementById("answer").value=result;
    console.log(result);
}
