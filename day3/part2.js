const fs = require('fs');
const input =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(element => element !== '');

const middle = input.length / 2;
const maxLength = input[0].length;

// find most common bits for each position
const getMostComon = (data, position) => {
  let counter = 0;
  data.forEach(element => {
    if (element[position] === '1') counter++;
  });

  return counter >= data.length / 2 ? '1' : '0';
}

const calculate = () => {
  let oxygenGeneratorRating, mostCommonArray = [...input];
  for (let i = 0; i < maxLength; i++) {
    const mostCommon = getMostComon(mostCommonArray, i);

    mostCommonArray = mostCommonArray.filter((element) => element[i] === mostCommon);

    if (mostCommonArray.length === 1) {
      oxygenGeneratorRating = mostCommonArray[0];
      break;
    }
  }

  let CO2ScrubberRating, lessCommonArray = [...input];
  for (let i = 0; i < maxLength; i++) {
    const lessCommon = (getMostComon(lessCommonArray, i) === '1' ? '0' : '1');

    lessCommonArray = lessCommonArray.filter((element) => element[i] === lessCommon);

    if (lessCommonArray.length === 1) {
      CO2ScrubberRating = lessCommonArray[0];
      break;
    }
  }

  console.log({ result: parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2) })
};

calculate();
