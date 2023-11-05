import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList (props) {
  const { page } = props;

  return(
    <section className="movies-list">
      <ul className="movies-list__container">
        <MoviesCard page={page} />
        <MoviesCard page={page} />
        <MoviesCard page={page} />
        <MoviesCard page={page} />
      </ul>
    </section>
  );
}

export default MoviesCardList;