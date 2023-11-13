import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterTimeLength, validationFilms } from '../../utils/SearchFilmsValidation';

function SavedMovies ({ isLogged, savedFilms, onDeleteFilm }) {

  const [filteredFilms, setFilteredFilms] = React.useState([]); 
  const [isCheckboxState, setIsCheckboxState] = React.useState(false);
  const [isSearchText, setIsSearchText] = React.useState('');
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    const filmList = validationFilms(savedFilms, isSearchText);
    setFilteredFilms(isCheckboxState ? filterTimeLength(filmList) : filmList);
  }, [savedFilms, isCheckboxState, isSearchText]);


  function onSearchSubmit(search) {
    setIsSearchText(search);
  }

  function handleCheckboxState() {
    setIsCheckboxState(!isCheckboxState);
  }
  
  React.useEffect(() => {
    if (filteredFilms.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
  }, [filteredFilms])
  
  return(
    <>
      <Header page="gray" isLogged={isLogged} />
        <section className="saved-movies">
          <SearchForm onSearch={onSearchSubmit} onFilter={handleCheckboxState} isCheckboxState={isCheckboxState} />
          <MoviesCardList page="saved-movies" savedFilms={savedFilms} handleDelete={onDeleteFilm} movieCards={filteredFilms} isNotFound={notFound}/>
        </section>
      <Footer />
    </>
  );
}

export default SavedMovies;