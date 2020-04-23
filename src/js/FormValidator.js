export class FormValidator {
  constructor(elementPopup) {
    this.elementPopup = elementPopup;
  }

  setSubmitButtonState(event) {
    const popup = event.target.closest('.popup');
    const inputName = popup.querySelector('.popup__input_type_name');
    const inputAbout = popup.querySelector('.popup__input_type_about');
    const popupSave = popup.querySelector('.popup__save');
    if (inputName.validity.valid && inputAbout.validity.valid) {
      popupSave.removeAttribute('disabled');
      popupSave.classList.add('popup__save_style_dark');

    } else {
      popupSave.setAttribute('disabled', true);
      popupSave.classList.remove('popup__save_style_dark');

    }
  }

  checkInputValidity(labelElement, errorElement) {
    const spanError = labelElement.querySelector(".popup__error");
    const input = labelElement.querySelector(".popup__input");
    if (input.validity.valid) {
      spanError.innerHTML = "";
      spanError.classList.remove("popup__error.active");
    } else {
      if (input.value.length === 0) {
        spanError.innerHTML = errorElement.requiredFildMessage;
      } else if (input.value.length < 2 || input.value.length > 30) {
        spanError.textContent = errorElement.wrongLengthMessage;
      }
      spanError.classList.add("popup__error.active");
    }
  }


  setEditEventListeners() {
    this.elementPopup.addEventListener('input', this.setSubmitButtonState);
    const checkInputValidity = this.checkInputValidity.bind(this);
    const labelName = this.elementPopup.querySelector("#labelName");
    const labelAbout = this.elementPopup.querySelector("#labelAbout");
    const errorMessages = {
      requiredFildMessage: "Это обязательное поле",
      wrongLengthMessage: "Должно быть от 2 до 30 символов"
    };
    labelName.addEventListener('input', function () { // event не используется, можно не передавать
      checkInputValidity(labelName, errorMessages);
    });
    labelAbout.addEventListener('input', function () { // event не используется, можно не передавать
      checkInputValidity(labelAbout, errorMessages);
    });

  }

  checkInputValidityContent(event) {
    event.preventDefault();
    const popup = event.target.closest('.popup');
    const inputName = popup.querySelector('.popup__input_type_name');
    const inputLink = popup.querySelector('.popup__input_type_link-url');
    const popupSave = popup.querySelector('.popup__button');
    if (inputName.validity.valid && inputLink.validity.valid) {
      popupSave.removeAttribute('disabled');
      popupSave.classList.add('popup__button_style_dark');
    } else {
      popupSave.setAttribute('disabled', true);
      popupSave.classList.remove('popup__button_style_dark');
    }
  }


  setContentEventListeners() {
    this.elementPopup.addEventListener('input', this.checkInputValidityContent);
    this.elementPopup.querySelector('.popup__close').addEventListener('click', this.checkInputValidityContent);

  }
}