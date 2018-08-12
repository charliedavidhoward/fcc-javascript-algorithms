//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  
  // create an array of fibonacci numbers up to (and including) the num argument
  var fib = [1, 1];

  for (var i = 2; i <= num;) {
    fib.push(i);
    i = fib[fib.length - 1] + fib[fib.length - 2];
  }

  // filter the array to odd numbers
  // use reduce to sum the numbers in the array
  var sum = fib.filter(function(num) {
    return (num % 2 != 0)
  }).reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return sum;
}

sumFibs(4);
