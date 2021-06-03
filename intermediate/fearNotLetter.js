// 

//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.


function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    
    let x = str.charCodeAt(i);

    if (x !== str.charCodeAt(0) + i) {
      return String.fromCharCode(x - 1);
    }
  }
return undefined;

}

fearNotLetter("abce");
