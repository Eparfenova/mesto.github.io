export class Api {
    constructor(config) {
        this.config = config;
    }
    getUserInfo() {
        return fetch(`${this.config.url}/${this.config.id}/users/me`, {
          headers: {
            authorization: this.config.token
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })    
          .catch((err) => {
            console.log(err);
          });
    }

    patchEdit(inputName, inputAbout) {
        return fetch(`${this.config.url}/${this.config.id}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this.config.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: inputName,
            about: inputAbout
          })
        })
    
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })   
          .catch((err) => {
            console.log(err);
          });
    }


    getCards() {    
        return fetch(`${this.config.url}/${this.config.id}/cards`, {
          headers: {
            authorization: this.config.token
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }

}