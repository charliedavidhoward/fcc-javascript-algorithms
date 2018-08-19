/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property 
and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context. */

function truthCheck(collection, pre) {

  var result;

  // loop through the collection.  If the predicate value returns false,
  // break immediately and return false
  for (var i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")
