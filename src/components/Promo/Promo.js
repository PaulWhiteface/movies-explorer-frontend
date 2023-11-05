import React from 'react';
import './Promo.css';
import image from '../../images/text-image.svg';

function Promo() {
  return(
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text-container">
          <h1 className="promo__text-main">Учебный проект студента факультета Веб-разработки.</h1>
          <h3 className="promo__text-other">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
        </div>
        <div className="promo__image-container">
          <img className="promo__image" src={image} alt="картинка с текстом"/>
        </div>
      </div>
      <a href="#more" className="promo__link">Узнать больше</a>
    </section>
  );
}

export default Promo;