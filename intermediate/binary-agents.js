// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  
  // split the str into an array
  var result = str.split(' ');

  // for each set of binary in the input string, convert the binary first into ASCII
  // and then into English characters
  for (var i = 0; i < result.length; i++) {
    result[i] = String.fromCharCode(parseInt(result[i], 2));
   };

   // join the adjusted array into a result string
   result = result.join('');

   return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
