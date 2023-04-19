// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const answerCalculation = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const gameSettingsBuilding = () => {
  const randomNumber1 = randomNumberGeneration(1, 100);
  const randomNumber2 = randomNumberGeneration(1, 100);
  const question = ('Question:', `${randomNumber1} ${randomNumber2}`);
  const answerCheck = String(answerCalculation(randomNumber1, randomNumber2));
  return [answerCheck, question];
};

const brainGcd = () => game(task, gameSettingsBuilding);
export default brainGcd;
