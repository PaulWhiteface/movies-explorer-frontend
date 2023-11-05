import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies () {
  return(
    <>
      <Header page="gray" />
        <section className="saved-movies">
          <SearchForm />
          <MoviesCardList page="saved-movies" />
        </section>
      <Footer />
    </>
  );
}

export default SavedMovies;