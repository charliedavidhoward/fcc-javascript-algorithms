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

  function isNumber(n) {
    if (typeof n != 'number') {
      return undefined;
    } else {
      return n;
    }
  };

  if (arguments.length === 2) {
    var arg1 = isNumber(arguments[0]);
    var arg2 = isNumber(arguments[1]);
    if (arg1 == undefined | arg2 == undefined) {
      return undefined;
    } else {
      return arg1 + arg2;
    }
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
  } else {
    return undefined;
  };
};

addTogether(2)([3]);
