import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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

const setGameSettings = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = randomNumber;
  const answerCheck = isPrime(randomNumber);
  return [answerCheck, question];
};

const startBrainPrime = () => playGame(task, setGameSettings);
export default startBrainPrime;
