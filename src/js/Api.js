class Api {
    constructor(config) {
        this.config = config;
    }
    getUserInfo() {
        return fetch(`https://praktikum.tk/${config.id}/users/me`, {
          headers: {
            authorization: config.token
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
        return fetch(`https://praktikum.tk/${config.id}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: config.token,
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
        return fetch(`https://praktikum.tk/${config.id}/cards`, {
          headers: {
            authorization: config.token
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