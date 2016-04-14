function compression(string) {
  var result = '';
  var count = 1;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      count++;
    }
    else {
      result += string[i] + count
      count = 1;
    }
  }

  if (string.length < result.length) {
    return string;
  }
  else {
    return result;
  }
};

console.log(compression('aabcccccaaa'));
console.log(compression('taco'))
console.log(compression('a'));