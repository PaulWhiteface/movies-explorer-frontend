import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import React from 'react';

function MoviesCardList({ page, handleLike, handleDelete, savedFilms, movieCards, isError, isNotFound, isLoading, showCards }) {
  
  function getSavedFilm(savedFilms, card) {  //ищет сохраненный фильм или нет
    const isSaved = savedFilms.some((item) => item.movieId === card.id);
    return isSaved;
  }
 
  return (
    <section className="movies-list">
      {isLoading && <Preloader/>}
      {isNotFound && !isLoading && <span className="movies-list__err">Ничего не найдено!</span>}
      {isError && <span className="movies-list__err">Произошла ошибка. Скорее всего, проблема с сервером, попробуйте еще раз!</span>}
      {!isLoading && !isNotFound && !isError && (
      <ul className="movies-list__container">
        {page === "/movies" ?
          movieCards.slice(0, showCards).map((card) => (
            <MoviesCard
              page={page}
              key={card.id}
              saved={getSavedFilm(savedFilms, card)}
              onCardLike={handleLike}
              onCardDelete={handleDelete}
              savedFilms={savedFilms}
              card={card}
            />
          )) :
          movieCards.map((card) => (
            <MoviesCard
              page={page}
              key={card._id}
              saved={getSavedFilm(savedFilms, card)}
              onCardLike={handleLike}
              onCardDelete={handleDelete}
              savedFilms={savedFilms}
              card={card}
            />
          ))
        }
      </ul>
      )} 
    </section>
  );
}

export default MoviesCardList;