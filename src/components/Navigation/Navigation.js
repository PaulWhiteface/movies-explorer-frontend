import './Navigation.css';
import React from 'react';
import acc from '../../images/account-icon.svg'
import { NavLink } from 'react-router-dom';

function Navigation ({onClick, navOpen}) {

    const navigationOpen = `navigation ${navOpen ? "navigation-on" : ""}`;

    function linkActiveHandler ({isActive}) {
      return `navigation__link ${isActive ? "navigation__link-active" : ""}`;
    }
  
  return(
    <section className={navigationOpen}>
      <button className="navigation__close" onClick={onClick}></button>
        <ui className="navigation__container">
          <li className="navigation__item"><NavLink to="/" className={linkActiveHandler}>Главная</NavLink></li>
          <li className="navigation__item"><NavLink to="/movies" className={linkActiveHandler}>Фильмы</NavLink></li>
          <li className="navigation__item"><NavLink to="/saved-movies" className={linkActiveHandler}>Сохраненные фильмы</NavLink></li>
        </ui>
        <NavLink to="/profile" className="navigation__link-last navigation__account-button">Аккаунт <img className="navigation__account" src={acc} alt="аккаунт" /></NavLink>
      </section>
  )
}

export default Navigation;