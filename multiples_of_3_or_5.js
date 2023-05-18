function solution(number) {
  if (number < 0) {return 0}
  let numbers = [];
  for (let i = 0; i < number; i++) numbers.push(i);
  let multiples = [];
  for (let number of numbers) {
    if (number % 5 === 0) multiples.push(number);
    else if (number % 3 === 0) multiples.push(number);
  }
  console.log(multiples)
  const add = multiples => multiples.reduce((a, b) => a + b, 0);
  let sum = add(multiples)
  return sum;
}