function Day() {
    var dayNumber = parseInt(document.getElementById("dayInput").value);
    var output = document.getElementById("output");
    
    switch(dayNumber) {
        case 1:
            output.textContent = "Sunday";
            break;
        case 2:
            output.textContent = "Monday";
            break;
        case 3:
            output.textContent = "Tuesday";
            break;
        case 4:
            output.textContent = "Wednesday";
            break;
        case 5:
            output.textContent = "Thursday";
            break;
        case 6:
            output.textContent = "Friday";
            break;
        case 7:
            output.textContent = "Saturday";
            break;
        default:
            output.textContent = "Invalid Entry";
    }
}