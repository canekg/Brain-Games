// импорт функции для приветствия
import game from '../index.js';

const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};

const task = 'What number is missing in the progression?';

const gameoption = () => {
  const randomelement = funcrandom(1, 10);
  const step = funcrandom(1, 10);
  const numberelements = funcrandom(5, 10);
  const indexelementreplacement = funcrandom(0, numberelements);
  const newarray = [];
  let element = randomelement;
  let answerchek;
  for (let i = 0; i < numberelements; i += 1) {
    if (i !== indexelementreplacement) {
      newarray.push(element);
    }
    if (i === indexelementreplacement) {
      newarray.push('..');
      answerchek = String(element);
    }
    element += step;
  }
  const stringarray = newarray.join(' ');
  const question = ('Question:', stringarray);
  return [answerchek, question];
};

const brainprogression = () => game(task, gameoption);
export default brainprogression;
