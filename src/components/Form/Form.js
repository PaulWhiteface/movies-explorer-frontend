import './Form.css';
import { NavLink } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';

function Form(props) {
  const { title, link, button, textLink, children, linkref, onSubmit, disableButton, error } = props;

  return (
    <form className="form__container" id="form" onSubmit={onSubmit} noValidate >
      <LogoLink />
      <h1 className="form__title">{title}</h1>
      <div className="form__input-container">

      {children}

      </div>
      { error.state ? <span className="form__err">{error.message}</span> : ''}
      <button className={disableButton ? "form__button form__button-enable" : "form__button form__button-disable"} type="submit" disabled={ disableButton ? false : true } >{button}</button>
      <div className="form__nav-container">
        <span className="form__nav-text">{textLink}</span>
        <NavLink to={linkref} className="form__nav-link">{link}</NavLink>
      </div>
    </form>
  );
}

export default Form;