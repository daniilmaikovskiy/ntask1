const rl = require('readline');

const input = rl.createInterface(process.stdin, process.stdout);
const keyNumber = 55;

const quizFunc = (number = 0) => {
  if (number === keyNumber) {
    console.log(`Отгадано число ${keyNumber}`);
    input.close();
  }
  else if (number < keyNumber) {
    console.log('Больше');

    input.question('', (cmd) => quizFunc(+cmd));
  }
  else if (number > keyNumber) {
    console.log('Меньше');

    input.question('', (cmd) => quizFunc(+cmd));
  }
  else if (number !== number) {
    input.question('', (cmd) => quizFunc(+cmd));
  }
};

input.question('Загадано число в диапазоне от 0 до 100\n', (cmd) => quizFunc(+cmd));