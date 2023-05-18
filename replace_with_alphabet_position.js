function alphabetPosition(text) {
  let arrOfChars = text.toLowerCase().split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetObj = {};
  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let index = i + 1;
    alphabetObj[letter] = index;
  }
  let arrOfValues = arrOfChars.map(function (letter) {
    return alphabetObj[letter];
  });
  let valueToRemove = undefined;
  let values = arrOfValues.filter(function (element) {
    return element !== valueToRemove;
  });
  let result = values.join(" ");
  var text = result;
  return text;
}