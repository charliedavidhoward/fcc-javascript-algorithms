/*
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/


function addTogether() {

  // function to check whether argument is a number
  // return the number if it is a number, otherwise return undefined
  function isNumber(n) {
    if (typeof n != 'number') {
      return undefined;
    } else {
      return n;
    }
  };

  // if there are two arguments, sum and return them if both are numbers
  if (arguments.length === 2) {
    var arg1 = isNumber(arguments[0]);
    var arg2 = isNumber(arguments[1]);
    if (arg1 == undefined | arg2 == undefined) {
      return undefined;
    } else {
      return arg1 + arg2;
    }
    
  // if there is one argument, return a function
  } else if (arguments.length === 1) {
    var arg1 = isNumber(arguments[0]);
    if (arg1 === undefined) {
      return undefined;
    } else {
      return function sum(n) {
        if (!isNumber(n)) {
          return undefined;
        } else {
          return arg1 + n;
        }
      }
    }
    
  // in any other circumstance, return undefined
  } else {
    return undefined;
  };
};

addTogether(2)([3]);
