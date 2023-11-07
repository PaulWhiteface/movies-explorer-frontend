import './SearchForm.css';
import find from '../../images/find.svg';

function SearchForm() {
  return(
    <form className="search">
      <div className="search__container">
        <input className="search__input" placeholder='Фильм'></input>
        <button className="search__submit"><img className="search__image" src={find} alt="поиск" /></button>
      </div>
      <div className="search__checkbox-container">
        <input id="checkbox" className="search__checkbox" type="checkbox"></input>
        <label className="search__checkbox-label" htmlFor="checkbox"></label>
        <span className="search__checkbox-text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;