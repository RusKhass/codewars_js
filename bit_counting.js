var countBits = function (n) {
  let binary = n.toString(2);
  let arrOfDigits = binary.toString().split("").map(Number);
  let count = arrOfDigits.reduce(function (n, val) {
    return n + (val === 1);
  }, 0);
  return count;
}