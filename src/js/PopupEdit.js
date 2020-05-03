export class PopupEdit {
  constructor(popup, userInfo, api) {
    this.popup = popup;
    this.userInfo = userInfo;
    this.api = api;
  }
  open() {
    this.popup.classList.add("popup_is-opened");
  }

  close(event) {
    event.target.closest('.popup').classList.remove("popup_is-opened");
  }

  save(event) {
    event.preventDefault();
    // Можно лучше -- инпуты лучше в конструктор скинуть уже в в виде элементов
    const inputName = this.popup.querySelector('.popup__input_type_name').value;
    const inputAbout = this.popup.querySelector('.popup__input_type_about').value;
    this.userInfo.setUserInfo(inputName, inputAbout);
    this.patchEdit(inputName, inputAbout);
    this.userInfo.updateUserInfo();
  }

  paste() {
    this.popup.querySelector('.popup__input_type_name').value = this.userInfo.getName();
    this.popup.querySelector('.popup__input_type_about').value = this.userInfo.getJob();
  }

  setEventListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close);
    const save = this.save.bind(this);
    const close = this.close.bind(this);
    this.popup.querySelector('.popup__save').addEventListener('click', function (event) {
      save(event);
      close(event);
    });
  }


  patchEdit(inputName, inputAbout) {
    this.api.patchEdit(inputName, inputAbout);
  }

}



