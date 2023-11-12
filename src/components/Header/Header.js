import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import acc from '../../images/account-icon.svg'
import Navigation from '../Navigation/Navigation';
import LogoLink from '../LogoLink/LogoLink';

function Header (props) {
  const { page, isLogged } = props;

  const [navOpen, setNavOpen] = React.useState(false);

    function closeNavigation () {
      setNavOpen(!navOpen);
    }

  function linkActiveHandler ({isActive}) {
    return `header__nav-link ${isActive ? "header__nav-link-active" : ""}`;
  }

  let iconStyle;
  if (page === "gray") {
    iconStyle = "header__account-img"
  } else if (page === "green") {
    iconStyle = "header__account-img-green"
  }

  return(
    <header className="header">
      <LogoLink />
      { isLogged ? 
      <>
        <div className="header__nav-container">
          <NavLink to="/movies" className={linkActiveHandler}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={linkActiveHandler}>Сохраненные фильмы</NavLink>
        </div> 
        <NavLink to="/profile" className="header__account-link">Аккаунт <img className={iconStyle} src={acc} alt="аккаунт" /></NavLink>
        <button className="header__burger" onClick={closeNavigation}></button>
        <Navigation onClick={closeNavigation} navOpen={navOpen} />
      </>
      : 
      <div className="header__button-container">
        <NavLink to="/signup" className="header__button">Регистрация</NavLink>
        <NavLink to="/signin" className="header__button header__button-second">Войти</NavLink>
      </div>}
    </header>
  );
};

export default Header;