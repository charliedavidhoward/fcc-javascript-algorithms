// Create a 'person' constructor allowing the user to update and view the first name, last name, and full name

var Person = function(firstAndLast) {

  var name = firstAndLast.split(" ");

  this.getFullName = function() {
    return name.join(" ");
  };

  this.getFirstName = function() {
    return name[0];
  };

  this.getLastName = function() {
    return name[1];
  };

  this.setFirstName = function(first) {
    name[0] = first;
  };

  this.setLastName = function(last) {
    name[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    name = firstAndLast.split(" ");
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
