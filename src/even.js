import readlineSync from 'readline-sync';

function BrainEven() {
  // Объявление переменной для проверки ответа
  let AnswerChek = '';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', `${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // Цикл (3 вопроса - 3 ответа)
  for (let i = 0; i < 3; i += 1) {
    const RandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Question:', `${RandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-unused-expressions
    RandomNumber % 2 === 0 ? (AnswerChek = 'yes') : (AnswerChek = 'no');
    // проверка на правильный ответ
    if (AnswerChek === answer) {
      console.log('Correct!');
    } else return console.log("Let's try again,", `${userName}!`);
  }
  console.log('Congratulations,', `${userName}!`);
}
export default BrainEven;
