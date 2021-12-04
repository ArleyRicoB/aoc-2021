const fs = require('fs');
const input =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(element => element !== '');

  const calculate = () => {
    const result = input.reduce((acc, element) => {
      const [type, value] = element.split(' ');
      const numberValue = Number(value);

      if (type === 'down') return { ...acc, aim: acc.aim + numberValue };
      if (type === 'up') return { ...acc, aim: acc.aim - numberValue };
      if (type === 'forward') return {
        ...acc,
        x: acc.x + numberValue,
        depth: acc.depth + (acc.aim * numberValue),
      }
      return acc;
    }, { x: 0, aim: 0, depth: 0 });

    console.log({ result: (result.depth * result.x) })
  }

  calculate();
