import React from 'react';
import './AboutProject.css';

function AboutProject () {
  return(
    <section className="about">
      <a className="about__main-text" name="more">О проекте</a>
      <div className="about__text-container">
        <div className="about__text">
          <h2 className="about__main-info">Дипломный проект включал 5 этапов</h2>
          <p className="about__info">Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__text">
          <h2 className="about__main-info">На выполнение диплома ушло 5 недель</h2>
          <p className="about__info">У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__bar-container">
        <div className="about__green-bar">1 неделя</div>
        <div className="about__gray-bar">4 недели</div>
      </div>
      <div className="about__text-bar-container">
        <div className="about__green-bar-text">Back-end</div>
        <div className="about__gray-bar-text">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;