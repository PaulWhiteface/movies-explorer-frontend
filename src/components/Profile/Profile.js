import './Profile.css';
import React, { useContext } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';

function Profile ({ onOut, onUpdate, isSuccess, isLogged, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } = useForm();  //Валидация и управление формой

  const [submit, setSubmit] = React.useState(false);             //Переменная кнопки "редактировать"
  const [popupOpen, setPopupOpen] = React.useState(false);       //Переменная открытия/закрытия попапа
  const [actualValues, setActualValues] = React.useState(false); //Переменная считывания данных пользователя

  React.useEffect(() => {  //Проверка, если данные пользователя не изменились, то кнопка неактивна
    if (currentUser.email === values.email && currentUser.name === values.name) {
      setActualValues(true)
    } else {
      setActualValues(false)
    }
  }, [values])

  React.useEffect(() => {  //Установка данных пользователя в форму
    if (currentUser) {
      resetForm(currentUser)
    }
  }, [resetForm, currentUser])

  function clickChange (e) {  //Управление кнопкой "редактировать"
    e.preventDefault();
    setSubmit(!submit)
  }

  function handleSubmit (e) {  //Ввод и отправка на изменение данных пользователя
    e.preventDefault();
    onUpdate({
      name: values.name,
      email: values.email,
    })
    setPopupOpen(!popupOpen);
  }

  function closePopup () {  //Закртыие попапа
    setPopupOpen(!popupOpen);
    setSubmit(!submit);
  }

  return(
    <>
      <Header page="gray" isLogged={isLogged}/>
        <section className="profile">
          <form className="profile__container" id="form" onSubmit={handleSubmit} noValidate>
            <h1 className="profile__name">Привет, {currentUser.name}!</h1>
            <div className="profile__input-container">
              <span className="profile__input-text">Имя</span>
              <input className="profile__input" onChange={handleChange} value={values.name || ''} name="name" type="text" required></input>
            </div>
            <span className="profile__input-err">{errors.name}</span>
            <div className="profile__input-container">
              <span className="profile__input-text">E-mail</span>
              <input className="profile__input" onChange={handleChange} value={values.email || ''} name="email" type="email" required></input>
            </div>
            <span className="profile__input-err">{errors.email}</span>
            { submit ? 
              <>
                { isLoading && <Preloader />}
                { !isLoading && <InfoTooltip isOpen={popupOpen} isSuccess={isSuccess} onClose={closePopup} />}
                <button className={ actualValues || !isValid ? "profile__submit profile__submit-disable" : "profile__submit profile__submit-enable"} type="submit">Сохранить</button>
              </>
                 :
              <>
                <button onClick={clickChange} className="profile__button">Редактировать</button>
                <button className="profile__button" onClick={onOut}>Выйти из аккаунта</button>
              </>
            }
          </form>
        </section>
    </>
  );
}

export default Profile;