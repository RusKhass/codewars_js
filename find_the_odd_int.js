function findOdd(A) {
  let count = {};
  for (let elem of A) {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }
  }
  const keys = Object.keys(count);
  const values = Object.values(count);
  idx = values.findIndex((i) => i % 2 !== 0);
  keys[idx] = Number(keys[idx]);
  return keys[idx];
}