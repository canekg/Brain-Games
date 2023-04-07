import readlineSync from "readline-sync";
function question(name) {
  // Приветствие
  console.log("Welcome to the Brain Games!");
  // Вопрос
  const userName = readlineSync.question("May I have your name? ");
  // Приветствие по имени
  console.log("Hello,", `${userName}!`);
}

export default question;
