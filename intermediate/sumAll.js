// Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  })

  let i = arr[1];
  let result = 0

  while (i >= arr[0]) {
    result = result + i;
    i --
  };
  
  return result;
}

sumAll([1, 4]);
