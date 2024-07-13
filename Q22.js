const readlineSync = require('readline-sync');
function getArrayValue(n){
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr[i] = new Array(n);
  }
  console.log("Enter the values ");
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
  console.log("The Sum of 2d are ")
  for(let i = 0 ; i < n ; i++){
      for(let j = 0 ; j < n ; j++){
          console.log(arr[i][j]);;
      }
  }
}
const n = readlineSync.question("Enter the size of array  ");
const arr1 = getArrayValue(n);
const arr2 = getArrayValue(n);
const arr3 = sumArray(arr1,arr2);
printArray(arr3);