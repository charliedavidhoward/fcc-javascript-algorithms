// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {

  // function to complete the greatest common divisor using Euclid algorithm and recursion
  var gcd = function(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  // return the lowest common mutiple of two numbers, calling gcd
  var lcm = function(a, b) {
    return a * b / gcd(a, b);
  };

  // sort the array in numerial order
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  
  // create a range array for all values between the two values in array
  var range = [];

  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  };

  // using the logic that the lcd of three numbers is lcd(a, lcd(b, c)),
  // iterate through the numbers in the range, calling the lcd function
  // against the cumulative result of the numbers already passed
  var i = 0;
  var result = 1;

  while (i < range.length) {
    result = lcm(result, range[i]);
    i++
  };

  return result;

};


smallestCommons([1,5]);
