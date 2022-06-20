import {
  randomNum,
  validationInputValue,
  printAnswer,
  printHint,
} from "./utils";
import { IRandomNum } from "./types/IRandomNum";

export default function BaseballGame() {
  this.play = function (
    computerInputNumbers: string,
    userInputNumbers: string,
    randomNumber: IRandomNum
  ) {
    if (computerInputNumbers === userInputNumbers) {
      printAnswer(randomNumber);
      return;
    }
    const computerArr = Array.from(computerInputNumbers);
    const userInputArr = Array.from(userInputNumbers);
    let ballNum = 0;
    let strikeNum = 0;

    computerArr.forEach((number, idx) => {
      if (userInputArr.indexOf(number) === idx) {
        strikeNum++;
        return;
      }
      if (userInputArr.indexOf(number) !== -1) {
        ballNum++;
      }
    });

    printHint(ballNum, strikeNum);
  };
}

export const setNumber = () => {
  const randomNumber = randomNum();
  const btn = document.getElementById("submit");
  const inputNumber = document.getElementById("user-input") as HTMLInputElement;


  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validationInputValue(inputNumber.value)) {
      let baseball = new (BaseballGame as any)();

      baseball.play(
        randomNumber.getRandomNum(),
        inputNumber.value,
        randomNumber
      );
    }
  });
};

setNumber();
