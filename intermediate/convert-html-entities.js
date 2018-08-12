// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
 
  // create an object for the characters in the spec matched to their corresponding HTML entities
  var entities = 
  {"&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "\'": "&apos;"};

  // use a regular expression in .replace and call a function to
  // replace the value with the pair frm the entities object
  str = str.replace(/[&<>\"\']/g, function(input) {
    return entities[input];
  });
  
  return str;
}

convertHTML("Dolce & Gabbana");

// returns "Dolce &amp; Gabbana"
