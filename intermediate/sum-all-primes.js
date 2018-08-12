// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.


function sumPrimes(num) {

var primes = [];
var output = [];

// implementation of the Sieve of Eratosthenes to create an array of all primes up to an including num arg

// create an array of true values
for (var i = 0; i <= num; i++) {
  primes.push(true);
};

var squareroot = Math.sqrt(num);

// apply the sieve method
// starting at two, if the array value is true (the value is prime), 
// set all multiples of the value to false (starting with its square).
// Stop the loop when the square root of the num arg has been reached
for (var i = 2; i <= squareroot; i++){
  if (primes[i] == true) {
    for (var j = i*i; j <= num; j = j + i) {
      primes[j] = false;
    }
  }
};

// using the true/false array, push the integer values to the output array
for (var i = 2; i <= num; i++) {
  if (primes[i]) {
    output.push(i)
  }
};

// use reduce method to sum all the figures in the output array
var sum = output.reduce(function(acc, cur){
  return acc + cur;
});

return sum;
}

sumPrimes(977);
