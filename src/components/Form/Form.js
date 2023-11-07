import './Form.css';
import { NavLink } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';

function Form(props) {
  const { title, link, button, textLink, children, linkref } = props;

  return (
    <form className="form__container">
      <LogoLink />
      <h1 className="form__title">{title}</h1>
      <div className="form__input-container">

      {children}

        <span className="form__input-text">E-mail</span>
        <input className="form__input" required></input>
        <span className="form__input-email-err"></span>

        <span className="form__input-text">Пароль</span>
        <input className="form__input" required></input>
        <span className="form__input-pass-err"></span>

      </div>

      <button className="form__button">{button}</button>
      <div className="form__nav-container">
        <span className="form__nav-text">{textLink}</span>
        <NavLink to={linkref} className="form__nav-link">{link}</NavLink>
      </div>
    </form>
  );
}

export default Form;