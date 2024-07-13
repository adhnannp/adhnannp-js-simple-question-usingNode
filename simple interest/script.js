
function interest(){
    let P=parseInt(document.getElementById("integer").value);
    let R=parseFloat(document.getElementById("float").value);
    let n=parseFloat(document.getElementById("years").value);
    let SI=parseFloat((P*R*n)/100);

    document.getElementById("answer").value=SI;
    console.log(SI);
}
