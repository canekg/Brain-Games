import readlineSync from 'readline-sync';

const game = (task, gameSettingsBuilding) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', `${userName}!`);
  // eslint-disable-next-line no-undef
  console.log(task);
  const maxRaunds = 3;
  // Цикл (3 задачи - 3 ответа)
  for (let i = 0; i < maxRaunds; i += 1) {
    const [answerCheck, question] = gameSettingsBuilding();
    // eslint-disable-next-line no-undef
    console.log('Question:', `${question}`);
    const answer = readlineSync.question('Your answer: ');
    // проверка на правильный ответ
    if (answerCheck !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCheck}'.`);
      console.log("Let's try again,", `${userName}!`);
      return;
    }
    console.log('Correct!');
    console.log('Congratulations,', `${userName}!`);
  }
};
export default game;
