import './MoviesCard.css'
import image from '../../images/card-image.jpeg'

function MoviesCard (props) {
  const { page } = props;

  let button;
  if (page === "movies") {
    button = "card__button"
  } else if (page === "saved-movies") {
    button = "card__button-cross"
  }

  return(
    <li className="card">
      <img alt="картинка" src={image} className="card__image" />
      <div className="card__container">
        <h2 className="card__title">Название фильма</h2>
        <button className={button}></button>
      </div>
      <span className="card__hours">1ч44м</span>
    </li>
  );
}

export default MoviesCard;