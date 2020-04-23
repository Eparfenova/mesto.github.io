export class PopupContent {
  constructor(popup, cardList) {
    this.cardList = cardList;
    this.popup = popup;
  }

  open() {
    this.popup.classList.add("popup_is-opened");

  }

  close(event) {
    event.target.closest('.popup').classList.remove("popup_is-opened");

  }

  add(event) {
    event.preventDefault();
    const inputName = this.popup.querySelector('.popup__input_type_name');
    const inputLink = this.popup.querySelector('.popup__input_type_link-url');
    const nameValue = inputName.value;
    const linkValue = inputLink.value;
    if (nameValue && linkValue) {
      const element = { name: nameValue, link: linkValue };
      this.cardList.addCard(element);
      // Множественное присвоение -- плохой тон, лучше исправить
      inputName.value = "";
      inputLink.value = "";
      const addButton = this.popup.querySelector('.popup__button');
      addButton.classList.remove('popup__button_style_dark');
    }
  }



  setEventListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close);
    // переменные не переопределяются, const!!!
    const add = this.add.bind(this);
    const close = this.close.bind(this);
    this.popup.querySelector('.popup__button').addEventListener('click', function (event) {
      add(event);
      close(event);
    });
  }
}