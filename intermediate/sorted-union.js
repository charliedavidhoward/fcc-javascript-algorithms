//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  
  var result = [];
  
  // the number of arguments are unknown
  // use a for loop to iterate over all the arguments and push them into result
  for (var i = 0; i < arguments.length; i++) {
    result = result.concat(arguments[i])
  };

  // filter the result array by checking the index of the element against the current index
  // if the indexof is different, the element has already been encountered, so return false and remove the element
  result = result.filter(function(element, index) {
    return (result.indexOf(element) === index) }
  );

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
