// импорт функции для приветствия
import game from '../index.js';

const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};

const task = 'What is the result of the expression?';

const gameoption = () => {
  let answerchek = '';
  const randomNumber1 = funcrandom(1, 100);
  const randomNumber2 = funcrandom(1, 100);
  const operation = ['+', '-', '*'];
  const randomoperation = operation[funcrandom(0, 3)];

  if (randomoperation === '+') {
    answerchek = String(randomNumber1 + randomNumber2);
  }
  if (randomoperation === '-') {
    answerchek = String(randomNumber1 - randomNumber2);
  }
  if (randomoperation === '*') {
    answerchek = String(randomNumber1 * randomNumber2);
  }

  const question =
    ('Question:', `${randomNumber1} ${randomoperation} ${randomNumber2}`);
  // eslint-disable-next-line no-unused-expressions
  return [answerchek, question];
};

const braincalc = () => game(task, gameoption);
export default braincalc;
