function miniMaxSum(arr) {
   // Step 1: Sort the array in ascending order.
    arr.sort((a,b)=>a-b)

    // Step 2: Initialize variables to keep track of the minimum and maximum sums.
    let min=0;let max=0
 // Step 3: Calculate the minimum sum by adding the first four elements.   
for(let i=0;i<arr.length-1;i++){
    min+=arr[i]
}
  
// Step 4: Calculate the maximum sum by adding the last four elements.
for(let j=1;j<arr.length;j++){
    max+=arr[j]
}
  // Step 5: Output the minimum and maximum sums
  console.log(min,max)

}
