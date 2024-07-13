
function pattern() {
    let limit = document.getElementById("input").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';

    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= i; j++) {
            resultDiv.innerHTML += j+" ";
        }
        resultDiv.innerHTML += "<br>";
    }
}