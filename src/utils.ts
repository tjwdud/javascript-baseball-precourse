export const createRandomNumber = () => {
  let randomNumber = new Set();
  do {
    randomNumber.add(Math.floor(Math.random() * 9) + 1);
  } while (randomNumber.size < 3);

  return Array.from(randomNumber).join("");
};
