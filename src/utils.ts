const createRandomNumber = () => {
  let randomNumber = new Set();
  do {
    randomNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));
  } while (randomNumber.size < NUMBER_LENGTH);

  return Array.from(randomNumber).join("");
};

export function randomNum() {
  let randomNum = createRandomNumber();

  return {
    setRandomNum: function set() {
      randomNum = createRandomNumber();
      return randomNum;
    },
    getRandomNum: function get() {
      return randomNum;
    },
  };
}

const inputInitialization = () => {
  const input = document.getElementById("user-input") as HTMLInputElement;
  input.value = "";
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
