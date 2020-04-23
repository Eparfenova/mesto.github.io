export class UserInfo {
  constructor(userInfo, api) {
    this.userInfo = userInfo;
    this.api = api;

  }
  setUserInfo(name, job) {
    this.name = name;
    this.job = job;
  }

  updateUserInfo() {
    // Можно лучше -- тут можно сразу и в инпуты данные присвоить
    // Элементы страницы лучше сразу передать в конструктор, а не брать их из переданного в конструктор элемента прямо здесь.
    // Это может накладывать сильные ограничения при изменении верстки например.
    this.userInfo.querySelector('.user-info__name').textContent = this.name;
    this.userInfo.querySelector('.user-info__job').textContent = this.job;
  }

  getName() {
    const name = this.userInfo.querySelector('.user-info__name').textContent;
    return name;
  }

  getJob() {
    const about = this.userInfo.querySelector('.user-info__job').textContent;
    return about;
  }

  setAvatar(url) {
    this.userInfo.querySelector('.user-info__photo').setAttribute("style", "background-image: url(" + url + ")");
  }

  getUserInfo() {
    this.api.getUserInfo()
      .then((result) => {
        this.setUserInfo(result.name, result.about);
        this.setAvatar(result.avatar);
        this.updateUserInfo();
      })
  }

}