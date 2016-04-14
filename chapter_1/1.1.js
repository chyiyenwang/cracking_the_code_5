function unique(string) {
  var obj = {};

  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      return false;
    }
    else {
      obj[string[i]] = 1;
    }
  };
  return true;
};

console.log(unique('www'));
console.log(unique('apple'));
console.log(unique('taco'));
console.log(unique('a'));
