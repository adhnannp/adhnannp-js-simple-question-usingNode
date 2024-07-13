function result(){
    let val = document.getElementById("input").value;
    if (val<0) {
        document.getElementById("result").value = "INVALID MARK";
    }else if (val>100){
        document.getElementById("result").value = "INVALID MARK";
    }else if (val >= 90){
        document.getElementById("result").value = "A";
    }else if (val >= 80 && val < 90){
        document.getElementById("result").value = "B";
    }else if (val >= 70 && val < 80){
        document.getElementById("result").value = "C";
    }else if (val >= 60 && val < 70){
        document.getElementById("result").value = "D";
    }else if (val >= 50 && val < 60){
        document.getElementById("result").value = "D";
    }else {
        document.getElementById("result").value = "failed";
    } 
}