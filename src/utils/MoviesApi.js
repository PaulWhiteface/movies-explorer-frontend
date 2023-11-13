class MoviesApi {
  constructor(url) {
    this._baseUrl = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(this._checkResponse)
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;