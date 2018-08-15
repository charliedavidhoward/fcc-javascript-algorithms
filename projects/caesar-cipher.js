/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  
  var result = [];
  var ascii = 0;

  for (var i = 0; i < str.length; i++) {
    
    // if the character is a capital letter
    if (str[i].match(/[A-Z]/)) {
    
      // using the ASCII codes, find the shifted code values
      ascii = (str.charCodeAt(i) - 65 + 13) % 26;
      result[i] = String.fromCharCode(ascii + 65);
      
      // if the character is not a capital letter, simply pass it on
     } else {
       result[i] = str[i];
     }
  };

  result = result.join("");
  return result;
}

rot13("SERR PBQR PNZC");
