const fs = require('fs');
const input =
  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(element => element !== '');

  const calculate = () => {
    const result = input.reduce((acc, element) => {
      const [type, value] = element.split(' ');
      const numberValue = Number(value);

      if (type === 'forward') return { ...acc, x: acc.x + numberValue };
      if (type === 'down') return { ...acc, y: acc.y + numberValue };
      if (type === 'up') return { ...acc, y: acc.y - numberValue };
      return acc;
    }, { x: 0, y: 0 });

    console.log(result);

    console.log({ result: (result.x * result.y) })
  }

  calculate();
