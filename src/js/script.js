import { Card } from './Card.js';

const config = {token: "8368049f-49af-493d-aed3-5e016b69613b", id: "cohort9",};
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


	/**
  * Здравствуйте.
  * Надо исправить: Название файлов должна быть идентично названию класса Например если класс назвается FormValidator, то файл должен называться FormValidator
  *
   *  Надо исправить: Для начала вам необходимо создать класс API в котором каждый метод
   * Все запросы должны быть методами этого класс. Если мы получаем список карточек, то в классе должен быть метод getInitialCards
   * Если профиль пользователя то getUserInfo и так далее
   *  *
   * Самый правильный способ, как пример указан в брифе
   // url лучше передавать при инициализации класса в конструктор
   fetch(`url/cards`,
        {
     headers: {
            // ключ который надо передавать в параметрах
    authorization: param.authorization
          }
        })
    .then(res => {
      if (res.ok) {
     return res.json();
        }
        // если ошибка, переходим в catch
     return Promise.reject(`Ошибка: ${res.status
        }`);
      })
  .then((result) => {
        // обрабатываем результат
        // а точнее возвращает результат работы прямо в тот класс откуда вызывали
      })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
        });
  
 Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта	
  
  	**
    * Класс Api это отдельный класс который ничего не знает о других классах и методах
    * Вы можете только получать данные из этого класса и использовать эти данные.
    * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
    * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
    * Который только возвращает данные, а вы можите получить только обращась к этим методам.
    * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратитьсяк методам.
    * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
    * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
    *
    * 
    *
     Надо исправить, вызывайте методы класса Api, не пытайтесь сделать реализацию класса здесь
  
   * Вызывать же методы класса Api лучше из других классов
  * Примерно такое должно получиться в этом файле:
  const container = document.querySelector('.places-list'); // место куда записывать карточки
  const cards = []; // массив с карточками
  const words = {ru: { validationLenght: 'Должно быть от 2 до 30 символов'}};
  const config = {authorization: "ключ",ip: "http://95.216.175.5/cohort7",}; // настройки
  const api = new Api(config);
  const card = new Card(api);
  const validation = new FormValidator({words:words});
  const cardList = new CardList({card:card, api:api});
  cardList.render(container, cards);
  const popupCard = new PopupCard({ validation:validation,api:api});
  const popupProfile = new PopupProfile({ validation:validation,api:api});
  const popupImage = new PopupImage();
   *
  
   *
   * Стоит отметить, что реализации в классе API быть не должно. Точнее прямого взаимодействия. Методы могут вызываться
   * из других классов и возвращать данные, а работа с этими данными должны быть непосредственно в классах создаваемых в 8 спринте
  *
   * работа принимается только при исправлении всех "Надо исправить"
   *
  */

  /** 
   * Здравствуйте, работа принимается. 
   * Вынесите ещё в конфиг "https://praktikum.tk/" не стоит дублировать одно и тоже
   * 
   * 
   */