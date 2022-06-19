export const createRandomNumber = () => {
  let randomNumber = new Set();
  do {
  } while (randomNumber.size < 3);
    randomNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));

  return Array.from(randomNumber).join("");
};
export const validationInputValue = (value: string) => {
  const valueArr = Array.from(value);
  const set = new Set(valueArr);

  if (valueArr[0] === "-") {
    alert(VALIDATION_MESSAGE.inputPositive);
    inputInitialization();
    return false;
  }

  if (valueArr.length !== NUMBER_LENGTH) {
    alert(VALIDATION_MESSAGE.inputThree);
    inputInitialization();
    return false;
  }

  if (valueArr.length !== set.size) {
    alert(VALIDATION_MESSAGE.inputNoRepetition);
    inputInitialization();
    return false;
  }

  if (valueArr.includes("0")) {
    alert(VALIDATION_MESSAGE.inputZeroNotIncluded);
    inputInitialization();
    return false;
  }
  return true;
};
