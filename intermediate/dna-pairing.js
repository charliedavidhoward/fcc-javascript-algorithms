// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {

  // create an empty array to store the result
  var newArray = [];

  // loop through the input string and use switch for each of the four cases
  for (var i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "G":
        newArray.push(["G", "C"]);
        break;
      case "C":
        newArray.push(["C", "G"]);
        break;
      case "A":
        newArray.push(["A", "T"]);
        break;
      case "T":
        newArray.push(["T", "A"]);
        break;
      default:
        break;
    }
  }
  
  return newArray;
}

pairElement("GCG");
