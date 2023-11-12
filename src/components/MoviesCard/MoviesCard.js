import './MoviesCard.css'
import { timeLengthConverter } from '../../utils/SearchFilmsValidation';

function MoviesCard ({ page, onCardLike, onCardDelete, savedFilms, card, saved }) {

  const cardState = `${!saved ? 'card__button' : 'card__button-active'}`;
  
  function handleCardClick() {
    if (saved) {
      onCardDelete(savedFilms.filter((f) => f.movieId === card.id)[0]);
    } else {
      onCardLike(card);
    }
  }

  function onDelete() {
    onCardDelete(card);
  }

  return(
    <li className="card">
      <a className="card__link-image" target="blank" href={card.trailerLink}> 
        <img alt={card.nameRU} src={page === 'saved-movies' ? card.image : 'https://api.nomoreparties.co' + card.image.url} className="card__image" />
      </a>
      <div className="card__container">
        <h2 className="card__title">{card.nameRU}</h2>
        {page === '/movies' ? 
        <button className={cardState} onClick={handleCardClick}></button> : 
        <button className="card__button-cross" onClick={onDelete}></button>
        } 
      </div>
      <span className="card__hours">{timeLengthConverter(card.duration)}</span>
    </li>
  );
}

export default MoviesCard;