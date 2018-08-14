// Return true if the given string is a palindrome. Otherwise, return false.
// Ignore punctuation, case, or spacing.


/*
This function checks the first and last characters and works its way towards the middle.
The function terminates as soon as a difference is found, and in the case of a palindrome
input only needs to check through the string once.
*/

function palindrome(str) {

  // set variables to the start and end of the string
  var start = 0;
  var end = str.length - 1;

  // only continue the loop until the variables meet in the middle
  // set to (start < end) because if there are an odd number of characters
  // there is no need to check the middle character
  while (start < end) {

    // skip over any characters that are not a word character
    if (str[start].match(/[\W_]/)) {
      start++;
      continue;
    };

    if (str[end].match(/[\W_]/)) {
      end--;
      continue;
    };
    
    // convert the characters to lower case and check for match
    // if the characters do not match, immediately return false
    // otherwise, move towards the center and loop again
    if (str[start].toLowerCase() != str[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    };
  };

  // if the entire string has been matched, the input must be a palindrome.
  return true;

};

palindrome("eye");
