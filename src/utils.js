const funcrandom = (min, max) => {
  const random = Math.floor(Math.random() * max) + min;
  return random;
};
export default funcrandom;
