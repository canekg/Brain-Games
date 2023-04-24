const getRandomNumber = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};
export default getRandomNumber;
