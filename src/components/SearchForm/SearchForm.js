import './SearchForm.css';
import find from '../../images/find.svg';
import React from 'react';

function SearchForm({ page, onFilter, isCheckboxState, onSearch }) {
  const [isSearchText, setIsSearchText] = React.useState('');
  const [isSearchError, setIsSearchError] = React.useState(false);

  function handleChangeInput (e) {
    setIsSearchText(e.target.value);
  }

  function submitInput (e) {
    e.preventDefault();
    if (isSearchText.length === 0) {
      setIsSearchError(true)
    } else {
      onSearch(isSearchText);
      setIsSearchError(false);
    }
  }

  React.useEffect(() => {
    if (page === '/movies' && localStorage.getItem('filmSearch')) {
      const thisSearch = localStorage.getItem('filmSearch');
      setIsSearchText(thisSearch);
    }
  }, [])
  

  return(
    <form className="search" onSubmit={submitInput}>
      <div className="search__container">
        <input className="search__input" value={isSearchText || ''} placeholder='Фильм' onChange={handleChangeInput}></input>
        <button className="search__submit"><img className="search__image" src={find} alt="поиск" /></button>
      </div>
      <div className="search__checkbox-container">
        <input id="checkbox" className="search__checkbox" type="checkbox" onChange={onFilter} checked={isCheckboxState}></input>
        <label className="search__checkbox-label" htmlFor="checkbox"></label>
        <span className="search__checkbox-text">Короткометражки</span>
      </div>
      {isSearchError && <span className="search__err">Необходимо ввести запрос!</span>}
    </form>
  );
}

export default SearchForm;