const fs = require('fs');
const numbers =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(Number);

const numberstest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const n = numbers.length;
const k = 3;

// Sliding window
const calculate = () => {
  let counter = 0, previousSum = 0;

  for (let i = 0; i < n - k + 1; i++) {
    const sum = numbers[i] + numbers[i + 1] + numbers[i + 2];
    if ((sum > previousSum) && (i > 0)) counter++;
    previousSum = sum;
  }

  console.log({ result: counter });
}

calculate();
