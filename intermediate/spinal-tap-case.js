// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  // split at whitespace, underscore, or before a capital letter
return str.split(/\s|_|(?=[A-Z])/)
          // join the string back up with a hyphen
          .join("-")
          // set all characters to lower case
          .toLowerCase();

// function returns "this-is-spinal-tap"

/* Example returns:
"all-the-small-things" for "AllThe-small Things"
"teletubbies-say-eh-oh" for "Teletubbies say Eh-oh"
"the-andy-griffith-show" for "The_Andy_Griffith_Show"
*/

}

spinalCase('This Is Spinal Tap');
