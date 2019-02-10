const formInner = document.querySelector(`.form__inner`);

const checkEmail = (evt) => {
  const email  = evt.target;

  if (email.type !== `email`) {
    return;
  }

  const regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const emailValue = email.value;
  const warning = formInner.querySelector(`.form__warning`);

  if (!regexp.test(emailValue) && emailValue !== ``) {
    addWarning(email);
  } else if (warning || emailValue !== ``) {
    warning.remove();
  }
}

const addWarning = (elem) => {
  const warning = document.createElement(`span`);
  warning.textContent = `Введите верный e-mail`
  warning.className = `form__warning`;

  elem.after(warning);
};

formInner.addEventListener(`change`, checkEmail);
