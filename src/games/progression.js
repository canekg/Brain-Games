/* eslint-disable max-len */
// импорт функции для приветствия
import game from '../index.js';
import randomNumberGeneration from '../utils.js';

const task = 'What number is missing in the progression?';

const answerCalculation = (randomElement, step, numberElements, indexElementReplacement) => {
  let element = randomElement;
  const newarray = [];
  for (let i = 0; i < numberElements; i += 1) {
    if (i !== indexElementReplacement) {
      newarray.push(element);
    }
    if (i === indexElementReplacement) {
      newarray.push('..');
    }
    element += step;
  }
  return newarray;
};

const gameSettingsBuilding = () => {
  const randomElement = randomNumberGeneration(1, 10);
  const step = randomNumberGeneration(1, 10);
  const numberElements = randomNumberGeneration(5, 10);
  const indexElementReplacement = randomNumberGeneration(0, numberElements);
  const answerCheck = String(randomElement + step * indexElementReplacement);
  const stringarray = answerCalculation(randomElement, step, numberElements, indexElementReplacement).join(' ');
  const question = ('Question:', stringarray);
  return [answerCheck, question];
};

const brainProgression = () => game(task, gameSettingsBuilding);
export default brainProgression;
