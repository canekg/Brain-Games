import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (task, gameSettingsBuilding) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', `${userName}!`);
  console.log(task);
  // Цикл (3 задачи - 3 ответа)
  for (let i = 0; i < roundsCount; i += 1) {
    const [answerCheck, question] = gameSettingsBuilding();
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
export default playGame;
