import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { validationFilms, filterTimeLength } from '../../utils/SearchFilmsValidation';
import moviesApi from '../../utils/MoviesApi';
import { MORE_DECKTOP, MORE_DECKTOP_TABLET, MORE_TABLET, MORE_MOBILE } from '../../utils/constants';

function Movies({ isLogged, onDeleteFilm, onSaveFilm, savedFilms }) {
  const [initialFilms, setInitialFilms] = React.useState([]);  //Фильмы найденные по строке поиска
  const [filteredFilms, setFilteredFilms] = React.useState([]);  //Фильмы найденные с активных чекбоксом
  const [isCheckboxState, setIsCheckboxState] = React.useState(false);  //Состояние чекбокса
  const [notFound, setNotFound] = React.useState(false);  //Ничего не найдено по запросу
  const [error, setError] = React.useState(false);  //Ошибка запроса
  const [isLoading, setIsLoading] = React.useState(false); //Стейт прелоадера
  const [showCards, setShowCards] = React.useState(0);

  function searchFilms(search) {  //Основной поиск фильмов
    localStorage.setItem('filmSearch', search); //Сохраняем запрос
    localStorage.setItem('shortFilms', isCheckboxState);  //Сохраняем позицию чекбокса

    if (localStorage.getItem('allFilms')) {  //Если запрос с сервера фильмов уже был, то берем данные из него
      const films = JSON.parse(localStorage.getItem('allFilms'));
      filterFilms(films, search, isCheckboxState);
    } else {  //Если не было, то обращаемся к серверу фильмов
      setIsLoading(true)
      moviesApi.getMovies().then((data) => {
        localStorage.setItem('allFilms', JSON.stringify(data));
          filterFilms(data, search, isCheckboxState);
          setError(false)
        })
        .catch((err) => {
          console.log(err);
          setError(true)
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  function filterFilms(films, search, isCheckboxState) {  //Фильтер, через который прогоняется поиск фильмов и записывает в стейт результаты
    const filmsList = validationFilms(films, search, isCheckboxState);  //Прогон запроса через валидатор
    setInitialFilms(filmsList);  //Фильмы найденные по запросу
    setFilteredFilms(isCheckboxState ? filterTimeLength(filmsList) : filmsList);  //Фильмы по запросу и чекбоксу
    localStorage.setItem('films', JSON.stringify(filmsList));
  }

  function handleCheckboxState() {  //Функция записывающая в стейт состояние чекбокса и меняющая стейт фильмов
    setIsCheckboxState(!isCheckboxState);

    if (!isCheckboxState) {
      setFilteredFilms(filterTimeLength(initialFilms));  //Если чекбокс включен, прогоняем найденные по запросу фильмы через фильтр короткометражек
    } else {
      setFilteredFilms(initialFilms);  //Если выключен, то ставим в фильтрованные фильмы все фильмы по запросу
    }
    localStorage.setItem('shortFilms', !isCheckboxState);
  }

  React.useEffect(() => {  //Проверка последнего состояния чекбокса и его отображение
    if (localStorage.getItem('shortFilms') === 'true') {
      setIsCheckboxState(true);
    } else {
      setIsCheckboxState(false);
    }
  }, []);

  React.useEffect(() => {  //Проверка последнего запроса и его отображение
    if (localStorage.getItem('films')) {
      const films = JSON.parse(localStorage.getItem('films'));
      setInitialFilms(films);
      if (localStorage.getItem('shortFilms') === 'true') {
        setFilteredFilms(filterTimeLength(films));
      } else {
        setFilteredFilms(films);
      }
    } 
  }, []);

  React.useEffect(() => {  //Проверка, есть ли на странице что-то найденное
    if (localStorage.getItem('filmSearch')) {
      if (filteredFilms.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } else {
      setNotFound(false);
    }
  }, [filteredFilms]);

  function showCount() {  //Функция выставления рендеринга карточек взависимости от разрешения
    if (window.innerWidth > 1279) {
      setShowCards(16)
    } else if (window.innerWidth > 990) {
      setShowCards(12)
    } else if (window.innerWidth > 630) {
      setShowCards(8)
    } else if (window.innerWidth < 630) {
      setShowCards(5)
    }
  }

  React.useEffect(() => {
    showCount()
  }, [])

  function handleMore() {
    if (window.innerWidth > 1279) {
      setShowCards(showCards + MORE_DECKTOP)
    } else if (window.innerWidth > 990) {
      setShowCards(showCards + MORE_DECKTOP_TABLET)
    } else if (window.innerWidth > 630) {
      setShowCards(showCards + MORE_TABLET)
    } else if (window.innerWidth < 630) {
      setShowCards(showCards + MORE_MOBILE)
    }
  }


  return (
    <>
      <Header page="gray" isLogged={isLogged} />
      <section className="movies">
        <SearchForm page="/movies" onSearch={searchFilms} onFilter={handleCheckboxState} isCheckboxState={isCheckboxState} />
        <MoviesCardList
          page="/movies"
          showCards={showCards}
          handleLike={onSaveFilm}
          handleDelete={onDeleteFilm}
          savedFilms={savedFilms}
          movieCards={filteredFilms}
          isError={error}
          isNotFound={notFound}
          isLoading={isLoading}
        />
        {filteredFilms.length > showCards ? (
          <button className="movies__more" onClick={handleMore}>Ещё</button>
        ) : ( '' )
        }
      </section>
      <Footer />
    </>
  );
}

export default Movies;