
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
    
    for (let i = 0; i <= array.length; i++);
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const avg = sum / array.length;
        
     return avg;
  }
  
  console.log(getAverage([22, 45, 4, 65]));


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  for (let i = 0; i <str.length; i++);
  if (str.match(/[0-9]/g)) {
      let values = str.match(/[0-9]/g);
      var arr = values.concat();
      return eval(arr.join('+'));
    }
      else {
          return 0;
    } 
}

console.log(getStringSum("GH2U87A")); 
console.log(getStringSum("GHIUJUHSG")); 


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
