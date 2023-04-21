import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const setGameSettings = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const answerCheck = isEven(randomNumber) ? 'yes' : 'no';
  return [answerCheck, question];
};

const startBrainEven = () => playGame(task, setGameSettings);
export default startBrainEven;
