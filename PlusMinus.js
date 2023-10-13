// Function to calculate the ratio of positive, negative, and zero numbers in an array.
function plusMinus(arr) {

  // Initialize count variables for positive, negative, and zero numbers.
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;

  // Loop to check each element in the arr[].
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive++; // Increment the count of positive numbers if the element is positive.
    } else if (arr[i] < 0) {
      countNegative++; // Increment the count of negative numbers if the element is negative.
    } else {
      countZero++; // Increment the count of zero numbers if the element is zero.
    }
  }

  // Calculate the ratios of positive, negative, and zero numbers in the array.
  const resultPositive = (countPositive / arr.length).toFixed(6);
  const resultNegative = (countNegative / arr.length).toFixed(6);
  const resultZero = (countZero / arr.length).toFixed(6);

  // Display the output ratios.
  console.log(resultPositive); // Output the ratio of positive numbers.
  console.log(resultNegative); // Output the ratio of negative numbers.
  console.log(resultZero);     // Output the ratio of zero numbers.
}
