export class CardList {
  constructor(container, createCard, openImage, api) {
    this.container = container;
    this.createCard = createCard;
    this.openImage = openImage;
    this.api = api;
  }



  addCard(dataCard) {
    const newCard = this.createCard(dataCard, this.container, this.openImage);
    this.container.appendChild(newCard.getCard());
  }

  render(elements) {
    for (const element of elements) {
      this.addCard(element);
    }
  }

  getCards() {
    this.api.getCards().then((result) => {
      this.render(result);
    })
  }
}
