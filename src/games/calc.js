// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'What is the result of the expression?';

const answerCalculation = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      break;
  }
};

const gameSettingsBuilding = () => {
  const randomNumber1 = randomNumberGeneration(1, 100);
  const randomNumber2 = randomNumberGeneration(1, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[randomNumberGeneration(0, 3)];
  const question = ('Question:', `${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const answerChek = answerCalculation(randomOperation, randomNumber1, randomNumber2);
  return [answerChek, question];
};

const brainCalc = () => game(task, gameSettingsBuilding);
export default brainCalc;
