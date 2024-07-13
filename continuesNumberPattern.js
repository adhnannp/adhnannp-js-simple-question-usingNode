const read=require("readline-sync");
let limit=parseInt(read.question("enter your limit of rows: "));
console.log("");
let double=1
for(let i=1;i<limit;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(double + " "); // Print the number without a newline
        double++;
    }
    console.log(""); // Print a newline at the end of each row
}

