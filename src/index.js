import readlineSync from 'readline-sync';

const game = (task, gameoption) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', `${userName}!`);
  // eslint-disable-next-line no-undef
  console.log(task);
  const maxraunds = 3;
  // Цикл (3 задачи - 3 ответа)
  for (let i = 0; i < maxraunds; i += 1) {
    const [answerchek, question] = gameoption();
    // eslint-disable-next-line no-undef
    console.log('Question:', `${question}`);
    const answer = readlineSync.question('Your answer: ');
    // проверка на правильный ответ
    if (answerchek === answer) {
      console.log('Correct!');
      // eslint-disable-next-line no-undef
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${answerchek}'.`
      );
      console.log("Let's try again,", `${userName}!`);
      return;
    }
  }
  console.log('Congratulations,', `${userName}!`);
};
export default game;
