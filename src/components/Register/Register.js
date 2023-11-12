import React from 'react';
import './Register.css';
import Form from '../Form/Form';
import { Navigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { NAME_REGEX, EMAIL_REGEX } from '../../utils/constants';

function Register({ onRegistration, isLogged, error, isLoading }) {
  const { values, errors, isValid, handleChange } = useForm();

  if (isLogged) {
    return <Navigate to="/movies" replace />
  }

  function handleSubmit (e) {
    e.preventDefault();
    onRegistration({
      name: values.name,
      email: values.email,
      password: values.password,
    })
  }

  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        link="Войти"
        button="Зарегистрироваться"
        textLink="Уже зарегистрированы?"
        linkref="/signin"
        disableButton={isValid}
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
        children={
          <>
            <span className="form__input-text">Имя</span>
            <input className="form__input" name="name" pattern={NAME_REGEX} type="text" onChange={handleChange} minLength={2} maxLength={40} required></input>
            <span className="form__input-err">{errors.name}</span>

            <span className="form__input-text" >E-mail</span>
            <input className="form__input" name="email" pattern={EMAIL_REGEX} type="email" onChange={handleChange} required></input>
            <span className="form__input-err">{errors.email}</span>

            <span className="form__input-text" >Пароль</span>
            <input className="form__input" required name="password" type="password" onChange={handleChange} ></input>
            <span className="form__input-err">{errors.password}</span>
          </>
        } />
    </section>
  );
}

export default Register;