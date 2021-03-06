//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).


function myReplace(str, before, after) {
  
  // if the first letter of 'before' is upper case, change the first letter
  // of after to uppercase
  if (before[0].toUpperCase() === before[0]) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  // use replace to find before in the string and replace it with after
  str = str.replace(before, after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
