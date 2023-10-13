function plusMinus(arr) {

let countPositive=0;
let countNegative=0;
let countZero=0;
//three variables on above for saving value from looping in below
  
// looping for checking value in arr[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        countPositive++
    }else if(arr[i]<0){
        countNegative++
    }else{
        countZero++
    }
}

//calculate in accordence with sample
const resultPositive=(countPositive/arr.length).toFixed(6)
const resultNegative=(countNegative/arr.length).toFixed(6)
const resultZero=(countZero/arr.length).toFixed(6)

//show output
console.log(resultPositive)
console.log(resultNegative)
console.log(resultZero)
}
