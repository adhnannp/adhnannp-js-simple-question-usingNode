const read=require("readline-sync");
console.log("written test counts 70%,lab exams 20% and assignments 10%");
console.log("");
let writtenTest=parseFloat(read.question("Enter your Written tests score : "))
let labExam=parseFloat(read.question("Enter your Lab Exam score : "))
let assignments=parseFloat(read.question("Enter your Assignments score : "))
let avarage=parseFloat((writtenTest*70)/100 + (labExam*20)/100 + (assignments*10)/100 )
console.log("")
console.log(`over all grade is: ${avarage}`);