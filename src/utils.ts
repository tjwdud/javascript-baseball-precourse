import { NUMBER_LENGTH, VALIDATION_MESSAGE, RESULT_MESSAGE } from "./constants";
import { IRandomNum } from "./types/IRandomNum";

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

export const printAnswer = (randomNumber: IRandomNum) => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
  <h4>${RESULT_MESSAGE.success}</h4>
  <h5>게임을 새로 시작하시겠습니까?</h5>
  <button id="game-restart-button">게임 재시작</button>
  `;
  const restartBtn = document.getElementById("game-restart-button");
  restartBtn.addEventListener("click", () => {
    resultDiv.innerHTML = "";
    inputInitialization();
    console.log(randomNumber.setRandomNum());
  });
};

export const printHint = (ballNum: number, strikeNum: number) => {
  let result = "";
  const resultDiv = document.getElementById("result");

  if (ballNum) {
    result += `${ballNum}${RESULT_MESSAGE.ball} `;
  }
  if (strikeNum) {
    result += `${strikeNum}${RESULT_MESSAGE.strike}`;
  }
  if (result.length === 0) {
    resultDiv.innerText = `${RESULT_MESSAGE.fail}`;
    return;
  }
  resultDiv.innerText = result;
  return;
};
