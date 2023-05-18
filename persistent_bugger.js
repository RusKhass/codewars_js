function persistence(num) {
  function productOfDigits(num) {
    let digits = num.toString().split("").map(Number);
    let product = digits.reduce(function (a, b) {
      return a * b;
    }, 1);
    return product;
  }
  let result = productOfDigits(num);
  let count = 1;
  if (result === 0) {
    return count;
  }
  if (result != 0 && result <= 9) {
    return 0;
  }
  while (result > 9) {
    result = productOfDigits(result);
    count ++;
  }
  return count;
}