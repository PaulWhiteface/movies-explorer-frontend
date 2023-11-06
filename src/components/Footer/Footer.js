import './Footer.css';

function Footer () {
  return(
    <footer className="footer">
      <h3 className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__date">@ 2020</p>
        <div className="footer__link-container">
          <a target="blank" className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a target="blank" className="footer__link" href="https://github.com/PaulWhiteface">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;