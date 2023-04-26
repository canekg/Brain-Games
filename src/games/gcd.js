import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculationGcd = (number1, number2) => {
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

const setGameData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answerCheck = String(calculationGcd(randomNumber1, randomNumber2));
  return [answerCheck, question];
};

const startBrainGcd = () => playGame(task, setGameData);
export default startBrainGcd;
