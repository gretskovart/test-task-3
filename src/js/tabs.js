const formInner = document.querySelector(`.form__inner`);

const changeTabs = () => {
  const tabs = formInner.querySelectorAll(`.form__tab-panel`);
  const tabLink = formInner.querySelector(`.tab__input:checked`);
  const tabId = tabLink.id;

  tabs.forEach((tab) => {
    tab.style.display = `none`;
  });

  formInner.querySelector(`.` + tabId).style.display = `block`;
};

formInner.addEventListener(`change`, changeTabs);