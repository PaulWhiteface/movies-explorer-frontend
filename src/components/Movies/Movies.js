import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies () {
  return(
    <>
      <Header page="gray" />
        <section className="movies">
          <SearchForm />
          <MoviesCardList page="movies"/>
          <button className="movies__more">Ещё</button>
        </section>
      <Footer />  
    </>
  );
}

export default Movies;