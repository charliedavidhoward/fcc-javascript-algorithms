// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {

  var result = [];
  
  // if the argument is not an array, push the value to result
  // otherwise, call the function using recursion to access multiple levels of nested arrays
  function steamroll(arr) {
    if (!Array.isArray(arr)) {
      result.push(arr);
    } else {
      for (var i = 0; i < arr.length; i++) {
        steamroll(arr[i]);
      }
    }
  };

  // iterate over each index of the array
  for (var i = 0; i < arr.length; i++){
    steamroll(arr[i]);
  };

  return result;

};

steamrollArray([1, [2], [3, [[4]]]]);
