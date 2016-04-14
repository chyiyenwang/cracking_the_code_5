function compression(original) {
  var result = '';
  var count = 1;

  for (var i = 0; i < original.length; i++) {
    if (original[i] == original[i + 1]) {
      count++;
    }
    else {
      result += original[i] + count
      count = 1;
    }
  }

  if (result.length < original.length) {
    return result;
  }
  else {
    return original;
  }
};

console.log(compression('aabcccccaaa'));
console.log(compression('taco'))
console.log(compression('a'));
console.log(compression('aabb'));