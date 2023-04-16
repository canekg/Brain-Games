// импорт функции для приветствия
import game from '../index.js';

const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameoption = () => {
  const randomNumber = funcrandom(0, 100);
  const question = randomNumber;
  let answerchek = 'yes';
  if (randomNumber < 2) {
    answerchek = 'no';
  }
  for (let i = 2; i < randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      answerchek = 'no';
    }
  }
  // eslint-disable-next-line no-unused-expressions
  return [answerchek, question];
};

const brainEven = () => game(task, gameoption);
export default brainEven;
