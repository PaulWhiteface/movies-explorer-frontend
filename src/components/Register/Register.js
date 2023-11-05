import './Register.css';
import Form from '../Form/Form';

function Register () {
  return(
    <section className="register">
      <Form 
      title="Добро пожаловать!"
      link="Войти"
      button="Зарегистрироваться"
      textLink="Уже зарегистрированы?"
      linkref="/signin"
      children={
        <>
          <span className="form__input-text">Имя</span>
          <input required className="form__input"></input>
          <span className="form__input-name-err"></span>
        </>
      } />
    </section>
  );
}

export default Register;