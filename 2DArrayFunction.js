const readlineSync = require('readline-sync');
function main(){
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
      function printArray(arr){
        console.log("\nThe 2d is ")
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
      printArray(arr1);
}
main();