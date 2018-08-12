//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {

  // set a variable to the ASCII value of the first character in the string
  var value = str.charCodeAt(0);
  
  // set a variable to store the missing character
  // initialised to undefined 
  var missing;

  // split the string into an array of characters
  str.split("")
  
      // use map to iterate through each character
     .map(function(currentValue) {
    
       // if the current character matches the value, increase the value by one
       // (value set to the next ASCII value)
       if (currentValue.charCodeAt() == value) {
         value++;
         
       // otherwise, we have found the missing value
       // set missing to the value using fromCharCode to pull the character from the ASCII value
       } else {
         missing = String.fromCharCode(value);
       }
    });

  return missing;

  }

fearNotLetter("abce");
