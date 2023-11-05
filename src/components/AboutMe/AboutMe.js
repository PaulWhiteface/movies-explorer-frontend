import './AboutMe.css';
import avatar from '../../images/avatar.png';

function AboutMe () {
  return(
    <section className="about-me">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h2 className="about-me__text-name">Виталий</h2>
          <h3 className="about-me__text-job" >Фронтенд-разработчик, 30 лет</h3>
          <p className="about-me__text-info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
           и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
           С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
           начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/PaulWhiteface" className="about-me__link">Github</a>
        </div>
        <div className="about-me__avatar-container">
          <img className="about-me__avatar" src={avatar} alt="аватарка" />
       </div>
      </div>
    </section>
  );
}

export default AboutMe;