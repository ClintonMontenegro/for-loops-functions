// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  for (let i = 0; i < array.length; i++) {
    var minValue = array.reduce((a, b) => Math.min(a, b), Infinity);
  }
     return minValue;
}

export function findMaxValueInArray(array) {
    for (let i = 0; i < array.length; i++) {
     var maxValue = array.reduce((a, b) => Math.max(a, b), -Infinity);
    }
        return maxValue;
}

console.log(findMinValueInArray([2, 45, 32, 3, 0, 46, 12]));
console.log(findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
