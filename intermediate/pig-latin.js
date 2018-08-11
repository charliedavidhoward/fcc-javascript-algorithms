// Translate the provided string to pig latin.  
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {

// set regex variable to check for vowels
var regex = /[aeiou]/gi;

// if the string begins with a vowel, simply add "way" to the end
if (str[0].match(regex)) {
  str = str + "way";
  
// if the string has no vowels, just add "ay" to the end
} else if (str.match(regex) === null) {
  str = str + "ay";
  
// else the string begins with a consonant
} else {
  
  // split the array after the initial consonant or consonant cluster
  // filter out any empty strings
  var arr = str.split(/^([^aeiou]+)/)
               .filter(function(item) 
               {return item.length != 0});
  
  // concat the consonant(s) to the end of the word and add "ay"
  str = arr[1].concat(arr[0]) + "ay";
};

  return str;
}

translatePigLatin("consonant");
