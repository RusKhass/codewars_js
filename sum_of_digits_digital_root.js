function digitalRoot(n) {
  function sumOfDigits(n) {
    let digits = n.toString().split("").map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    return sum;
  }
  let result = sumOfDigits(n);
  if (result <= 9) {
    return result;
  }
  while (result > 9) {
    result = sumOfDigits(result);
  }
  return result;
}