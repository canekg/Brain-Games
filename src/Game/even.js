// импорт функции для приветствия
import game from '../index.js';

const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameoption = () => {
  const randomNumber = funcrandom(1, 100);
  const question = randomNumber;
  // eslint-disable-next-line no-unused-expressions
  const answerchek = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [answerchek, question];
};

const brainEven = () => game(task, gameoption);
export default brainEven;
