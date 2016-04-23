function isSubstring(s1, s2) {
  var temp1 = s1.toLowerCase().split('').sort();
  var temp2 = s2.toLowerCase().split('').sort();
  var current = 0;
  var result = '';
 
  for (var i = 0; i < temp1.length; i++) {
    if (temp1[i] == temp2[current]) {
      result += temp2[current]
      current++
    }
  }
  if (result.length == temp2.length) {
    return true
  } else {
    return false;
  }
}

console.log(isSubstring('waterbottle', 'hello'));
console.log(isSubstring('bottle', 'bot'));
console.log(isSubstring('blah', 'bla'));
console.log(isSubstring('crash', 'shar'));