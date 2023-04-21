import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const generateProgression = (randomElement, step, numberElements, indexElementReplacement) => {
  const newarray = [];
  for (let i = 0; i < numberElements; i += 1) {
    const element = randomElement + i * step;
    i !== indexElementReplacement ? newarray.push(element) : newarray.push('..');
  }
  return newarray;
};

const setGameSettings = () => {
  const randomElement = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const numberElements = getRandomNumber(5, 10);
  const indexElementReplacement = getRandomNumber(0, numberElements);
  const answerCheck = String(randomElement + step * indexElementReplacement);
  const stringarray = generateProgression(randomElement, step, numberElements, indexElementReplacement).join(' ');
  const question = ('Question:', stringarray);
  return [answerCheck, question];
};

const startBrainProgression = () => playGame(task, setGameSettings);
export default startBrainProgression;
