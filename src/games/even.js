// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const answerCalculation = (number) => number % 2 === 0;

const gameSettingsBuilding = () => {
  const randomNumber = randomNumberGeneration(1, 100);
  const question = randomNumber;
  // eslint-disable-next-line no-unused-expressions
  const answerCheck = answerCalculation(randomNumber) ? 'yes' : 'no';
  return [answerCheck, question];
};

const brainEven = () => game(task, gameSettingsBuilding);
export default brainEven;
