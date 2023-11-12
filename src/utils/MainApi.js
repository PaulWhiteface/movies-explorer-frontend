class MainApi {
  constructor(url) {
    this._baseUrl = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  registration( name, email, password ) { //Регистрация пользователя
    return fetch(this._baseUrl + '/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password})
    })
    .then(this._checkResponse);
  }

  logIn({ email, password }) {
    return fetch(this._baseUrl + '/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
    .then(this._checkResponse)
  }

  checkToken(jwt) {
    return fetch (this._baseUrl + '/users/me', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      }
    })
    .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
    })
    .then(this._checkResponse)
  }

  setUserInfo(name, email) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({name, email})
    })
    .then(this._checkResponse)
  }

  getMyMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": 'application/json',
      },
    })
    .then(this._checkResponse)
  }

  saveCard(film) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(film)
    })
    .then(this._checkResponse)
  }

  deleteCard(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, { 
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": 'application/json',
      },
    })
    .then(this._checkResponse)
  }
}

const mainApi = new MainApi("https://api.movie.whiteface.nomoredomainsrocks.ru");
export default mainApi;