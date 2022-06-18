import { setRandomNum } from "./utils";

export const setNumber = () => {
  const btn = document.getElementById("submit");

  let inputNumber = document.getElementById("user-input") as HTMLInputElement;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validationInputValue(inputNumber.value)) {
      let baseball = new (BaseballGame as any)();

      baseball.play(setRandomNum("getType"), inputNumber.value);
    }
  });
};

setNumber();
