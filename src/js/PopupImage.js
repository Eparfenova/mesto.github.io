export class PopupImage {
    constructor(popup) {
        this.popup = popup;
    }

    open(url) {
        const popupImage = this.popup.querySelector('.popup__image');
        popupImage.setAttribute("src", url);
        this.popup.classList.add("popup_is-opened");
    }

    close(event) {
        event.target.closest('.popup').classList.remove("popup_is-opened");

    }

    setEventListeners() {
        this.popup.querySelector('.popup__close-img').addEventListener('click', this.close);
    }

}
