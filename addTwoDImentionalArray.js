const readlineSync = require('readline-sync');
function getArrayValue(n){
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr[i] = new Array(n);
  }
//   console.log("Enter the values ");
  for(let i = 0 ; i < n ; i++){
      for(let j = 0 ; j < n ; j++){
          arr[i][j] = Number(readlineSync.question(''));
      }
  }
  return arr;
}
function sumArray(arr1,arr2){
  for(let i = 0 ; i < n ; i++){
      for(let j = 0 ; j < n ; j++){
          arr1[i][j] += arr2[i][j];
      }
  }
  return arr1;
}
function printArray(arr){
  console.log("\nThe Sum of 2d are ")
  for(let i = 0 ; i < n ; i++){
      for(let j = 0 ; j < n ; j++){
        process.stdout.write(arr[i][j]+' ');;
      }
      console.log("")
  }
}
const n = readlineSync.question("Enter the size of array  ");
console.log("\nenter the values of first array: ");
const arr1 = getArrayValue(n);
console.log("\nenter the values of second array: ");
const arr2 = getArrayValue(n);
const arr3 = sumArray(arr1,arr2);
printArray(arr3);