import { Card } from './Card';
import { Api } from './Api';
import { CardList } from './CardList';
import { FormValidator } from './FormValidator';
import { PopupContent } from './PopupContent';
import { PopupEdit } from './PopupEdit';
import { PopupImage } from './PopupImage';
import { UserInfo } from './UserInfo';

const config = {token: "8368049f-49af-493d-aed3-5e016b69613b", id: "cohort9", url: API_URL};
const api = new Api(config);

const root = document.querySelector('.root');
const placeList = root.querySelector('.places-list');
const popupImage = new PopupImage(root.querySelector("#image"));
popupImage.setEventListeners();
const openImage = (url) => {
  popupImage.open(url);
}
const createCard = (dataCard, container, openImage) => {
  const card = new Card(dataCard, container, openImage);
  card.create();
  card.setEventListeners();
  return card;
}

const cardList = new CardList(placeList, createCard, openImage, api);
cardList.getCards();
const addContentButton = root.querySelector('.user-info__button');
const popupContent = new PopupContent(document.querySelector("#content"), cardList);
// Можно лучше -- используйте стрелочные функции () => {...}
addContentButton.addEventListener('click', function () {
  popupContent.open();
});
popupContent.setEventListeners();

const editButton = root.querySelector('.user-info__edit');
const userInfo = new UserInfo(root.querySelector('.user-info'), api);
userInfo.getUserInfo();
const popupEdit = new PopupEdit(document.querySelector("#edit"), userInfo, api);
setTimeout(() => { popupEdit.paste(); }, 500);

editButton.addEventListener('click', function () {
  popupEdit.open();
});
popupEdit.setEventListeners();

const formValidatorEdit = new FormValidator(root.querySelector("#edit"));
let setEditEventListeners = formValidatorEdit.setEditEventListeners.bind(formValidatorEdit);
setEditEventListeners();
const formValidatorContent = new FormValidator(root.querySelector("#content"));
let setContentEventListeners = formValidatorContent.setContentEventListeners.bind(formValidatorContent);
setContentEventListeners();
