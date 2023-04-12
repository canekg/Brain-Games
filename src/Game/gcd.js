// импорт функции для приветствия
import game from '../index.js';

const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};

const task = 'Find the greatest common divisor of given numbers.';

const gameoption = () => {
  let randomNumber1 = funcrandom(1, 100);
  let randomNumber2 = funcrandom(1, 100);
  const question = ('Question:', `${randomNumber1} ${randomNumber2}`);
  while (randomNumber1 !== randomNumber2) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 -= randomNumber2;
    } else {
      randomNumber2 -= randomNumber1;
    }
  }
  const answerchek = String(randomNumber1);
  return [answerchek, question];
};

const braincalc = () => game(task, gameoption);
export default braincalc;
