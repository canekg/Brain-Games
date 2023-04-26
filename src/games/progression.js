import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';
const numberElements = getRandomNumber(5, 10);

const generateProgression = (start, step, replaceIndex) => {
  const newarray = [];
  for (let i = 0; i < numberElements; i += 1) {
    const current = start + i * step;
    const element = i !== replaceIndex ? current : '..';
    newarray.push(element);
  }
  return newarray;
};

const setGameData = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  // const numberElements = getRandomNumber(5, 10);
  const replaceIndex = getRandomNumber(0, numberElements);
  const answerCheck = String(start + step * replaceIndex);
  const stringarray = generateProgression(start, step, replaceIndex).join(' ');
  const question = stringarray;
  return [answerCheck, question];
};

const startBrainProgression = () => playGame(task, setGameData);
export default startBrainProgression;
