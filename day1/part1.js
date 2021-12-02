const fs = require('fs');
const numbers =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(Number);

const calculate = () => {
  let increment = 0;
  numbers.forEach((element, index) => {
    if (index === 0) return;
    if (element > numbers[index - 1]) increment++;
  });

  console.log({ result: increment });
}

calculate();
