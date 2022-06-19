export const createRandomNumber = () => {
  let randomNumber = new Set();
  do {
  } while (randomNumber.size < 3);
    randomNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));

  return Array.from(randomNumber).join("");
};
