import React from 'react';
import './Login.css';
import Form from '../Form/Form';
import { Navigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { EMAIL_REGEX } from '../../utils/constants';

function Login({onLogin, isLogged, error, isLoading}) {
  const { values, errors, isValid, handleChange } = useForm();

  if (isLogged) {
    return <Navigate to="/movies" replace />
  }

  function handleSubmit (e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    })
  }

  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        link="Регистрация"
        button="Войти"
        linkref="/signup"
        textLink="Еще не зарегистрированы?"
        disableButton={isValid}
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
        children={
          <>
            <span className="form__input-text" >E-mail</span>
            <input className="form__input" pattern={EMAIL_REGEX} required name="email" type="email" onChange={handleChange}></input>
            <span className="form__input-err">{errors.email}</span>

            <span className="form__input-text" >Пароль</span>
            <input className="form__input" required name="password" type="password" onChange={handleChange}></input>
            <span className="form__input-err">{errors.password}</span>
          </>
        }
      />
    </section>
  );
}

export default Login;