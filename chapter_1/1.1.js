// Implement an algorithm to determine if a string has all 
// unique characters. What if you cannot use additional 
// data structures?

function unique(string) {
  var obj = {};

  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      return 'not unique';
    }
    else {
      obj[string[i]] = 1;
    }
  };
  return 'is unique';
};

console.log(unique('www'));
console.log(unique('apple'));
console.log(unique('taco'));
console.log(unique('a'));
