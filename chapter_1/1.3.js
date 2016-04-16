function permutation(str1, str2) {
  var tempWord1 = str1.toLowerCase().split('').sort().toString();
  var tempWord2 = str2.toLowerCase().split('').sort().toString();

  if (tempWord1 == tempWord2) {
    return true;
  }
  else {
    return false;
  };
};

console.log(permutation('abc', 'bac'));
console.log(permutation('taco', 'bell'));
console.log(permutation('aa', 'bb'));
console.log(permutation('aab', 'aaba'));
