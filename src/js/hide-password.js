const passwordBar = document.querySelector(`.login__password`);
const passwordBtn = passwordBar.querySelector(`.login__button`);

const changePasswordBtn = () => {
  const btnValue = passwordBtn.textContent;

  btnValue === `Показать` ? passwordBtn.textContent = `Скрыть` : passwordBtn.textContent = `Показать`;
};

const changePasswordStyle = () => {
  const passwordInput = passwordBar.querySelector(`.form__input--password`);
  const passwordInputType = passwordInput.getAttribute(`type`);

  passwordInputType === `password` ? passwordInput.setAttribute(`type`, `text`) : passwordInput.setAttribute(`type`, `password`);
};

passwordBtn.addEventListener(`click`, () => {
  changePasswordStyle();
  changePasswordBtn();
});