function result(){
    let val = document.getElementById("input").value;
    if (val>=50) {
        document.getElementById("result").value = "PASSED";
    
    }else {
        document.getElementById("result").value = "failed";
    } 
}