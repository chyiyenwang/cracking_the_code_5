// function replaceSpaces(string) {
//   var result = string.replace(/\W/g, '%20');

//   return result;
// };

function replaceSpaces(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      result += '%20'
    }
    else {
      result += string[i]
    }
  }
  return result
}

console.log(replaceSpaces('hello my name is chyi'));
console.log(replaceSpaces('taco bell'));
console.log(replaceSpaces(' mcdonalds '))