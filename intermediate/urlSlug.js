// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
function urlSlug(title) {
  let arr = title
  .trim()
  .toLowerCase()
  .split(/\s+/)
  .join("-");
  return arr;
}

urlSlug(" Winter Is Coming")
