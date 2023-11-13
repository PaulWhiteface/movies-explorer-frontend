import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({onClose, isOpen, isSuccess}) {
  

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__success-title">{isSuccess ? "Редактирование прошло успешно!" : "Что-то пошло не так! Попробуйте еще раз"}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;