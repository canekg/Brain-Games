import readlineSync from 'readline-sync';

const Game = (task, answerchek, question) => {
  // Объявление переменной для проверки ответа
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', `${userName}!`);
  // eslint-disable-next-line no-undef
  console.log(task);

  // Цикл (3 задачи - 3 ответа)
  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-undef
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    // проверка на правильный ответ
    if (answerchek === answer) {
      console.log('Correct!');
      // eslint-disable-next-line no-undef
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was '${answerchek}'.`
      );
      console.log("Let's try again,", `${userName}!`);
      return;
    }
  }
  console.log('Congratulations,', `${userName}!`);
};
export default Game;
