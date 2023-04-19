// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answerCalculation = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameSettingsBuilding = () => {
  const randomNumber = randomNumberGeneration(0, 100);
  const question = randomNumber;
  const answerCheck = answerCalculation(randomNumber);
  // eslint-disable-next-line no-unused-expressions
  return [answerCheck, question];
};

const brainPrime = () => game(task, gameSettingsBuilding);
export default brainPrime;
