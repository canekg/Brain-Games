import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const setGameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = randomNumber;
  const answerCheck = isPrime(randomNumber) ? 'yes' : 'no';
  return [answerCheck, question];
};

const startBrainPrime = () => playGame(task, setGameData);
export default startBrainPrime;
