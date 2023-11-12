import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});  //Данные пользователя
  const [isSuccess, setIsSuccess] = React.useState(false);   //Успешно-Неуспешно
  const [loggedIn, setLoggedIn] = React.useState(false)      //Пользователь залогинен-нет
  const [errorMessage, setErrorMessage] = React.useState({
    state: false,
    message: '',
  });

  const [savedFilms, setSavedFilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingLoginCheck, setIsLoadingLoginCheck] = React.useState(true);


  const navigate = useNavigate();

  React.useEffect(() => {
    tokenCheckAuth();
    loggedIn &&
      Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
        .then(([userData, savedMovies]) => {
          console.log(savedMovies)
          setCurrentUser(userData);
          setSavedFilms(savedMovies);
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoadingLoginCheck(false);
        })
  }, [loggedIn])

  function handleRegistration({ name, email, password }) {  //Регистрация пользователя
    setIsLoading(true)
    mainApi.registration(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setErrorMessage({
          state: false,
          message: ''
        })
      })
      .catch((err) => {
        if (err === "Ошибка 409") {
          setErrorMessage({
            state: true,
            message: 'Пользователь с таким Email уже существует!'
          })
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin({ email, password }) {  //Логин пользователя (вход)
    setIsLoading(true)
    mainApi.logIn({ email, password })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true })
        setErrorMessage({
          state: false,
          message: ''
        })
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          setErrorMessage({
            state: true,
            message: 'Неправильно введен логин или пароль!'
          })
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUpdateProfile({ name, email }) {  //Изменить данные профиля
    setIsLoading(true)
    mainApi.setUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
        setIsSuccess(true)
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleSignOut() {  //Выйти из профиля
    localStorage.removeItem("token");
    localStorage.removeItem('allFilms');
    localStorage.removeItem('films');
    localStorage.removeItem('shortFilms');
    localStorage.removeItem('filmSearch');
    setLoggedIn(false);
    navigate('/', { replace: true });
  };

  const tokenCheckAuth = React.useCallback(() => {  //Проверка токена
    const jwt = localStorage.getItem("token");
    if (jwt) {
      mainApi.checkToken(jwt).then((user) => {
        setLoggedIn(true);
      })
        .catch((err) => {
          setLoggedIn(false);
          localStorage.removeItem("token");
          console.log(err);
        })
        .finally(() => {
          setIsLoadingLoginCheck(false)
        })
    } else {
      setIsLoadingLoginCheck(false)
    }
  }, [])

  function saveFilm(film) {  //Сохранение фильма
    mainApi.saveCard(
      {
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: "https://api.nomoreparties.co" + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + film.image.formats.thumbnail.url,
        movieId: `${film.id}`,
        nameRU: film.nameRU,
        nameEN: film.nameEN
      }
    )
      .then((newFilm) => {
        setSavedFilms([newFilm, ...savedFilms]);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function deleteFilm(film) {  //Удаление фильма из сохраненных
    mainApi.deleteCard(film._id)
      .then(() => {
        setSavedFilms((savedFilms) => savedFilms.filter((card) => card._id !== film._id))
      })
      .catch((err) => {
        console.log(err);
      })
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      { isLoadingLoginCheck && <Preloader /> }
      { !isLoadingLoginCheck ?
        <Routes>
          <Route path="/" element={<Main isLogged={loggedIn} />} />

          <Route path="/movies"
            element={<ProtectedRoute
              element={Movies} isLogged={loggedIn} onDeleteFilm={deleteFilm} onSaveFilm={saveFilm} savedFilms={savedFilms} />} />

          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies} isLogged={loggedIn} onDeleteFilm={deleteFilm} savedFilms={savedFilms} />} />

          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile} isLoading={isLoading} onOut={handleSignOut} onUpdate={handleUpdateProfile} isSuccess={isSuccess} isLogged={loggedIn} />} />

          <Route path="/signup" element={<Register isLoading={isLoading} onRegistration={handleRegistration} isLogged={loggedIn} error={errorMessage} />} />
          <Route path="/signin" element={<Login isLoading={isLoading} onLogin={handleLogin} isLogged={loggedIn} error={errorMessage} />} />
          <Route path="*" element={<NotFound />} />
        </Routes> : ''
      }
    </CurrentUserContext.Provider>
  );
}

export default App;
