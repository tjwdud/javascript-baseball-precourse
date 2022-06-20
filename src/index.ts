import { setRandomNum } from "./utils";

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
