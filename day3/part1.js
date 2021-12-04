const fs = require('fs');
const input =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(element => element !== '');

const middle = input.length / 2;
const maxLength = input[0].length;

const calculate = () => {
  const binary = input.reduce((acc, element) => {
    const result = element.split('');

    result.forEach((item, index) => {
      if(item === '1') acc[index] = (acc[index] || 0) + 1;
    });

    return acc;
  }, {});

  let gammaRate = '', epsilonRate = '';
  for (let i = 0; i < maxLength; i++) {
    if (binary[i] >= middle) {
      gammaRate = `${gammaRate}1`;
      epsilonRate = `${epsilonRate}0`;
    } else {
      gammaRate = `${gammaRate}0`;
      epsilonRate = `${epsilonRate}1`;
    }
  }

  console.log({ result: parseInt(gammaRate, 2) * parseInt(epsilonRate, 2) });
};

calculate();
