// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

  // create two arrays, one for numbers and the second for the matching numerals
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var i = 0 ;
  var temp;
  var final = [];

  while (num > 0) {
  
    // iterate through the array of numbers
    if (num >= numbers[i]) {
    
      // isolate the initial digit
      temp = Math.floor(num / numbers[i]);
      
      // push the required number of numerals into the final array
      for (temp; temp > 0; temp--)
      {
        final.push(numerals[i]);
      }
      
        // use modulo to remove the first digit from the number
        num = num % (numbers[i]);
    }

  // increase i to go to the next number in the array
  i++;
  }

  // join the array into a string and return
  final = final.join("");
  return final;
}

convertToRoman(2018);
