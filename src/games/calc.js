// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'What is the result of the expression?';

const answerCalculation = (operator, number1, number2) => {
  let outcome;
  switch (operator) {
    case '+':
      outcome = String(number1 + number2);
      break;
    case '-':
      outcome = String(number1 - number2);
      break;
    case '*':
      outcome = String(number1 * number2);
      break;
    default:
      break;
  }
  return outcome;
};

const gameSettingsBuilding = () => {
  const randomNumber1 = randomNumberGeneration(1, 100);
  const randomNumber2 = randomNumberGeneration(1, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[randomNumberGeneration(0, 3)];
  const question = ('Question:', `${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const answerCheck = answerCalculation(randomOperation, randomNumber1, randomNumber2);
  return [answerCheck, question];
};

const brainCalc = () => game(task, gameSettingsBuilding);
export default brainCalc;
