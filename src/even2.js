// импорт функции для приветствия
import Game from './index.js';

const BrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  let answerchek = '';
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = ('Question:', `${randomNumber}`);
  // eslint-disable-next-line no-unused-expressions
  randomNumber % 2 === 0 ? (answerchek = 'yes') : (answerchek = 'no');
  Game(task, answerchek, question);
};

export default BrainEven;
