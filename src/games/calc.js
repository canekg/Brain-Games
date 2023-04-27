import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const getResultExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const setGameData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[getRandomNumber(0, 3)];
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const answerCheck = String(getResultExpression(randomOperation, randomNumber1, randomNumber2));
  return [answerCheck, question];
};

const startBrainCalc = () => playGame(task, setGameData);
export default startBrainCalc;
