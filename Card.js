class Card {
  constructor(dataCard, container, openImage) {
    this.container = container;
    this.openImage = openImage;
    this.dataCard = dataCard;
  }

  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  }

  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      this.container.removeChild(event.target.closest('.place-card'));
    }
  }

  create() {
    const placeCard = document.createElement('div');
    placeCard.classList.add("place-card");
    const image = document.createElement('div');
    image.classList.add("place-card__image");
    image.setAttribute("style", "background-image: url(" + this.dataCard.link + ")");
    const imageButton = document.createElement('button');
    imageButton.classList.add("place-card__delete-icon");
    image.appendChild(imageButton);
    const description = document.createElement('div');
    description.classList.add("place-card__description");
    const name = document.createElement('h3');
    name.classList.add("place-card__name");
    name.textContent = this.dataCard.name;
    description.appendChild(name);
    const descriptionButton = document.createElement('button');
    descriptionButton.classList.add("place-card__like-icon");
    description.appendChild(descriptionButton);
    placeCard.appendChild(image);
    placeCard.appendChild(description);
    this.card = placeCard;
  }

  open(event) {
    if (event.target.classList.contains('.place-card__image')) {
      const image = this.card.querySelector('.place-card__image').style.backgroundImage;
      const url = image.substr(5, image.length - 7);
      this.openImage(url);
    }
  }

  setEventListeners() {
    this.card.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    const remove = this.remove.bind(this);
    const open = this.open.bind(this);
    this.card.querySelector('.place-card__delete-icon').addEventListener('click', remove);
    this.card.querySelector('.place-card__image').addEventListener('click', open);
  }

  getCard() {
    return this.card;
  }

}
